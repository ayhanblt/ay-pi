import { pipeline } from "@xenova/transformers";
import type { RequestSignal } from "@/input/types.js";
import type { Behavior, BehaviorResolution } from "@/behavior/types.js";
import catalog from "@/behavior/catalog.json" with { type: "json" };
import workflowCatalog from "@/workflow/catalog.json" with { type: "json" };
import { DebugLogger } from "@/telemetry/debugLogger.js";

type CatalogEntry = { id: string; description: string; embedding: number[]; embeddings?: number[][]; behavior?: Behavior };
const behaviorCatalog = catalog as CatalogEntry[];
const workflowCatalogEntries = workflowCatalog as CatalogEntry[];

export const SEMANTIC_CONFIDENCE_THRESHOLD = Number(process.env.SEMANTIC_CONFIDENCE_THRESHOLD) || 0.62;
export const SEMANTIC_MARGIN_THRESHOLD = Number(process.env.SEMANTIC_MARGIN_THRESHOLD) || 0.035;
const WORKFLOW_CONFIDENCE_THRESHOLD = Number(process.env.WORKFLOW_CONFIDENCE_THRESHOLD) || 0.40;
const WORKFLOW_MARGIN_THRESHOLD = Number(process.env.WORKFLOW_MARGIN_THRESHOLD) || 0.002;

export type MetaIntent = "plan_confirmation" | "model_switch" | "none";
const META_DESCRIPTIONS: Record<Exclude<MetaIntent, "none">, string> = {
  plan_confirmation: "The user approves the previously proposed plan and asks the agent to apply or implement it now. Türkçe: uygula, devam et, başlayabilirsin, aşama 1'i uygula, adım 1'i uygula, planın ilk aşamasını yap.",
  model_switch: "The user asks to continue the current coding task with a different AI model, without carrying the unfinished answer into the new context. Türkçe: başka modelle devam et, Kimi ile geliştir.",
};
let metaEmbeddings: Record<string, number[]> | undefined;

// Lazy-loaded singleton
let extractorPipeline: any = null;

async function getExtractor() {
  const logger = DebugLogger.getInstance();
  if (!extractorPipeline) {
    logger.semanticEngine.loadingModel = true;
    extractorPipeline = await pipeline("feature-extraction", "Xenova/multilingual-e5-small", {
      quantized: true,
    });
  } else {
    logger.semanticEngine.modelLoadedBefore = true;
  }
  return extractorPipeline;
}

export async function resolveMetaIntent(text: string): Promise<MetaIntent> {
  const extractor = await getExtractor();
  if (!metaEmbeddings) {
    metaEmbeddings = {};
    for (const [id, description] of Object.entries(META_DESCRIPTIONS)) {
      const output = await extractor(`passage: ${description}`, { pooling: "mean", normalize: true });
      metaEmbeddings[id] = Array.from(output.data) as number[];
    }
  }
  const output = await extractor(`query: ${text}`, { pooling: "mean", normalize: true });
  const query = Array.from(output.data) as number[];
  const ranked = rankScores(Object.entries(metaEmbeddings).map(([id, embedding]) => ({ id, score: cosineSimilarity(query, embedding) })));
  const best = ranked[0];
  const second = ranked[1];
  return best && best.score >= 0.62 && best.score - (second?.score ?? 0) >= 0.03
    ? best.id as Exclude<MetaIntent, "none">
    : "none";
}

function cosineSimilarity(vecA: number[], vecB: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export function rankScores(scores: Array<{ id: string; score: number }>) {
  return [...scores].sort((a, b) => b.score - a.score);
}

export async function resolveBehaviorBySemantics(signal: RequestSignal): Promise<BehaviorResolution | null> {
  const logger = DebugLogger.getInstance();
  logger.semanticEngine.invoked = true;
  logger.semanticEngine.threshold = SEMANTIC_CONFIDENCE_THRESHOLD;

  const extractor = await getExtractor();
  
  const startT = performance.now();
  // 'query: ' prefix is used as per e5 model recommendations for queries
  const output = await extractor(`query: ${signal.rawText}`, {
    pooling: "mean",
    normalize: true,
  });
  logger.semanticEngine.embeddingTimeMs = Math.round(performance.now() - startT);

  const queryEmbedding = Array.from(output.data) as number[];

  const scores = behaviorCatalog.map((behavior) => {
    const score = cosineSimilarity(queryEmbedding, behavior.embedding);
    logger.semanticEngine.scores[behavior.id] = { score, description: behavior.description };
    return { id: behavior.id as Behavior, score };
  });
  const [best, second] = rankScores(scores);
  const margin = best.score - (second?.score ?? 0);
  const accepted = best.score >= SEMANTIC_CONFIDENCE_THRESHOLD && margin >= SEMANTIC_MARGIN_THRESHOLD;

  logger.semanticEngine.decision = accepted ? best.id : "ABSTAIN";
  return accepted ? {
    behavior: best.id as Behavior,
    confidence: best.score,
    source: "semantic",
    ruleId: `behavior::semantic.${best.id.toLowerCase()}`,
    topScore: best.score,
    secondScore: second?.score,
    margin,
  } : {
    behavior: "CHAT",
    confidence: 0,
    source: "fallback",
    ruleId: "behavior::semantic.abstain",
    topScore: best.score,
    secondScore: second?.score,
    margin,
  };
}

export async function resolveWorkflowBySemantics(behavior: Behavior, signal: RequestSignal): Promise<string | undefined> {
  const logger = DebugLogger.getInstance();
  const extractor = await getExtractor();

  // If semanticEngine was already invoked for behavior, the embedding is fast or cached (transformer.js does internal cache, but we can just re-extract)
  const output = await extractor(`query: ${signal.rawText}`, {
    pooling: "mean",
    normalize: true,
  });
  
  const queryEmbedding = Array.from(output.data) as number[];
  
  const candidateEmbeddings = workflowCatalogEntries.filter((w) => w.behavior === behavior);
  const scores = candidateEmbeddings.map((w) => {
    const score = Math.max(...(w.embeddings ?? [w.embedding]).map((embedding) => cosineSimilarity(queryEmbedding, embedding)));
    logger.workflowResolver.scores[w.id] = score;
    return { id: w.id, score };
  });
  const [best, second] = rankScores(scores);
  if (!best || best.score < WORKFLOW_CONFIDENCE_THRESHOLD || best.score - (second?.score ?? 0) < WORKFLOW_MARGIN_THRESHOLD) return undefined;
  return best.id;
}

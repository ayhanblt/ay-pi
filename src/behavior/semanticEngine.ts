import { pipeline } from "@xenova/transformers";
import type { RequestSignal } from "@/input/types.js";
import type { Behavior, BehaviorResolution } from "@/behavior/types.js";
import catalog from "@/behavior/catalog.json" with { type: "json" };
import workflowCatalog from "@/workflow/catalog.json" with { type: "json" };
import { DebugLogger } from "@/telemetry/debugLogger.js";

const SEMANTIC_CONFIDENCE_THRESHOLD = Number(process.env.SEMANTIC_CONFIDENCE_THRESHOLD) || 0.78;

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

  let bestBehavior: Behavior | null = null;
  let highestScore = -Infinity;

  for (const behavior of catalog) {
    const score = cosineSimilarity(queryEmbedding, behavior.embedding);
    logger.semanticEngine.scores[behavior.id] = { score, description: behavior.description };
    if (score > highestScore) {
      highestScore = score;
      bestBehavior = behavior.id as Behavior;
    }
  }

  logger.semanticEngine.decision = bestBehavior!;
  return {
    behavior: bestBehavior!,
    confidence: highestScore,
    source: "semantic",
    ruleId: `behavior::semantic.${bestBehavior!.toLowerCase()}`,
  };
}

export async function resolveWorkflowBySemantics(behavior: Behavior, signal: RequestSignal): Promise<string> {
  const logger = DebugLogger.getInstance();
  const extractor = await getExtractor();

  // If semanticEngine was already invoked for behavior, the embedding is fast or cached (transformer.js does internal cache, but we can just re-extract)
  const output = await extractor(`query: ${signal.rawText}`, {
    pooling: "mean",
    normalize: true,
  });
  
  const queryEmbedding = Array.from(output.data) as number[];
  
  let bestWorkflowId: string | null = null;
  let highestScore = -Infinity;

  const candidateEmbeddings = workflowCatalog.filter((w) => w.behavior === behavior);

  for (const w of candidateEmbeddings) {
    const score = cosineSimilarity(queryEmbedding, w.embedding);
    logger.workflowResolver.scores[w.id] = score;
    if (score > highestScore) {
      highestScore = score;
      bestWorkflowId = w.id;
    }
  }

  return bestWorkflowId!;
}

import { pipeline, env } from "@xenova/transformers";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Ensure local execution uses the correct root path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BEHAVIOR_CATALOG_PATH = path.join(__dirname, "../src/behavior/catalog.json");
const WORKFLOW_CATALOG_PATH = path.join(__dirname, "../src/workflow/catalog.json");

// Behavior descriptions define semantic meaning
const BEHAVIOR_CATALOG = [
  {
    id: "CHAT",
    description: "general conversation, greetings, thanks, explanations, casual chat, teaching, summarizing, translating, non-technical discussion, no code changes.",
  },
  {
    id: "PLAN",
    description: "brainstorming, design exploration, visual direction, color palette ideas, UI and UX concepts, architecture planning, strategy, roadmap, comparisons, recommendations before implementation, concept creation, decision support for design choices. (tasarım fikirleri, plan, öneri, renk)",
  },
  {
    id: "REVIEW",
    description: "evaluate existing work, code review, audit, inspect quality, performance checks, security review, bug finding, analysis without creating new features. (incele, değerlendir, güvenlik)",
  },
  {
    id: "CODE",
    description: "implement approved changes, write or modify code, edit files, fix bugs, refactor, create components, apply selected plan or design, make changes in the project. (uygula, koda dök, yaz, değiştir, düzelt)",
  },
  {
    id: "SUGGEST",
    description: "compare explicit options, advise on trade-offs, recommend between candidate choices, technology selection, ranking alternatives, decision support when options already exist, no design creation or code changes.",
  },
];

const WORKFLOW_CATALOG = [
  { id: "default", behavior: "CHAT", description: "Casual conversation and direct answers." },
  { id: "explain", behavior: "CHAT", description: "Explain a concept or answer why/how questions." },
  { id: "summarize", behavior: "CHAT", description: "Condense long material into a concise summary." },
  { id: "teach", behavior: "CHAT", description: "Teach a concept step by step with examples." },
  { id: "translate", behavior: "CHAT", description: "Translate text while preserving meaning and tone." },
  { id: "architecture", behavior: "PLAN", description: "system structure, technical planning, migration, high-level design (mimari plan)" },
  { id: "design", behavior: "PLAN", description: "visual direction, UI concept, color palette, aesthetics, presentation ideas (renk, görsel, tasarım)" },
  { id: "brainstorm", behavior: "PLAN", description: "idea generation and alternatives (fikir, beyin fırtınası)" },
  { id: "migration", behavior: "PLAN", description: "moving from one structure to another (taşıma, geçiş)" },
  { id: "strategy", behavior: "PLAN", description: "roadmap and decision planning (strateji, yol haritası)" },
  { id: "code", behavior: "REVIEW", description: "Review code correctness and style concerns." },
  { id: "security", behavior: "REVIEW", description: "Review security risks and attack surface." },
  { id: "performance", behavior: "REVIEW", description: "Review performance characteristics and bottlenecks." },
  { id: "architecture", behavior: "REVIEW", description: "Review structural and layering concerns." },
  { id: "quality", behavior: "REVIEW", description: "Review maintainability, consistency, and test quality." },
  { id: "edit", behavior: "CODE", description: "Make targeted code edits in place. (mevcut kodu düzenle, ufak değişiklik)" },
  { id: "generate", behavior: "CODE", description: "Create new code from the user request. (yeni kod üret, oluştur)" },
  { id: "refactor", behavior: "CODE", description: "Restructure code while preserving behavior. (refactor et, iyileştir)" },
  { id: "fix", behavior: "CODE", description: "Repair bugs or apply small corrective changes. (hata düzelt, fix)" },
  { id: "test", behavior: "CODE", description: "Write or update tests. (test yaz)" },
  { id: "color", behavior: "SUGGEST", description: "Suggest visual design choices such as colors, typography, and layout options." },
  { id: "approach", behavior: "SUGGEST", description: "Suggest implementation approaches, patterns, or architectural options." },
  { id: "technology", behavior: "SUGGEST", description: "Suggest libraries, frameworks, tools, or technology choices." },
  { id: "design-option", behavior: "SUGGEST", description: "Suggest UI/UX design alternatives and trade-offs." },
];

async function generateEmbeddings() {
  console.log("Generating semantic embeddings for Catalogs...");

  // Use Xenova/multilingual-e5-small model
  const extractor = await pipeline("feature-extraction", "Xenova/multilingual-e5-small", {
    quantized: true,
  });

  const behaviorCatalogWithEmbeddings = [];
  for (const behavior of BEHAVIOR_CATALOG) {
    console.log(`Generating embedding for Behavior ${behavior.id}...`);
    const output = await extractor(`passage: ${behavior.description}`, {
      pooling: "mean",
      normalize: true,
    });
    
    // Convert Float32Array to standard array
    const embedding = Array.from(output.data);
    
    behaviorCatalogWithEmbeddings.push({
      id: behavior.id,
      description: behavior.description,
      embedding,
    });
  }
  fs.writeFileSync(BEHAVIOR_CATALOG_PATH, JSON.stringify(behaviorCatalogWithEmbeddings, null, 2));
  console.log(`Successfully generated embeddings and saved to ${BEHAVIOR_CATALOG_PATH}`);

  const workflowCatalogWithEmbeddings = [];
  for (const workflow of WORKFLOW_CATALOG) {
    console.log(`Generating embedding for Workflow ${workflow.behavior}.${workflow.id}...`);
    const output = await extractor(`passage: ${workflow.description}`, {
      pooling: "mean",
      normalize: true,
    });
    
    const embedding = Array.from(output.data);
    
    workflowCatalogWithEmbeddings.push({
      id: workflow.id,
      behavior: workflow.behavior,
      description: workflow.description,
      embedding,
    });
  }
  fs.writeFileSync(WORKFLOW_CATALOG_PATH, JSON.stringify(workflowCatalogWithEmbeddings, null, 2));
  console.log(`Successfully generated embeddings and saved to ${WORKFLOW_CATALOG_PATH}`);
}

generateEmbeddings().catch((err) => {
  console.error("Failed to generate embeddings:", err);
  process.exit(1);
});

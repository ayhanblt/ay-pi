import { pipeline, env } from "@xenova/transformers";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Ensure local execution uses the correct root path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CATALOG_PATH = path.join(__dirname, "../src/behavior/catalog.json");

// Behavior descriptions define semantic meaning
const BEHAVIOR_CATALOG = [
  {
    id: "PLAN",
    description: "plan, brainstorm, strategize, system design, software architecture, technical migration, roadmap, conceptualize. high-level discussion without writing code.",
  },
  {
    id: "REVIEW",
    description: "evaluate, audit, assess, code review, performance check, security audit, find bugs. analyze existing work without creating features.",
  },
  {
    id: "CODE",
    description: "modify project, implement features, write code, UI improvements, visual design, color layout changes, component modifications, bug fixes, refactoring.",
  },
];

async function generateEmbeddings() {
  console.log("Generating semantic embeddings for Behavior Catalog...");

  // Use Xenova/multilingual-e5-small model
  const extractor = await pipeline("feature-extraction", "Xenova/multilingual-e5-small", {
    quantized: true,
  });

  const catalogWithEmbeddings = [];

  for (const behavior of BEHAVIOR_CATALOG) {
    console.log(`Generating embedding for ${behavior.id}...`);
    const output = await extractor(`passage: ${behavior.description}`, {
      pooling: "mean",
      normalize: true,
    });
    
    // Convert Float32Array to standard array
    const embedding = Array.from(output.data);
    
    catalogWithEmbeddings.push({
      id: behavior.id,
      description: behavior.description,
      embedding,
    });
  }

  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalogWithEmbeddings, null, 2));
  console.log(`Successfully generated embeddings and saved to ${CATALOG_PATH}`);
}

generateEmbeddings().catch((err) => {
  console.error("Failed to generate embeddings:", err);
  process.exit(1);
});

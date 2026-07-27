/**
 * CLI TEST HARNESS
 * ================
 * Command line utility for testing AY-PI behavior/workflow selection,
 * and optional OpenCode Go API execution outside the Pi extension environment.
 *
 * USAGE (inspect decision only):
 *   npx tsx dev-tools/cli.ts "/code /quick fix typo in login.ts"
 *   npx tsx dev-tools/cli.ts "/code refactor the auth module" --diff-lines=80
 *
 * USAGE (with API execution):
 *   npx tsx dev-tools/cli.ts "/code /quick fix typo in login.ts" --execute
 */

import { execSync } from "node:child_process";
import { loadEnvFile } from "@/config/env.js";
import { buildSignal } from "@/input/signal.js";
import { loadPolicies } from "@/policy/loader.js";
import { resolveBehavior } from "@/behavior/resolver.js";
import { resolveWorkflow } from "@/workflow/resolver.js";
import { resolvePolicy } from "@/policy/resolver.js";

loadEnvFile();

/**
 * Computes uncommitted diff line counts (`git diff --shortstat`) for CLI testing.
 * The `--diff-lines=N` command-line flag overrides this value if provided.
 */
function detectDiffLinesFromGit(): number | undefined {
  try {
    const stat = execSync("git diff --shortstat", {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!stat) return 0;
    const insertions = /(\d+) insertion/.exec(stat)?.[1] ?? "0";
    const deletions = /(\d+) deletion/.exec(stat)?.[1] ?? "0";
    return Number(insertions) + Number(deletions);
  } catch {
    return undefined;
  }
}

function parseArgs(argv: string[]): { rawText: string; diffLines?: number; execute: boolean } {
  const rawText = argv[0] ?? "";
  const diffFlag = argv.find((a) => a.startsWith("--diff-lines="));
  const diffLines = diffFlag ? Number(diffFlag.split("=")[1]) : detectDiffLinesFromGit();
  const execute = argv.includes("--execute");
  return { rawText, diffLines, execute };
}

async function main() {
  const argv = process.argv.slice(2);
  const { rawText, diffLines, execute } = parseArgs(argv);

  if (!rawText) {
    console.error('Usage: npx tsx dev-tools/cli.ts "/code /quick fix typo" [--diff-lines=N] [--execute]');
    process.exit(1);
  }

  // 1) Construct RequestSignal from raw input (pure CPU evaluation)
  const signal = buildSignal(rawText, { diffLines });

  console.log("\n[1] RequestSignal:");
  console.log(signal);

  // 2) Resolve behavior, workflow, and policy in sequence
  const policyFile = loadPolicies(new URL("../ay-pi.policy.json", import.meta.url).pathname);
  const behavior = await resolveBehavior(signal);
  const workflowDefinition = await resolveWorkflow(behavior.behavior, signal);
  const workflow = resolvePolicy(signal, behavior.behavior, workflowDefinition, policyFile);

  console.log("\n[2] Workflow:");
  console.log(workflow);
  console.log(`    (behavior: ${workflow.behavior}, workflow: ${workflow.workflow.id})`);
  console.log(`    (primary model: ${workflow.provider}/${workflow.modelPool[0]})`);
  console.log(`    (allowed tools: ${workflow.allowedTools.join(", ")})`);

  // 3) Perform API call if --execute flag is set
  // API execution is currently disabled/removed
  if (execute) {
    console.error("\n[3] --execute flag is not supported because executor is missing.");
  }
}

main();

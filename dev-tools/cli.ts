/**
 * CLI TEST HARNESS
 * ================
 * Command line utility for testing AY-PI routing logic, prompt assembly,
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
import { loadEnvFile } from "../src/config/env.js";
import { buildSignal, route } from "../src/router/index.js";
import { classifyText } from "../src/router/textClassifier.js";
import { loadPolicies } from "../src/config/policy.loader.js";
import { selectFiles } from "../src/context/assembler.js";
import { getChangedFilePaths, buildFileCandidates, loadFileContents } from "../src/context/gitContext.js";
import { buildPrompt } from "../src/prompt/builder.js";
import { logDecision } from "../src/telemetry/logger.js";
import { executeOpenCodeGo } from "./executor/openCodeGoExecutor.js";
import type { ExecutionResult } from "../src/telemetry/types.js";

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

  if (signal.command === "/chat") {
    const debug = classifyText(rawText);
    console.log(
      `    (classification detail: method=${debug.method}, confidence=${debug.confidence.toFixed(3)})`
    );
  }

  // 2) Load policy definition and evaluate routing rules
  const policyFile = loadPolicies(new URL("../ay-pi.policy.json", import.meta.url).pathname);
  const workflow = route(signal, policyFile);

  console.log("\n[2] WorkflowObject:");
  console.log(workflow);
  console.log(`    (primary model: ${workflow.provider}/${workflow.modelPool[0]})`);
  console.log(`    (allowed tools: ${workflow.allowedTools.join(", ")})`);

  // 3) Discover modified files and select candidates within context budget
  const changedPaths = getChangedFilePaths();
  const candidates = buildFileCandidates(changedPaths);
  const selected = selectFiles(candidates, workflow.contextBudget);

  console.log("\n[3] Selected files:");
  console.log(selected.length > 0 ? selected.map((f) => f.path) : "(no changed files found / not a git repo)");

  // 4) Load file contents and build system/user prompts
  const assembledFiles = loadFileContents(selected);
  const prompt = buildPrompt(workflow, assembledFiles, rawText);

  console.log("\n[4] Assembled prompt:");
  console.log("--- systemPrompt ---\n" + prompt.systemPrompt);
  console.log("--- userPrompt ---\n" + prompt.userPrompt);

  // 5) Perform API call if --execute flag is set
  let execution: ExecutionResult | undefined;
  if (execute) {
    const apiKey = process.env.OPENCODE_API_KEY;
    if (!apiKey) {
      console.error(
        "\n[5] --execute flag was passed but OPENCODE_API_KEY is not defined."
      );
    } else {
      console.log("\n[5] Executing API call...");
      execution = await executeOpenCodeGo(workflow, prompt, apiKey);
      if (execution.success) {
        console.log(`    Success (${execution.durationMs}ms). Response:\n`);
        console.log(execution.content);
        if (execution.usage) {
          console.log(
            `\n    (token usage: input=${execution.usage.inputTokens ?? "?"}, output=${execution.usage.outputTokens ?? "?"})`
          );
        }
      } else {
        console.error(`    Failed (${execution.durationMs}ms): ${execution.errorMessage}`);
      }
    }
  } else {
    console.log("\n[5] --execute flag omitted; skipping API call.");
  }

  // 6) Log telemetry entry
  logDecision(signal, workflow, execution);

  console.log("\n=> Logged decision to ay-pi.telemetry.jsonl.\n");
}

main();


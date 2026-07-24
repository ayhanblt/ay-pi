/**
 * EXTENSION INDEX
 * ===============
 * Entry point for the AY-PI Pi Coding Agent extension.
 * Connects prompt routing, model selection, thinking levels, tool restrictions,
 * and context injection into Pi's lifecycle events.
 */

import type { ExtensionAPI, ExtensionContext, ExtensionCommandContext } from "@earendil-works/pi-coding-agent";
import { execSync } from "node:child_process";

import { buildSignal, route } from "../../../src/router/index.js";
import type { PolicyFile } from "../../../src/router/types.js";
import { loadPolicies } from "../../../src/config/policy.loader.js";
import { selectFiles } from "../../../src/context/assembler.js";
import {
  getChangedFilePaths,
  buildFileCandidates,
  loadFileContents,
} from "../../../src/context/gitContext.js";
import { buildPrompt } from "../../../src/prompt/builder.js";
import { logDecision } from "../../../src/telemetry/logger.js";
import { ALL_TOOLS } from "../../../src/workflow/types.js";
import { detectMisplacedCliCommand } from "../../../src/router/cliCommandGuard.js";

// Policy configuration file path
const POLICY_PATH = new URL("../../../ay-pi.policy.json", import.meta.url).pathname;

// Module-level cache for policy definition
let cachedPolicy: PolicyFile | null = null;
function getPolicy(): PolicyFile {
  if (!cachedPolicy) {
    cachedPolicy = loadPolicies(POLICY_PATH);
  }
  return cachedPolicy;
}

/**
 * Computes line counts for uncommitted git changes within the target working directory (`cwd`).
 */
function detectDiffLinesFromGit(cwd: string): number | undefined {
  try {
    const stat = execSync("git diff --shortstat", {
      cwd,
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

/** Module-level state tracking intent of the preceding turn for sticky routing. */
let lastIntent: string | null = null;

export default function ayPi(pi: ExtensionAPI) {
  pi.on("input", async (event, ctx: ExtensionContext) => {
    if (event.source !== "interactive") return { action: "continue" };

    const misplaced = detectMisplacedCliCommand(event.text);
    if (misplaced) {
      ctx.ui.notify(
        `"${misplaced}" is a CLI command and should be run in a terminal window.`,
        "info"
      );
      return { action: "handled" };
    }

    return { action: "continue" };
  });

  pi.on("session_start", async (_event, ctx: ExtensionContext) => {
    ctx.ui.notify("AY-PI extension active", "info");
  });

  pi.on("before_agent_start", async (event, ctx: ExtensionContext) => {
    const rawText = event.prompt;
    if (!rawText) return {};

    // 1) Construct RequestSignal from input prompt and git diff metadata
    const diffLines = detectDiffLinesFromGit(ctx.cwd);
    const signal = buildSignal(rawText, { diffLines }, lastIntent);
    lastIntent = signal.command;

    // 2) Evaluate policy rules and resolve workflow parameters
    const policy = getPolicy();
    const workflow = route(signal, policy);

    // 3) Apply model selection and thinking level via Pi SDK APIs
    let appliedModelInfo: string | undefined;
    let modelApplied = false;

    for (const modelId of workflow.modelPool) {
      const model = ctx.modelRegistry.find(workflow.provider, modelId);
      if (model) {
        const applied = await pi.setModel(model);
        if (applied) {
          modelApplied = true;
          appliedModelInfo = modelId;
          break;
        }
      }
    }

    if (!modelApplied) {
      ctx.ui.notify(
        `AY-PI: None of the candidate models (${workflow.modelPool.join(", ")}) were available. Active model unchanged.`,
        "error"
      );
    }
    pi.setThinkingLevel(workflow.thinking);

    const appliedThinking = pi.getThinkingLevel();
    const appliedModelObj = ctx.model;
    const appliedModelId = appliedModelObj ? appliedModelObj.id : undefined;

    if (appliedThinking !== workflow.thinking) {
      ctx.ui.notify(
        `AY-PI: Requested thinking '${workflow.thinking}', active thinking level is '${appliedThinking}'.`,
        "info"
      );
    }

    // 3b) Restrict active tools based on workflow configuration
    pi.setActiveTools(workflow.allowedTools);

    // 4) Discover modified files, assemble context budget, and build prompt text
    const changedPaths = getChangedFilePaths(ctx.cwd);
    const candidates = buildFileCandidates(changedPaths, ctx.cwd);
    const selected = selectFiles(candidates, workflow.contextBudget);
    const assembledFiles = loadFileContents(selected, ctx.cwd);
    const prompt = buildPrompt(workflow, assembledFiles, rawText);

    // 5) Update status bar with active routing state
    const toolsNote =
      workflow.allowedTools.length < ALL_TOOLS.length
        ? ` (tools: ${workflow.allowedTools.join(",")})`
        : "";

    ctx.ui.setStatus(
      "ay-pi",
      `AY-PI: ${workflow.provider}/${appliedModelInfo ?? workflow.modelPool[0]} · ${appliedThinking}` +
      (workflow.meta.diffLinesEscalationApplied ? " (↑ diffLines escalated)" : "") +
      toolsNote
    );

    // 6) Log telemetry entry
    logDecision(signal, workflow, undefined, appliedModelId, appliedThinking);

    // 7) Inject system prompt constraints and assembled context payload
    const result: { systemPrompt: string; message?: { customType: string; content: string; display: boolean } } = {
      systemPrompt: `${event.systemPrompt}\n\n${prompt.systemPrompt}`,
    };

    if (assembledFiles.length > 0) {
      result.message = {
        customType: "ay-pi-context",
        content: prompt.userPrompt,
        display: false,
      };
    }

    return result;
  });

  pi.registerCommand("ay-pi-status", {
    description: "Display AY-PI status and active policy metrics",
    handler: async (args, commandCtx: ExtensionCommandContext) => {
      const policy = getPolicy();
      const ruleCount = policy.routes.reduce((acc, r) => acc + r.rules.length, 0);
      commandCtx.ui.notify(
        `AY-PI Active.\nPolicy: ${policy.routes.length} intents, ${ruleCount} rules loaded.\nTelemetry: ay-pi.telemetry.jsonl`,
        "info"
      );
    },
  });

  pi.registerCommand("ay-pi-reload-policy", {
    description: "Reload AY-PI policy definition file",
    handler: async (args, commandCtx: ExtensionCommandContext) => {
      cachedPolicy = null;
      getPolicy();
      commandCtx.ui.notify("AY-PI: Policy cache cleared and reloaded.", "info");
    },
  });
}


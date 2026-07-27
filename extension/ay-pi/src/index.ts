/**
 * EXTENSION INDEX
 * ===============
 * Entry point for the AY-PI Pi Coding Agent extension.
 * Connects behavior/workflow selection, policy, and Pi adaptation into Pi's lifecycle events.
 */

import type { ExtensionAPI, ExtensionContext, ExtensionCommandContext } from "@earendil-works/pi-coding-agent";
import { execSync } from "node:child_process";

import { buildSignal } from "@/input/signal.js";
import type { PolicyFile } from "@/policy/types.js";
import { loadPolicies } from "@/policy/loader.js";
import { resolveBehavior } from "@/behavior/resolver.js";
import { resolveWorkflow } from "@/workflow/resolver.js";
import { resolvePolicy } from "@/policy/resolver.js";
import { resolveContextStrategy } from "@/context/strategy.js";
import { adaptForPi } from "@/adapter/pi.js";
import { ALL_TOOLS } from "@/workflow/types.js";
import { detectMisplacedCliCommand } from "@/input/cliGuard.js";
import { DebugLogger } from "@/telemetry/debugLogger.js";

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

/** Module-level state tracking behavior of the preceding turn for sticky routing. */


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
    const signal = buildSignal(rawText, { diffLines });

    const logger = DebugLogger.getInstance();
    logger.start(rawText);

    // 2) Resolve behavior, workflow, and policy in sequence
    const policy = getPolicy();
    const behavior = await resolveBehavior(signal);
    const workflowDefinition = await resolveWorkflow(behavior.behavior, signal);
    const workflow = resolvePolicy(signal, behavior.behavior, workflowDefinition, policy);
    const contextStrategy = resolveContextStrategy(signal, workflow);
    const piDecision = adaptForPi(workflow, contextStrategy);


    // 3) Apply model selection and thinking level via Pi SDK APIs
    let appliedModelInfo: string | undefined;
    let modelApplied = false;

    for (const modelId of piDecision.modelPool) {
      const model = ctx.modelRegistry.find(piDecision.provider, modelId);
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
        `AY-PI: None of the candidate models (${piDecision.modelPool.join(", ")}) were available. Active model unchanged.`,
        "error"
      );
    }
    pi.setThinkingLevel(piDecision.thinking);

    const appliedThinking = pi.getThinkingLevel();
    if (appliedThinking !== piDecision.thinking) {
      ctx.ui.notify(
        `AY-PI: Requested thinking '${piDecision.thinking}', active thinking level is '${appliedThinking}'.`,
        "info"
      );
    }

    // 3b) Restrict active tools based on workflow configuration
    pi.setActiveTools(piDecision.allowedTools);

    // 4) Update status bar with active routing state
    const toolsNote =
      piDecision.allowedTools.length < ALL_TOOLS.length
        ? ` (tools: ${piDecision.allowedTools.join(",")})`
        : "";

    ctx.ui.setStatus(
      "ay-pi",
      `AY-PI: ${piDecision.statusText} · ${piDecision.provider}/${appliedModelInfo ?? piDecision.modelPool[0]} · ${appliedThinking}` +
      (workflow.meta.diffLinesEscalationApplied ? " (↑ diffLines escalated)" : "") +
      toolsNote
    );

    // 5) Inject adapter-provided target instructions
    const result: { systemPrompt: string } = {
      systemPrompt: `${event.systemPrompt}\n\n${piDecision.systemPrompt}`,
    };

    logger.finalResult.behavior = piDecision.behavior;
    logger.finalResult.workflow = piDecision.workflowId;
    logger.finalResult.policy = logger.policy.selected;
    logger.print();

    return result;
  });

  pi.registerCommand("ay-pi-status", {
    description: "Display AY-PI status and active policy metrics",
    handler: async (args, commandCtx: ExtensionCommandContext) => {
      const policy = getPolicy();
      const policyCount = policy.policies.length;
      commandCtx.ui.notify(
        `AY-PI Active.\nPolicy: ${policyCount} workflow policies loaded.`,
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

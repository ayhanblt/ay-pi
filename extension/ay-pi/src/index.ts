/**
 * EXTENSION INDEX
 * ===============
 * Entry point for the AY-PI Pi Coding Agent extension.
 * Connects behavior/workflow selection, policy, and Pi adaptation into Pi's lifecycle events.
 */

import type { ExtensionAPI, ExtensionContext, ExtensionCommandContext } from "@earendil-works/pi-coding-agent";
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

import type { PolicyFile } from "@/policy/types.js";
import { loadPolicies, parsePolicies } from "@/policy/loader.js";
import { resolveBehavior } from "@/behavior/resolver.js";
import { resolveWorkflow } from "@/workflow/resolver.js";
import { resolvePolicy } from "@/policy/resolver.js";
import { resolveContextStrategy } from "@/context/strategy.js";
import { adaptForPi } from "@/adapter/pi.js";
import { ALL_TOOLS } from "@/workflow/types.js";
import { detectMisplacedCliCommand } from "@/input/cliGuard.js";
import { DebugLogger } from "@/telemetry/debugLogger.js";
import { buildSignal, detectRequestedModel } from "@/input/signal.js";
import { canonicalModelId } from "@/model/ids.js";
import { resolveMetaIntent } from "@/behavior/semanticEngine.js";
import type { RoutingState } from "@/state/types.js";
import type { Behavior } from "@/behavior/types.js";
import bundledPolicy from "../../../ay-pi.policy.json" with { type: "json" };

// Policy configuration file path
const POLICY_PATH = new URL("../ay-pi.policy.json", import.meta.url).pathname;

// Module-level cache for policy definition
let cachedPolicy: PolicyFile | null = null;
function getPolicy(): PolicyFile {
  if (!cachedPolicy) {
    cachedPolicy = existsSync(POLICY_PATH)
      ? loadPolicies(POLICY_PATH)
      : parsePolicies(bundledPolicy, "bundled ay-pi.policy.json");
  }
  return cachedPolicy;
}

function textFromMessage(message: any): string {
  if (typeof message?.content === "string") return message.content;
  if (!Array.isArray(message?.content)) return "";
  return message.content
    .filter((part: any) => part?.type === "text")
    .map((part: any) => part.text)
    .join("\n");
}

interface HandoffMarker {
  prompt: string;
  provider: string;
  modelId: string;
  behavior: Behavior;
  workflow: string;
}

function findHandoffMarker(ctx: ExtensionContext, prompt: string): HandoffMarker | undefined {
  const branch = ctx.sessionManager.getBranch() as any[];
  const marker = [...branch].reverse().find(
    (entry) => entry?.type === "custom_message" && entry.customType === "ay-pi.model-handoff"
  );
  const details = marker?.details as HandoffMarker | undefined;
  return details?.prompt === prompt ? details : undefined;
}

function findCleanBranchAnchor(ctx: ExtensionCommandContext): string | undefined {
  const branch = ctx.sessionManager.getBranch() as any[];
  let lastUserIndex = -1;
  for (let i = branch.length - 1; i >= 0; i -= 1) {
    if (branch[i]?.type === "message" && branch[i]?.message?.role === "user") {
      lastUserIndex = i;
      break;
    }
  }
  if (lastUserIndex < 0) return undefined;
  const firstAssistant = branch.slice(lastUserIndex + 1).find(
    (entry) => entry?.type === "message" && entry?.message?.role === "assistant"
  );
  return firstAssistant?.parentId ?? branch[lastUserIndex]?.id;
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

export default function ayPi(pi: ExtensionAPI) {
  const state: RoutingState = {};
  let lastResolution: { behavior: Behavior; workflow: string; prompt: string } | undefined;

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

    if (detectRequestedModel(event.text) && await resolveMetaIntent(event.text) === "model_switch") {
      const model = detectRequestedModel(event.text);
      ctx.ui.notify(
        `AY-PI: Model geçişi için temiz branch oluşturulmalı. Şunu kullanın: /ay-pi-switch ${model ?? "provider/model"}`,
        "info"
      );
      return { action: "handled" };
    }

    return { action: "continue" };
  });

  pi.on("context", async (event) => {
    return {
      messages: event.messages.filter((message: any) => message.customType !== "ay-pi.model-handoff"),
    };
  });

  pi.on("session_start", async (_event, ctx: ExtensionContext) => {
    const entries = ctx.sessionManager.getEntries() as any[];
    const saved = [...entries].reverse().find((entry) => entry.type === "custom" && entry.customType === "ay-pi.state");
    if (saved?.data) Object.assign(state, saved.data);
    ctx.ui.notify("AY-PI extension active", "info");
  });

  pi.on("before_agent_start", async (event, ctx: ExtensionContext) => {
    const rawText = event.prompt;
    if (!rawText) return {};

    const handoff = findHandoffMarker(ctx, rawText);

    // 1) Construct RequestSignal from input prompt and git diff metadata
    const diffLines = detectDiffLinesFromGit(ctx.cwd);
    const signal = buildSignal(rawText, {
      diffLines,
      previousBehavior: state.previousBehavior,
      previousWorkflow: state.previousWorkflow,
      activePlan: state.activePlan,
      forcedBehavior: handoff?.behavior,
      forcedWorkflow: handoff?.workflow,
    });

    const logger = DebugLogger.getInstance();
    logger.start(rawText);

    // 2) Resolve behavior, workflow, and policy in sequence
    const policy = getPolicy();
    const behavior = await resolveBehavior(signal);
    const workflowDefinition = await resolveWorkflow(behavior.behavior, signal);
    const workflow = resolvePolicy(signal, behavior.behavior, workflowDefinition, policy);
    const contextStrategy = resolveContextStrategy(signal, workflow);
    const planConfirmed = behavior.behavior === "CODE" && state.activePlan?.status === "proposed" &&
      (behavior.ruleId === "transition::plan.confirmed.semantic" || behavior.ruleId === "behavior::command.code");
    if (planConfirmed && state.activePlan) {
      state.activePlan.status = "approved";
    }
    const planForPrompt = planConfirmed
      ? state.activePlan
      : undefined;
    const piDecision = adaptForPi(workflow, contextStrategy, planForPrompt);

    lastResolution = { behavior: behavior.behavior, workflow: workflow.workflow.id, prompt: rawText };
    state.previousBehavior = behavior.behavior;
    state.previousWorkflow = workflow.workflow.id;
    state.lastPrompt = rawText;
    pi.appendEntry("ay-pi.state", state);


    // 3) Apply model selection and thinking level via Pi SDK APIs
    let appliedModelInfo: string | undefined;
    let modelApplied = false;

    if (handoff) {
      const model = ctx.modelRegistry.find(handoff.provider, handoff.modelId);
      if (model) {
        modelApplied = await pi.setModel(model);
        if (modelApplied) appliedModelInfo = handoff.modelId;
      }
    }

    for (const modelId of handoff || modelApplied ? [] : piDecision.modelPool) {
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

    if (!modelApplied && handoff) {
      ctx.ui.notify(
        `AY-PI: Requested handoff model '${handoff.provider}/${handoff.modelId}' was not available. Handoff cancelled; active model unchanged.`,
        "error"
      );
    } else if (!modelApplied) {
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

  pi.on("agent_end", async (event, _ctx) => {
    if (!lastResolution) return;
    const assistantText = [...event.messages].reverse()
      .filter((message: any) => message.role === "assistant")
      .map(textFromMessage)
      .find(Boolean);
    if (lastResolution.behavior === "PLAN" && assistantText) {
      state.activePlan = {
        id: `plan-${Date.now()}`,
        sourcePrompt: lastResolution.prompt,
        behavior: "PLAN",
        workflow: lastResolution.workflow,
        content: assistantText,
        status: "proposed",
        createdAt: new Date().toISOString(),
      };
      state.lastPlanEntryId = undefined;
      pi.appendEntry("ay-pi.state", state);
    }
    lastResolution = undefined;
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

  pi.registerCommand("ay-pi-switch", {
    description: "Create a clean Pi branch and continue the last request with another model",
    handler: async (args, commandCtx: ExtensionCommandContext) => {
      const requested = canonicalModelId(args.trim());
      if (!requested) {
        commandCtx.ui.notify("Usage: /ay-pi-switch kimi-v2.7-code", "error");
        return;
      }
      if (!commandCtx.isIdle()) {
        commandCtx.ui.notify("AY-PI: Current turn is being interrupted for a clean model handoff.", "info");
        commandCtx.abort();
      }
      await commandCtx.waitForIdle();
      const anchor = findCleanBranchAnchor(commandCtx);
      if (!anchor || !state.lastPrompt) {
        commandCtx.ui.notify("AY-PI: Temiz model geçişi için aktif bir önceki istek bulunamadı.", "error");
        return;
      }
      const result = await commandCtx.fork(anchor, {
        position: "at",
        withSession: async (replacement) => {
          await replacement.sendMessage({
            customType: "ay-pi.model-handoff",
            content: "AY-PI internal model handoff",
            display: false,
            details: {
              prompt: state.lastPrompt!,
              provider: "opencode-go",
              modelId: requested,
              behavior: lastResolution?.behavior ?? state.previousBehavior ?? "CODE",
              workflow: lastResolution?.workflow ?? state.previousWorkflow ?? "edit",
            } satisfies HandoffMarker,
          });
          await replacement.sendUserMessage(state.lastPrompt!);
        },
      });
      if (result.cancelled) commandCtx.ui.notify("AY-PI: Model geçişi iptal edildi.", "info");
    },
  });
}

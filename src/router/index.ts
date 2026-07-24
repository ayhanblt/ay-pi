/**
 * ROUTER INDEX
 * ------------
 * Combines intent detection, subcommand parsing, signal assembly, and decision routing.
 */

import type { ThinkingLevel, WorkflowObject } from "../workflow/types.js";
import { ALL_TOOLS, THINKING_LEVELS } from "../workflow/types.js";
import type { PolicyFile, RequestSignal, RouteRule } from "./types.js";
import { findMatchingRule } from "./rules.js";
import { classifyText } from "./textClassifier.js";
import { detectStickyCodeIntent } from "./stickyRouting.js";

/**
 * Extracts intent command from raw prompt text. Returns `/chat` if no leading slash `/` command is present.
 */
export function detectIntent(rawText: string): string {
  const trimmed = rawText.trim();
  if (trimmed.startsWith("/")) {
    return trimmed.split(/\s+/)[0];
  }
  return "/chat";
}

/**
 * Extracts subcommand if the second token in the prompt also starts with a `/` (e.g. `/quick` in `/code /quick`).
 */
export function detectSubcommand(rawText: string): string | undefined {
  const tokens = rawText.trim().split(/\s+/);
  if (tokens[0]?.startsWith("/") && tokens[1]?.startsWith("/")) {
    return tokens[1];
  }
  return undefined;
}

/**
 * Checks for presence of speed/quick keywords in prompt text.
 */
export function detectQuickKeyword(rawText: string): boolean {
  const keywords = ["quick", "hızlı", "hızlıca", "ufak", "küçük düzeltme"];
  const lower = rawText.toLowerCase();
  return keywords.some((k) => lower.includes(k));
}

/**
 * Assembles a complete `RequestSignal` from raw prompt text and optional overrides/session state.
 * Evaluates free-text classification only when `command` equals `/chat`.
 */
export function buildSignal(
  rawText: string,
  overrides: Partial<Pick<RequestSignal, "diffLines" | "changedFileCount" | "openFileCount">> = {},
  previousIntent: string | null = null
): RequestSignal {
  let command = detectIntent(rawText);

  const sticky = detectStickyCodeIntent(rawText, command, previousIntent);
  if (sticky) {
    command = sticky;
  }

  const signal: RequestSignal = {
    command,
    rawText,
    hasQuickKeyword: detectQuickKeyword(rawText),
    subcommand: detectSubcommand(rawText),
    ...overrides,
  };

  if (command === "/chat") {
    signal.textCategory = classifyText(rawText).category;
  }

  return signal;
}

/**
 * Elevates thinking level up one step in the ordered hierarchy (`THINKING_LEVELS`).
 */
export function escalateThinking(level: ThinkingLevel): ThinkingLevel {
  const index = THINKING_LEVELS.indexOf(level);
  const nextIndex = Math.min(index + 1, THINKING_LEVELS.length - 1);
  return THINKING_LEVELS[nextIndex];
}

/**
 * Primary routing function. Evaluates a `RequestSignal` against a `PolicyFile` to produce a `WorkflowObject`.
 */
export function route(signal: RequestSignal, policyFile: PolicyFile): WorkflowObject {
  const policy =
    policyFile.routes.find((p) => p.intent === signal.command) ??
    policyFile.routes.find((p) => p.intent === "/chat");

  if (!policy) {
    throw new Error(
      `No policy defined for "${signal.command}" or fallback "/chat". ` +
      `Check policy configuration.`
    );
  }

  const rule: RouteRule = findMatchingRule(signal, policy.rules);

  const threshold = policyFile.settings.diffLinesEscalationThreshold;
  const shouldEscalate =
    signal.diffLines !== undefined &&
    signal.diffLines >= threshold &&
    policyFile.settings.diffLinesEscalationIntents.includes(signal.command);
  const finalThinking = shouldEscalate ? escalateThinking(rule.thinking) : rule.thinking;

  return {
    intent: signal.command,
    provider: rule.provider,
    modelPool: rule.pool,
    thinking: finalThinking,
    contextBudget: rule.contextBudget,
    constraints: rule.constraints,
    allowedTools: rule.allowedTools ?? [...ALL_TOOLS],
    output: rule.output ?? { maxTokens: 1000 },
    meta: {
      ruleId: `${signal.command}${signal.subcommand ? "+" + signal.subcommand : ""}::${JSON.stringify(rule.when ?? "default")}`,
      diffLinesEscalationApplied: shouldEscalate,
    },
  };
}


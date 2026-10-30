/**
 * The decision ladder. Pure: everything it needs is passed in.
 *
 *   1. Explicit command (/plan, /code, ...)         -> that behavior
 *      or a pinned mode (F2, /ay-pi mode)          -> that behavior, like a command on every prompt
 *      or a workflow another extension reports      -> its behavior; that extension owns the turn
 *   2. Pending plan + classifier says "approved"    -> CODE with the plan
 *      or open planning + classifier says "answers" -> PLAN continues (the plan asked a question)
 *   3. Classifier verdict                           -> behavior + tier
 *   4. Nothing else                                 -> safe default (medium, read-only)
 *
 * CODE (the only behavior that can change files) is reached only by an explicit
 * command or pinned mode, an approved plan, or a high-confidence classifier verdict.
 */

import { PROFILES, SAFE_DEFAULT, shiftTier, type Behavior, type Tier } from "./profiles.js";

/** Minimum probability for a classifier answer that unlocks file changes. */
export const WRITE_CONFIDENCE = 0.8;
/** Below this the classifier's task choice is ignored. */
export const TASK_CONFIDENCE = 0.5;

export interface ClassifierVerdict {
  behavior: Behavior;
  /** Probability of the chosen behavior. */
  confidence: number;
  /** Probability that the user wants files changed now. */
  wantsFileChanges: number;
  /** 0 = trivial, 1 = ordinary, 2 = hard. */
  complexity: number;
  /** Probability that the message approves the pending plan. Only asked when a plan is pending. */
  approvesPlan?: number;
  /** Probability that the message answers a question the planning turn asked. Only asked while planning is open. */
  continuesPlan?: number;
}

export interface DecideInput {
  command?: Behavior;
  /** Pinned mode: used when there is no command. */
  pinnedBehavior?: Behavior;
  hasPendingPlan: boolean;
  /** The last PLAN turn ended with a question instead of a `## Plan`. */
  planningOpen?: boolean;
  /** A workflow another extension reports (Plannotator planning -> PLAN). Used when there is no command or pinned mode. */
  workflow?: Workflow;
  verdict?: ClassifierVerdict;
  pinnedTier?: Tier;
}

export interface Decision {
  behavior: Behavior;
  tier: Tier;
  /** "extension" / "workflow": another extension started or drives the turn; AY-PI only routes it. */
  source: "command" | "plan" | "classifier" | "default" | "extension" | "workflow";
  reason: string;
  /** Inject the pending plan into this turn. */
  usePlan: boolean;
}

/**
 * A turn another extension started (a goal loop, a subagent result, ...). That extension owns it:
 * no classifier, no tool scoping, no instructions. Routing keeps the last tier.
 */
export function extensionTurn(previous: Decision | undefined, workflow?: Workflow): Decision {
  if (workflow) {
    return { behavior: workflow.behavior, tier: PROFILES[workflow.behavior].tier, source: "extension", reason: workflow.reason, usePlan: false };
  }
  return {
    behavior: previous?.behavior ?? SAFE_DEFAULT.behavior,
    tier: previous?.tier ?? SAFE_DEFAULT.tier,
    source: "extension",
    reason: "turn started by another extension",
    usePlan: false,
  };
}

/** What another extension says the session is doing, e.g. Plannotator's planning phase. */
export interface Workflow {
  behavior: Behavior;
  reason: string;
}

export function decide(input: DecideInput): Decision {
  const pinned = !input.command && input.pinnedBehavior;
  let decision: Decision;
  if (!input.command && !pinned && input.workflow) {
    const { behavior, reason } = input.workflow;
    decision = { behavior, tier: PROFILES[behavior].tier, source: "workflow", reason, usePlan: false };
  } else {
    decision = climb(pinned ? { ...input, command: input.pinnedBehavior } : input);
    if (pinned) decision = { ...decision, reason: decision.usePlan ? "pinned CODE mode approves the pending plan" : "pinned mode" };
  }
  return input.pinnedTier ? { ...decision, tier: input.pinnedTier, reason: `${decision.reason}; tier pinned` } : decision;
}

function climb({ command, hasPendingPlan, planningOpen, verdict }: DecideInput): Decision {
  if (command) {
    const usePlan = command === "CODE" && hasPendingPlan;
    return {
      behavior: command,
      tier: PROFILES[command].tier,
      source: "command",
      reason: usePlan ? "explicit /code approves the pending plan" : "explicit command",
      usePlan,
    };
  }

  if (verdict && hasPendingPlan && (verdict.approvesPlan ?? 0) >= WRITE_CONFIDENCE) {
    return { behavior: "CODE", tier: PROFILES.CODE.tier, source: "plan", reason: "classifier: plan approved", usePlan: true };
  }

  // An answer to the planning question ("only show the address") keeps planning, unless it clearly asks for code now.
  const wantsCodeNow = verdict?.behavior === "CODE" && verdict.wantsFileChanges >= WRITE_CONFIDENCE;
  if (verdict && planningOpen && (verdict.continuesPlan ?? 0) >= TASK_CONFIDENCE && !wantsCodeNow) {
    return { behavior: "PLAN", tier: PROFILES.PLAN.tier, source: "classifier", reason: "classifier: answers the planning question", usePlan: false };
  }

  if (verdict && verdict.confidence >= TASK_CONFIDENCE) {
    let behavior = verdict.behavior;
    let reason = `classifier: ${behavior.toLowerCase()}`;
    if (behavior === "CODE" && verdict.wantsFileChanges < WRITE_CONFIDENCE) {
      behavior = "SUGGEST";
      reason = "classifier: code change not confirmed, suggesting instead";
    }
    const tier = shiftTier(PROFILES[behavior].tier, Math.round(verdict.complexity) - 1);
    return { behavior, tier, source: "classifier", reason, usePlan: false };
  }

  return {
    ...SAFE_DEFAULT,
    source: "default",
    reason: verdict ? "classifier unsure" : "no command, no classifier",
    usePlan: false,
  };
}

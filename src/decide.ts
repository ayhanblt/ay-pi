/**
 * The decision ladder. Pure: everything it needs is passed in.
 *
 *   1. Explicit command (/plan, /code, ...)         -> that behavior
 *   2. Pending plan + classifier says "approved"    -> CODE with the plan
 *   3. Classifier verdict                           -> behavior + tier
 *   4. Nothing else                                 -> safe default (medium, read-only)
 *
 * CODE (the only behavior that can change files) is reached only by an explicit
 * command, an approved plan, or a high-confidence classifier verdict.
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
}

export interface DecideInput {
  command?: Behavior;
  hasPendingPlan: boolean;
  verdict?: ClassifierVerdict;
  pinnedTier?: Tier;
}

export interface Decision {
  behavior: Behavior;
  tier: Tier;
  source: "command" | "plan" | "classifier" | "default";
  reason: string;
  /** Inject the pending plan into this turn. */
  usePlan: boolean;
}

export function decide(input: DecideInput): Decision {
  const decision = climb(input);
  return input.pinnedTier ? { ...decision, tier: input.pinnedTier, reason: `${decision.reason}; tier pinned` } : decision;
}

function climb({ command, hasPendingPlan, verdict }: DecideInput): Decision {
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

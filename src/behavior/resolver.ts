import type { RequestSignal } from "@/input/types.js";
import type { BehaviorResolution } from "@/behavior/types.js";
import { resolveBehaviorByRule } from "@/behavior/ruleEngine.js";
import { resolveBehaviorBySemantics } from "@/behavior/semanticEngine.js";
import { DebugLogger } from "@/telemetry/debugLogger.js";

const RULE_CONFIDENCE_THRESHOLD = 0.55;

export async function resolveBehavior(signal: RequestSignal): Promise<BehaviorResolution> {
  const logger = DebugLogger.getInstance();
  const ruleResolution = resolveBehaviorByRule(signal);
  if (ruleResolution && ruleResolution.confidence >= RULE_CONFIDENCE_THRESHOLD) {
    return ruleResolution;
  }

  // Rule Engine unresolved or below confidence. Try Semantic Engine.
  const semanticResolution = await resolveBehaviorBySemantics(signal);
  return semanticResolution as BehaviorResolution;
}

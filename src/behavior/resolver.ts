import type { RequestSignal } from "@/input/types.js";
import type { BehaviorResolution } from "@/behavior/types.js";
import { resolveBehaviorByRule } from "@/behavior/ruleEngine.js";
import { resolveBehaviorBySemantics } from "@/behavior/semanticEngine.js";
import { resolveMetaIntent } from "@/behavior/semanticEngine.js";

const RULE_CONFIDENCE_THRESHOLD = 0.55;

export async function resolveBehavior(signal: RequestSignal): Promise<BehaviorResolution> {
  const ruleResolution = resolveBehaviorByRule(signal);
  if (ruleResolution && ruleResolution.confidence >= RULE_CONFIDENCE_THRESHOLD) {
    return ruleResolution;
  }

  if (!signal.command) {
    const metaIntent = await resolveMetaIntent(signal.rawText);
    if (metaIntent === "plan_confirmation") {
      return {
        behavior: "CODE",
        confidence: 1,
        source: "semantic",
        ruleId: "transition::plan.confirmed.semantic",
      };
    }
  }

  // Rule Engine unresolved or below confidence. Try Semantic Engine.
  return (await resolveBehaviorBySemantics(signal)) ?? {
    behavior: "CHAT",
    confidence: 0,
    source: "fallback",
    ruleId: "behavior::fallback.chat",
  };
}

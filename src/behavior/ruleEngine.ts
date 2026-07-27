import type { Behavior, BehaviorResolution } from "@/behavior/types.js";
import type { RequestSignal } from "@/input/types.js";
import { DebugLogger } from "@/telemetry/debugLogger.js";

const BEHAVIOR_COMMANDS: Record<string, Behavior> = {
  "/chat": "CHAT",
  "/plan": "PLAN",
  "/review": "REVIEW",
  "/code": "CODE",
  "/suggest": "SUGGEST",
};

export function resolveBehaviorByRule(signal: RequestSignal): BehaviorResolution | null {
  const logger = DebugLogger.getInstance();
  
  const explicit = BEHAVIOR_COMMANDS[signal.command];
  if (explicit) {
    logger.ruleEngine.confidence = 1;
    logger.ruleEngine.decision = explicit;
    return {
      behavior: explicit,
      confidence: 1,
      source: "rule",
      ruleId: `behavior::command.${signal.command.slice(1)}`,
    };
  }

  logger.ruleEngine.confidence = 0;
  logger.ruleEngine.decision = "UNRESOLVED";
  return null;
}

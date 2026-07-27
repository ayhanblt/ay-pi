export type Behavior = "CHAT" | "PLAN" | "REVIEW" | "CODE";

export interface BehaviorResolution {
  behavior: Behavior;
  confidence: number;
  source: "rule" | "semantic" | "fallback";
  ruleId: string;
}


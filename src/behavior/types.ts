export type Behavior = "CHAT" | "PLAN" | "REVIEW" | "CODE" | "SUGGEST";

export interface BehaviorResolution {
  behavior: Behavior;
  confidence: number;
  source: "rule" | "semantic" | "fallback";
  ruleId: string;
}


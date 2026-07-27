import type { Behavior } from "@/behavior/types.js";
import type {
  Constraint,
  ContextBudget,
  OutputConstraint,
  ThinkingLevel,
  ToolName,
} from "@/workflow/types.js";

export interface PolicyEntry {
  behavior: Behavior;
  workflow: string;
  provider: string;
  pool: string[];
  thinking: ThinkingLevel;
  contextBudget: ContextBudget;
  constraints: Constraint[];
  output?: OutputConstraint;
  allowedTools?: ToolName[];
}

export interface PolicySettings {
  diffLinesEscalationThreshold: number;
  diffLinesEscalationBehaviors: Behavior[];
}

export interface PolicyFile {
  settings: PolicySettings;
  policies: PolicyEntry[];
}


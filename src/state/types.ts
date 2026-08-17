import type { Behavior } from "@/behavior/types.js";

export type PlanStatus = "proposed" | "approved" | "executing" | "completed";

export interface PlanArtifact {
  id: string;
  sourcePrompt: string;
  behavior: "PLAN";
  workflow: string;
  content: string;
  status: PlanStatus;
  createdAt: string;
}

export interface RoutingState {
  previousBehavior?: Behavior;
  previousWorkflow?: string;
  lastPrompt?: string;
  activePlan?: PlanArtifact;
  lastPlanEntryId?: string;
}

import type { Behavior } from "@/behavior/types.js";
import type { PlanArtifact } from "@/state/types.js";

export interface RequestSignal {
  command: string;
  rawText: string;
  diffLines?: number;
  changedFileCount?: number;
  openFileCount?: number;
  subcommand?: string;
  previousBehavior?: Behavior;
  previousWorkflow?: string;
  activePlan?: PlanArtifact;
  forcedBehavior?: Behavior;
  forcedWorkflow?: string;
}

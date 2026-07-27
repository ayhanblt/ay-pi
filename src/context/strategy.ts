import type { RequestSignal } from "@/input/types.js";
import type { Workflow } from "@/workflow/types.js";
import type { ContextStrategy, RepositoryScanStrategy } from "@/context/types.js";

export function resolveContextStrategy(signal: RequestSignal, resolvedPolicy: Workflow): ContextStrategy {
  let repositoryScan: RepositoryScanStrategy = "Allowed";
  
  // 1. Repository Scan Rules
  switch (resolvedPolicy.behavior) {
    case "CODE":
      repositoryScan = "Limited";
      break;
    case "CHAT":
      repositoryScan = "Disabled";
      break;
    case "PLAN":
    case "REVIEW":
      repositoryScan = "Allowed";
      break;
  }

  // 2. Focus Targets (Context Hints)
  const focusTargets = [
    `Primary focus: ${resolvedPolicy.workflow.id} operations`,
    `Context scope: ${signal.rawText}`
  ];

  // 3. Expected Goal
  const expectedGoal = `Execute ${resolvedPolicy.workflow.id} for ${resolvedPolicy.behavior} based on the user's intent: "${signal.rawText}"`;

  return {
    focusTargets,
    repositoryScan,
    expectedGoal,
    reason: `Resolved context strategy for ${resolvedPolicy.behavior}.${resolvedPolicy.workflow.id}`
  };
}

import type { WorkflowDefinition } from "@/workflow/types.js";
import type { Behavior } from "@/behavior/types.js";
import catalogJson from "./catalog.json" with { type: "json" };

const WORKFLOW_CATALOG: WorkflowDefinition[] = catalogJson as WorkflowDefinition[];

const BY_BEHAVIOR = new Map<Behavior, WorkflowDefinition[]>();
for (const workflow of WORKFLOW_CATALOG) {
  const list = BY_BEHAVIOR.get(workflow.behavior) ?? [];
  list.push(workflow);
  BY_BEHAVIOR.set(workflow.behavior, list);
}

export function getWorkflowsForBehavior(behavior: Behavior): WorkflowDefinition[] {
  return BY_BEHAVIOR.get(behavior) ?? [];
}

export function getWorkflowDefinition(behavior: Behavior, workflowId: string): WorkflowDefinition {
  const workflow = getWorkflowsForBehavior(behavior).find((entry) => entry.id === workflowId);
  if (!workflow) {
    throw new Error(`No workflow "${workflowId}" defined for behavior "${behavior}".`);
  }
  return workflow;
}

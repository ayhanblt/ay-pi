import type { WorkflowDefinition } from "@/workflow/types.js";
import type { Behavior } from "@/behavior/types.js";

export const WORKFLOW_CATALOG: WorkflowDefinition[] = [
  { id: "default", behavior: "CHAT", description: "Casual conversation and direct answers." },
  { id: "explain", behavior: "CHAT", description: "Explain a concept or answer why/how questions." },
  { id: "summarize", behavior: "CHAT", description: "Condense long material into a concise summary." },
  { id: "teach", behavior: "CHAT", description: "Teach a concept step by step with examples." },
  { id: "translate", behavior: "CHAT", description: "Translate text while preserving meaning and tone." },
  { id: "architecture", behavior: "PLAN", description: "High-level system or solution architecture." },
  { id: "design", behavior: "PLAN", description: "Interface, API, or component design exploration." },
  { id: "brainstorm", behavior: "PLAN", description: "Generate options, alternatives, and ideas." },
  { id: "migration", behavior: "PLAN", description: "Plan a safe move from one implementation to another." },
  { id: "strategy", behavior: "PLAN", description: "Choose an execution strategy and sequence of work." },
  { id: "code", behavior: "REVIEW", description: "Review code correctness and style concerns." },
  { id: "security", behavior: "REVIEW", description: "Review security risks and attack surface." },
  { id: "performance", behavior: "REVIEW", description: "Review performance characteristics and bottlenecks." },
  { id: "architecture", behavior: "REVIEW", description: "Review structural and layering concerns." },
  { id: "quality", behavior: "REVIEW", description: "Review maintainability, consistency, and test quality." },
  { id: "edit", behavior: "CODE", description: "Make targeted code edits in place." },
  { id: "generate", behavior: "CODE", description: "Create new code from the user request." },
  { id: "refactor", behavior: "CODE", description: "Restructure code while preserving behavior." },
  { id: "fix", behavior: "CODE", description: "Repair bugs or apply small corrective changes." },
  { id: "test", behavior: "CODE", description: "Write or update tests." },
];

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

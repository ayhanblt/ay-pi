import type { RequestSignal } from "@/input/types.js";
import type { Behavior } from "@/behavior/types.js";
import { getWorkflowDefinition, getWorkflowsForBehavior } from "@/workflow/catalog.js";
import type { WorkflowDefinition } from "@/workflow/types.js";
import { DebugLogger } from "@/telemetry/debugLogger.js";
import { resolveWorkflowBySemantics } from "@/behavior/semanticEngine.js";

function getDefaultWorkflowId(behavior: Behavior): string {
  switch (behavior) {
    case "CHAT": return "default";
    case "PLAN": return "architecture";
    case "REVIEW": return "code";
    case "CODE": return "edit";
    case "SUGGEST": return "approach";
    default: return "default";
  }
}

function getExplicitWorkflowId(signal: RequestSignal): string | undefined {
  if (signal.subcommand?.startsWith("/")) {
    return signal.subcommand.slice(1);
  }
  if (signal.command?.startsWith("/")) {
    return signal.command.slice(1);
  }
  return undefined;
}

export async function resolveWorkflow(behavior: Behavior, signal: RequestSignal): Promise<WorkflowDefinition> {
  const candidates = getWorkflowsForBehavior(behavior);
  if (candidates.length === 0) {
    throw new Error(`No workflows configured for behavior "${behavior}".`);
  }

  const logger = DebugLogger.getInstance();
  logger.workflowResolver.behavior = behavior;
  
  let selectedId: string;
  const explicitId = getExplicitWorkflowId(signal);

  logger.workflowResolver.explicitCommand = explicitId;
  
  if (explicitId && candidates.some(c => c.id === explicitId)) {
    selectedId = explicitId;
    logger.workflowResolver.isDefaultFallback = false;
  } else {
    selectedId = await resolveWorkflowBySemantics(behavior, signal);
    logger.workflowResolver.isDefaultFallback = false;
  }

  const selected = getWorkflowDefinition(behavior, selectedId);
  logger.workflowResolver.selected = selected.id;
  
  return selected;
}

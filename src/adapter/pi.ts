import type { Workflow } from "@/workflow/types.js";
import { buildAdapterInstructions } from "@/adapter/instructions.js";
import type { ContextStrategy } from "@/context/types.js";
import { DebugLogger } from "@/telemetry/debugLogger.js";

export interface PiAdapterDecision {
  behavior: Workflow["behavior"];
  workflowId: string;
  provider: string;
  modelPool: string[];
  thinking: Workflow["thinking"];
  allowedTools: Workflow["allowedTools"];
  contextLimit: Workflow["contextBudget"];
  statusText: string;
  systemPrompt: string;
}

export function adaptForPi(workflow: Workflow, strategy: ContextStrategy): PiAdapterDecision {
  const logger = DebugLogger.getInstance();
  const systemPrompt = buildAdapterInstructions(workflow, strategy);
  logger.adapter.target = "Pi";
  logger.adapter.name = "PiAdapter";
  logger.adapter.systemPrompt = systemPrompt;
  logger.contextStrategy.focusTargets = strategy.focusTargets;
  logger.contextStrategy.repositoryScan = strategy.repositoryScan;
  logger.contextStrategy.expectedGoal = strategy.expectedGoal;
  logger.contextStrategy.reason = strategy.reason;
  return {
    behavior: workflow.behavior,
    workflowId: workflow.workflow.id,
    provider: workflow.provider,
    modelPool: workflow.modelPool,
    thinking: workflow.thinking,
    allowedTools: workflow.allowedTools,
    contextLimit: workflow.contextBudget,
    statusText: `${workflow.behavior}/${workflow.workflow.id}`,
    systemPrompt: systemPrompt,
  };
}

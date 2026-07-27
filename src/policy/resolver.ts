import type { RequestSignal } from "@/input/types.js";
import type { Behavior } from "@/behavior/types.js";
import type { WorkflowDefinition } from "@/workflow/types.js";
import type { Workflow, ThinkingLevel } from "@/workflow/types.js";
import { ALL_TOOLS, THINKING_LEVELS } from "@/workflow/types.js";
import type { PolicyEntry, PolicyFile } from "@/policy/types.js";
import { DebugLogger } from "@/telemetry/debugLogger.js";

function escalateThinking(level: ThinkingLevel): ThinkingLevel {
  const index = THINKING_LEVELS.indexOf(level);
  const nextIndex = Math.min(index + 1, THINKING_LEVELS.length - 1);
  return THINKING_LEVELS[nextIndex];
}

function findPolicyEntry(policyFile: PolicyFile, behavior: Behavior, workflow: WorkflowDefinition): PolicyEntry {
  const entry = policyFile.policies.find(
    (policy) => policy.behavior === behavior && policy.workflow === workflow.id
  );
  if (!entry) {
    throw new Error(`No policy defined for behavior "${behavior}" workflow "${workflow.id}".`);
  }
  return entry;
}

export function resolvePolicy(
  signal: RequestSignal,
  behavior: Behavior,
  workflow: WorkflowDefinition,
  policyFile: PolicyFile
): Workflow {
  const policy = findPolicyEntry(policyFile, behavior, workflow);
  const shouldEscalate =
    signal.diffLines !== undefined &&
    signal.diffLines >= policyFile.settings.diffLinesEscalationThreshold &&
    policyFile.settings.diffLinesEscalationBehaviors.includes(behavior);
  const finalThinking = shouldEscalate ? escalateThinking(policy.thinking) : policy.thinking;

  const logger = DebugLogger.getInstance();
  logger.policy.selected = `${behavior}.${workflow.id}.${policy.workflow}`;
  logger.policy.reasoning = finalThinking;
  logger.policy.model = policy.pool.join(", ");
  logger.policy.tools = policy.allowedTools ?? [...ALL_TOOLS];

  return {
    behavior,
    workflow,
    provider: policy.provider,
    modelPool: policy.pool,
    thinking: finalThinking,
    contextBudget: policy.contextBudget,
    constraints: policy.constraints,
    allowedTools: policy.allowedTools ?? [...ALL_TOOLS],
    output: policy.output ?? { maxTokens: 1000 },
    meta: {
      ruleId: `${behavior}:${workflow.id}::${policy.workflow}`,
      diffLinesEscalationApplied: shouldEscalate,
    },
  };
}

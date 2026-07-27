import type { Behavior } from "@/behavior/types.js";

/**
 * WORKFLOW TYPES
 * --------------
 * Defines shared workflow execution types and the adapter output consumed by
 * downstream execution layers such as Pi and the CLI.
 */

// Specifies the reasoning intensity level. Matches the native Pi thinking level API,
// allowing direct usage with `pi.setThinkingLevel()`.
export type ThinkingLevel = "off" | "minimal" | "low" | "medium" | "high" | "xhigh";

// Ordered hierarchy of thinking levels used when policy escalation steps reasoning up.
export const THINKING_LEVELS: ThinkingLevel[] = ["off", "minimal", "low", "medium", "high", "xhigh"];

// Constraints governing context retrieval limits.
// `maxFiles`: maximum allowed file count; `maxChars`: total character budget ceiling.
export interface ContextBudget {
  maxFiles: number;
  maxChars: number;
}

// Rules constraining model output format. Embedded into the system prompt
// by Prompt Builder (e.g. "code_only" -> "Return code block only, without explanatory text").
export type Constraint =
  | "code_only"       // Output code only; omit plain text explanation
  | "no_comments"     // Omit inline comments in generated code
  | "no_refactor"     // Modify only target lines, preserving surrounding code
  | "no_code_output"  // Generate plan/text instead of code (e.g. for /plan)
  | "scope_limited";  // Restrict inspection to injected files only

// Built-in tools supported by Pi.
// Policy uses the complete list unless a workflow policy explicitly restricts it.
export const ALL_TOOLS = ["read", "bash", "edit", "write", "grep", "find", "ls"] as const;
export type ToolName = (typeof ALL_TOOLS)[number];

export interface WorkflowDefinition {
  id: string;
  behavior: Behavior;
  description: string;
}

export interface OutputConstraint {
  maxTokens: number;
}

/**
 * Workflow: selected behavior and workflow with policy controls applied.
 * Adapter modules convert this object for each target agent.
 *
 * modelPool: Ordered list of candidate models (e.g. ["kimi-k2.7-code", "deepseek-v4-pro", "minimax-m3"]).
 * `modelPool[0]` represents the primary target model.
 *
 * allowedTools: Tools accessible to the target agent during the current turn.
 */
export interface Workflow {
  behavior: Behavior;
  workflow: WorkflowDefinition;
  provider: string;            // e.g. "opencode-go", "anthropic"
  modelPool: string[];         // Ordered model candidate pool, [0] is primary
  thinking: ThinkingLevel;
  contextBudget: ContextBudget;
  constraints: Constraint[];
  output: OutputConstraint;
  allowedTools: ToolName[];          // Tools accessible to the model (e.g. ["read", "edit"])
  meta: {
    ruleId: string;                        // Triggered policy rule identifier
    diffLinesEscalationApplied: boolean;    // Indicates whether thinking level was elevated due to diffLines threshold
  };
}

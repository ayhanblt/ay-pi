/**
 * WORKFLOW TYPES
 * --------------
 * Defines the structure of the final decision object produced by AY-PI.
 * Every request processed through the Router, Context Assembler, and Prompt Builder
 * evaluates into a WorkflowObject. This structured decision object is consumed by
 * downstream execution layers (such as Pi or a test CLI executor).
 */

// Specifies the reasoning intensity level. Matches the native Pi thinking level API,
// allowing direct usage with `pi.setThinkingLevel()`.
export type ThinkingLevel = "off" | "minimal" | "low" | "medium" | "high" | "xhigh";

// Ordered hierarchy of thinking levels used by `escalateThinking()` (router/index.ts)
// to step up reasoning intensity.
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
// If a policy rule does not specify `allowedTools`, `route()` defaults to this complete list,
// permitting unrestricted tool access unless explicitly restricted by a rule (e.g. /quick).
export const ALL_TOOLS = ["read", "bash", "edit", "write", "grep", "find", "ls"] as const;
export type ToolName = (typeof ALL_TOOLS)[number];

// Router decision regarding output token limit constraints.
export interface OutputConstraint {
  maxTokens: number;
}

/**
 * WorkflowObject: The unified output of the routing pipeline.
 * Produced by the Router, populated with context by Context Assembler,
 * formatted into system prompts by Prompt Builder, and executed downstream.
 *
 * modelPool: Ordered list of candidate models (e.g. ["kimi-k2.7-code", "deepseek-v4-pro", "minimax-m3"]).
 * `modelPool[0]` represents the primary target model.
 *
 * allowedTools: Tools accessible to the model during the current turn. Specified by the Router
 * based on the active policy rule, and applied via `pi.setActiveTools()`.
 */
export interface WorkflowObject {
  intent: string;              // e.g. "/code", "/plan", "/chat"
  provider: string;            // e.g. "opencode-go", "anthropic"
  modelPool: string[];         // Ordered model candidate pool, [0] is primary
  thinking: ThinkingLevel;
  contextBudget: ContextBudget;
  constraints: Constraint[];
  output: OutputConstraint;
  allowedTools: ToolName[];          // Tools accessible to the model (e.g. ["read", "edit"])
  meta: {
    ruleId: string;                        // Triggered policy rule identifier (for telemetry/debugging)
    diffLinesEscalationApplied: boolean;    // Indicates whether thinking level was elevated due to diffLines threshold
  };
}


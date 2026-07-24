/**
 * ROUTER TYPES
 * ------------
 * Specifies router inputs and policy data structures.
 *
 * DATA FLOW:
 *   1) User enters raw prompt in Pi.
 *   2) The Pi extension extracts session state and computes quantitative metrics.
 *   3) Raw metadata is assembled into a RequestSignal.
 *   4) `route(signal, policy)` evaluates the signal against PolicyFile rules and outputs a WorkflowObject.
 *   5) The WorkflowObject is dispatched to the execution layer (Pi extension or test runner).
 */

import type { Constraint, ContextBudget, OutputConstraint, ThinkingLevel, ToolName } from "../workflow/types.js";

/**
 * RequestSignal: Input payload for the Router.
 * Quantitative signals extracted deterministically without LLM inference.
 */
export interface RequestSignal {
  // Primary command/intent parsed from prompt prefix (e.g. "/code", "/plan", "/chat")
  command: string;

  // Preserved raw prompt string passed to prompt builder and context assembler
  rawText: string;

  // Total lines changed in git diff (`git diff --shortstat`)
  diffLines?: number;

  // Number of affected files in uncommitted changes
  changedFileCount?: number;

  // Number of files currently open in the active editor session
  openFileCount?: number;

  // Indicates presence of quick-turn keywords (e.g. "quick", "fast", "minor")
  hasQuickKeyword?: boolean;

  // Category classification for free-text messages computed by textClassifier.ts ("chat" | "deep" | "uncertain")
  textCategory?: "chat" | "deep" | "uncertain";

  // Subcommand token following primary command (e.g. "/quick" in "/code /quick")
  subcommand?: string;
}

/**
 * RouteRule: Single evaluation rule inside a PolicyFile route definition.
 * Rules matching `when` constraints take precedence; omitted `when` serves as fallback.
 */
export interface RouteRule {
  when?: Partial<Record<keyof RequestSignal, string>>;
  provider: string;
  pool: string[];      // Ordered candidate model pool, [0] is primary
  thinking: ThinkingLevel;
  contextBudget: ContextBudget;
  constraints: Constraint[];
  output?: OutputConstraint;
  allowedTools?: ToolName[];
}

/**
 * RoutePolicy: Collection of rules grouped under a specific intent (e.g., "/code").
 */
export interface RoutePolicy {
  intent: string;       // Primary intent identifier (e.g., "/code", "/plan", "/chat")
  rules: RouteRule[];
}

/**
 * PolicySettings: Global policy settings specified at policy file root.
 */
export interface PolicySettings {
  // Threshold line count at which thinking level is stepped up one notch
  diffLinesEscalationThreshold: number;
  // Intents eligible for thinking escalation based on diffLines
  diffLinesEscalationIntents: string[];
}

/** Complete schema structure for `ay-pi.policy.json`. */
export interface PolicyFile {
  settings: PolicySettings;
  routes: RoutePolicy[];
}


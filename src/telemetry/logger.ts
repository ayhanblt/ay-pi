/**
 * TELEMETRY / LOGGER
 * ===================
 * Appends routing decisions and execution telemetry to a JSONL log file.
 * Operates as a side effect and does not affect pipeline data flow.
 *
 * Captures request signals, resolved workflow decisions, optional execution
 * results (duration, token usage, HTTP status), and applied model/thinking settings.
 */

import { appendFileSync } from "node:fs";
import type { WorkflowObject } from "../workflow/types.js";
import type { RequestSignal } from "../router/types.js";
import type { ExecutionResult } from "./types.js";

export interface TelemetryEntry {
  timestamp: string;
  signal: RequestSignal;
  workflow: WorkflowObject;
  execution?: ExecutionResult;
  appliedModel?: string;
  appliedThinking?: string;
}

const LOG_PATH = new URL("../../ay-pi.telemetry.jsonl", import.meta.url).pathname;

/**
 * Appends a routing decision and optional execution result entry to the JSONL log file.
 */
export function logDecision(
  signal: RequestSignal,
  workflow: WorkflowObject,
  execution?: ExecutionResult,
  appliedModel?: string,
  appliedThinking?: string
): void {
  const entry: TelemetryEntry = {
    timestamp: new Date().toISOString(),
    signal,
    workflow,
    execution,
    appliedModel,
    appliedThinking,
  };
  appendFileSync(LOG_PATH, JSON.stringify(entry) + "\n", "utf-8");
}


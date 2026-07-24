/**
 * TELEMETRY TYPES
 * ---------------
 * Defines telemetry data structures. ExecutionResult is specified here in the
 * shared core because telemetry logging is utilized across both the test CLI
 * (`dev-tools/cli.ts`) and the Pi extension (`extension/ay-pi/src/index.ts`).
 */

export interface ExecutionUsage {
  inputTokens?: number;
  outputTokens?: number;
}

export interface ExecutionResult {
  success: boolean;
  content?: string;          // Model response text (if successful)
  errorMessage?: string;      // Error message (if unsuccessful)
  httpStatus?: number;        // HTTP status code returned by the API (if available)
  durationMs: number;         // Total request execution duration in milliseconds
  usage?: ExecutionUsage;     // Reported token usage metrics (if provided by API)
}


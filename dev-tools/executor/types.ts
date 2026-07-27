export interface ExecutionUsage {
  inputTokens?: number;
  outputTokens?: number;
}

export interface ExecutionResult {
  success: boolean;
  content?: string;
  errorMessage?: string;
  httpStatus?: number;
  durationMs: number;
  usage?: ExecutionUsage;
}


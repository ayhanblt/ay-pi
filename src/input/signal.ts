import type { RequestSignal } from "@/input/types.js";
export { detectRequestedModel } from "@/model/ids.js";

function detectIntent(rawText: string): string {
  const trimmed = rawText.trim();
  if (trimmed.startsWith("/")) {
    return trimmed.split(/\s+/)[0];
  }
  return "";
}

function detectSubcommand(rawText: string): string | undefined {
  const tokens = rawText.trim().split(/\s+/);
  if (tokens[0]?.startsWith("/") && tokens[1]?.startsWith("/")) {
    return tokens[1];
  }
  return undefined;
}

export function buildSignal(
  rawText: string,
  overrides: Partial<Pick<RequestSignal, "diffLines" | "changedFileCount" | "openFileCount" | "previousBehavior" | "previousWorkflow" | "activePlan" | "forcedBehavior" | "forcedWorkflow">> = {}
): RequestSignal {
  return {
    command: detectIntent(rawText),
    rawText,
    subcommand: detectSubcommand(rawText),
    ...overrides,
  };
}

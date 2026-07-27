import type { Behavior } from "@/behavior/types.js";
import type { RequestSignal } from "@/input/types.js";

export function detectIntent(rawText: string): string {
  const trimmed = rawText.trim();
  if (trimmed.startsWith("/")) {
    return trimmed.split(/\s+/)[0];
  }
  return "";
}

export function detectSubcommand(rawText: string): string | undefined {
  const tokens = rawText.trim().split(/\s+/);
  if (tokens[0]?.startsWith("/") && tokens[1]?.startsWith("/")) {
    return tokens[1];
  }
  return undefined;
}

export function detectQuickKeyword(rawText: string): boolean {
  const keywords = ["quick", "hızlı", "hızlıca", "ufak", "küçük düzeltme"];
  const lower = rawText.toLowerCase();
  return keywords.some((k) => lower.includes(k));
}

export function buildSignal(
  rawText: string,
  overrides: Partial<Pick<RequestSignal, "diffLines" | "changedFileCount" | "openFileCount">> = {},
  previousBehavior: Behavior | null = null
): RequestSignal {
  return {
    command: detectIntent(rawText),
    rawText,
    hasQuickKeyword: detectQuickKeyword(rawText),
    subcommand: detectSubcommand(rawText),
    previousBehavior,
    ...overrides,
  };
}


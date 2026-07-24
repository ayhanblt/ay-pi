/**
 * TEXT CLASSIFIER
 * ---------------
 * Classifies free-form prompt text when no explicit command prefix (like `/code` or `/plan`) is present.
 * Evaluates whether a prompt represents casual conversational chat ("chat") or requires deeper reasoning ("deep").
 *
 * STRATEGY:
 *   1. Keyword Match: Matches against strict dictionaries (`keywords.ts`) for fast, deterministic evaluation.
 *   2. Conservative Fallback: If no keyword matches, yields "uncertain", falling back to default conservative policies.
 *
 * OUTPUT: "chat" | "deep" | "uncertain"
 */

import { CHAT_KEYWORDS, DEEP_THINKING_KEYWORDS } from "./keywords.js";

export type TextCategory = "chat" | "deep" | "uncertain";

export interface ClassificationResult {
  category: TextCategory;
  confidence: number; // 1 = exact keyword match, 0 = no signal detected
  method: "keyword" | "none";
}

/**
 * Checks if a keyword or phrase appears as a distinct word boundary in the target text.
 * Uses Unicode word boundaries (`\p{L}\p{N}`) for single-token keywords to prevent false positive matches.
 */
function containsKeyword(text: string, keyword: string): boolean {
  if (keyword.includes(" ")) {
    return text.includes(keyword); // Multi-word phrase -> substring match
  }
  // Single token -> regex with Unicode word boundaries
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, "u");
  return pattern.test(text);
}

/** Evaluates exact keyword matching against chat and deep thinking keyword dictionaries. */
function matchKeywords(rawText: string): TextCategory | null {
  const lower = rawText.toLowerCase();
  const isChat = CHAT_KEYWORDS.some((k) => containsKeyword(lower, k));
  const isDeep = DEEP_THINKING_KEYWORDS.some((k) => containsKeyword(lower, k));

  // If both match, treat as ambiguous (returns null to fall back to "uncertain")
  if (isChat && !isDeep) return "chat";
  if (isDeep && !isChat) return "deep";
  return null;
}

export function classifyText(rawText: string): ClassificationResult {
  const keywordResult = matchKeywords(rawText);
  if (keywordResult) {
    return { category: keywordResult, confidence: 1, method: "keyword" };
  }
  return { category: "uncertain", confidence: 0, method: "none" };
}


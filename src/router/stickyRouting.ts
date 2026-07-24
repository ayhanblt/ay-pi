/**
 * STICKY ROUTING
 * --------------
 * Re-routes short confirmation responses (e.g., "apply", "go ahead", "uygula")
 * following a `/plan` turn to the `/code` intent.
 *
 * Designed as a pure function operating strictly on string values without Pi SDK dependencies.
 */

const APPLY_KEYWORDS = ["uygula", "apply", "devam et", "kodla", "code it", "go ahead", "implement"];

function containsApplyKeyword(text: string): boolean {
  const lower = text.trim().toLowerCase();
  return APPLY_KEYWORDS.some((k) => {
    if (k.includes(" ")) return lower.includes(k);
    const escaped = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, "u").test(lower);
  });
}

/**
 * Returns `/code` if the current text is un-prefixed (`/chat`), contains an implementation trigger keyword,
 * and the preceding turn's intent was `/plan`. Returns `null` otherwise.
 */
export function detectStickyCodeIntent(
  rawText: string,
  currentIntent: string,
  previousIntent: string | null
): string | null {
  if (currentIntent !== "/chat") return null;
  if (previousIntent !== "/plan") return null;
  if (!containsApplyKeyword(rawText)) return null;
  return "/code";
}


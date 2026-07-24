/**
 * ASSEMBLER
 * ---------
 * Filters and ranks candidate files (`FileCandidate`) against context budget parameters (`ContextBudget`).
 * Prioritizes actively focused files, followed by recently modified files, up to budget limits.
 */

import type { FileCandidate } from "./types.js";
import type { ContextBudget } from "../workflow/types.js";

/**
 * Selects an array of `FileCandidate` objects adhering to `ContextBudget` file count (`maxFiles`)
 * and character ceiling (`maxChars`) limits.
 */
export function selectFiles(
  candidates: FileCandidate[],
  budget: ContextBudget
): FileCandidate[] {
  const sorted = [...candidates].sort((a, b) => {
    if (a.isActive !== b.isActive) return a.isActive ? -1 : 1;
    return b.lastModifiedAt - a.lastModifiedAt;
  });

  const selected: FileCandidate[] = [];
  let usedChars = 0;

  for (const file of sorted) {
    if (selected.length >= budget.maxFiles) break;
    if (usedChars + file.size > budget.maxChars) continue; // Skip file if character limit exceeded
    selected.push(file);
    usedChars += file.size;
  }

  return selected;
}


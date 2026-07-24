/**
 * CONTEXT TYPES
 * -------------
 * Defines file candidate structures evaluated by Context Assembler against
 * context budget thresholds (`ContextBudget`).
 */

export interface FileCandidate {
  path: string;
  size: number;           // Character count (evaluated against maxChars budget)
  isActive: boolean;      // Indicates if file is actively focused in editor session
  lastModifiedAt: number; // Epoch timestamp in ms for recency ordering
}


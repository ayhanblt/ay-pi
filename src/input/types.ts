import type { Behavior } from "@/behavior/types.js";

export interface RequestSignal {
  command: string;
  rawText: string;
  diffLines?: number;
  changedFileCount?: number;
  openFileCount?: number;
  subcommand?: string;
}


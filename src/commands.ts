/**
 * Explicit behavior commands typed at the start of a prompt: `/plan add a cache layer`.
 * They always win and never call a model.
 */

import type { Behavior } from "./profiles.js";

const COMMANDS: Record<string, Behavior> = {
  "/chat": "CHAT",
  "/suggest": "SUGGEST",
  "/review": "REVIEW",
  "/plan": "PLAN",
  "/code": "CODE",
};

export interface ParsedCommand {
  command: string;
  behavior: Behavior;
  /** The prompt without the command. */
  rest: string;
}

export function parseCommand(text: string): ParsedCommand | undefined {
  const match = /^\s*(\/[a-z]+)(?:\s+([\s\S]*))?$/i.exec(text);
  if (!match) return undefined;
  const command = match[1].toLowerCase();
  const behavior = COMMANDS[command];
  if (!behavior) return undefined;
  return { command, behavior, rest: (match[2] ?? "").trim() };
}

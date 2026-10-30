/**
 * Explicit behavior commands: `/plan add a cache layer`.
 * Registered as Pi commands, so they show up in autocomplete. They always win and never call a model.
 */

import type { Behavior } from "./profiles.js";

export const COMMANDS = {
  chat: "CHAT",
  suggest: "SUGGEST",
  review: "REVIEW",
  plan: "PLAN",
  code: "CODE",
} as const satisfies Record<string, Behavior>;

export type CommandName = keyof typeof COMMANDS;

/** From ay-pi.json: a new name, or false to leave the command to another extension. */
export type CommandOverrides = Partial<Record<CommandName, string | false>>;

/** Our commands that Pi renamed (`plan:1`) because another extension registers the same name. */
export function renamedCommands(available: string[], ours: string[]): string[] {
  const renamed = new Set(available.filter((name) => /:\d+$/.test(name)).map((name) => name.replace(/:\d+$/, "")));
  return ours.filter((name) => renamed.has(name));
}

/** The commands to register, as [invocation name, behavior]. */
export function commandNames(overrides: CommandOverrides): [string, Behavior][] {
  return (Object.entries(COMMANDS) as [CommandName, Behavior][]).flatMap(([name, behavior]): [string, Behavior][] => {
    const override = overrides[name];
    if (override === false) return [];
    return [[override ?? name, behavior]];
  });
}

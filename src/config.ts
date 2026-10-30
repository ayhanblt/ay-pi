/**
 * User configuration: which models belong to which tier, and which classifier to use.
 *
 *   <agent-dir>/ay-pi.json   (user, written by /ay-pi add|remove|classifier)
 *   .pi/ay-pi.json           (project, read only when the project is trusted)
 *
 * The project file overrides the user file per key.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { COMMANDS, type CommandOverrides } from "./commands.js";
import { TIERS, type Tier } from "./profiles.js";

// Plain F keys: unbound in Pi and sent the same way by every terminal (Pi reads no modifiers with F keys).
export const SHORTCUTS = { nextMode: "f2", previousMode: "f3" } as const;
export type ShortcutName = keyof typeof SHORTCUTS;
/** A Pi key such as "f3" or "ctrl+shift+m", or false to turn the shortcut off. */
export type ShortcutOverrides = Partial<Record<ShortcutName, string | false>>;

/** "full": route, scope Pi's write tools, add instructions, keep plans. "routing": only pick the tier and model. */
export type Scope = "full" | "routing";

export interface AyPiConfig {
  /** Fallback chains of "provider/model" references, first available wins. */
  tiers: Record<Tier, string[]>;
  /** "auto" (first available Jev-like classifier), "off", or "provider/model". */
  classifier: string;
  scope: Scope;
  /** Rename (`"plan": "ay-plan"`) or turn off (`"plan": false`) a behavior command. */
  commands: CommandOverrides;
  /** Change (`"nextMode": "f3"`) or turn off (`"nextMode": false`) a mode shortcut. */
  shortcuts: ShortcutOverrides;
}

export function defaultConfig(): AyPiConfig {
  return { tiers: { low: [], medium: [], high: [] }, classifier: "auto", scope: "full", commands: {}, shortcuts: {} };
}

/** The shortcuts to register, as [key, name]. */
export function shortcutKeys(overrides: ShortcutOverrides): [string, ShortcutName][] {
  return (Object.keys(SHORTCUTS) as ShortcutName[]).flatMap((name): [string, ShortcutName][] => {
    const key = overrides[name] ?? SHORTCUTS[name];
    return key === false ? [] : [[key, name]];
  });
}

/** What one file may contain: every key, and every tier, is optional. */
export interface ConfigFile {
  tiers?: Partial<Record<Tier, string[]>>;
  classifier?: string;
  scope?: Scope;
  commands?: CommandOverrides;
  shortcuts?: ShortcutOverrides;
}

/** Validates a parsed file. Unknown top-level keys are ignored. */
export function parseConfig(raw: unknown, source: string): ConfigFile {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    throw new Error(`${source}: expected a JSON object`);
  }
  const input = raw as Record<string, unknown>;
  const result: ConfigFile = {};

  if (input.tiers !== undefined) {
    if (typeof input.tiers !== "object" || input.tiers === null) throw new Error(`${source}: "tiers" must be an object`);
    const tiers: Partial<Record<Tier, string[]>> = {};
    for (const [key, value] of Object.entries(input.tiers as Record<string, unknown>)) {
      if (!(TIERS as readonly string[]).includes(key)) throw new Error(`${source}: unknown tier "${key}" (use low, medium, high)`);
      if (!Array.isArray(value) || value.some((ref) => typeof ref !== "string" || !ref.includes("/"))) {
        throw new Error(`${source}: tiers.${key} must be a list of "provider/model" strings`);
      }
      tiers[key as Tier] = value as string[];
    }
    result.tiers = tiers;
  }

  if (input.classifier !== undefined) {
    if (typeof input.classifier !== "string") throw new Error(`${source}: "classifier" must be a string`);
    result.classifier = input.classifier;
  }

  if (input.scope !== undefined) {
    if (input.scope !== "full" && input.scope !== "routing") throw new Error(`${source}: "scope" must be "full" or "routing"`);
    result.scope = input.scope;
  }

  if (input.commands !== undefined) {
    if (typeof input.commands !== "object" || input.commands === null) throw new Error(`${source}: "commands" must be an object`);
    const commands: CommandOverrides = {};
    for (const [key, value] of Object.entries(input.commands as Record<string, unknown>)) {
      if (!(key in COMMANDS)) throw new Error(`${source}: unknown command "${key}" (use ${Object.keys(COMMANDS).join(", ")})`);
      if (value !== false && (typeof value !== "string" || !/^[a-z][a-z0-9-]*$/.test(value))) {
        throw new Error(`${source}: commands.${key} must be false or a command name like "ay-${key}"`);
      }
      commands[key as keyof CommandOverrides] = value;
    }
    result.commands = commands;
  }

  if (input.shortcuts !== undefined) {
    if (typeof input.shortcuts !== "object" || input.shortcuts === null) throw new Error(`${source}: "shortcuts" must be an object`);
    const shortcuts: ShortcutOverrides = {};
    for (const [key, value] of Object.entries(input.shortcuts as Record<string, unknown>)) {
      if (!(key in SHORTCUTS)) throw new Error(`${source}: unknown shortcut "${key}" (use ${Object.keys(SHORTCUTS).join(", ")})`);
      if (value !== false && (typeof value !== "string" || !/^(?:(?:ctrl|shift|alt|super)\+)*[^\s+]+$/.test(value))) {
        throw new Error(`${source}: shortcuts.${key} must be false or a key like "f3" or "ctrl+shift+m"`);
      }
      if (typeof value === "string" && /\+f\d+$/.test(value)) {
        throw new Error(`${source}: shortcuts.${key}: Pi does not read modifiers with F keys, use a plain one like "f4"`);
      }
      shortcuts[key as ShortcutName] = value;
    }
    result.shortcuts = shortcuts;
  }
  return result;
}

function readFile(path: string): ConfigFile {
  if (!existsSync(path)) return {};
  return parseConfig(JSON.parse(readFileSync(path, "utf-8")), path);
}

function merge(config: AyPiConfig, part: ConfigFile): AyPiConfig {
  return {
    tiers: { ...config.tiers, ...part.tiers },
    classifier: part.classifier ?? config.classifier,
    scope: part.scope ?? config.scope,
    commands: { ...config.commands, ...part.commands },
    shortcuts: { ...config.shortcuts, ...part.shortcuts },
  };
}

/** Merges the files in order; later files override earlier ones per tier and per key. */
export function loadConfig(paths: string[]): AyPiConfig {
  return paths.reduce((config, path) => merge(config, readFile(path)), defaultConfig());
}

/** Updates the user file, keeping keys the user wrote by hand. */
export function updateUserConfig(path: string, change: (config: AyPiConfig) => void): AyPiConfig {
  const config = merge(defaultConfig(), readFile(path));
  change(config);
  // Leave the optional keys out while they hold their defaults.
  const { scope, commands, shortcuts, ...rest } = config;
  const file = {
    ...rest,
    ...(scope !== "full" && { scope }),
    ...(Object.keys(commands).length > 0 && { commands }),
    ...(Object.keys(shortcuts).length > 0 && { shortcuts }),
  };
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(file, null, 2)}\n`);
  return config;
}

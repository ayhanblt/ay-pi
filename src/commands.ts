/**
 * Explicit behavior commands: `/plan add a cache layer`.
 * Registered as Pi commands, so they show up in autocomplete. They always win and never call a model.
 */

import type { Behavior } from "./profiles.js";

export const COMMANDS: Record<string, Behavior> = {
  chat: "CHAT",
  suggest: "SUGGEST",
  review: "REVIEW",
  plan: "PLAN",
  code: "CODE",
};

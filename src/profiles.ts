/**
 * Behaviors, tiers and the profile each behavior runs with.
 *
 * A profile says how much capability a request deserves (tier), how hard the
 * model should think, and whether it may change files. It never names a model:
 * the user maps tiers to models in ay-pi.json.
 */

export type Behavior = "CHAT" | "SUGGEST" | "REVIEW" | "PLAN" | "CODE";
export type Tier = "low" | "medium" | "high";
export type ThinkingLevel = "off" | "minimal" | "low" | "medium" | "high" | "xhigh";

export const BEHAVIORS: readonly Behavior[] = ["CHAT", "SUGGEST", "REVIEW", "PLAN", "CODE"];
export const TIERS: readonly Tier[] = ["low", "medium", "high"];

export interface Profile {
  tier: Tier;
  thinking: ThinkingLevel;
  canWrite: boolean;
  instructions: string;
}

export const PROFILES: Record<Behavior, Profile> = {
  CHAT: {
    tier: "low",
    thinking: "low",
    canWrite: false,
    instructions: "Answer the question or explain. Do not modify files.",
  },
  SUGGEST: {
    tier: "medium",
    thinking: "medium",
    canWrite: false,
    instructions:
      "Propose options and explain their trade-offs. Code snippets are allowed as examples, " +
      "but do not modify files.",
  },
  REVIEW: {
    tier: "medium",
    thinking: "medium",
    canWrite: false,
    instructions: "Review the relevant code and report concrete findings, most severe first. Do not modify files.",
  },
  PLAN: {
    tier: "high",
    thinking: "high",
    canWrite: false,
    instructions:
      "Write a step-by-step plan under a `## Plan` heading. Do not write code or modify files. " +
      "End by asking the user to approve the plan (they can reply with /code). " +
      "If the request is unclear, ask a clarifying question instead and do not write the heading.",
  },
  CODE: {
    tier: "medium",
    thinking: "medium",
    canWrite: true,
    instructions: "Implement the requested change. Keep the change focused on the request.",
  },
};

/** Used when nothing tells us what the request is: a capable model that cannot change files. */
export const SAFE_DEFAULT = { behavior: "CHAT", tier: "medium" } as const satisfies { behavior: Behavior; tier: Tier };

/**
 * Pi's built-in tools that can change the workspace. Read-only behaviors block them.
 * Tools from other extensions are theirs to govern: AY-PI is a router, not a sandbox.
 */
export const WRITE_TOOLS: ReadonlySet<string> = new Set(["edit", "write", "bash", "powershell"]);

/** Whether a turn with this behavior blocks the tool. */
export function blocksTool(behavior: Behavior, tool: string): boolean {
  return !PROFILES[behavior].canWrite && WRITE_TOOLS.has(tool);
}

export function shiftTier(tier: Tier, by: number): Tier {
  const index = Math.min(Math.max(TIERS.indexOf(tier) + by, 0), TIERS.length - 1);
  return TIERS[index];
}

export function isTier(value: string): value is Tier {
  return (TIERS as readonly string[]).includes(value);
}

export function isBehavior(value: string): value is Behavior {
  return (BEHAVIORS as readonly string[]).includes(value);
}

/** The next pinned mode for the mode shortcut: auto (undefined), then each behavior, then auto again. */
export function cycleMode(current: Behavior | undefined, step: 1 | -1): Behavior | undefined {
  const modes = [undefined, ...BEHAVIORS];
  return modes[(modes.indexOf(current) + step + modes.length) % modes.length];
}

/**
 * The plan in a PLAN answer: everything from its `## Plan` heading on.
 * Answers without the heading (a clarifying question, say) are not plans.
 */
export function extractPlan(answer: string): string | undefined {
  const start = answer.search(/^##\s+Plan\b/im);
  return start === -1 ? undefined : answer.slice(start).trim();
}

/** The static block appended to the system prompt. Depends only on the behavior, so it stays cache-stable. */
export function behaviorInstructions(behavior: Behavior): string {
  const blocked = PROFILES[behavior].canWrite ? "" : "\nThe edit, write and bash tools are blocked in this turn.";
  return `AY-PI mode: ${behavior}.\n${PROFILES[behavior].instructions}${blocked}`;
}

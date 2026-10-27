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

/** Tools that can change the workspace. Read-only behaviors run without them. */
export const WRITE_TOOLS: ReadonlySet<string> = new Set(["edit", "write", "bash", "powershell"]);

/** Pi's built-in tools that only read. */
export const READ_TOOLS: ReadonlySet<string> = new Set(["read", "grep", "find", "ls"]);

/** What a read-only turn needs to know about a tool (a subset of Pi's ToolInfo). */
export interface ToolTraits {
  annotations?: { readOnlyHint?: boolean };
  reachesTools?: unknown;
}

/**
 * Whether a read-only turn may call this tool. Extension and MCP tools pass only when they
 * declare `readOnlyHint`. Tools that run other tools (codemode, tool_search) pass, because
 * each call they make is checked again. Unknown tools are blocked.
 */
export function readOnlyAllows(name: string, tool: ToolTraits | undefined): boolean {
  if (WRITE_TOOLS.has(name)) return false;
  if (READ_TOOLS.has(name)) return true;
  return tool?.annotations?.readOnlyHint === true || tool?.reachesTools !== undefined;
}

export function shiftTier(tier: Tier, by: number): Tier {
  const index = Math.min(Math.max(TIERS.indexOf(tier) + by, 0), TIERS.length - 1);
  return TIERS[index];
}

export function isTier(value: string): value is Tier {
  return (TIERS as readonly string[]).includes(value);
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
  return `AY-PI mode: ${behavior}.\n${PROFILES[behavior].instructions}`;
}

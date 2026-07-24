/**
 * POLICY LOADER
 * -------------
 * Reads `ay-pi.policy.json`, validates its runtime structure against a Zod schema,
 * and returns a typed `PolicyFile` object ({ settings, routes }).
 */

import { readFileSync } from "node:fs";
import { z } from "zod";
import type { PolicyFile } from "../router/types.js";

const ThinkingLevelSchema = z.enum(["off", "minimal", "low", "medium", "high", "xhigh"]);

const ConstraintSchema = z.enum([
  "code_only",
  "no_comments",
  "no_refactor",
  "no_code_output",
  "scope_limited",
]);

const ToolNameSchema = z.enum(["read", "bash", "edit", "write", "grep", "find", "ls"]);

const ContextBudgetSchema = z.object({
  maxFiles: z.number(),
  maxChars: z.number(),
});

const OutputConstraintSchema = z.object({
  maxTokens: z.number(),
});

const RouteRuleSchema = z.object({
  when: z.record(z.string(), z.string()).optional(),
  provider: z.string(),
  pool: z.array(z.string()).min(1, "Must contain at least one model"),
  allowedTools: z.array(ToolNameSchema).min(1).optional(),
  thinking: ThinkingLevelSchema,
  contextBudget: ContextBudgetSchema,
  constraints: z.array(ConstraintSchema),
  output: OutputConstraintSchema.optional(),
});

const RoutePolicySchema = z.object({
  intent: z.string(),
  rules: z.array(RouteRuleSchema).min(1, "Rules array cannot be empty"),
});

const PolicySettingsSchema = z.object({
  diffLinesEscalationThreshold: z.number().positive(),
  diffLinesEscalationIntents: z.array(z.string()).min(1),
});

const PolicyFileSchema = z.object({
  settings: PolicySettingsSchema,
  routes: z.array(RoutePolicySchema).min(1),
});

export function loadPolicies(filePath: string): PolicyFile {
  const raw = readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(raw);

  const result = PolicyFileSchema.safeParse(parsed);
  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `  - ${issue.path.join(".") || "(root)"}: ${issue.message}`)
      .join("\n");
    throw new Error(`${filePath} is invalid:\n${issues}`);
  }

  return result.data as PolicyFile;
}


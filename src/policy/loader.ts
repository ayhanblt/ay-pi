import { readFileSync } from "node:fs";
import { z } from "zod";
import type { PolicyFile } from "@/policy/types.js";
import { ALL_TOOLS } from "@/workflow/types.js";

const BehaviorSchema = z.enum(["CHAT", "PLAN", "REVIEW", "CODE"]);
const ThinkingLevelSchema = z.enum(["off", "minimal", "low", "medium", "high", "xhigh"]);
const ConstraintSchema = z.enum([
  "code_only",
  "no_comments",
  "no_refactor",
  "no_code_output",
  "scope_limited",
]);
const ToolNameSchema = z.enum(ALL_TOOLS);

const ContextBudgetSchema = z.object({
  maxFiles: z.number(),
  maxChars: z.number(),
});

const OutputConstraintSchema = z.object({
  maxTokens: z.number(),
});

const PolicyEntrySchema = z.object({
  behavior: BehaviorSchema,
  workflow: z.string().min(1),
  provider: z.string(),
  pool: z.array(z.string()).min(1),
  thinking: ThinkingLevelSchema,
  contextBudget: ContextBudgetSchema,
  constraints: z.array(ConstraintSchema),
  output: OutputConstraintSchema.optional(),
  allowedTools: z.array(ToolNameSchema).min(1).optional(),
});

const PolicySettingsSchema = z.object({
  diffLinesEscalationThreshold: z.number().positive(),
  diffLinesEscalationBehaviors: z.array(BehaviorSchema).min(1),
});

const PolicyFileSchema = z.object({
  settings: PolicySettingsSchema,
  policies: z.array(PolicyEntrySchema).min(1),
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

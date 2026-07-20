/**
 * POLICY.LOADER.TS
 * -----------------
 * ay-pi.policy.json dosyasını okur, Zod şeması ile doğrular ve tipli bir
 * PolicyFile ({ settings, routes }) döndürür.
 *
 * Neden önemli: policy dosyası elle düzenlenen bir JSON. Yazım hatası
 * (örn. "thinking": "medyum") uygulama ÇALIŞIRKEN değil, BAŞLARKEN
 * patlamalı -- deterministic bir sistemde sürpriz istemeyiz.
 *
 * Önceki sürümde bu dosya ~90 satırlık elle yazılmış if/throw kontrolleri
 * içeriyordu. Zod'a geçilerek şema TEK bir yerde, deklaratif olarak
 * tanımlanıyor -- hem daha az kod hem de daha iyi hata mesajları (Zod,
 * hangi alanda ne tür bir hata olduğunu path bilgisiyle veriyor).
 *
 * DİKKAT: Buradaki şema, router/types.ts'teki TypeScript interface'lerinin
 * (RouteRule, PolicyFile vb.) bir AYNASI -- onları DEĞİŞTİRMİYOR, sadece
 * runtime'da aynı şekli doğruluyor. İkisini senkron tutmak elle yapılan
 * bir iş; router/types.ts'e yeni bir alan eklersen buradaki şemayı da
 * güncellemen gerekir.
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
  pool: z.array(z.string()).min(1, "en az bir model içermeli"),
  allowedTools: z.array(ToolNameSchema).min(1).optional(),
  thinking: ThinkingLevelSchema,
  contextBudget: ContextBudgetSchema,
  constraints: z.array(ConstraintSchema),
  output: OutputConstraintSchema.optional(),
});

const RoutePolicySchema = z.object({
  intent: z.string(),
  rules: z.array(RouteRuleSchema).min(1, "boş olamaz"),
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
      .map((issue) => `  - ${issue.path.join(".") || "(kök)"}: ${issue.message}`)
      .join("\n");
    throw new Error(`${filePath} geçersiz:\n${issues}`);
  }

  return result.data as PolicyFile;
}

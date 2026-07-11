/**
 * POLICY.LOADER.TS
 * -----------------
 * ay-pi.policy.json dosyasını okur, temel bir şekil kontrolü yapar
 * ve tipli bir PolicyFile ({ settings, routes }) döndürür.
 *
 * Neden önemli: policy dosyası elle düzenlenen bir JSON. Yazım hatası
 * (örn. "thinking": "medyum") uygulama ÇALIŞIRKEN değil, BAŞLARKEN
 * patlamalı -- deterministic bir sistemde sürpriz istemeyiz.
 *
 * Not: Bu versiyon elle yazılmış basit kontroller kullanıyor. İleride
 * Zod gibi bir şema kütüphanesi eklemek (npm install zod) bu kontrolleri
 * tek bir şema tanımına indirger -- ama mantık aynı kalır.
 */

import { readFileSync } from "node:fs";
import type { PolicyFile, RouteRule } from "../router/types.js";

// Pi'nin gerçek thinking level API'siyle birebir aynı (bkz. workflow/types.ts)
const VALID_THINKING = new Set(["off", "minimal", "low", "medium", "high", "xhigh"]);
const VALID_CONSTRAINTS = new Set([
  "code_only",
  "no_comments",
  "no_refactor",
  "no_code_output",
  "scope_limited",
]);

// Pi'nin gerçek yerleşik araç isimleriyle birebir aynı (bkz. workflow/types.ts -> ALL_TOOLS)
const VALID_TOOLS = new Set(["read", "bash", "edit", "write", "grep", "find", "ls"]);

function assertRule(rule: unknown, path: string): asserts rule is RouteRule {
  if (typeof rule !== "object" || rule === null) {
    throw new Error(`${path}: kural bir obje olmalı`);
  }
  const r = rule as Record<string, unknown>;

  if (typeof r.provider !== "string") throw new Error(`${path}.provider eksik/hatalı`);

  if (!Array.isArray(r.pool) || r.pool.length === 0) {
    throw new Error(`${path}.pool boş olamaz, en az bir model içermeli`);
  }
  for (const m of r.pool as unknown[]) {
    if (typeof m !== "string") throw new Error(`${path}.pool içinde geçersiz değer: ${m}`);
  }

  if (!VALID_THINKING.has(r.thinking as string)) {
    throw new Error(
      `${path}.thinking geçersiz: "${r.thinking}". Geçerli değerler: ${[...VALID_THINKING].join(", ")}`
    );
  }
  if (
    typeof r.contextBudget !== "object" ||
    r.contextBudget === null ||
    typeof (r.contextBudget as any).maxFiles !== "number" ||
    typeof (r.contextBudget as any).maxChars !== "number"
  ) {
    throw new Error(`${path}.contextBudget eksik/hatalı`);
  }
  if (!Array.isArray(r.constraints)) {
    throw new Error(`${path}.constraints bir dizi olmalı`);
  }
  for (const c of r.constraints as unknown[]) {
    if (!VALID_CONSTRAINTS.has(c as string)) {
      throw new Error(`${path}.constraints içinde geçersiz değer: ${c}`);
    }

    // allowedTools OPSİYONEL -- belirtilmezse route() varsayılan olarak
    // ALL_TOOLS (kısıtlama yok) kullanır. Belirtildiyse her elemanın
    // gerçek bir Pi aracı olduğunu doğrula.
    if (r.allowedTools !== undefined) {
      if (!Array.isArray(r.allowedTools) || r.allowedTools.length === 0) {
        throw new Error(`${path}.allowedTools tanımlıysa boş olmayan bir dizi olmalı`);
      }
      for (const t of r.allowedTools as unknown[]) {
        if (!VALID_TOOLS.has(t as string)) {
          throw new Error(`${path}.allowedTools içinde geçersiz araç adı: ${t}`);
        }
      }
    }
  }
}

export function loadPolicies(filePath: string): PolicyFile {
  const raw = readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(raw);

  if (
    typeof parsed.settings !== "object" ||
    parsed.settings === null ||
    typeof parsed.settings.diffLinesEscalationThreshold !== "number" ||
    parsed.settings.diffLinesEscalationThreshold <= 0
  ) {
    throw new Error(
      `${filePath}: kök seviyede "settings.diffLinesEscalationThreshold" ` +
      `(pozitif bir sayı) bekleniyor`
    );
  }

  if (!Array.isArray(parsed.routes)) {
    throw new Error(`${filePath}: kök seviyede "routes" dizisi bekleniyor`);
  }

  parsed.routes.forEach((policy: any, i: number) => {
    if (typeof policy.intent !== "string") {
      throw new Error(`routes[${i}].intent eksik/hatalı`);
    }
    if (!Array.isArray(policy.rules) || policy.rules.length === 0) {
      throw new Error(`routes[${i}].rules boş olamaz`);
    }
    policy.rules.forEach((rule: unknown, j: number) =>
      assertRule(rule, `routes[${i}].rules[${j}]`)
    );
  });

  return {
    settings: parsed.settings,
    routes: parsed.routes,
  } as PolicyFile;
}

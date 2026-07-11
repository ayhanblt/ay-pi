/**
 * RULES.TS
 * ---------
 * Bu dosyada TEK sorumluluk var: bir RouteRule'un "when" koşulunu,
 * elimizdeki RequestSignal'e göre true/false olarak değerlendirmek.
 *
 * Burası pipeline'ın "CPU-first, deterministic" prensibini somutlaştıran
 * yerdir: hiçbir network çağrısı, hiçbir LLM isteği yok. Sadece sayısal
 * karşılaştırma. Bu yüzden test yazması da çok kolay (girdi -> beklenen
 * çıktı, hep aynı sonucu verir).
 */

import type { RequestSignal, RouteRule } from "./types.js";

/**
 * "<10", ">=5", "==0" gibi basit bir ifadeyi, elimizdeki sayısal
 * değere uygulayıp true/false döndürür.
 *
 * value: signal[alanAdı] -- örn. signal.diffLines
 * expr:  policy dosyasındaki string ifade -- örn. "<10"
 */
export function evalNumericExpr(value: number | undefined, expr: string): boolean {
  if (value === undefined) return false;

  const match = expr.match(/^(<=|>=|<|>|==)(\d+)$/);
  if (!match) {
    throw new Error(`Geçersiz koşul ifadesi: "${expr}"`);
  }
  const [, operator, numberText] = match;
  const threshold = Number(numberText);

  switch (operator) {
    case "<": return value < threshold;
    case "<=": return value <= threshold;
    case ">": return value > threshold;
    case ">=": return value >= threshold;
    case "==": return value === threshold;
    default: return false;
  }
}

/**
 * Boolean tipli alanlar için (örn. hasQuickKeyword) basit eşitlik kontrolü.
 * Policy dosyasında "true" / "false" string olarak yazılır.
 */
export function evalBooleanExpr(value: boolean | undefined, expr: string): boolean {
  if (value === undefined) return false;
  return String(value) === expr;
}

/**
 * String tipli alanlar için (örn. textCategory) eşitlik kontrolü.
 * Policy dosyasında "==deep" gibi yazılır.
 */
export function evalStringExpr(value: string | undefined, expr: string): boolean {
  if (value === undefined) return false;
  const match = expr.match(/^==(.+)$/);
  if (!match) {
    throw new Error(`Geçersiz string koşul ifadesi: "${expr}" (beklenen format: "==deger")`);
  }
  return value === match[1];
}

/**
 * Bir RequestSignal, bir RouteRule'un "when" bloğundaki TÜM koşulları
 * sağlıyor mu? (AND mantığı -- hepsi doğru olmalı)
 */
export function matchesWhen(signal: RequestSignal, rule: RouteRule): boolean {
  if (!rule.when) return true; // koşulsuz kural = her zaman eşleşir

  return Object.entries(rule.when).every(([key, expr]) => {
    const fieldValue = signal[key as keyof RequestSignal];
    if (typeof fieldValue === "boolean") {
      return evalBooleanExpr(fieldValue, expr as string);
    }
    if (typeof fieldValue === "string") {
      return evalStringExpr(fieldValue, expr as string);
    }
    return evalNumericExpr(fieldValue as number | undefined, expr as string);
  });
}

/**
 * Bir kural listesinde, sinyale uyan İLK kuralı bulur.
 * Kurallar sırayla denenir -- policy dosyasındaki sıralama önemlidir,
 * en spesifik kuralları üste, genel/varsayılan kuralı en alta koy.
 */
export function findMatchingRule(signal: RequestSignal, rules: RouteRule[]): RouteRule {
  const found = rules.find((rule) => matchesWhen(signal, rule));
  if (!found) {
    throw new Error(
      `Hiçbir kural eşleşmedi. Signal: ${JSON.stringify(signal)}. ` +
      `Policy dosyana koşulsuz bir fallback kural eklemeyi unutma.`
    );
  }
  return found;
}

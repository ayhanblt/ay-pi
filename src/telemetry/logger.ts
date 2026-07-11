/**
 * TELEMETRY / LOGGER
 * ===================
 * Bu modül pipeline'da bir "adım" DEĞİLDİR -- bir yan etkidir (side effect).
 * Router karar verdikten sonra, "bu karar neydi, hangi kural tetiklendi,
 * hangi model seçildi" bilgisini bir JSONL dosyasına append eder.
 *
 * Faz 1'de genişletildi: artık gerçek bir API çağrısı yapıldıysa
 * (--execute bayrağıyla), o çağrının sonucunu (başarılı mı, kaç token,
 * ne kadar sürdü) da AYNI satıra, opsiyonel bir alan olarak ekliyoruz.
 * execution alanı yoksa, o kayıt "sadece karar verildi, gerçek çağrı
 * yapılmadı" anlamına gelir.
 *
 * Neden ayrı ve neden "adım" değil: Telemetry, pipeline'ın çıktısını
 * ETKİLEMEZ. route() fonksiyonu telemetry'den habersiz çalışır; sen
 * onun DÖNÜŞ DEĞERİNİ alıp logDecision()'a ayrıca verirsin.
 */

import { appendFileSync } from "node:fs";
import type { WorkflowObject } from "../workflow/types.js";
import type { RequestSignal } from "../router/types.js";
import type { ExecutionResult } from "./types.js";

export interface TelemetryEntry {
  timestamp: string;
  signal: RequestSignal;
  workflow: WorkflowObject;
  execution?: ExecutionResult;
}

const LOG_PATH = new URL("../../ay-pi.telemetry.jsonl", import.meta.url).pathname;

/**
 * Tek bir router kararını (ve varsa gerçek API çağrısının sonucunu),
 * tek satırlık JSON olarak dosyaya ekler (append).
 */
export function logDecision(
  signal: RequestSignal,
  workflow: WorkflowObject,
  execution?: ExecutionResult
): void {
  const entry: TelemetryEntry = {
    timestamp: new Date().toISOString(),
    signal,
    workflow,
    execution,
  };
  appendFileSync(LOG_PATH, JSON.stringify(entry) + "\n", "utf-8");
}

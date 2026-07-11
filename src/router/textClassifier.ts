/**
 * TEXT-CLASSIFIER.TS
 * --------------------
 * Bu dosya, "kullanıcı ne yazdıysa yazsın, /code veya /plan gibi açık bir
 * komut olmadan bile mesajın 'basit sohbet' mi yoksa 'derin düşünme
 * gerektiren soru' mu olduğuna nasıl karar veririz" sorusunun cevabıdır.
 *
 * HİBRİT STRATEJİ (senin önerdiğin karma sistem):
 *
 *   Katman 1 (keyword eşleşmesi, keywords.ts)
 *     -> Kesin bir kelime bulunduysa HEMEN karar ver, bag-of-words'e
 *        hiç gerek yok. Hızlı ve %100 açıklanabilir.
 *
 *   Katman 2 (bag-of-words / Naive Bayes, bow-weights.json)
 *     -> Kesin kelime yoksa, istatistiksel skor hesapla. Hâlâ CPU-only,
 *        hâlâ LLM'e hiç gitmiyor -- sadece önceden hesaplanmış bir
 *        ağırlık tablosunda toplama/çıkarma yapıyoruz.
 *
 *   Katman 4 (belirsizlikte ucuza düş)
 *     -> Skor sıfıra çok yakınsa (chat mi deep mi net değilse), bunu
 *        "bilgi yok" say ve güvenli/ucuz tarafa (chat/small-fast-model)
 *        düş -- tıpkı diffLines: undefined durumunda yaptığımız gibi.
 *
 * ÇIKTI: "chat" | "deep" | "uncertain" -- Router bunu RequestSignal'in
 * bir alanı olarak taşır, policy dosyasındaki /chat kuralları bu alana
 * bakarak model seçer.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { CHAT_KEYWORDS, DEEP_THINKING_KEYWORDS } from "./keywords.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WEIGHTS_PATH = join(__dirname, "../../data/bow-weights.json");

export type TextCategory = "chat" | "deep" | "uncertain";

export interface ClassificationResult {
  category: TextCategory;
  confidence: number; // debug/telemetry için: skor ne kadar net
  method: "keyword" | "bag-of-words"; // hangi katman karar verdi
}

interface BowModel {
  priorLogOdds: number;
  wordLogOdds: Record<string, number>;
}

// Modeli process başına bir kez yükle (her mesajda dosya okumayalım).
let cachedModel: BowModel | null = null;
function loadModel(): BowModel {
  if (!cachedModel) {
    cachedModel = JSON.parse(readFileSync(WEIGHTS_PATH, "utf-8"));
  }
  return cachedModel!;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length > 0);
}

/**
 * Bir anahtar kelime/öbeğin, metinde GERÇEKTEN bir kelime olarak
 * (başka bir kelimenin parçası değil) geçip geçmediğini kontrol eder.
 *
 * NEDEN GEREKLİ: saf `text.includes("hi")` kullanılsaydı, "hissediyorum"
 * kelimesinin içindeki "hi" harfleri yanlışlıkla eşleşirdi ("h-i-ssediyorum").
 * Kısa kelimeler (hi, vs, ne, iyi gibi) bu tuzağa özellikle açık. Bu yüzden
 * tek kelimelik anahtarlar için kelime sınırı (\b) şart; birden fazla
 * kelimeden oluşan öbekler (örn. "iyi akşamlar") zaten bu riske çok daha az
 * açık olduğundan onlarda basit substring yeterli.
 */
function containsKeyword(text: string, keyword: string): boolean {
  if (keyword.includes(" ")) {
    return text.includes(keyword); // çok kelimeli öbek -> substring yeterli
  }
  // Tek kelime -> kelime sınırı ile ara (Unicode harf sınırı, Türkçe karakterler dahil)
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, "u");
  return pattern.test(text);
}

/** Katman 1: kesin kelime eşleşmesi var mı? */
function matchKeywords(rawText: string): TextCategory | null {
  const lower = rawText.toLowerCase();
  const isChat = CHAT_KEYWORDS.some((k) => containsKeyword(lower, k));
  const isDeep = DEEP_THINKING_KEYWORDS.some((k) => containsKeyword(lower, k));

  // İkisi de eşleşirse (örn. "selam, mimari bir sorum var") kesin katman
  // karar veremez -- bag-of-words'e devret, o daha nüanslı skorlayacak.
  if (isChat && !isDeep) return "chat";
  if (isDeep && !isChat) return "deep";
  return null;
}

/** Katman 2: bag-of-words skorlaması (Naive Bayes log-odds toplamı). */
function scoreWithBagOfWords(rawText: string): { logOdds: number } {
  const model = loadModel();
  const tokens = tokenize(rawText);

  let logOdds = model.priorLogOdds;
  for (const token of tokens) {
    logOdds += model.wordLogOdds[token] ?? 0; // bilinmeyen kelime = etkisiz (0)
  }
  return { logOdds };
}

// logOdds bu eşiğin altında/üstündeyse "net" sayılır. Aradaki bölge
// (-UNCERTAINTY_MARGIN, +UNCERTAINTY_MARGIN) "uncertain" kabul edilir.
const UNCERTAINTY_MARGIN = 0.5;

export function classifyText(rawText: string): ClassificationResult {
  const keywordResult = matchKeywords(rawText);
  if (keywordResult) {
    return { category: keywordResult, confidence: 1, method: "keyword" };
  }

  const { logOdds } = scoreWithBagOfWords(rawText);

  if (Math.abs(logOdds) < UNCERTAINTY_MARGIN) {
    return { category: "uncertain", confidence: Math.abs(logOdds), method: "bag-of-words" };
  }
  return {
    category: logOdds > 0 ? "chat" : "deep",
    confidence: Math.abs(logOdds),
    method: "bag-of-words",
  };
}

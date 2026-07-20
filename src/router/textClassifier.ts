/**
 * TEXT-CLASSIFIER.TS
 * --------------------
 * Bu dosya, "kullanıcı ne yazdıysa yazsın, /code veya /plan gibi açık bir
 * komut olmadan bile mesajın 'basit sohbet' mi yoksa 'derin düşünme
 * gerektiren soru' mu olduğuna nasıl karar veririz" sorusunun cevabıdır.
 *
 * SADELEŞTİRİLMİŞ STRATEJİ (bag-of-words katmanı KALDIRILDI):
 *
 *   Katman 1 (keyword eşleşmesi, keywords.ts)
 *     -> Kesin bir kelime bulunduysa HEMEN karar ver. Hızlı, %100
 *        açıklanabilir, hâlâ tamamen CPU'da.
 *
 *   Katman 2 (belirsizlikte ucuza düş)
 *     -> Kesin kelime yoksa "bilgi yok" say ve güvenli/ucuz tarafa
 *        düş -- tıpkı diffLines: undefined durumunda yaptığımız gibi.
 *        Eskiden burada bir Naive Bayes / bag-of-words katmanı vardı
 *        (eğitim verisi, ağırlık dosyası, log-odds hesaplama); pratikte
 *        getirdiği isabet artışı, getirdiği bakım yüküne (ayrı eğitim
 *        script'i, ağırlık dosyası, iki katmanlı mantık) değmediği için
 *        kaldırıldı. Basit keyword + güvenli fallback, kişisel kullanım
 *        için yeterli.
 *
 * ÇIKTI: "chat" | "deep" | "uncertain" -- Router bunu RequestSignal'in
 * bir alanı olarak taşır, policy dosyasındaki /chat kuralları bu alana
 * bakarak model seçer.
 */

import { CHAT_KEYWORDS, DEEP_THINKING_KEYWORDS } from "./keywords.js";

export type TextCategory = "chat" | "deep" | "uncertain";

export interface ClassificationResult {
  category: TextCategory;
  confidence: number; // 1 = kesin keyword eşleşmesi, 0 = hiçbir sinyal yok
  method: "keyword" | "none";
}

/**
 * Bir anahtar kelime/öbeğin, metinde GERÇEKTEN bir kelime olarak
 * (başka bir kelimenin parçası değil) geçip geçmediğini kontrol eder.
 *
 * NEDEN GEREKLİ: saf `text.includes("hi")` kullanılsaydı, "hissediyorum"
 * kelimesinin içindeki "hi" harfleri yanlışlıkla eşleşirdi ("h-i-ssediyorum").
 * Kısa kelimeler (hi, vs, ne, iyi gibi) bu tuzağa özellikle açık. Bu yüzden
 * tek kelimelik anahtarlar için kelime sınırı (\\b) şart; birden fazla
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
  // karar veremez -- belirsiz say, ucuza düş.
  if (isChat && !isDeep) return "chat";
  if (isDeep && !isChat) return "deep";
  return null;
}

export function classifyText(rawText: string): ClassificationResult {
  const keywordResult = matchKeywords(rawText);
  if (keywordResult) {
    return { category: keywordResult, confidence: 1, method: "keyword" };
  }
  return { category: "uncertain", confidence: 0, method: "none" };
}

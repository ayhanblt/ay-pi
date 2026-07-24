/**
 * KEYWORDS — Deterministic Keyword Dictionary for Free-Text Classification
 * ------------------------------------------------------------------------
 * If a message matches a keyword defined here, a classification decision ("chat" or "deep")
 * is made immediately. Messages without matches evaluate to "uncertain" and default to
 * conservative budget policies (see `textClassifier.ts`).
 */

export const CHAT_KEYWORDS = [
  // Greetings / courtesies (Turkish & English)
  "selam", "merhaba", "naber", "nasılsın", "günaydın", "iyi akşamlar",
  "iyi geceler", "hoşça kal", "görüşürüz", "teşekkür", "teşekkürler",
  "sağol", "sağ ol", "rica ederim", "kolay gelsin",
  "hi", "hello", "hey", "how are you", "good morning", "good night",
  "thanks", "thank you", "bye", "goodbye",
  // Casual conversational phrases
  "ne haber", "nasıl gidiyor", "iyiyim", "iyilik",
];

export const DEEP_THINKING_KEYWORDS = [
  // Architecture / System Design
  "mimari", "mimarisi", "tasarım", "tasarla", "architecture", "design",
  "yapı taşı", "sistem tasarımı",
  // Evaluation / Trade-offs / Comparison
  "trade-off", "tradeoff", "karşılaştır", "kıyasla", "hangisi daha iyi",
  "artı eksi", "avantaj dezavantaj", "compare", "vs", "yerine",
  // In-depth Analysis / Causality
  "neden", "niçin", "niye", "nasıl çalışıyor", "nasıl çalışır",
  "altında ne var", "iç mekanizma", "why", "how does", "explain",
  // Strategy / Best Practices
  "strateji", "yaklaşım", "alternatif", "öneri", "önerir misin",
  "hangi yöntem", "en iyi pratik", "best practice", "yol haritası",
  "roadmap", "ölçeklenebilir", "scalability", "performans etkisi",
];


/**
 * KEYWORDS.TS — Katman 1: Kesin eşleşme (tek sınıflandırma katmanı)
 * -----------------------------------------------------------------
 * Buradaki kelimelerden biri mesajda geçiyorsa, sınıflandırma kararı
 * HEMEN verilir. Eşleşme yoksa "uncertain" (belirsiz) sayılır ve ucuz
 * tarafa düşülür -- bkz. textClassifier.ts. Bu liste "kesin sinyal"
 * niteliğinde kelimeler içermeli; belirsiz/çok anlamlı kelimeleri buraya
 * eklemekten kaçın (yanlış eşleşme riski, bkz. containsKeyword()'daki
 * kelime sınırı notu).
 */

export const CHAT_KEYWORDS = [
  // selamlaşma / nezaket
  "selam", "merhaba", "naber", "nasılsın", "günaydın", "iyi akşamlar",
  "iyi geceler", "hoşça kal", "görüşürüz", "teşekkür", "teşekkürler",
  "sağol", "sağ ol", "rica ederim", "kolay gelsin",
  // İngilizce karşılıkları
  "hi", "hello", "hey", "how are you", "good morning", "good night",
  "thanks", "thank you", "bye", "goodbye",
  // küçük sohbet / durum bildirme
  "ne haber", "nasıl gidiyor", "iyiyim", "iyilik",
];

export const DEEP_THINKING_KEYWORDS = [
  // mimari / tasarım
  "mimari", "mimarisi", "tasarım", "tasarla", "architecture", "design",
  "yapı taşı", "sistem tasarımı",
  // karşılaştırma / karar
  "trade-off", "tradeoff", "karşılaştır", "kıyasla", "hangisi daha iyi",
  "artı eksi", "avantaj dezavantaj", "compare", "vs", "yerine",
  // neden-sonuç / derinlik
  "neden", "niçin", "niye", "nasıl çalışıyor", "nasıl çalışır",
  "altında ne var", "iç mekanizma", "why", "how does", "explain",
  // strateji / planlama
  "strateji", "yaklaşım", "alternatif", "öneri", "önerir misin",
  "hangi yöntem", "en iyi pratik", "best practice", "yol haritası",
  "roadmap", "ölçeklenebilir", "scalability", "performans etkisi",
];

/**
 * KEYWORDS.TS — Katman 1: Kesin eşleşme (en hızlı, en güvenilir katman)
 * -----------------------------------------------------------------
 * Buradaki kelimelerden biri mesajda geçiyorsa, sınıflandırma kararı
 * HEMEN verilir -- bag-of-words'e (Katman 2) hiç gerek kalmaz. Bu liste
 * "kesin sinyal" niteliğinde kelimeler içermeli; belirsiz/çok anlamlı
 * kelimeleri buraya EKLEME, onlar bag-of-words'e bırakılır.
 *
 * Neden ayrı bir katman: bag-of-words istatistiksel bir tahmin yürütür,
 * ama "selam" gibi %100 kesin bir kelime için istatistiğe gerek yok --
 * gereksiz hesaplama + potansiyel yanlış sınıflandırma riski. Kesin
 * olduğun yerde kesin ol, belirsiz olduğun yerde istatistiğe geç.
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

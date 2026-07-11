/**
 * TRAIN-BOW.TS — OFFLINE script. Runtime'ın parçası DEĞİLDİR.
 * ------------------------------------------------------------
 * Çalıştırma: npx tsx scripts/train-bow.ts
 *
 * Ne yapar: data/bow-training.json'daki örnekleri okur, basit bir
 * Naive Bayes (kelime çantası / bag-of-words) modeli eğitir ve
 * sonucu data/bow-weights.json'a yazar.
 *
 * Runtime (src/router/textClassifier.ts) SADECE bow-weights.json'ı
 * okur, hiçbir eğitim/hesaplama yapmaz -- bu ayrım önemli çünkü
 * "eğitim" (biraz CPU/IO ağır olabilir, dosyaya yazma vs.) ile
 * "tahmin" (her mesajda çalışan, milisaniyeler süren okuma) birbirine
 * karışmasın istiyoruz.
 *
 * Eğitim verisine yeni örnek eklediğinde bu scripti TEKRAR çalıştır --
 * runtime kodunda hiçbir değişiklik yapmana gerek yok.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TRAINING_PATH = join(__dirname, "../data/bow-training.json");
const OUTPUT_PATH = join(__dirname, "../data/bow-weights.json");

type Label = "chat" | "deep";

interface TrainingExample {
  text: string;
  label: Label;
}

/** Basit tokenizasyon: küçük harfe çevir, noktalamayı at, boşluğa göre böl. */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length > 0);
}

function train() {
  const raw = JSON.parse(readFileSync(TRAINING_PATH, "utf-8"));
  const examples: TrainingExample[] = raw.examples;

  const wordCounts: Record<Label, Record<string, number>> = { chat: {}, deep: {} };
  const totalWords: Record<Label, number> = { chat: 0, deep: 0 };
  const docCounts: Record<Label, number> = { chat: 0, deep: 0 };
  const vocabulary = new Set<string>();

  for (const ex of examples) {
    docCounts[ex.label]++;
    for (const token of tokenize(ex.text)) {
      vocabulary.add(token);
      wordCounts[ex.label][token] = (wordCounts[ex.label][token] ?? 0) + 1;
      totalWords[ex.label]++;
    }
  }

  const vocabSize = vocabulary.size;
  const ALPHA = 1; // Laplace smoothing -- hiç görülmemiş kelime için 0 olasılık vermemek için

  // Her kelime için log(P(kelime|chat)) - log(P(kelime|deep)) farkını sakla.
  // Runtime'da bir mesajın kelimelerinin bu farkları toplanır: toplam > 0 ise
  // "chat"e, < 0 ise "deep"e daha yakın demektir.
  const logOddsPerWord: Record<string, number> = {};
  for (const word of vocabulary) {
    const pChat = ((wordCounts.chat[word] ?? 0) + ALPHA) / (totalWords.chat + ALPHA * vocabSize);
    const pDeep = ((wordCounts.deep[word] ?? 0) + ALPHA) / (totalWords.deep + ALPHA * vocabSize);
    logOddsPerWord[word] = Math.log(pChat) - Math.log(pDeep);
  }

  const priorLogOdds = Math.log(docCounts.chat / examples.length) - Math.log(docCounts.deep / examples.length);

  const output = {
    _comment:
      "Otomatik üretildi (scripts/train-bow.ts). Elle düzenleme -- yeni örnek eklemek " +
      "istersen data/bow-training.json'ı güncelleyip scripti tekrar çalıştır.",
    priorLogOdds,
    wordLogOdds: logOddsPerWord,
    trainedOn: { chatExamples: docCounts.chat, deepExamples: docCounts.deep, vocabularySize: vocabSize },
  };

  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf-8");
  console.log(`Model eğitildi: ${vocabSize} kelime, ${examples.length} örnek -> ${OUTPUT_PATH}`);
}

train();

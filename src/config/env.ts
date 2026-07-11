/**
 * ENV.TS
 * -------
 * Küçük, bağımlılıksız bir .env yükleyici. `dotenv` paketi kurmak yerine
 * (CPU-first felsefesiyle uyumlu, tek satırlık ihtiyaç için gereksiz bir
 * bağımlılık eklememek adına) burada minimal bir versiyonunu yazıyoruz.
 *
 * .env formatı desteklenen: KEY=VALUE, boş satırlar, "#" ile başlayan
 * yorum satırları. Zaten process.env'de tanımlı bir değişkeni EZMEZ --
 * yani gerçek ortam değişkenleri her zaman .env dosyasından önceliklidir.
 */

import { existsSync, readFileSync } from "node:fs";

export function loadEnvFile(path: string = ".env"): void {
  if (!existsSync(path)) return;

  const content = readFileSync(path, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;

    const key = trimmed.slice(0, eqIndex).trim();
    let value = trimmed.slice(eqIndex + 1).trim();
    // Tırnak içindeyse tırnakları soy
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

/**
 * GIT-CONTEXT.TS
 * ---------------
 * Faz 0'da cli.ts içinde sahte (hardcoded) bir dosya listesi kullanıyorduk.
 * Bu dosya onun yerini alıyor: gerçek `git diff` çıktısından değişen
 * dosyaları bulur, gerçek dosya sistemine bakıp boyut/değişim zamanı
 * bilgisini toplar (selectFiles() için), ve seçilen dosyaların gerçek
 * içeriğini okur (buildPrompt() için).
 *
 * Üç ayrı fonksiyona bölünmüş olmasının nedeni: dosya İÇERİĞİNİ SADECE
 * Context Assembler'ın SEÇTİĞİ dosyalar için okumak istiyoruz -- değişen
 * her dosyanın tam içeriğini önceden okumak gereksiz IO ve bellek
 * kullanımı olurdu.
 */

import { execSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import type { FileCandidate } from "./types.js";
import type { AssembledFile } from "../prompt/builder.js";

/**
 * `git diff --name-only` ile şu an değişmiş (henüz commit edilmemiş)
 * dosyaların yollarını döndürür. git deposu yoksa / komut başarısız
 * olursa BOŞ DİZİ döner -- hata fırlatmaz, çünkü "git yok" durumu
 * geçerli bir senaryo (örn. henüz init edilmemiş bir klasör).
 */
export function getChangedFilePaths(cwd: string = process.cwd()): string[] {
  try {
    const output = execSync("git diff --name-only", {
      cwd,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!output) return [];
    return output.split("\n").filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * Dosya yollarından FileCandidate[] üretir -- gerçek boyut ve değişim
 * zamanı bilgisiyle (fs.statSync). Okunamayan (silinmiş, izin sorunu
 * olan) dosyaları SESSİZCE atlar -- bir dosyanın stat'ı başarısız oldu
 * diye tüm context toplama sürecini durdurmak istemiyoruz.
 *
 * isActive her zaman false: CLI'da "editörde açık dosya" kavramı yok.
 * Faz 2'de Pi adaptörü bu alanı gerçek session bilgisinden dolduracak.
 */
export function buildFileCandidates(
  paths: string[],
  cwd: string = process.cwd()
): FileCandidate[] {
  const candidates: FileCandidate[] = [];
  for (const relativePath of paths) {
    try {
      const fullPath = join(cwd, relativePath);
      const stat = statSync(fullPath);
      candidates.push({
        path: relativePath,
        size: stat.size,
        isActive: false,
        lastModifiedAt: stat.mtimeMs,
      });
    } catch {
      // Dosya silinmiş/erişilemez olabilir (örn. git diff'te "deleted" olarak
      // görünen bir dosya artık diskte yok) -- atla, devam et.
    }
  }
  return candidates;
}

/**
 * selectFiles()'ın SEÇTİĞİ (bütçeye sığan) dosyaların gerçek içeriğini
 * okur. Okunamayan bir dosya olursa, o dosyayı atlar (hata fırlatmaz) --
 * ama bunu görünür kılmak için içerik yerine bir uyarı metni koyar,
 * sessizce yok saymak yerine.
 */
export function loadFileContents(
  files: FileCandidate[],
  cwd: string = process.cwd()
): AssembledFile[] {
  return files.map((file) => {
    try {
      const content = readFileSync(join(cwd, file.path), "utf-8");
      return { path: file.path, content };
    } catch (error) {
      return {
        path: file.path,
        content: `(Bu dosya okunamadı: ${error instanceof Error ? error.message : String(error)})`,
      };
    }
  });
}

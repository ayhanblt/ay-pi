/**
 * CONTEXT TİPLERİ
 * ----------------
 * Router "hangi model/thinking/budget" kararını verdikten SONRA,
 * Context Assembler devreye girer: contextBudget'a göre HANGİ
 * dosyaların prompt'a dahil edileceğine karar verir.
 *
 * Bu da RAG/embedding DEĞİLDİR -- basit, açıklanabilir bir sıralama:
 * "aktif dosya önce, sonra en son değişenler" gibi.
 */

export interface FileCandidate {
  path: string;
  size: number;          // karakter sayısı (maxChars bütçesine karşı ölçülür)
  isActive: boolean;      // kullanıcının o an editörde açık tuttuğu dosya mı
  lastModifiedAt: number; // epoch ms -- en güncel değişen dosyaları öne almak için
}

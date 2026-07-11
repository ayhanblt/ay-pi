/**
 * TELEMETRY/TYPES.TS
 * --------------------
 * ExecutionResult BURADA tanımlı (executor/'da DEĞİL) çünkü telemetry
 * PAYLAŞILAN ÇEKİRDEĞİN bir parçası (hem dev-tools/cli.ts hem de Faz 2'de
 * extension/ay-pi/src/index.ts kullanacak), ama gerçek API çağrısını yapan
 * Executor SADECE dev-tools'ta yaşıyor (bkz. dev-tools/executor/).
 *
 * Eğer bu tip executor/'da tanımlı olsaydı, paylaşılan çekirdek (src/)
 * test-amaçlı bir araca (dev-tools/) bağımlı olurdu -- bu, katman
 * sırasını tersine çevirir. Bu yüzden tip burada, executor sadece bunu
 * import ediyor.
 */

export interface ExecutionUsage {
  inputTokens?: number;
  outputTokens?: number;
}

export interface ExecutionResult {
  success: boolean;
  content?: string;          // model cevabının metni (başarılıysa)
  errorMessage?: string;      // hata mesajı (başarısızsa)
  httpStatus?: number;        // API'den dönen HTTP durum kodu (varsa)
  durationMs: number;         // isteğin ne kadar sürdüğü
  usage?: ExecutionUsage;     // API'nin bildirdiği token kullanımı (varsa)
}

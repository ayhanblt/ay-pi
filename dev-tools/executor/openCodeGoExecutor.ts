/**
 * OPENCODE-GO-EXECUTOR.TS
 * -------------------------
 * WorkflowObject.modelPool[0] (birincil model) ile gerçek bir OpenCode Go
 * API çağrısı yapar. OpenAI-uyumlu /chat/completions endpoint'i kullanır.
 *
 * DOĞRULANMIŞ API BİLGİLERİ (araştırma + gerçek denemeyle teyit edildi):
 *   - Base URL: https://opencode.ai/zen/go/v1
 *   - Auth: Authorization: Bearer $OPENCODE_API_KEY
 *   - Model ID: ÇIPLAK model adı, "opencode-go/" ÖN EKİ OLMADAN
 *     (örn. "deepseek-v4-flash", "opencode-go/deepseek-v4-flash" DEĞİL).
 *     "opencode-go/<model>" formatı, Pi/Mastra gibi araçların KENDİ iç
 *     adresleme şeması (hangi provider'ı kullanacağını belirtmek için) --
 *     gerçek HTTP isteğinde, endpoint zaten Go'ya özel olduğu için model
 *     alanı çıplak gönderilir. İlk denemede bunu yanlış yapıp 401/ModelError
 *     aldık, gerçek API'ye karşı test ederek düzelttik.
 *
 * NOT (thinking level): OpenCode Go'nun /chat/completions endpoint'inin
 * "reasoning_effort" gibi bir parametreyi nasıl kabul ettiği dokümantasyonda
 * doğrulanmadı. Yanlış bir parametre göndermek isteği tamamen reddettirebilir,
 * bu yüzden bu Faz 1 Executor'ı thinking seviyesini İSTEK GÖVDESİNE
 * GÖNDERMİYOR -- sadece test amaçlı kullanıldığı için bu eksiklik kabul
 * edilebilir. Gerçek thinking kontrolü Faz 2'de pi.setThinkingLevel() ile,
 * Pi'nin kendi (doğrulanmış) mekanizmasıyla yapılacak.
 */

import type { WorkflowObject } from "../../src/workflow/types.js";
import type { BuiltPrompt } from "../../src/prompt/builder.js";
import type { ExecutionResult } from "../../src/telemetry/types.js";

const BASE_URL = "https://opencode.ai/zen/go/v1";
const TIMEOUT_MS = 30_000;

export async function executeOpenCodeGo(
  workflow: WorkflowObject,
  prompt: BuiltPrompt,
  apiKey: string
): Promise<ExecutionResult> {
  // DİKKAT: provider ön eki YOK -- API çıplak model adı bekliyor.
  const modelId = workflow.modelPool[0];
  const startedAt = Date.now();

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: modelId,
        messages: [
          { role: "system", content: prompt.systemPrompt },
          { role: "user", content: prompt.userPrompt },
        ],
        max_tokens: workflow.output.maxTokens,
      }),
      signal: controller.signal,
    });

    const durationMs = Date.now() - startedAt;

    if (!response.ok) {
      // 429 (rate limit) özel olarak işaretleniyor -- ileride fallback
      // zinciri eklendiğinde bu bilgi "sıradaki modele geç" kararı için
      // kullanılacak.
      const bodyText = await response.text().catch(() => "");
      const rateLimitNote = response.status === 429 ? " (rate limit / kota aşıldı)" : "";
      return {
        success: false,
        httpStatus: response.status,
        errorMessage: `API ${response.status} döndü${rateLimitNote}: ${bodyText.slice(0, 300)}`,
        durationMs,
      };
    }

    const data = await response.json();
    const content: string | undefined = data?.choices?.[0]?.message?.content;

    if (typeof content !== "string") {
      return {
        success: false,
        httpStatus: response.status,
        errorMessage: `Beklenmeyen cevap şekli, "choices[0].message.content" bulunamadı: ${JSON.stringify(data).slice(0, 300)}`,
        durationMs,
      };
    }

    return {
      success: true,
      content,
      httpStatus: response.status,
      durationMs,
      usage: {
        inputTokens: data?.usage?.prompt_tokens,
        outputTokens: data?.usage?.completion_tokens,
      },
    };
  } catch (error) {
    const durationMs = Date.now() - startedAt;
    if (error instanceof Error && error.name === "AbortError") {
      return {
        success: false,
        errorMessage: `İstek ${TIMEOUT_MS}ms içinde zaman aşımına uğradı`,
        durationMs,
      };
    }
    return {
      success: false,
      errorMessage: `Ağ/bağlantı hatası: ${error instanceof Error ? error.message : String(error)}`,
      durationMs,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

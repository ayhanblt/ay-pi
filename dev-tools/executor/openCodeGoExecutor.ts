/**
 * OPENCODE GO EXECUTOR
 * ====================
 * Dispatches prompt payloads directly to the OpenCode Go `/chat/completions` API endpoint.
 * Uses `workflow.modelPool[0]` as the primary target model ID.
 * Used exclusively for CLI testing; execution in production is handled natively by Pi.
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
  // Target model ID without provider prefix
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
      const bodyText = await response.text().catch(() => "");
      const rateLimitNote = response.status === 429 ? " (rate limit / quota exceeded)" : "";
      return {
        success: false,
        httpStatus: response.status,
        errorMessage: `API returned ${response.status}${rateLimitNote}: ${bodyText.slice(0, 300)}`,
        durationMs,
      };
    }

    const data = await response.json();
    const content: string | undefined = data?.choices?.[0]?.message?.content;

    if (typeof content !== "string") {
      return {
        success: false,
        httpStatus: response.status,
        errorMessage: `Unexpected response shape, "choices[0].message.content" not found: ${JSON.stringify(data).slice(0, 300)}`,
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
        errorMessage: `Request timed out after ${TIMEOUT_MS}ms`,
        durationMs,
      };
    }
    return {
      success: false,
      errorMessage: `Network/connection error: ${error instanceof Error ? error.message : String(error)}`,
      durationMs,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}


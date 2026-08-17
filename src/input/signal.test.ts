import assert from "node:assert/strict";
import test from "node:test";
import { buildSignal, detectRequestedModel } from "@/input/signal.js";

test("buildSignal preserves explicit intent and subcommand", () => {
  const signal = buildSignal("/code /fix login.ts");
  assert.equal(signal.command, "/code");
  assert.equal(signal.subcommand, "/fix");
});

test("model identifiers are extracted without classifying natural-language intent", () => {
  assert.equal(detectRequestedModel("Kimi v2.7 code ile geliştir"), "kimi-k2.7-code");
  assert.equal(detectRequestedModel("MiMo-V2.5-Pro ile devam et"), "mimo-v2.5");
});

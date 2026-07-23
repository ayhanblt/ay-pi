# AY-PI

**A deterministic, CPU-first model and thinking-level router for [Pi](https://pi.dev).**

AY-PI sits in front of every prompt you send to Pi and decides, without ever calling an LLM, which model, thinking level, and tool set the request should use. All routing decisions are made with plain rule matching and string comparisons — regular expressions, keyword lookups, and a JSON policy table. No embeddings, no vector databases, no LLM-as-a-router calls.

## Why

Coding agents like Pi let you pick a model per session, but in practice a single conversation mixes wildly different kinds of work: a one-line typo fix, a multi-file architectural change, a quick chat question. Sending all of them to the same model at the same thinking level either wastes tokens on trivial requests or under-thinks complex ones.

AY-PI classifies each message before it reaches the model and applies a policy: cheap, fast models with tool access restricted to `read`/`edit` for quick fixes; more capable models with wider context budgets for planning and multi-file work; and a hybrid keyword classifier for free-form chat that falls back to the cheapest option whenever the signal is ambiguous. Every decision is deterministic, inspectable, and configurable through a single JSON file — no fine-tuning, no training data, no non-determinism.

## How it works

```
User input ("/code /quick fix typo in login.ts")
        │
        ▼
Router            → parses intent + subcommand, matches a policy rule
        │
        ▼
WorkflowObject     → { modelPool, thinking, contextBudget, allowedTools, constraints }
        │
        ├──▶ Context Assembler   → selects relevant files via git diff, respecting the budget
        ├──▶ Prompt Builder      → turns constraints into system-prompt instructions
        │
        ▼
pi.setModel() / pi.setThinkingLevel() / pi.setActiveTools()
        │
        ▼
Pi's own LLM call (AY-PI never makes the request itself)
```

Every decision is logged to `ay-pi.telemetry.jsonl`, including the model and thinking level Pi *actually* applied — some models silently clamp requested thinking levels to their own supported range, and AY-PI's telemetry captures that discrepancy so the policy can be recalibrated against real behavior instead of assumptions.

## Features

- **Intent + subcommand routing** — `/code`, `/code /quick`, `/plan`, `/plan /brainstorm` each map to a distinct model pool and thinking level, defined entirely in policy, not code.
- **Secondary escalation signal** — a large uncommitted `git diff` bumps the thinking level up one notch, but never changes which model pool is used and never overrides an explicit subcommand.
- **Hybrid free-text classification** — a short list of exact keywords decides whether a plain-text message is casual chat or a question needing deeper reasoning; anything ambiguous falls back to the cheapest tier rather than guessing.
- **Tool-scoped execution** — narrow tasks (`/code /quick`) get a restricted tool set (`read`, `edit` only), which stops the model from wandering off and scanning an entire repository when it can't find what it's looking for in the injected context.
- **Sticky routing** — a short "apply"/"go ahead" reply immediately after a `/plan` turn is automatically routed to the `/code` pool instead of falling through to the default chat tier.
- **Zero-token guardrails** — text that looks like a misplaced Pi CLI command (e.g. typing `pi update` into the chat box instead of a real terminal) is intercepted before it ever reaches the model, with a redirect notice instead of a wasted LLM turn.
- **Model pool fallback** — each policy rule lists more than one model; if the first is unavailable or unauthenticated, AY-PI tries the next one before giving up.
- **Fully inspectable** — every routing decision, plus the model/thinking level Pi actually applied, is appended to a local JSONL log for auditing and calibration.

## Non-goals

AY-PI does not generate code, does not replace the LLM, does not perform code review, does not maintain long-term memory, and does not use embeddings, RAG, or vector search anywhere in the routing path. If a decision requires understanding meaning beyond exact keyword matching, AY-PI treats it as unknown and falls back to the safe, cheap default rather than guessing.

## Installation

### Option A — from source (recommended if you want to see or modify the policy)

```bash
git clone https://github.com/ayhanblt/ay-pi.git
cd ay-pi/extension/ay-pi
npm install
pi install .
```

`pi install .` registers the extension with Pi automatically — no manual editing of `~/.pi/agent/settings.json` required. Pulling updates later is a normal `git pull` inside the cloned repo; run `pi update --extensions` afterward to pick up the change.

### Option B — from npm

```bash
pi install npm:ay-pi
```

This installs a pinned, pre-built copy without needing to clone the repository. Use `pi update npm:ay-pi` to upgrade to the latest published version.

### Provider setup

AY-PI's default policy targets [OpenCode Go](https://opencode.ai) models. Pi already recognizes the `opencode-go` provider out of the box; you only need to authenticate:

```bash
pi
/login opencode-go
```

If you're using a different provider, edit `ay-pi.policy.json` — the `provider` and `pool` fields in each rule are the only places a model name appears.

## Configuration

All routing behavior lives in `ay-pi.policy.json`, not in code:

```json
{
  "settings": {
    "diffLinesEscalationThreshold": 60,
    "diffLinesEscalationIntents": ["/code", "/plan"]
  },
  "routes": [
    {
      "intent": "/code",
      "rules": [
        {
          "when": { "subcommand": "==/quick" },
          "provider": "opencode-go",
          "pool": ["deepseek-v4-flash", "minimax-m2.7", "mimo-v2.5"],
          "thinking": "low",
          "contextBudget": { "maxFiles": 2, "maxChars": 15000 },
          "constraints": ["no_refactor", "no_comments", "code_only", "scope_limited"],
          "allowedTools": ["read", "edit"],
          "output": { "maxTokens": 300 }
        }
      ]
    }
  ]
}
```

The file is validated with [Zod](https://zod.dev) at load time — a typo in a model name, an unknown tool, or an invalid thinking level fails immediately with a precise error, before any request is ever routed.

### Recalibrating thinking levels

Some models silently clamp requested thinking levels to a narrower range than AY-PI's policy assumes. After a few days of real usage:

```bash
npx tsx dev-tools/calibration-report.ts
```

This reads `ay-pi.telemetry.jsonl` and reports, per model, how often the *applied* thinking level differed from the *requested* one — so you can correct `ay-pi.policy.json` against observed behavior instead of guesswork.

## Development

```
ay-pi/
├── src/                  # Shared core — routing logic, no Pi dependency
├── dev-tools/            # Standalone CLI for testing routing decisions without Pi
├── extension/ay-pi/      # The actual Pi extension package
├── ay-pi.policy.json     # The single policy/decision table
```

Test routing decisions without touching Pi or spending any tokens:

```bash
npx tsx dev-tools/cli.ts "/code /quick fix typo in login.ts"
```

Add `--execute` to also perform a real API call (requires `OPENCODE_API_KEY` in `.env`) — useful for validating that a policy change produces sensible output, independent of Pi.

## License

MIT
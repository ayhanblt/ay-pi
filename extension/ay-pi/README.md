# AY-PI

**A deterministic, CPU-first behavior/workflow selector for [Pi](https://pi.dev).**

AY-PI does not generate answers. It selects a **behavior**, selects a **workflow**, applies **policy**, resolves a **context strategy**, and hands the result to an adapter. The adapter converts the decision into a Pi-specific system prompt, model selection, thinking level, and tool restrictions.

Routing is deterministic and local: no routing LLM, no vector database, no network calls during routing. A CPU-only semantic engine (ONNX embeddings) acts as a fallback when the rule engine cannot decide with sufficient confidence.

## Installation

You can install the extension directly into your Pi workspace using the following command:

```bash
pi install npm:ay-pi
```

## How Routing Works

```
User Prompt
    │
    ▼
RequestSignal  (command, rawText, diffLines, previousBehavior, ...)
    │
    ▼
┌──────────────────────────────────────────┐
│  Rule Engine   (deterministic keywords)  │
│  confidence ≥ 0.55?  ─── yes ──▶ Behavior │
└──────────────────────────────────────────┘
    │ no
    ▼
┌──────────────────────────────────────────┐
│  Semantic Engine (CPU ONNX embeddings)   │
│  cosine similarity vs behavior catalog ─▶│ Behavior
└──────────────────────────────────────────┘
    │
    ▼
Workflow Resolver   ──▶  Workflow
    │
    ▼
Policy              ──▶  model pool, thinking, tools, constraints
    │
    ▼
Context Strategy    ──▶  focus targets, repository scan, goal
    │
    ▼
Adapter (Pi)        ──▶  system prompt injection, model & tool selection
```

**Cascade rule:** the Rule Engine runs first. Only when it cannot reach the confidence threshold (`RULE_CONFIDENCE_THRESHOLD = 0.55`) does the Semantic Engine engage. This keeps the fast path fast and reserves embeddings for ambiguous requests.

## Behaviors

| Behavior | Meaning |
|----------|---------|
| `CHAT` | General conversation, explanations, teaching, summaries, translations. No code changes. |
| `PLAN` | High-level planning, architecture, brainstorming, migration, strategy. No code output. |
| `REVIEW` | Evaluate/audit existing work — correctness, security, performance, architecture, quality. |
| `CODE` | Modify the project — implement, refactor, fix, generate, test. Writes code. |
| `SUGGEST` | Recommend options and trade-offs (colors, approaches, technologies, design) **without applying code**. |

`SUGGEST` is what distinguishes a *request for ideas* from a *request for changes*. A prompt like "banner için renk öner" routes to `SUGGEST` (with the `suggest_only` constraint and no write/edit tools) instead of `CODE`, so the agent advises rather than applies.

## Workflows

- `CHAT`: `default`, `explain`, `summarize`, `teach`, `translate`
- `PLAN`: `architecture`, `design`, `brainstorm`, `migration`, `strategy`
- `REVIEW`: `code`, `security`, `performance`, `architecture`, `quality`
- `CODE`: `edit`, `generate`, `refactor`, `fix`, `test`
- `SUGGEST`: `color`, `approach`, `technology`, `design-option`

## Commands

Users can force a behavior with a leading slash command:

| Command | Behavior |
|---------|----------|
| `/chat` | `CHAT` |
| `/plan` | `PLAN` |
| `/review` | `REVIEW` |
| `/code` | `CODE` |
| `/suggest` | `SUGGEST` |

Subcommands refine the workflow, e.g. `/code /quick fix typo` → `CODE/fix`, or `/code /refactor ...` → `CODE/refactor`.

## Sticky Routing

AY-PI remembers the previous turn's behavior and applies transition boosts:

- `PLAN → CODE`: when the user confirms a plan with words like "uygula", "apply", "devam et", the next turn escalates to `CODE`.
- `PLAN → SUGGEST` / `REVIEW → SUGGEST`: when the user asks "öner", "suggest", "tavsiye", "ne dersin" within a planning/reviewing context.

This preserves conversation continuity locally.

## Context Strategy

For each turn, AY-PI resolves a context strategy that the adapter injects into the system prompt:

- **Repository scan** — `Disabled` for `CHAT`, `Limited` for `CODE`/`SUGGEST`, `Allowed` for `PLAN`/`REVIEW`.
- **Focus targets** — deterministic entities extracted from the prompt: file paths (e.g. `src/auth/login.ts`), component/identifier names (e.g. `UserSession`, `AuthModule`), plus a workflow-specific focus description.
- **Expected goal** — a concrete, workflow-aware statement of what the turn should accomplish.

## Policy

All execution policy lives in [`ay-pi.policy.json`](./ay-pi.policy.json). Each behavior/workflow combination maps to:

- `provider` + `pool` — ordered model candidates (primary first)
- `thinking` — reasoning level (`off`…`xhigh`)
- `contextBudget` — `maxFiles` / `maxChars`
- `constraints` — e.g. `code_only`, `no_code_output`, `suggest_only`, `scope_limited`
- `allowedTools` — tool whitelist (e.g. `SUGGEST` policies expose only `read`, `grep`, `find`)
- `output.maxTokens`

A `diffLines` escalation rule bumps the thinking level up one step when uncommitted changes exceed `diffLinesEscalationThreshold` for the configured behaviors.

### Constraints

| Constraint | Effect |
|------------|--------|
| `code_only` | Return only a code block; no prose. |
| `no_comments` | No inline comments in generated code. |
| `no_refactor` | Change only the target lines; leave surroundings intact. |
| `no_code_output` | Plan/analysis only; no code blocks. |
| `suggest_only` | Advise only — do not write/apply code; optional reference snippets allowed. |
| `scope_limited` | Work only with files in the current context. |

## Extension Lifecycle

AY-PI hooks into Pi's lifecycle:

- `input` — guards against misplaced CLI commands (e.g. `pi update` typed into chat) and notifies the user.
- `session_start` — announces the extension is active.
- `before_agent_start` — the core routing pipeline: builds the signal, resolves behavior → workflow → policy → context strategy → adapter, then applies model selection, thinking level, tool restrictions, and injects the adapter system prompt.

Registered commands:

- `ay-pi-status` — show active policy metrics.
- `ay-pi-reload-policy` — reload the policy file (clears the cache).

## Telemetry & Debug

A `DebugLogger` records every routing decision to `ay-pi.debug.log`, including rule-engine keyword scores, semantic-engine similarity scores, embedding load source/time, selected workflow, and applied policy. Each entry ends with the final behavior/workflow/policy and total routing time.

## Development

```bash
npm install
npm run build:embeddings          # regenerate behavior embeddings (catalog.json)
npm run build --prefix extension/ay-pi
npx tsx dev-tools/cli.ts "/code /quick fix typo in login.ts"
```

Rebuild embeddings whenever the behavior catalog descriptions change (`scripts/build-embeddings.js`).

## Notes

- No routing LLM.
- No vector database.
- No network calls in routing (the embedding model runs locally via ONNX).
- Sticky conversation continuity is preserved locally.
- Workflow selection uses word-boundary keyword matching, not free-form regex intent.

## License

MIT

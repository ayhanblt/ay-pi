# Architecture

## Responsibilities

```text
input/signal
  → behavior resolver
  → workflow resolver
  → policy resolver
  → context strategy
  → Pi adapter
```

- `input`: extracts raw input and explicit slash-command syntax. It does not classify natural-language intent with regex rules.
- `behavior`: resolves explicit commands, semantic conversation transitions, and semantic behavior.
- `workflow`: selects a task within the behavior; explicit subcommands take precedence.
- `policy`: produces the model pool, thinking level, context budget, constraints, and active tools.
- `context`: determines repository scanning and file/symbol focus.
- `adapter`: applies system instructions, model, thinking, and tool changes to Pi.
- `state`: persists plan artifacts and recent routing context as Pi custom session entries.

## Decision priority

1. Explicit intent/subcommand
2. Semantic session-transition classification
3. Semantic behavior classification
4. Semantic workflow classification
5. Abstain/fallback

The rule engine is not a natural-language keyword dictionary. Natural-language decisions belong to the semantic engine; the rule layer handles slash syntax and structured session transitions.

## Safety boundary

Because `CODE` grants write access, low-confidence semantic decisions fall back to `CHAT`. Tool restrictions come from policy; SUGGEST exposes read/search tools only.

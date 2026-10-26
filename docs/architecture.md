# Architecture

AY-PI is seven small files. Everything except `index.ts` is covered by unit tests.

| File | Responsibility |
| --- | --- |
| `src/profiles.ts` | Behaviors, tiers, and the profile of each behavior (default tier, thinking level, write access, instruction text) |
| `src/commands.ts` | Parses `/chat`, `/suggest`, `/review`, `/plan`, `/code` at the start of a prompt |
| `src/decide.ts` | The decision ladder: command → pending plan → classifier → safe default |
| `src/classifier.ts` | Finds an available classifier model and turns its typed answers into a verdict |
| `src/models.ts` | Tier → model resolution with fallback chains |
| `src/config.ts` | Reads and writes `ay-pi.json` |
| `src/index.ts` | Wires everything into Pi: events, the `ay-pi/auto` virtual model, the `/ay-pi` command |

## One prompt, step by step

```text
user types "/plan add caching"
  │
  ├─ input event            "/plan" is remembered, the prompt becomes "add caching"
  │
  ├─ before_agent_start     decide()  ──> PLAN · high · source=command
  │                         tools: edit/write/bash off
  │                         system prompt += PLAN instructions
  │                         session entry ay-pi.decision written
  │
  ├─ route() (auto mode)    tier high → first usable model in tiers.high
  │                         (fallback: medium, then low)
  │   └─ tool follow-ups    stay on the same model
  │
  └─ agent_end              PLAN answer saved as the pending plan
```

The next prompt `/code` finds the pending plan, runs as `CODE` with all tools, and receives the plan as a hidden message.

## Rules that keep it safe

- Only `CODE` has write tools. `CODE` needs `/code`, an approved plan, or a classifier verdict with ≥ 80% file-change probability.
- A classifier that fails or is unsure never blocks a prompt; the ladder falls through to the safe default (`CHAT`, medium, read-only).
- The tool list is only changed when it differs from the current one, and the instruction block depends only on the behavior, so consecutive turns of the same behavior keep the prompt cache.

## What Pi does for us

- Credentials for chat and classifier models (`/login`, env vars).
- Clamping a thinking level the routed model does not support.
- Showing the routed model in the footer (`auto → <model>`), and cost per model in `/session`.
- Keeping the virtual model selection across resume.

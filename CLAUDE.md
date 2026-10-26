# AY-PI

Extension for the Pi coding agent (`@earendil-works/pi-coding-agent` >= 1.4). For every prompt it decides the behavior (CHAT, SUGGEST, REVIEW, PLAN, CODE) and the tier (low, medium, high), scopes the tools, and in auto mode picks the model through the `ay-pi/auto` virtual model. Published as `@ayhanblt/ay-pi` from `extension/ay-pi`.

## Commands

```bash
npm install
npm run typecheck
npm test            # node --test + tsx, files: src/*.test.ts (gitignored, local only)
npm run build       # bundles src/index.ts -> extension/ay-pi/dist/index.js, copies README
pi install ./extension/ay-pi   # local smoke test in a real Pi
```

## Layout

- `src/profiles.ts` behaviors, tiers, profile per behavior (tier, thinking, canWrite, instructions)
- `src/commands.ts` `/chat /suggest /review /plan /code` prefix parsing
- `src/decide.ts` decision ladder: command -> pending plan -> classifier -> safe default
- `src/classifier.ts` Jev / Pi classifier models via `ctx.modelRegistry.classify()`
- `src/models.ts` tier -> model fallback chains
- `src/config.ts` `~/.pi/agent/ay-pi.json` (+ trusted project `.pi/ay-pi.json`)
- `src/index.ts` Pi wiring: input, before_agent_start, agent_end, virtual model, `/ay-pi` command

Pi API reference: `node_modules/@earendil-works/pi-coding-agent/docs/` (extensions.md, virtual-models.md, models.md) and `examples/extensions/jev-router.ts`.

## Rules (agreed decisions, keep them)

- CODE (the only behavior with edit/write/bash) only via `/code`, an approved plan, or a classifier verdict with >= 0.8 file-change probability. Unsure -> SUGGEST or safe default (CHAT, medium, read-only).
- No classifier -> explicit commands + safe default only. No local embedding model, no keyword lists for intent.
- Provider-agnostic: never hardcode providers or model ids. Users put models into tiers; AY-PI only picks the tier.
- Jev is optional; keys go through Pi (`/login` -> TypeSafe or `TYPESAFE_API_KEY`). Extensions cannot write credentials.
- Auto mode = selected model is `ay-pi/auto`; manual mode = any other model, AY-PI only suggests.
- Keep it small and readable. Pure logic in small modules with tests; Pi-specific code only in `src/index.ts`.
- README and code comments in English.

## Working style

- Discuss and agree on a plan before writing code. "Geliştirme yapma" means analysis/plan only.
- Present code changes as diffs, not full files.
- Do not commit or push unless asked. Tests (`*.test.ts`) and `graphify-out/` are not committed.

## Open items

- Real Pi smoke test of v2 (auto/manual, `/ay-pi add`, plan -> `/code`, Jev).
- Optional `.github/workflows/publish.yml`: publish on `v*` tags with npm trusted publishing (OIDC); needs an up-to-date root package-lock.json.
- Deprecate the old unscoped `ay-pi` npm package.
- Pre-refactor WIP is kept in `git stash list` ("pre-refactor WIP (2026-10-26)").

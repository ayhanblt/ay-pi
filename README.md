# AY-PI

**A deterministic, CPU-first behavior/workflow selector for [Pi](https://pi.dev).**

AY-PI does not generate answers. It selects a behavior, selects a workflow, applies policy, and hands the result to an adapter. Routing is deterministic, local, and CPU-only.

## Architecture

```
Input
  ↓
Behavior Resolver
  ↓
Behavior
  ↓
Workflow Resolver
  ↓
Workflow
  ↓
Policy
  ↓
Adapter
```

## Behaviors

- `CHAT`
- `PLAN`
- `REVIEW`
- `CODE`

## Workflows

- `CHAT`: `default`, `explain`, `summarize`, `teach`, `translate`
- `PLAN`: `architecture`, `design`, `brainstorm`, `migration`, `strategy`
- `REVIEW`: `code`, `security`, `performance`, `architecture`, `quality`
- `CODE`: `edit`, `generate`, `refactor`, `fix`, `test`

## Config

All execution policy lives in [`ay-pi.policy.json`](./ay-pi.policy.json).

Behavior and workflow selection are deterministic and local. Policy is applied after workflow selection, and adapters convert the final decision into Pi-specific, OpenCode-specific, or OMP-specific formats.

## Development

```bash
npm install
npm run build --prefix extension/ay-pi
npx tsx dev-tools/cli.ts "/code /quick fix typo in login.ts"
```

## Notes

- No routing LLM.
- No vector database.
- No network calls in routing.
- Sticky conversation continuity is preserved locally.

## License

MIT

# AY-PI

AY-PI is a Pi coding-agent extension that analyzes user requests and routes them to the appropriate behavior, workflow, model, thinking level, and tool set.

AY-PI does not require users to provide an intent. Explicit `/plan`, `/review`, `/code`, and `/suggest` commands always take priority; when no intent is provided, the local semantic engine classifies the request as planning, review, coding, suggestion, or chat. When confidence is insufficient, it abstains and safely falls back to `CHAT`.

## Installation

```bash
pi install npm:@ayhanblt/ay-pi
```

Routing does not use a remote routing model or vector database. The embedding model is loaded locally through ONNX at runtime.

## Routing flow

```text
User request
  → explicit command/subcommand syntax
  → semantic session-transition classification
  → semantic behavior + confidence/margin
  → workflow
  → policy
  → context strategy
  → Pi adapter
```

Explicit commands always take precedence over semantic classification. The semantic engine uses both the top score and the margin over the second-best candidate. If either threshold is not met, it does not force a risky decision.

## Applying a plan

After a PLAN turn completes, the assistant output is stored as a `PlanArtifact` in the Pi session. When the user confirms the plan, AY-PI passes the same artifact to the coding model instead of asking it to create a new plan.

```text
PLAN → proposed
confirmation → approved
CODE turn → executing
```

Natural-language confirmation is classified semantically rather than through a growing regex keyword list.

## Clean model switching

To continue the last coding request with another model without including the unfinished assistant response in the new context:

```text
/ay-pi-switch kimi-v2.7-code
```

The command interrupts the active turn when necessary, creates a clean Pi branch before the previous assistant response, switches the model, and resubmits the last user request. If a user writes a natural-language model-switch request, AY-PI detects it semantically and displays the safe command.

## Commands

- `/ay-pi-status` — show loaded policy metrics.
- `/ay-pi-reload-policy` — clear and reload the policy cache.
- `/ay-pi-switch <model>` — continue the last request on a clean branch with another model.

## Behaviors

| Behavior | Purpose |
| --- | --- |
| `CHAT` | Conversation, explanations, summaries, and teaching |
| `PLAN` | Architecture, design, migration, and strategy |
| `REVIEW` | Code, security, performance, and quality review |
| `CODE` | Edit, fix, refactor, generate, and test |
| `SUGGEST` | Options and trade-offs without applying changes |

## Development

```bash
npm install
npm test
npx tsc --noEmit
npm run build
```

`npm run build` regenerates semantic catalog embeddings and creates the npm extension bundle. The policy file is bundled as a runtime fallback, so the published package does not depend on a repository-root file.

## Documentation

- [Architecture](docs/architecture.md)
- [Routing and semantic engine](docs/routing.md)
- [Plan state and model switching](docs/state-and-model-switch.md)
- [Packaging, testing, and release](docs/operations.md)

## Telemetry

Debug output is written to `ay-pi.debug.log`; machine-readable routing records are written to `ay-pi.telemetry.jsonl`. These files may contain user input and should be reviewed before sharing.

## License

MIT

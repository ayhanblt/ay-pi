# AY-PI Extension

AY-PI is a deterministic, CPU-only behavior/workflow selector for Pi.

It resolves:

`Input -> Behavior Resolver -> Behavior -> Workflow Resolver -> Workflow -> Policy -> Adapter`

## What it does

- Selects one of `CHAT`, `PLAN`, `REVIEW`, or `CODE`.
- Selects a workflow within that behavior.
- Applies policy after workflow selection.
- Adapts the final decision for Pi.

## Configuration

Routing policy lives in [`ay-pi.policy.json`](../ay-pi.policy.json).

## Development

```bash
npm install
npm run build
```

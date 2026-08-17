# Routing and Semantic Engine

## Semantic decision

Each classification uses two measurements:

- `topScore`: cosine similarity of the best candidate
- `margin`: difference between the best and second-best candidates

If either value is below its threshold, the engine abstains. Behavior fallback is `CHAT`; workflow fallback is the behavior's safe default workflow.

Environment variables:

```text
SEMANTIC_CONFIDENCE_THRESHOLD=0.62
SEMANTIC_MARGIN_THRESHOLD=0.035
WORKFLOW_CONFIDENCE_THRESHOLD=0.40
WORKFLOW_MARGIN_THRESHOLD=0.002
```

## Natural-language intent

`/plan` is an explicit command and is always authoritative. A request such as “How should we design this first?” goes through semantic behavior and workflow classification. This avoids embedding a large multilingual keyword list in the codebase.

Confirmation and model switching are separate semantic meta-intents:

- `plan_confirmation`
- `model_switch`

Their descriptions are embedded and evaluated with the same score/margin abstention approach.

## Testing

Parser unit tests cover explicit syntax and model-identifier normalization. Semantic runtime tests should additionally use a multilingual regression set; unit tests without model loading cover `rankScores` and deterministic resolver behavior.

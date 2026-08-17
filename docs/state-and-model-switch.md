# Plan State and Model Switching

## PlanArtifact

When a plan response completes, AY-PI stores the following session state:

```text
id
sourcePrompt
workflow
content
status: proposed | approved | executing | completed
createdAt
```

The artifact is stored through Pi's custom session-entry mechanism. It is not automatically injected as a user-visible message and can be restored after a restart or resume.

## Plan confirmation

If the previous behavior is `PLAN`, an active plan is `proposed`, and the new request is semantically classified as `plan_confirmation`, AY-PI resolves the turn as `CODE`. The plan content is added to the coding turn's system instructions.

The coding model therefore receives approved execution steps instead of having to make the planning decisions again.

## Model switching

`/ay-pi-switch <model>`:

1. Aborts the active turn when necessary and waits until the agent is idle.
2. Finds the first assistant entry after the last user request.
3. Forks from that assistant entry's parent using `position: "at"`.
4. Transfers a one-shot internal handoff marker to the replacement session.
5. The new extension instance selects the requested model and resubmits the last user request.

The unfinished assistant response is therefore excluded from the new model's context. The fork is started from a command context rather than being forced from an event handler.

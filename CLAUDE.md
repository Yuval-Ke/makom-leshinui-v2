@AGENTS.md

# Design freeze

The site must stay identical to the Lovable original (https://mind-unwind-journey.lovable.app).
Do not change the look, copy, or images unless the owner explicitly asks for it.

- Before every commit, run `npm run build && npm run verify`. Both must pass.
- If `verify` fails, fix the cause. Never change `src/` just to make the check pass.
- Design intent is in `docs/design-brief.md`. Requirements are in `docs/spec.md`. Status is in `docs/roadmap.md`.

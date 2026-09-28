# Makom Leshinui — static site

- Stack: TanStack Start + React 19 + Vite 8 + Tailwind 4, built from a Lovable export. There is no Lovable sync.
- Build: `npm run build` prerenders the 5 routes to `dist/client`, and Netlify publishes that folder (`netlify.toml`). There is no server and there are no Functions.
- Checks:
  - `npm run verify` compares the build against `scripts/baseline/` (the live Lovable HTML and CSS).
  - `npx tsc --noEmit` must pass.
  - `npm run lint` shows 40 prettier errors in `src/`. They are known and came from Lovable. Leave them.
- Images live in `public/images/`. `src/assets/*.asset.json` point at them.
- Keep all of `src/components/ui/`, including the unused components. Tailwind scans those files, so deleting one changes the CSS.
- Pin dependency versions exactly. A version bump can change the generated CSS.

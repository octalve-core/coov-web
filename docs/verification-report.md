# COOV Website Verification Report

Date: 2026-09-24

## Completed in the build environment

- Authoritative COOV asset presence and non-zero file checks
- Exact COOV palette token check
- Exact Mayport-style 1280px container contract check
- All required route-file presence checks
- Local-image policy scan (no HTTP/HTTPS image `src` in production source)
- Prohibited/unverified fintech claim scan
- Local asset non-zero-size scan
- `@/` import target existence scan
- TypeScript/TSX parser pass across source and test files
- `git diff --check`

The final static contract audit passed, and the TypeScript parser reported zero syntax errors.

## Package-dependent verification not executable in this container

The execution container cannot resolve `registry.npmjs.org`, and it contains no cached Next.js/React dependency tree. Therefore these required commands could not be run truthfully here:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

A `pnpm-lock.yaml` was not fabricated. Run `pnpm install` once in a network-enabled environment to create the real lockfile, then run the verification sequence documented in `README.md` before production launch.

All automated Vitest and Playwright test sources are included in the repository for that local/CI verification.


## 2026-09-24 local-run corrections

A first Windows local run exposed issues that could not be exercised in the original network-restricted build container. The corrective package updates are included in the revised ZIP:

- TypeScript pinned to `6.0.3` because the current `typescript-eslint` line supports TypeScript `<6.1.0`, while TypeScript 7 triggers an ESLint compatibility error.
- Navigation types changed to a discriminated link/group model so desktop and mobile navigation type-check safely.
- Playwright navigation locators are scoped to the intended navigation landmarks, avoiding duplicate footer-link strict-mode matches.
- `sizes` added to every `next/image` using `fill`.
- `data-scroll-behavior="smooth"` added to the root `<html>` element for Next.js route-transition awareness.
- `vitest.config.ts` renamed to `vitest.config.mts` to avoid the CommonJS/ESM config-loader warning.
- `pnpm-workspace.yaml` added with `unrs-resolver` as an approved build dependency.
- Public company references updated to `COOV Technologies Ltd`.

The Grammarly-generated hydration attributes reported during local development (`data-new-gr-c-s-check-loaded`, `data-gr-ext-installed`) come from the browser extension mutating the DOM before React hydration; they are not emitted by COOV source code.

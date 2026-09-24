# COOV Public Website

Official public/client-facing website for **COOV — Move Value.**, a financial technology product of **COOV Technologies Ltd**.

This repository is intentionally separate from the COOV mobile/backend product workstream. It is a marketing and product-information website only; it contains no wallet ledger, transaction backend, KYC provider integration, Paystack integration, or VTpass integration.

## Stack

- Next.js 16.3.6
- React / React DOM 19.3.0
- TypeScript 6.0.3
- Tailwind CSS 4.3.3
- pnpm 12.6.0
- Vitest 5.0.1
- Playwright 1.63.0
- ESLint 10.11.0

Prerequisites: **Node.js >= 22.13.0** and **pnpm 12.6.0**.

## Local setup

```bash
corepack prepare pnpm@12.6.0 --activate
pnpm install
pnpm exec playwright install chromium
pnpm dev
```

Open `http://localhost:3000`.

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

All five commands should pass before production deployment.

## Architecture

COOV follows the Octalve route → feature → section pattern:

```text
src/app/**/page.tsx              routing + metadata only
src/features/<page>/page.tsx     page composition
src/features/<page>/components/  one component per major visible section
src/components/layout/           site shell
src/components/ui/               reusable primitives
src/components/shared/           genuinely reused product components
src/config/                       site, navigation, store links
public/                           repository-local production visuals
```

The shared content container is exactly:

```text
mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8
```

## COOV brand system

Authoritative colors:

- Soft Ivory `#F7F4EF`
- Gold `#C79B52`
- Bright Purple `#7035E7`
- Deep Purple `#5821B3`
- Dark Plum `#160D20`

Authoritative supplied assets are stored at:

```text
public/brand/logo/coov-icon.png
public/brand/logo/coov-logo-on-dark.png
public/brand/logo/coov-logo-on-light.png
docs/design-references/coov-color-reference.png
```

Do not redraw or silently replace these brand assets.

## Local imagery

Production visuals live under `public/images`, `public/app`, and `public/social`. Critical website imagery must remain repository-local. Do not replace image `src` values with remote URLs.

Current app screens are **conceptual COOV-branded previews** while the separate production mobile application is being completed. Replace files in `public/app/mockups/` with approved final screenshots later without changing the page architecture.

## Store links and Coming Soon behavior

Configure:

```dotenv
NEXT_PUBLIC_APP_STORE_URL=https://...
NEXT_PUBLIC_PLAY_STORE_URL=https://...
```

When either value is empty, invalid, non-HTTPS, or a fragment, the shared store control renders a disabled **Coming Soon** button instead of a dead link.

## SEO

The repository includes:

- central site metadata
- page-specific titles and descriptions
- local Open Graph/Twitter preview image
- `sitemap.xml`
- `robots.txt`
- custom 404 page
- semantic headings
- local-only social image
- compliance tests guarding against unverified fintech claims

Set the production origin before deployment:

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

## Content accuracy

Do not add claims such as CBN licensing, NDIC insurance, bank partnerships, certifications, user counts, app ratings, download counts, transaction volumes, guaranteed returns, yields, fees, or product limits unless they have been independently verified for COOV and approved for publication.

## GitHub handoff

After local verification:

```bash
git init # only if this copy has no git history
git add .
git commit -m "feat: launch COOV public website"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

If the repository already has history/remotes, follow your normal Octalve branching and review workflow instead of reinitializing it.

## Vercel preview deployment

1. Import the GitHub repository into Vercel.
2. Keep the detected framework as Next.js.
3. Add `NEXT_PUBLIC_SITE_URL` using the assigned preview/production URL.
4. Add App Store / Play Store variables only when the verified URLs exist.
5. Deploy a preview.
6. Test all routes, navigation, mobile menu, metadata, forms/links, and responsive layouts before attaching the live production domain.

No backend service or database is required for this public website in its current scope.


### Windows / Corepack note

If `corepack enable` returns an `EPERM` error for `C:\Program Files\nodejs`, you can skip that command when `corepack prepare pnpm@12.6.0 --activate` succeeds and `pnpm --version` works. The project also includes `pnpm-workspace.yaml` approving the required `unrs-resolver` install script, so a fresh `pnpm install` does not require an interactive `pnpm approve-builds` step for that dependency.

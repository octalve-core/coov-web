# COOV Public Website — Design Specification

**Date:** 2026-09-24  
**Project:** COOV public/client-facing website  
**Company:** Octalve Ltd  
**Product brand:** COOV  
**Tagline:** Move Value.

## 1. Purpose

Build the official public website for COOV, the fintech/payment product by Octalve Ltd. The website is a separate workstream from the COOV mobile/backend application and must not alter or depend on the pending 18-task fintech implementation work.

The website must explain COOV clearly, present its features visually, build trust without making unverifiable claims, and direct users toward downloading the mobile application when store links become available.

Success means the repository can be unzipped, installed, run locally, tested, pushed to GitHub, imported into Vercel, and deployed as a preview without structural rework.

## 2. Product and Content Principles

1. The website is a marketing/product website, not the fintech backend or admin portal.
2. Customer benefits come before implementation details.
3. Major features should be demonstrated with product UI or real-life context rather than generic icon-text blocks where possible.
4. No fabricated regulatory, licensing, insurance, partnership, user-count, rating, testimonial, download-count, certification, or transaction-volume claims.
5. The website may describe agreed COOV product scope, but wording must not imply capabilities that are not part of that scope.
6. Store CTAs must support a controlled "Coming Soon" state until real iOS/Android URLs exist.

## 3. Brand Source of Truth

The supplied COOV brand assets are authoritative and must be copied into the project repository; they must not be redrawn or replaced by guessed variants.

### Core palette

- Soft Ivory: `#F7F4EF`
- Gold: `#C79B52`
- Bright Purple: `#7035E7`
- Deep Purple: `#5821B3`
- Dark Plum: `#160D20`

### Brand usage

- Bright Purple: primary CTA/action/accent color.
- Deep Purple: gradient depth, hover states, visual layering.
- Dark Plum: main dark background, dark text on light surfaces, footer, premium sections.
- Gold: restrained premium accent only; do not overuse.
- Soft Ivory: primary warm light background.
- White may be used for cards, text, and clean contrast where appropriate.

### Logo treatments

- Dark background: supplied COOV logo with white wordmark, purple icon, gold "Move Value." tagline.
- Light background: supplied COOV logo with dark wordmark, purple icon, gold tagline.
- Standalone icon: supplied gradient COOV icon.

### Signature gradient

Primary brand gradient may derive from:

```css
linear-gradient(135deg, #7035E7 0%, #5821B3 55%, #160D20 100%)
```

Use selectively in hero lighting, app mockup glows, CTA areas, branded graphics, and decorative surfaces. Do not apply indiscriminately.

## 4. Visual Direction

COOV must be original while learning from the design qualities the user selected.

### GoTap-inspired principles

- Immersive, cinematic fintech storytelling.
- Strong dark/purple atmosphere.
- Large editorial headlines.
- Nigerian/African everyday-use context in photography.
- Product UI integrated into lifestyle scenes.
- Concise feature copy.
- Real-life payment moments rather than abstract finance stock imagery.

### SpaceTrade-inspired principles

- Bento-style feature grids.
- Different card spans and proportions.
- Feature-specific product visuals.
- App interfaces shown prominently inside cards.
- Strong scrolling rhythm and visual hierarchy.

### COOV-specific interpretation

COOV should combine cinematic storytelling + modular product cards inside the COOV palette. It must not reproduce another company's layouts, illustrations, copy, or assets.

The site should feel:

- premium
- modern
- energetic
- trustworthy
- fintech-focused
- visually confident
- uncluttered

Avoid:

- generic crypto styling
- excessive neon/rainbow gradients
- too many unrelated colors
- overly dense sections
- random stock photography
- decorative effects that reduce readability

## 5. Image Strategy

All production image assets must be local to the repository. Do not hotlink critical website images from external hosts.

Images fall into three categories:

1. **Product UI:** COOV dashboard, transfer, bill payment, savings, virtual account, merchant/business, and other agreed product screens.
2. **Lifestyle/product storytelling:** Nigerian/African people and environments showing realistic payment, business, bills, transfer, and savings use cases.
3. **Branded conceptual graphics:** COOV-specific payment flows, security imagery, abstract value movement, cards/account visuals, icon-derived compositions.

Planned local structure:

```text
public/
  brand/
  images/
    home/
    personal/
    business/
    savings/
    bills/
    security/
    about/
    support/
  app/
    screens/
    mockups/
    devices/
  icons/
  partners/
  social/
```

## 6. Engineering Stack

- Next.js (current stable release selected and pinned at implementation time)
- TypeScript
- Tailwind CSS
- pnpm
- App Router
- ESLint
- Next/Image for local raster/image assets where appropriate
- Minimal dependencies; no backend introduced without a concrete website requirement

## 7. Octalve Architecture

The project must follow the established Octalve structure: routes remain small, feature pages compose section components, and only reusable elements enter shared/global component folders.

### Route rule

`src/app/**/page.tsx` files route only. They do not contain full page implementations.

Example:

```tsx
import HomePage from "@/features/home/page";

export default function Page() {
  return <HomePage />;
}
```

### Feature rule

Each page gets a `src/features/<page>/` directory containing:

- `page.tsx`
- `components/`

Every major visible section is its own component.

### Shared component rule

- Page-specific components stay in that page's feature folder.
- Shared elements used across multiple pages live under `src/components/shared/`.
- Layout components live under `src/components/layout/`.
- Reusable primitives live under `src/components/ui/`.

## 8. Planned Folder Structure

```text
coov-web/
├── public/
│   ├── brand/
│   │   ├── logo/
│   │   ├── favicon/
│   │   └── app-store/
│   ├── images/
│   │   ├── home/
│   │   ├── personal/
│   │   ├── business/
│   │   ├── savings/
│   │   ├── bills/
│   │   ├── security/
│   │   ├── about/
│   │   └── support/
│   ├── app/
│   │   ├── screens/
│   │   ├── mockups/
│   │   └── devices/
│   ├── icons/
│   ├── partners/
│   └── social/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── personal/page.tsx
│   │   ├── business/page.tsx
│   │   ├── features/page.tsx
│   │   ├── savings/page.tsx
│   │   ├── bills-and-payments/page.tsx
│   │   ├── security/page.tsx
│   │   ├── about/page.tsx
│   │   ├── help/page.tsx
│   │   ├── download/page.tsx
│   │   └── legal/
│   │       ├── privacy/page.tsx
│   │       ├── terms/page.tsx
│   │       └── cookies/page.tsx
│   ├── features/
│   │   ├── home/
│   │   ├── personal/
│   │   ├── business/
│   │   ├── features/
│   │   ├── savings/
│   │   ├── bills-and-payments/
│   │   ├── security/
│   │   ├── about/
│   │   ├── help/
│   │   └── download/
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── shared/
│   ├── config/
│   ├── data/
│   ├── lib/
│   ├── hooks/
│   └── types/
├── docs/
├── .env.example
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 9. Naming Conventions

- Lowercase kebab-case files and folders.
- Examples: `hero-section.tsx`, `app-download-cta.tsx`, `bills-and-payments/`.
- No mixed naming styles such as `heroSection.tsx`, `HeroSection.tsx`, and `hero_section.tsx` in the same project.

## 10. Layout and Margin System

The site must preserve the Mayport-style margin discipline.

Primary content container:

```text
mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8
```

This will be centralized in `src/components/ui/container.tsx` so sections do not invent their own horizontal margins.

Typical vertical section rhythm:

```text
py-16 md:py-20 lg:py-24
```

High-impact editorial sections may increase to `lg:py-28` / `xl:py-32` when justified.

## 11. Typography System

Typography must be centralized and consistent. Final font family will be implemented as one project-wide system rather than per-section font choices.

Required hierarchy:

- Display
- H1
- H2
- H3
- H4
- Body Large
- Body
- Body Small
- Caption/Label

Large headings should carry editorial confidence similar to the references while remaining readable and responsive.

Typography sizing, line height, weight, tracking, and max-width rules must be consistent through reusable classes/components.

## 12. Shared UI Primitives

At minimum:

```text
src/components/ui/
  button.tsx
  container.tsx
  section.tsx
  heading.tsx
  text.tsx
  badge.tsx
  card.tsx
  accordion.tsx
  app-store-buttons.tsx
```

Shared feature components may include:

```text
src/components/shared/
  app-download-cta.tsx
  app-phone-mockup.tsx
  feature-card.tsx
  section-heading.tsx
```

## 13. Navigation and Information Architecture

Primary site routes:

- `/`
- `/personal`
- `/business`
- `/features`
- `/savings`
- `/bills-and-payments`
- `/security`
- `/about`
- `/help`
- `/download`
- `/legal/privacy`
- `/legal/terms`
- `/legal/cookies`

The main navigation may expose fewer top-level items using grouped dropdowns while preserving the routes.

Suggested visible navigation:

- Personal
- Business
- Features
- Company
- Help
- Get COOV

Mobile navigation must be fully responsive and keyboard/accessibility aware.

## 14. Homepage Composition

The homepage is the flagship experience and should use original COOV layouts following this narrative:

1. Navigation
2. Cinematic COOV hero
3. Trust/product proof strip (without fabricated metrics)
4. "Explore COOV" bento feature grid
5. Send & receive money story section
6. Virtual account section
7. Bills & everyday payments section
8. Savings section
9. COOV for Business section
10. Security & trust section
11. App showcase section
12. Download COOV section
13. Footer

### Homepage visual rules

- Major features should use strong product/lifestyle visuals.
- Use dark/light rhythm instead of one background throughout.
- Maintain COOV palette discipline.
- Gold remains restrained.
- Product screenshots and images should be the visual focus where appropriate.
- Avoid repetitive icon-heading-paragraph cards for every section.

## 15. Secondary Pages

### Personal

Communicate account setup, transfers, virtual account, bill payments, savings, and personal money management.

### Business

Communicate merchant/business value, payment collection, business dashboard, reporting, and business-use workflows consistent with agreed product scope.

### Features

A visual overview of the major COOV product capabilities.

### Savings

Explain savings value proposition and supported savings concepts without inventing interest/yield claims.

### Bills & Payments

Explain airtime, data, electricity, TV subscriptions, and other supported bill categories in clear consumer language.

### Security

Explain identity verification, account protection, transaction monitoring, authentication, secure data handling, and server-side financial verification at a high level. Do not claim certifications that are not verified.

### About

Explain COOV as a product of Octalve Ltd, its mission, and brand positioning.

### Help

Provide FAQ/support entry points. Contact channels must be configurable and not fabricated.

### Download

Provide iOS/Android CTAs. Until real links exist, show a controlled coming-soon state.

## 16. Centralized Configuration

Use config modules for values repeated across the site:

```text
src/config/site.ts
src/config/navigation.ts
src/config/social.ts
src/config/download-links.ts
```

`download-links.ts` must control iOS and Android URLs globally.

## 17. Accessibility and UX

- Semantic HTML.
- Visible focus states.
- Keyboard-operable navigation and interactive controls.
- Meaningful alt text for content images.
- Decorative images marked appropriately.
- Sufficient contrast for text/controls.
- Motion must respect `prefers-reduced-motion` if animation is introduced.
- Mobile layouts must preserve content hierarchy and CTA visibility.

## 18. SEO and Metadata

Implement:

- global metadata
- per-page metadata where useful
- Open Graph defaults
- social preview asset placeholders/local files
- sitemap
- robots
- canonical-ready config
- favicon/app icons from supplied brand assets where suitable

## 19. Error Handling and Empty States

- Custom 404 page.
- No broken store CTAs when URLs are absent; show "Coming Soon" or equivalent disabled/controlled state.
- No broken image dependencies; all local images must have stable repository paths.
- FAQ/support components must fail gracefully if optional data arrays are empty.

## 20. Testing and Verification

Before final handoff, run and verify at minimum:

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm build
```

Also perform targeted checks for:

- responsive layout at mobile/tablet/desktop widths
- navigation behavior
- route rendering
- missing local assets
- broken internal links
- image layout overflow
- focus states and keyboard navigation
- store CTA fallback state

Automated unit/component tests should cover reusable logic where useful; avoid low-value snapshot noise.

## 21. Documentation

README must include:

- project purpose
- stack
- local setup
- scripts
- directory structure
- branding/asset guidance
- how to change store links
- deployment notes for Vercel
- environment variable guidance if any variables are introduced

## 22. Deployment Readiness

The final project must be ready for this workflow:

```text
unzip -> pnpm install -> pnpm dev -> local review -> push to GitHub -> import to Vercel -> preview deploy
```

No production domain assumptions are required for the first handoff.

## 23. Final Deliverable

Provide a ZIP of the complete `coov-web` repository containing:

- source code
- local brand assets
- local website imagery used by the build
- configuration
- documentation
- lockfile
- test/build scripts
- design specification and implementation plan docs

Do not include `node_modules`, `.next`, build caches, secrets, or private credentials.

## 24. Explicit Non-Goals

This website build does **not**:

- continue or modify the pending 18-task COOV fintech application implementation
- implement a banking ledger
- implement KYC/KYB processing
- implement Paystack/VTpass financial integrations
- implement transaction execution
- create regulatory/licensing claims
- launch the production COOV application stores

Those remain separate concerns.

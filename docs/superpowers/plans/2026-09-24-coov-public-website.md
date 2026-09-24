# COOV Public Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete public/client-facing COOV fintech website as a production-ready Next.js repository that can be unzipped, installed, tested locally, pushed to GitHub, and deployed to Vercel without structural rework.

**Architecture:** Use the Octalve route → feature page → section-component pattern. `src/app/**/page.tsx` files are routing shims only; page composition lives in `src/features/<page>/page.tsx`; every major visible section lives in `src/features/<page>/components/`. Shared layout, UI primitives, configuration, data, and tests stay centralized. Production imagery is repository-local; the supplied COOV brand assets are authoritative.

**Tech Stack:** Next.js 16.3.6, React 19.3.0, React DOM 19.3.0, TypeScript 7.0.2, Tailwind CSS 4.3.3, pnpm 12.6.0, ESLint 10.11.0, Vitest 5.0.1, Playwright 1.63.0, App Router, Next/Image.

**Spec:** `docs/superpowers/specs/2026-09-24-coov-public-website-design.md`

## Global Constraints

- Product brand is `COOV`; company is `Octalve Ltd`; tagline is `Move Value.`
- This repository is separate from the pending 18-task COOV mobile/backend workstream and must not import from or mutate that application.
- Core palette is exactly: Soft Ivory `#F7F4EF`, Gold `#C79B52`, Bright Purple `#7035E7`, Deep Purple `#5821B3`, Dark Plum `#160D20`.
- Supplied COOV logo/icon assets are authoritative; copy them into the repo unchanged and do not redraw them.
- Design direction combines GoTap-style cinematic product storytelling with SpaceTrade-style bento feature presentation, but must not copy their layouts, assets, or copy.
- Primary content container is exactly `mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8`.
- Typical vertical rhythm is `py-16 md:py-20 lg:py-24`; only high-impact editorial sections may expand to `lg:py-28` / `xl:py-32`.
- Every major visible page section is its own component.
- All production images are repository-local; no hotlinked critical images.
- No fabricated CBN/NDIC/licensing, certification, bank-partner, user-count, rating, testimonial, download-count, or transaction-volume claims.
- Store CTAs must render a controlled `Coming Soon` state until real store URLs are configured.
- Mobile navigation must be keyboard-operable with visible focus states.
- Motion must respect `prefers-reduced-motion`.
- Pages required: `/`, `/personal`, `/business`, `/features`, `/savings`, `/bills-and-payments`, `/security`, `/about`, `/help`, `/download`, `/legal/privacy`, `/legal/terms`, `/legal/cookies`.
- Final verification must include `pnpm install`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm test:e2e`, and `pnpm build`.

## Review Focus

1. **Missing store URLs:** every App Store/Google Play CTA must become non-broken `Coming Soon` UI, never `href=""`, `href="#"`, or a dead external link. Test in Task 3 and Task 7.
2. **Local-asset drift:** any `http://` or `https://` image source in product code must fail verification; all production visuals must resolve inside `public/`. Test in Task 4 and Task 9.
3. **Responsive overflow:** the homepage and secondary pages must not create horizontal scroll at 390px, 768px, or 1440px. Test in Tasks 4–7 and final E2E.
4. **Navigation accessibility:** desktop and mobile navigation must be keyboard-reachable, expose menu state with ARIA, close predictably, and preserve visible focus. Test in Task 3.
5. **Unverified fintech claims:** customer-facing content must not contain banned regulatory/scale claims. Add a content compliance scan in Task 8.

---

## File Map

### Project/configuration

- `package.json` — pinned scripts/dependencies/engines/package manager.
- `pnpm-lock.yaml` — deterministic dependency lock.
- `tsconfig.json` — strict TypeScript + `@/*` alias.
- `next.config.ts` — Next configuration; no remote image domains required.
- `postcss.config.mjs` — Tailwind CSS 4 PostCSS plugin.
- `eslint.config.mjs` — Next + TypeScript lint config.
- `vitest.config.ts` — unit/integration test config.
- `playwright.config.ts` — browser test config against a local Next server.
- `.env.example` — only documented optional public config values; no secrets.
- `README.md` — setup, scripts, branding, store links, deployment.

### Authoritative assets

- `public/brand/logo/coov-icon.png` — copied from `/mnt/data/Coov Icon.png`.
- `public/brand/logo/coov-logo-on-dark.png` — copied from `/mnt/data/Coov Logo Good on Black.png`.
- `public/brand/logo/coov-logo-on-light.png` — copied from `/mnt/data/Coov Logo Good on White.png`.
- `docs/design-references/coov-color-reference.png` — copied from `/mnt/data/Coov Color.png` as documentation only.
- `public/images/**`, `public/app/**`, `public/icons/**`, `public/social/**` — original/local website assets only.

### App routes

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/not-found.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- route shims for all required pages.

### Feature pages

- `src/features/home/**`
- `src/features/personal/**`
- `src/features/business/**`
- `src/features/features/**`
- `src/features/savings/**`
- `src/features/bills-and-payments/**`
- `src/features/security/**`
- `src/features/about/**`
- `src/features/help/**`
- `src/features/download/**`
- `src/features/legal/**`

### Shared code

- `src/components/layout/header.tsx`
- `src/components/layout/navigation.tsx`
- `src/components/layout/mobile-navigation.tsx`
- `src/components/layout/footer.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/container.tsx`
- `src/components/ui/section.tsx`
- `src/components/ui/heading.tsx`
- `src/components/ui/text.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/accordion.tsx`
- `src/components/ui/app-store-buttons.tsx`
- `src/components/shared/app-download-cta.tsx`
- `src/components/shared/app-phone-mockup.tsx`
- `src/components/shared/feature-card.tsx`
- `src/components/shared/section-heading.tsx`
- `src/config/site.ts`
- `src/config/navigation.ts`
- `src/config/social.ts`
- `src/config/download-links.ts`
- `src/data/faqs.ts`
- `src/lib/cn.ts`
- `src/lib/store-links.ts`
- `src/types/navigation.ts`

---

### Task 1: Bootstrap the pinned Next.js project and preserve authoritative brand assets

**Files:**
- Create: `package.json`
- Create: `pnpm-lock.yaml`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `vitest.config.ts`
- Create: `playwright.config.ts`
- Create: `.gitignore`
- Create: `.env.example`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `src/features/home/page.tsx`
- Create: `public/brand/logo/coov-icon.png`
- Create: `public/brand/logo/coov-logo-on-dark.png`
- Create: `public/brand/logo/coov-logo-on-light.png`
- Create: `docs/design-references/coov-color-reference.png`
- Test: `tests/unit/project-contract.test.ts`

**Interfaces:**
- Consumes: Approved design spec and mounted COOV asset files under `/mnt/data`.
- Produces: deterministic Next.js project, `@/*` alias, test runners, local brand assets, minimal compilable home route.

- [ ] **Step 1: Write the project contract test before scaffolding**

Create `tests/unit/project-contract.test.ts`:

```ts
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();

const requiredAssets = [
  "public/brand/logo/coov-icon.png",
  "public/brand/logo/coov-logo-on-dark.png",
  "public/brand/logo/coov-logo-on-light.png",
  "docs/design-references/coov-color-reference.png",
];

describe("COOV project contract", () => {
  it("keeps authoritative COOV brand assets inside the repository", () => {
    for (const asset of requiredAssets) {
      expect(existsSync(join(root, asset)), asset).toBe(true);
    }
  });

  it("uses the agreed verification scripts", () => {
    const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
    expect(pkg.scripts).toMatchObject({
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "eslint .",
      typecheck: "tsc --noEmit",
      test: "vitest run",
      "test:e2e": "playwright test",
    });
  });
});
```

- [ ] **Step 2: Create the exact package contract and install pinned dependencies**

Create `package.json` with these pinned core versions:

```json
{
  "name": "coov-web",
  "version": "0.1.0",
  "private": true,
  "packageManager": "pnpm@12.6.0",
  "engines": {
    "node": ">=22.13.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "next": "16.3.6",
    "react": "19.3.0",
    "react-dom": "19.3.0"
  },
  "devDependencies": {
    "@playwright/test": "1.63.0",
    "@tailwindcss/postcss": "4.3.3",
    "@types/node": "22.20.4",
    "@types/react": "19.3.0",
    "@types/react-dom": "19.3.0",
    "eslint": "10.11.0",
    "eslint-config-next": "16.3.6",
    "tailwindcss": "4.3.3",
    "typescript": "7.0.2",
    "vitest": "5.0.1"
  }
}
```

Run:

```bash
corepack enable
pnpm install
pnpm exec playwright install chromium
```

Expected: `pnpm-lock.yaml` exists and install exits 0.

- [ ] **Step 3: Add TypeScript, Tailwind, ESLint, Vitest, and Playwright configuration**

Use strict TypeScript and the `@/*` alias:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Use Tailwind 4 in `postcss.config.mjs`:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

Use Vitest for Node-side contract/config tests:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/unit/**/*.test.ts"],
  },
});
```

Use Playwright with Next web server:

```ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "pnpm dev --hostname 127.0.0.1",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],
});
```

- [ ] **Step 4: Copy the authoritative assets unchanged**

Run:

```bash
mkdir -p public/brand/logo docs/design-references
cp "/mnt/data/Coov Icon.png" public/brand/logo/coov-icon.png
cp "/mnt/data/Coov Logo Good on Black.png" public/brand/logo/coov-logo-on-dark.png
cp "/mnt/data/Coov Logo Good on White.png" public/brand/logo/coov-logo-on-light.png
cp "/mnt/data/Coov Color.png" docs/design-references/coov-color-reference.png
```

Expected: all four paths exist and file sizes are non-zero.

- [ ] **Step 5: Add the smallest compiling App Router shell**

`src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COOV — Move Value.",
  description: "Send, pay, save, and manage everyday money with COOV.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

`src/features/home/page.tsx`:

```tsx
export default function HomePage() {
  return <main><h1>COOV</h1></main>;
}
```

`src/app/page.tsx`:

```tsx
import HomePage from "@/features/home/page";

export default function Page() {
  return <HomePage />;
}
```

`src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  color-scheme: dark;
  background: #160d20;
  color: #f7f4ef;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; min-width: 320px; overflow-x: clip; }
a { color: inherit; text-decoration: none; }
button, a { -webkit-tap-highlight-color: transparent; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 6: Run the first verification cycle**

Run:

```bash
pnpm test tests/unit/project-contract.test.ts
pnpm typecheck
pnpm lint
pnpm build
```

Expected: all commands pass.

- [ ] **Step 7: Commit**

```bash
git add .
git commit -m "chore: bootstrap COOV website"
```

---

### Task 2: Implement the COOV design system, Mayport container discipline, and reusable primitives

**Files:**
- Create: `src/lib/cn.ts`
- Create: `src/components/ui/container.tsx`
- Create: `src/components/ui/section.tsx`
- Create: `src/components/ui/heading.tsx`
- Create: `src/components/ui/text.tsx`
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/badge.tsx`
- Create: `src/components/ui/card.tsx`
- Create: `src/components/shared/section-heading.tsx`
- Modify: `src/app/globals.css`
- Test: `tests/unit/design-system.test.ts`

**Interfaces:**
- Consumes: palette and spacing values from the spec.
- Produces: `Container`, `Section`, `Heading`, `Text`, `Button`, `Badge`, `Card`, `SectionHeading`, and `cn()`.

- [ ] **Step 1: Write failing design-system tests**

```ts
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFileSync(path, "utf8");

describe("COOV design system", () => {
  it("contains the exact Mayport-style container contract", () => {
    expect(read("src/components/ui/container.tsx")).toContain(
      "mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8",
    );
  });

  it("defines every authoritative COOV color token", () => {
    const css = read("src/app/globals.css");
    for (const hex of ["#F7F4EF", "#C79B52", "#7035E7", "#5821B3", "#160D20"]) {
      expect(css.toUpperCase()).toContain(hex);
    }
  });
});
```

Run `pnpm test tests/unit/design-system.test.ts` and verify failure because files/tokens are not implemented.

- [ ] **Step 2: Define global tokens and typography**

Extend `globals.css` with explicit custom properties and a restrained system/modern sans stack:

```css
:root {
  --coov-ivory: #f7f4ef;
  --coov-gold: #c79b52;
  --coov-purple: #7035e7;
  --coov-purple-deep: #5821b3;
  --coov-plum: #160d20;
  --coov-white: #ffffff;
  --coov-border-dark: rgba(247, 244, 239, 0.12);
  --coov-border-light: rgba(22, 13, 32, 0.12);
  --coov-gradient: linear-gradient(135deg, #7035e7 0%, #5821b3 55%, #160d20 100%);
  --font-sans: "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}

body {
  background: var(--coov-plum);
  color: var(--coov-ivory);
  font-family: var(--font-sans);
  font-synthesis: none;
}

::selection {
  background: var(--coov-purple);
  color: white;
}

:focus-visible {
  outline: 3px solid var(--coov-gold);
  outline-offset: 3px;
}
```

Do not add externally hosted font files.

- [ ] **Step 3: Implement the exact container and section contracts**

`container.tsx`:

```tsx
import { cn } from "@/lib/cn";

export function Container({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
```

`section.tsx`:

```tsx
import { cn } from "@/lib/cn";

type SectionProps = React.PropsWithChildren<{
  className?: string;
  id?: string;
  as?: "section" | "div";
}>;

export function Section({ className, children, id, as = "section" }: SectionProps) {
  const Tag = as;
  return (
    <Tag id={id} className={cn("py-16 md:py-20 lg:py-24", className)}>
      {children}
    </Tag>
  );
}
```

`cn.ts`:

```ts
export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
```

- [ ] **Step 4: Implement the typography primitives with a fixed scale**

Use `Heading` variants `display | h1 | h2 | h3 | h4` and `Text` variants `large | body | small | caption`. The class contract must be centralized, e.g. display uses responsive `text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]`, `font-semibold`, tight leading/tracking; body remains readable with `leading-7`.

- [ ] **Step 5: Implement Button, Badge, Card, and SectionHeading**

Button variants:

```ts
export type ButtonVariant = "primary" | "light" | "outline" | "ghost";
```

Required visual behavior:
- `primary`: Bright Purple background, white text, Deep Purple hover.
- `light`: Ivory background, Dark Plum text.
- `outline`: transparent, 1px current/brand border.
- `ghost`: transparent, restrained hover surface.

All buttons must use `min-h-11`, rounded-full or `rounded-2xl` consistently, visible focus via global rule, and `disabled:pointer-events-none disabled:opacity-50`.

- [ ] **Step 6: Re-run unit checks and commit**

Run:

```bash
pnpm test tests/unit/design-system.test.ts
pnpm typecheck
pnpm lint
```

Expected: PASS.

Commit:

```bash
git add src tests
git commit -m "feat: add COOV design system"
```

---

### Task 3: Build centralized site configuration, accessible navigation, footer, and controlled store CTAs

**Files:**
- Create: `src/config/site.ts`
- Create: `src/config/navigation.ts`
- Create: `src/config/social.ts`
- Create: `src/config/download-links.ts`
- Create: `src/types/navigation.ts`
- Create: `src/lib/store-links.ts`
- Create: `src/components/ui/app-store-buttons.tsx`
- Create: `src/components/layout/header.tsx`
- Create: `src/components/layout/navigation.tsx`
- Create: `src/components/layout/mobile-navigation.tsx`
- Create: `src/components/layout/footer.tsx`
- Create: `src/components/layout/site-shell.tsx`
- Modify: `src/app/layout.tsx`
- Test: `tests/unit/store-links.test.ts`
- Test: `tests/unit/navigation-config.test.ts`
- Test: `tests/e2e/navigation.spec.ts`

**Interfaces:**
- Produces: `siteConfig`, `navigation`, `downloadLinks`, `resolveStoreLink()`, `AppStoreButtons`, site shell.
- `resolveStoreLink(url)` returns `{ status: "available", href } | { status: "coming-soon", href: null }`.

- [ ] **Step 1: Write the store fallback tests**

```ts
import { describe, expect, it } from "vitest";
import { resolveStoreLink } from "@/lib/store-links";

describe("resolveStoreLink", () => {
  it.each([undefined, null, "", "   "])("treats %j as coming soon", (value) => {
    expect(resolveStoreLink(value)).toEqual({ status: "coming-soon", href: null });
  });

  it("accepts a valid https URL", () => {
    expect(resolveStoreLink("https://example.com/app")).toEqual({
      status: "available",
      href: "https://example.com/app",
    });
  });

  it("rejects javascript and fragment URLs", () => {
    expect(resolveStoreLink("javascript:alert(1)")).toEqual({ status: "coming-soon", href: null });
    expect(resolveStoreLink("#")).toEqual({ status: "coming-soon", href: null });
  });
});
```

- [ ] **Step 2: Implement centralized config**

`site.ts`:

```ts
export const siteConfig = {
  name: "COOV",
  tagline: "Move Value.",
  description: "Send, pay, save, and manage everyday money with COOV.",
  company: "Octalve Ltd",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;
```

`download-links.ts`:

```ts
export const downloadLinks = {
  ios: process.env.NEXT_PUBLIC_APP_STORE_URL || "",
  android: process.env.NEXT_PUBLIC_PLAY_STORE_URL || "",
} as const;
```

`.env.example`:

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_STORE_URL=
NEXT_PUBLIC_PLAY_STORE_URL=
```

- [ ] **Step 3: Implement `resolveStoreLink` and store buttons**

```ts
export function resolveStoreLink(input: string | null | undefined) {
  const value = input?.trim();
  if (!value) return { status: "coming-soon" as const, href: null };

  try {
    const url = new URL(value);
    if (url.protocol !== "https:") throw new Error("unsupported protocol");
    return { status: "available" as const, href: url.toString() };
  } catch {
    return { status: "coming-soon" as const, href: null };
  }
}
```

`AppStoreButtons` must render real links only for `available` values; unavailable entries render semantic disabled buttons with visible `Coming Soon` text and no `href`.

- [ ] **Step 4: Define navigation exactly once**

Visible desktop navigation:

```ts
export const navigation = [
  { label: "Personal", href: "/personal" },
  { label: "Business", href: "/business" },
  {
    label: "Features",
    children: [
      { label: "All features", href: "/features" },
      { label: "Savings", href: "/savings" },
      { label: "Bills & Payments", href: "/bills-and-payments" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    label: "Company",
    children: [{ label: "About COOV", href: "/about" }],
  },
  { label: "Help", href: "/help" },
] as const;
```

Write `navigation-config.test.ts` to assert every `href` is unique and starts with `/`.

- [ ] **Step 5: Build Header, desktop Navigation, mobile menu, and Footer**

Use `next/image` with the dark-background COOV logo in the dark default shell. Header requirements:
- sticky or fixed only if it preserves content offset;
- dark plum/translucent surface;
- logo left;
- navigation centered/right;
- `Get COOV` CTA to `/download`;
- mobile menu button with `aria-expanded`, `aria-controls`, and accessible name;
- Escape closes mobile menu; selecting a mobile link closes it.

Footer must include brand, concise product/company links, legal links, and `COOV is a financial technology product of Octalve Ltd.` without fabricated regulatory claims.

- [ ] **Step 6: Add navigation E2E tests**

`tests/e2e/navigation.spec.ts`:

```ts
import { expect, test } from "@playwright/test";

test("desktop navigation reaches core routes", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Personal" })).toHaveAttribute("href", "/personal");
  await expect(page.getByRole("link", { name: "Business" })).toHaveAttribute("href", "/business");
  await expect(page.getByRole("link", { name: "Get COOV" })).toHaveAttribute("href", "/download");
});

test("mobile menu is keyboard-operable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: /menu/i });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "Personal" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
});
```

- [ ] **Step 7: Verify and commit**

```bash
pnpm test
pnpm test:e2e tests/e2e/navigation.spec.ts
pnpm typecheck
pnpm lint
git add .
git commit -m "feat: add COOV site shell and navigation"
```

---

### Task 4: Build the flagship COOV homepage with local visuals and bento/cinematic storytelling

**Files:**
- Create: `src/components/shared/app-phone-mockup.tsx`
- Create: `src/components/shared/feature-card.tsx`
- Create: `src/components/shared/app-download-cta.tsx`
- Create: `src/features/home/components/hero-section.tsx`
- Create: `src/features/home/components/trust-strip.tsx`
- Create: `src/features/home/components/features-grid-section.tsx`
- Create: `src/features/home/components/transfers-section.tsx`
- Create: `src/features/home/components/virtual-account-section.tsx`
- Create: `src/features/home/components/bills-section.tsx`
- Create: `src/features/home/components/savings-section.tsx`
- Create: `src/features/home/components/business-section.tsx`
- Create: `src/features/home/components/security-section.tsx`
- Create: `src/features/home/components/app-showcase-section.tsx`
- Create: `src/features/home/components/download-section.tsx`
- Modify: `src/features/home/page.tsx`
- Create original local visual assets under `public/images/home/` and `public/app/mockups/`
- Test: `tests/unit/local-assets.test.ts`
- Test: `tests/e2e/home.spec.ts`

**Interfaces:**
- Consumes: design primitives, shell, store buttons, authoritative palette.
- Produces: complete flagship homepage and reusable app mockup/feature card/CTA components.

- [ ] **Step 1: Add a local-asset policy test**

```ts
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

describe("image policy", () => {
  it("does not hotlink production image sources", () => {
    const files = walk("src").filter((file) => /\.(ts|tsx)$/.test(file));
    const offenders = files.filter((file) => /src\s*=\s*["'`]https?:\/\//.test(readFileSync(file, "utf8")));
    expect(offenders).toEqual([]);
  });
});
```

- [ ] **Step 2: Create original/local homepage visuals**

Create local assets with COOV’s palette and payment context; do not use reference-site assets. Required minimum set:

```text
public/images/home/hero-payment-scene.webp
public/images/home/merchant-scene.webp
public/images/home/security-scene.webp
public/app/mockups/home-dashboard.webp
public/app/mockups/send-money.webp
public/app/mockups/bills.webp
public/app/mockups/savings.webp
public/app/mockups/business.webp
```

If final mobile screenshots are not available, create clearly branded conceptual UI mockups that do not imply unsupported balances, partners, yields, or metrics. Any displayed names/amounts must be obviously illustrative and generic.

- [ ] **Step 3: Build the Hero section**

Use a dark-plum cinematic composition with the authoritative dark-background logo in the header, a large editorial headline, local hero visual, purple glow layers, and product UI overlay.

Approved homepage hero copy for this implementation:

```text
Eyebrow: COOV — Move Value.
H1: Money moves better with COOV.
Body: Send money, pay bills, save, and manage everyday payments from one simple app.
Primary CTA: Get COOV
Secondary CTA: Explore features
```

Do not add user-count/rating badges.

- [ ] **Step 4: Build the trust/product-proof strip without invented metrics**

Use capability statements only:

```text
Built for everyday payments
Identity-first account setup
Secure transaction flows
Personal and business experiences
```

This is proof by product principles, not fabricated scale.

- [ ] **Step 5: Build the SpaceTrade-inspired COOV bento grid**

Use these cards and treatments:

```text
Send & receive money — wide purple/dark card + send-money mockup
Pay bills — compact deep-purple card + bills mockup
Save with purpose — ivory/gold card + savings mockup
Virtual account — dark plum card + account-number concept
COOV for Business — wide cinematic merchant card + business mockup
Security by design — compact dark card + security visual
```

Card spans must collapse to one column on small screens and never depend on fixed pixel widths.

- [ ] **Step 6: Build the cinematic story sections**

Implement individual sections in this order with alternating dark/light rhythm:

1. Transfers — dark photographic section: `Send money without the stress.`
2. Virtual account — ivory section: `A simple way to receive money.`
3. Bills — purple/ivory mix: `Everyday payments. One place.`
4. Savings — gold-accented dark section: `Put money aside for what matters.`
5. Business — cinematic merchant section: `Get paid. Stay organised. Keep moving.`
6. Security — deep plum: `Protection should be built in.`
7. App showcase — ivory: product UI collage.
8. Download — signature purple gradient with controlled store CTA state.

- [ ] **Step 7: Compose `src/features/home/page.tsx` only from sections**

```tsx
import { AppShowcaseSection } from "./components/app-showcase-section";
import { BillsSection } from "./components/bills-section";
import { BusinessSection } from "./components/business-section";
import { DownloadSection } from "./components/download-section";
import { FeaturesGridSection } from "./components/features-grid-section";
import { HeroSection } from "./components/hero-section";
import { SavingsSection } from "./components/savings-section";
import { SecuritySection } from "./components/security-section";
import { TransfersSection } from "./components/transfers-section";
import { TrustStrip } from "./components/trust-strip";
import { VirtualAccountSection } from "./components/virtual-account-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustStrip />
      <FeaturesGridSection />
      <TransfersSection />
      <VirtualAccountSection />
      <BillsSection />
      <SavingsSection />
      <BusinessSection />
      <SecuritySection />
      <AppShowcaseSection />
      <DownloadSection />
    </main>
  );
}
```

- [ ] **Step 8: Add homepage E2E coverage**

```ts
import { expect, test } from "@playwright/test";

for (const width of [390, 768, 1440]) {
  test(`homepage does not overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Money moves better with COOV");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
}

test("homepage store controls expose coming soon when URLs are absent", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Coming Soon").first()).toBeVisible();
});
```

- [ ] **Step 9: Verify and commit**

```bash
pnpm test
pnpm test:e2e tests/e2e/home.spec.ts
pnpm typecheck
pnpm lint
git add .
git commit -m "feat: build COOV flagship homepage"
```

---

### Task 5: Build Personal, Features, Savings, and Bills & Payments pages

**Files:**
- Create route shims: `src/app/personal/page.tsx`, `src/app/features/page.tsx`, `src/app/savings/page.tsx`, `src/app/bills-and-payments/page.tsx`
- Create feature pages and section components under `src/features/personal/`, `src/features/features/`, `src/features/savings/`, `src/features/bills-and-payments/`
- Create local assets under `public/images/personal/`, `public/images/savings/`, `public/images/bills/`
- Test: `tests/e2e/consumer-pages.spec.ts`

**Interfaces:**
- Consumes: shared shell/primitives/mockups/CTA.
- Produces: complete customer-facing consumer routes.

- [ ] **Step 1: Write route/render E2E tests first**

```ts
import { expect, test } from "@playwright/test";

const pages = [
  ["/personal", "Everyday money, made simpler."],
  ["/features", "Everything COOV brings together."],
  ["/savings", "Save for what matters."],
  ["/bills-and-payments", "Pay the everyday things from one place."],
] as const;

for (const [path, heading] of pages) {
  test(`${path} renders its primary message without overflow`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
    expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);
  });
}
```

- [ ] **Step 2: Implement route shims only**

Each route file follows exactly:

```tsx
import PersonalPage from "@/features/personal/page";
export default function Page() { return <PersonalPage />; }
```

Use the matching feature import for each route; do not place page sections in route files.

- [ ] **Step 3: Implement Personal sections**

Required components:

```text
personal-hero.tsx
account-section.tsx
transfers-section.tsx
virtual-account-section.tsx
payments-section.tsx
savings-section.tsx
personal-security-section.tsx
download-cta.tsx
```

Copy principles: benefits first, no unsupported fees/rates/limits, no regulatory claims.

- [ ] **Step 4: Implement Features overview as a richer bento/product index**

Required components:

```text
features-hero.tsx
feature-index-grid.tsx
money-movement-section.tsx
payments-section.tsx
savings-section.tsx
business-section.tsx
security-section.tsx
features-download-cta.tsx
```

Each feature card links to the appropriate detail route where one exists.

- [ ] **Step 5: Implement Savings without invented yield claims**

Use copy such as:

```text
H1: Save for what matters.
Body: Create room for goals, plans, and the things you want to do next.
```

Do not mention interest, ROI, APY, guaranteed returns, or lock durations unless supplied later as verified product facts.

- [ ] **Step 6: Implement Bills & Payments**

Show agreed categories only: airtime, data, electricity, TV subscriptions, and supported utility categories. Do not display provider logos unless authoritative/local assets are later supplied.

- [ ] **Step 7: Verify and commit**

```bash
pnpm test:e2e tests/e2e/consumer-pages.spec.ts
pnpm typecheck
pnpm lint
git add .
git commit -m "feat: add COOV consumer product pages"
```

---

### Task 6: Build Business, Security, and About pages with accurate fintech trust messaging

**Files:**
- Create route shims: `src/app/business/page.tsx`, `src/app/security/page.tsx`, `src/app/about/page.tsx`
- Create feature sections under `src/features/business/`, `src/features/security/`, `src/features/about/`
- Create local visuals under `public/images/business/`, `public/images/security/`, `public/images/about/`
- Test: `tests/e2e/trust-pages.spec.ts`

**Interfaces:**
- Consumes: shared shell/primitives and business/security visual assets.
- Produces: business acquisition page and trust/company pages without unverifiable claims.

- [ ] **Step 1: Write page contract tests**

Test headings:

```text
/business  -> Payments that keep business moving.
/security  -> Security is part of the product.
/about     -> COOV is built to move value simply.
```

Also assert About includes `Octalve Ltd` and Security does not contain `CBN licensed` or `NDIC insured`.

- [ ] **Step 2: Implement Business page**

Required sections:

```text
business-hero.tsx
payment-collection-section.tsx
merchant-tools-section.tsx
business-dashboard-section.tsx
reporting-section.tsx
business-security-section.tsx
business-cta.tsx
```

Describe merchant/payment collection/reporting only at capability level consistent with the agreed COOV scope.

- [ ] **Step 3: Implement Security page**

Required sections:

```text
security-hero.tsx
identity-section.tsx
authentication-section.tsx
transaction-protection-section.tsx
data-handling-section.tsx
monitoring-section.tsx
security-faq-section.tsx
```

Permitted wording includes identity verification, protected authentication, transaction monitoring, secure data handling, and server-side verification. Do not claim certifications or insurance.

- [ ] **Step 4: Implement About page**

Required sections:

```text
about-hero.tsx
mission-section.tsx
principles-section.tsx
product-company-section.tsx
about-cta.tsx
```

State clearly: `COOV is a financial technology product of Octalve Ltd.`

- [ ] **Step 5: Verify and commit**

```bash
pnpm test:e2e tests/e2e/trust-pages.spec.ts
pnpm typecheck
pnpm lint
git add .
git commit -m "feat: add COOV business and trust pages"
```

---

### Task 7: Build Help, Download, and Legal experiences with graceful empty states

**Files:**
- Create route shims: `src/app/help/page.tsx`, `src/app/download/page.tsx`, `src/app/legal/privacy/page.tsx`, `src/app/legal/terms/page.tsx`, `src/app/legal/cookies/page.tsx`
- Create: `src/data/faqs.ts`
- Create: `src/components/ui/accordion.tsx`
- Create sections under `src/features/help/`, `src/features/download/`, `src/features/legal/`
- Test: `tests/unit/faq-contract.test.ts`
- Test: `tests/e2e/support-download-legal.spec.ts`

**Interfaces:**
- `Accordion` accepts `{ question: string; answer: string }[]` and handles `[]` without throwing.
- Download page uses the same centralized `downloadLinks` source as homepage CTAs.

- [ ] **Step 1: Write FAQ and download fallback tests**

FAQ test:

```ts
import { describe, expect, it } from "vitest";
import { faqs } from "@/data/faqs";

describe("FAQ data", () => {
  it("contains only non-empty question/answer pairs", () => {
    for (const faq of faqs) {
      expect(faq.question.trim().length).toBeGreaterThan(0);
      expect(faq.answer.trim().length).toBeGreaterThan(0);
    }
  });
});
```

E2E must assert the Download page contains visible `Coming Soon` state when env URLs are absent and no app-store control has an empty/fragment href.

- [ ] **Step 2: Implement accessible Accordion**

Use native `<button>` controls with `aria-expanded` and stable ids; if items are empty, render a restrained message such as `More help content is coming soon.` rather than crashing.

- [ ] **Step 3: Implement Help page**

Sections:

```text
help-hero.tsx
faq-section.tsx
support-options-section.tsx
```

Do not invent email addresses, phone numbers, WhatsApp numbers, or SLA response times. Use configurable/coming-soon support channels until verified contact details are supplied.

- [ ] **Step 4: Implement Download page**

Use one strong local app/product composition, a clear `COOV — Move Value.` message, and centralized iOS/Android controls. Missing store URLs render `Coming Soon` visibly.

- [ ] **Step 5: Implement legal pages as accurate pre-launch documents**

Use concise documents that identify COOV/Octalve Ltd and describe the website at a high level. Do not invent governing-law specifics, regulator details, data-controller addresses, or operational promises not supplied by the user. Clearly mark product-specific legal terms as pre-launch informational content where appropriate.

- [ ] **Step 6: Verify and commit**

```bash
pnpm test
pnpm test:e2e tests/e2e/support-download-legal.spec.ts
pnpm typecheck
pnpm lint
git add .
git commit -m "feat: add COOV support download and legal pages"
```

---

### Task 8: Add metadata, sitemap, robots, 404, content compliance, and local social assets

**Files:**
- Create: `src/lib/metadata.ts`
- Modify: `src/app/layout.tsx`
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Create: `src/app/not-found.tsx`
- Create local OG/social assets under `public/social/`
- Create: `tests/unit/content-compliance.test.ts`
- Create: `tests/e2e/seo-routing.spec.ts`

**Interfaces:**
- Produces metadata helpers, deterministic route list, local social-preview defaults.

- [ ] **Step 1: Add the prohibited-claim content scan**

```ts
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const prohibited = [
  /CBN\s+licensed/i,
  /NDIC\s+insured/i,
  /\b100k\+?\s+users\b/i,
  /\b5[- ]star\b/i,
  /guaranteed\s+returns?/i,
];

describe("fintech copy compliance", () => {
  it("contains no unverified claims", () => {
    const files = walk("src").filter((file) => /\.(ts|tsx)$/.test(file));
    const text = files.map((file) => readFileSync(file, "utf8")).join("\n");
    for (const pattern of prohibited) expect(text).not.toMatch(pattern);
  });
});
```

- [ ] **Step 2: Implement metadata helper and per-page metadata**

`metadata.ts` should generate titles in the format `Page | COOV` and use `siteConfig.baseUrl`. Use local `public/social/og-default.png` as default Open Graph image.

- [ ] **Step 3: Implement sitemap and robots**

Sitemap contains every required public route exactly once. Robots allows normal crawling and points to `${siteConfig.baseUrl}/sitemap.xml`.

- [ ] **Step 4: Implement custom 404**

Dark-plum page, COOV logo, concise copy, links to Home and Help. It must not depend on any remote asset.

- [ ] **Step 5: Add E2E metadata/routing checks**

Verify `/`, `/personal`, `/business`, and `/security` have COOV titles/descriptions; `/does-not-exist` shows custom 404; `/robots.txt` and `/sitemap.xml` respond successfully.

- [ ] **Step 6: Verify and commit**

```bash
pnpm test
pnpm test:e2e tests/e2e/seo-routing.spec.ts
pnpm typecheck
pnpm lint
git add .
git commit -m "feat: add COOV SEO and compliance safeguards"
```

---

### Task 9: Final responsive QA, documentation, build verification, and ZIP packaging

**Files:**
- Create: `tests/e2e/responsive-site.spec.ts`
- Create/Modify: `README.md`
- Modify as needed based on verified failures only.
- Create final artifact outside repo: `/mnt/data/coov-web.zip`

**Interfaces:**
- Consumes: completed website.
- Produces: verified repository and final ZIP handoff.

- [ ] **Step 1: Write the whole-site responsive/link test**

```ts
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/personal",
  "/business",
  "/features",
  "/savings",
  "/bills-and-payments",
  "/security",
  "/about",
  "/help",
  "/download",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
];

for (const route of routes) {
  for (const width of [390, 768, 1440]) {
    test(`${route} has no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1000 });
      const response = await page.goto(route);
      expect(response?.ok()).toBe(true);
      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(hasOverflow).toBe(false);
    });
  }
}
```

Add an internal-link crawl that checks every same-origin `a[href^="/"]` from the homepage returns a successful route.

- [ ] **Step 2: Run repository-level asset and external-image audits**

Run:

```bash
pnpm test tests/unit/local-assets.test.ts
find public -type f -size 0 -print
```

Expected: test passes and `find` prints nothing.

- [ ] **Step 3: Complete README with exact local/deployment workflow**

README must contain:

```text
Project purpose
Pinned stack
Prerequisites: Node >=22.13.0, pnpm 12.6.0
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
Folder architecture
COOV brand palette and authoritative asset paths
How to replace/add local visuals
How to configure NEXT_PUBLIC_APP_STORE_URL and NEXT_PUBLIC_PLAY_STORE_URL
How Coming Soon fallback behaves
GitHub push guidance
Vercel import/deploy guidance
No-backend note
```

- [ ] **Step 4: Run the complete verification sequence from a clean dependency state**

Run:

```bash
rm -rf node_modules .next
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

Expected: every command exits 0. Do not package if any command fails.

- [ ] **Step 5: Inspect final Git status and commit verified fixes/docs**

```bash
git status --short
git add .
git commit -m "docs: finalize COOV website handoff" || true
git status --short
```

Expected final repo status: clean.

- [ ] **Step 6: Package the final repository without transient build/dependency directories**

From `/mnt/data`:

```bash
rm -f /mnt/data/coov-web.zip
zip -r /mnt/data/coov-web.zip coov-web \
  -x 'coov-web/node_modules/*' \
     'coov-web/.next/*' \
     'coov-web/test-results/*' \
     'coov-web/playwright-report/*' \
     'coov-web/.git/*'
```

Then verify:

```bash
unzip -t /mnt/data/coov-web.zip
```

Expected: `No errors detected in compressed data`.

- [ ] **Step 7: Final handoff evidence**

Record the final commit hash and verification commands in the final response, then provide the ZIP link. Do not claim Vercel deployment has been tested unless it was actually deployed; the handoff target is local/GitHub/Vercel-ready.

---

## Self-Review Results

- **Spec coverage:** All 22 spec sections map to Tasks 1–9: brand/assets and engineering stack (1–2), architecture and shared UI (1–3), navigation (3), homepage (4), secondary pages (5–7), accessibility/store fallback (3–7), SEO/error handling (8), testing/docs/deployment readiness (9).
- **Placeholder scan:** No `TBD`, `TODO`, or unowned “implement later” steps remain. Unavailable store/contact values have explicit safe fallback behavior rather than placeholders.
- **Type consistency:** Shared public interfaces are fixed: `cn()`, `resolveStoreLink()`, `downloadLinks`, `siteConfig`, `navigation`, design primitives, and shared CTAs are defined before dependent tasks.
- **Review Focus coverage:** Missing store URLs (Tasks 3/7), local asset drift (4/9), responsive overflow (4–9), accessible navigation (3), and unverified fintech claims (8) all have explicit automated tests.
- **Scope:** This is one cohesive public website with no backend subsystem; a single plan remains appropriate.

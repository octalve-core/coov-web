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
    for (const asset of requiredAssets) expect(existsSync(join(root, asset)), asset).toBe(true);
  });
  it("uses the agreed verification scripts", () => {
    const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
    expect(pkg.scripts).toMatchObject({dev:"next dev",build:"next build",start:"next start",lint:"eslint .",typecheck:"tsc --noEmit",test:"vitest run","test:e2e":"playwright test"});
  });
});

import { describe, expect, it } from "vitest";
import { navigation } from "@/config/navigation";
import type { NavigationItem } from "@/types/navigation";

function flatten(items: readonly NavigationItem[]): string[] {
  return items.flatMap((item) =>
    item.kind === "link" ? [item.href] : flatten(item.children),
  );
}

describe("navigation", () => {
  it("uses unique internal paths", () => {
    const hrefs = flatten(navigation);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    for (const href of hrefs) expect(href.startsWith("/")).toBe(true);
  });
});

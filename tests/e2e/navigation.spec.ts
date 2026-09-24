import { expect, test } from "@playwright/test";

test("desktop navigation reaches core routes", async ({ page }) => {
  await page.goto("/");

  const primaryNav = page.getByRole("navigation", { name: "Primary" });
  await expect(primaryNav.getByRole("link", { name: "Personal" })).toHaveAttribute("href", "/personal");
  await expect(primaryNav.getByRole("link", { name: "Business" })).toHaveAttribute("href", "/business");

  const header = page.getByRole("banner");
  await expect(header.getByRole("link", { name: "Get COOV" })).toHaveAttribute("href", "/download");
});

test("mobile menu is keyboard-operable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const trigger = page.getByRole("button", { name: /menu/i });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");

  const mobileNav = page.getByRole("navigation", { name: "Mobile primary" });
  await expect(mobileNav.getByRole("link", { name: "Personal" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
});

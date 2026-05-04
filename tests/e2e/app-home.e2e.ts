import { expect, test } from "@playwright/test";

test("opens visual preview for Drop Countdown Lite", async ({ page }) => {
  await page.goto("/preview");
  await expect(page.getByRole("heading", { name: "Drop Countdown Lite" })).toBeVisible();
  await expect(page.getByText("Upcoming release grids and countdowns for non-Plus product drops.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open workspace" })).toBeVisible();
});

test("preview is usable on a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/preview");
  await expect(page.getByText("Primary workflow")).toBeVisible();
});

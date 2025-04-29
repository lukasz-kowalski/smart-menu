import { test, expect } from "@playwright/test";

test.describe("Sidebar", () => {
  test("renders desktop sidebar at large viewport", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/en");

    const desktopSidebar = page.getByRole("complementary");
    const mobileSidebarTrigger = page.locator('[data-slot="sheet-trigger"]');

    await expect(desktopSidebar).toBeVisible();
    await expect(mobileSidebarTrigger).toBeHidden();
  });

  test("renders mobile sidebar at small viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/en");

    const desktopSidebar = page.getByRole("complementary");

    const mobileSidebarTrigger = page.locator('[data-slot="sheet-trigger"]');

    await expect(desktopSidebar).toBeHidden();
    await expect(mobileSidebarTrigger).toBeVisible();
  });

  test("should open sidebar on hamburger click and then close on close button click", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/en");

    const mobileSidebarTrigger = page.locator('[data-slot="sheet-trigger"]');

    await mobileSidebarTrigger.click();

    const mobileSidebar = page.locator('div[role="dialog"][data-state="open"]');

    await expect(mobileSidebar).toBeVisible();

    const closeButton = page.locator("nav + button");
    await closeButton.click();

    await expect(mobileSidebar).toBeHidden();
  });
});

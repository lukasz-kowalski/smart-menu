import { test, expect } from '@playwright/test';

import { isElementVisibleInViewport } from './utils/isElementVisibleInViewport';

test.describe('Sidebar', () => {
  test('renders desktop sidebar at large viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/en');

    const desktopSidebar = page.getByTestId('desktop-sidebar');
    const mobileSidebar = page.getByTestId('mobile-sidebar');

    await expect(desktopSidebar).toBeVisible();
    await expect(mobileSidebar).toBeHidden();
  });

  test('renders mobile sidebar at small viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/en');

    const desktopSidebar = page.getByTestId('desktop-sidebar');
    const mobileSidebar = page.getByTestId('mobile-sidebar');

    await expect(desktopSidebar).toBeHidden();
    await expect(mobileSidebar).toBeVisible();
  });

  test('should open sidebar on hamburger click and then close on close button click', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/en');

    const mobileSidebarTrigger = page.getByTestId('mobile-sidebar-trigger');
    await mobileSidebarTrigger.click();

    const mobileSidebar = page.getByTestId('mobile-sidebar');
    await expect(mobileSidebar).toHaveClass(/translate-x-0/);
    await page.waitForTimeout(300); // Wait for animation to finish
    const isMobileSidebarVisible = await isElementVisibleInViewport(
      page,
      '[data-testid="mobile-sidebar"]',
    );
    expect(isMobileSidebarVisible).toBe(true);

    const closeButton = page.getByTestId('mobile-sidebar-close-button');
    await closeButton.click();

    await expect(mobileSidebar).toHaveClass(/-translate-x-full/);
    await page.waitForTimeout(300); // Wait for animation to finish
    const isMobileSidebarVisibleAfterClose = await isElementVisibleInViewport(
      page,
      '[data-testid="mobile-sidebar"]',
    );
    expect(isMobileSidebarVisibleAfterClose).toBe(false);
  });
});

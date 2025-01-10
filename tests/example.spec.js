// @ts-check
import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


//  Vitest test on playwright

test.describe('App', () => {
  test('should contain a button', async ({ page }) => {
      await page.goto('http://localhost:5173/');

      const button = await page.getByRole('button');

      await expect(button).toBeVisible();
  });

  test('should count the clicks on the button', async ({page}) => {
    await page.goto('http://localhost:5173/');

    const button = await page.getByRole('button');

    await button.click();

    await expect(button).toHaveText('count is 1')
  })
});
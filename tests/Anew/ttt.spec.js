import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('link', { name: 'Under ₹399 Bestselling kurtas' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.a-link-normal').first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
});
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Anew\ttt.spec.js >> test
- Location: tests\Anew\ttt.spec.js:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Continue shopping' })

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://www.amazon.in/');
> 5  |   await page.getByRole('button', { name: 'Continue shopping' }).click();
     |                                                                 ^ Error: locator.click: Target page, context or browser has been closed
  6  |   await page.getByRole('link', { name: 'Under ₹399 Bestselling kurtas' }).click();
  7  |   const page1Promise = page.waitForEvent('popup');
  8  |   await page.locator('.a-link-normal').first().click();
  9  |   const page1 = await page1Promise;
  10 |   await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
  11 | });
```
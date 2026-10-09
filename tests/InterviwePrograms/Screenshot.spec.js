// tests/screenshot.spec.js
const { test } = require('@playwright/test');

test('Take screenshots in Playwright', async ({ page }) => {
  // Navigate to a page
  await page.goto('https://example.com');

  // 1️⃣ Full page screenshot
  await page.screenshot({ path: 'fullpage.png', fullPage: true });

  // 2️⃣ Viewport screenshot (default, only visible area)
  await page.screenshot({ path: 'viewport.png' });

  // 3️⃣ Element screenshot
  const heading = page.locator('h1');
  await heading.screenshot({ path: 'heading.png' });

  // 4️⃣ Screenshot with timestamp (avoid overwrite)
  const timestamp = Date.now();
  await page.screenshot({ path: `screenshot-${timestamp}.png`, fullPage: true });
});

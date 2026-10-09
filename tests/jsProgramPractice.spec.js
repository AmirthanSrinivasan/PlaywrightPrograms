// @ts-check
const { test, expect } = require('@playwright/test');

test('Fetch only hotel names under Hot hotel deals right now', async ({ page }) => {
  await page.goto('https://www.trivago.in/en-IN?themeId=280', { waitUntil: 'domcontentloaded' });

  // Robust cookie dialog handling (dialog has no accessible name)
  const cookieDlg = page.getByRole('dialog').filter({ hasText: /cookies?/i });
  if (await cookieDlg.isVisible()) {
    await cookieDlg.getByRole('button', { name: /^ok$/i }).click();
  }

  // Locate the section via the heading
  const heading = page.getByRole('heading', { name: /hot hotel deals right now/i });
  await expect(heading).toBeVisible();

  // Use the parent container that actually contains the list (2nd ancestor)
  const container = heading.locator('xpath=ancestor::*[self::section or self::div][2]');
  await container.scrollIntoViewIfNeeded();

  // Cards are list items inside the first list within this container
  const cards = container.getByRole('list').first().getByRole('listitem');
  await expect(cards.first()).toBeVisible();

  // Extract hotel names (title is the first button inside each card)
  const hotelNames = await cards.evaluateAll(items =>
    items.map(it => it.querySelector('button')?.textContent?.trim()).filter(Boolean)
  );

  console.log('Hotels under Hot hotel deals right now:', hotelNames);
  expect(hotelNames.length).toBeGreaterThan(0);
});

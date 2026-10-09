// @ts-check
const { test, expect } = require('@playwright/test');

test('Collect hotel names under "Hot hotel deals right now"', async ({ page }) => {
  await page.goto('https://www.trivago.in/en-IN?themeId=280&sem_keyword=trivago&sem_creativeid=72636953390707&sem_matchtype=be&sem_network=o&sem_device=c&sem_campaignid=191340818&sem_adgroupid=3930406455&sem_targetid=40966707859&cipc=br&cip=9119110005&msclkid=6e776dbfa9b713f8c0560571e342ae85', {
    waitUntil: 'domcontentloaded',
  });

  // Non-fatal close for any popup.
  await page.getByRole('button', { name: /^close$/i }).click({ timeout: 3000 }).catch(() => {});

  // Use a unique, stable container.
  const deals = page.getByTestId('landing-deals-container');
  await expect(deals).toBeVisible();

  // Optional: assert the exact heading to guard against wrong block.
  await expect(deals.getByRole('heading', { name: 'Hot hotel deals right now', exact: true })).toBeVisible();

  // Cards are list items inside the container.
  const cards = deals.getByRole('list').first().getByRole('listitem');
  await expect(cards.first()).toBeVisible();

  // Collect hotel names (prefer obvious name nodes).
  const hotelNames = await cards.evaluateAll(items =>
    items.map(el => {
      const cand = el.querySelector(
        '[data-testid="item-name"], [itemprop="name"], h3, button, a[aria-label][href*="/hotel/"]'
      );
      const text = cand?.textContent?.trim();
      if (text) return text;
      const lines = (el.textContent || '').split('\n').map(t => t.trim());
      return lines.find(t => t && !/^(₹|\d|per night|lower than|Free cancellation|Check deal|Loading)/i.test(t)) || '';
    }).filter(Boolean)
  );

  console.log('Hotels under "Hot hotel deals right now":', hotelNames);
  expect(hotelNames.length).toBeGreaterThan(0);
});

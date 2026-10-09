const { test, expect } = require('@playwright/test');

test('Trivago click Check deal for Radisson Blu (Delhi Paschim Vihar)', async ({ page }) => {
  await page.goto('https://www.trivago.in/en-IN?themeId=280&sem_keyword=trivago&sem_creativeid=72636953390707&sem_matchtype=be&sem_network=o&sem_device=c&sem_campaignid=191340818&sem_adgroupid=3930406455&sem_targetid=40966707859&cipc=br&cip=9119110005&msclkid=cd438c41a7ce11865747e48c93e3d464', { waitUntil: 'domcontentloaded' });

  // 1) Take the repeating "card" container (root of each tile)
  // In the live DOM this wrapper is consistent across tiles (class "subl9v" in your screenshot).
  const cards = page.locator('div.subl9v');
  await expect(cards.first()).toBeVisible();

  // 2) Narrow to the Radisson Blu card – use a reliable child:
  // The hotel name is rendered in a <span title="Radisson Blu Hotel New Delhi Paschim Vihar">
  // and carries data-testid like: data-testid="accommodation-name-100-2121756".
  // We match by text, but via that dedicated child element for stability.
  const radissonCard = cards.filter({
    // IMPORTANT: build the "has" locator from the SAME scope (cards.locator(...))
    has: cards.locator('[data-testid^="accommodation-name-"]', {
      hasText: /Radisson Blu Hotel New Delhi Paschim Vihar/i
    })
  });

  await expect(radissonCard).toHaveCount(1);              // ensure uniqueness
  await radissonCard.scrollIntoViewIfNeeded();            // make sure its CTA is in view

  // 3) Click the CTA inside THIS card, not any other card
  await radissonCard.getByRole('button', { name: /^check deal$/i }).click();

  // (Optional) assert that you navigated or a panel opened
  // await expect(page).toHaveURL(/deal|booking|hotel|radisson/i);

  await page.pause()
});

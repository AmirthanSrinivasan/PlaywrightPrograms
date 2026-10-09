const { test, expect } = require('@playwright/test');

test('Fetch Resort hotels and click the 2nd one', async ({ page }) => {
  // 1) Open URL
  await page.goto('https://www.trivago.in/en-IN?themeId=280&sem_keyword=trivago&sem_creativeid=72636953390707&sem_matchtype=be&sem_network=o&sem_device=c&sem_campaignid=191340818&sem_adgroupid=3930406455&sem_targetid=40966707859&cipc=br&cip=9119110005&msclkid=cd438c41a7ce11865747e48c93e3d464');

  // 2) Scroll to "Hot Hotel Deals right now" section (match text, case-insensitive)
  const dealsHeading = page.getByText(/Hot Hotel Deals right now/i);
  await dealsHeading.scrollIntoViewIfNeeded();
  await expect(dealsHeading).toBeVisible();

  // 3) Take the nearest list under that section and filter items that contain "Resort"
  // (simple assumption: hotel cards are <li> items below the heading)
  const section = dealsHeading.locator('xpath=ancestor::*[self::section or self::div][1]');
  const resortItems = section.locator('li').filter({ hasText: /Resort/i });

  // 4) Print all names
  const count = await resortItems.count();
  console.log(`Found ${count} hotels containing "Resort":`);
  for (let i = 0; i < count; i++) {
    const name = (await resortItems.nth(i).innerText()).trim();
    console.log(`- ${name}`);
  }

  // 5) Click the 2nd "Resort" hotel if present
  if (count >= 2) {
    await resortItems.nth(1).click();
    await page.waitForLoadState('load');
  } else {
    console.log('Less than 2 "Resort" hotels available.');
  }
});

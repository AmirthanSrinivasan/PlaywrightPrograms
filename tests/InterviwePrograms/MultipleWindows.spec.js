// tests/windowCount.spec.js
const { test, expect } = require('@playwright/test');

test('Open 3 windows and click in the 2nd one', async ({ page, context }) => {
  await page.goto('https://your-app-url.com'); // <-- replace

  // Click the button and wait for exactly 3 new windows (pages) to open
  const [popup1, popup2, popup3] = await Promise.all([
    context.waitForEvent('page'),   // first new window
    context.waitForEvent('page'),   // second new window
    context.waitForEvent('page'),   // third new window
    page.click('#openWindowsBtn')   // <-- replace with your button locator
  ]);

  // (Optional) Ensure all three have loaded something meaningful
  await Promise.all([
    popup1.waitForLoadState('domcontentloaded'),
    popup2.waitForLoadState('domcontentloaded'),
    popup3.waitForLoadState('domcontentloaded'),
  ]);

  // Count total pages in the context (main + 3 new)
  const allPages = context.pages();
  console.log(`Total pages (including main): ${allPages.length}`);
  expect(allPages.length).toBe(4);

  // If you want to be explicit about "second opened window":
  const secondOpened = popup2; // this is the 2nd that opened
  // or: const secondOpened = allPages.filter(p => p !== page)[1];

  // Now interact with an element in the 2nd window
  await secondOpened.bringToFront(); // helpful if the site needs focus
  await secondOpened.click('css=YOUR_SELECTOR_HERE'); // <-- replace with target element
  // e.g.: await secondOpened.getByRole('button', { name: 'Continue' }).click();

  // Add an assertion if needed
  // await expect(secondOpened).toHaveURL(/expected-path/);
});

// tests/window-handles.spec.js
const { test, expect } = require('@playwright/test');

test('Handle multiple windows like Selenium window handles', async ({ page, context }) => {  //1*************************
  // 1) Parent (main) page
  await page.goto('https://leafground.com/window.xhtml');
  const parentPage = page;  //2*************************

  // 2) Click the button that opens new windows
  //    Note: CSS id contains ":" so we must escape it as "\\:"
  const openBtn = page.locator('#j_idt88\\:j_idt91');  //3*************************
  // Wait for at least one child window to open
  const firstChild = await Promise.all([                //4*************************
    context.waitForEvent('page'),
    openBtn.click(),
  ]).then(([newPage]) => newPage);

  // (Optional) give the site a moment if it opens more than one window
  await firstChild.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(1500);

  // 3) Get all pages (parent + all children)
  const allPages = context.pages();                     //5*************************
  console.log('Total pages in context:', allPages.length);

  // 4) Separate children (like Selenium’s getWindowHandles minus parent)
  const childPages = allPages.filter(p => p !== parentPage);        //6*************************
  console.log('Child pages count:', childPages.length);
await page.screenshot({ path: 'fullpage.png', fullPage: true });
  // 5) Switch to the 2nd child (index 1) if available and click something
  if (childPages.length >= 2) {                                 //7*************************
    const secondChild = childPages[1];
    await secondChild.bringToFront();                           //8*************************
    console.log('Second child URL:', await secondChild.url());

    // Example interaction on the second child (adjust selector to your target)
    // await secondChild.getByRole('link', { name: 'Some Link' }).click();
    // await expect(secondChild).toHaveURL(/expected-path/);
  } else {
    console.log('Less than 2 child windows are open.');
  }

  // 6) Iterate over all child windows and close them (like your Selenium loop)
  for (const p of childPages) {
    // Do something per child if needed:
    console.log('Closing child page:', await p.url());
    await p.close();
  }

  // 7) Return to parent (bring to front) and continue
  await parentPage.bringToFront();
  console.log('Back to parent URL:', await parentPage.url());
  await expect(parentPage).toHaveURL(/leafground\.com\/window\.xhtml/);
});

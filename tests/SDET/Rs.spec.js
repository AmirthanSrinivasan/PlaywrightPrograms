const { test, expect } = require('@playwright/test');

test('Read name & price for iPhone 13 Pro', async ({ page }) => {
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("#userEmail").fill("Automationtest123@gmail.com")
    await page.locator("#userPassword").fill("Testing@12345")
    await page.locator("#login").click()

    await page.waitForURL("https://rahulshettyacademy.com/client/#/dashboard/dash")
    await page.waitForTimeout(2000)

  // scope to the product card that contains the text "iphone 13 pro"
  const card = page.locator(".card-body");

  // product name (inside the h5 > b in your DOM)
  const iPhone13 = card.locator("b:has-text('iphone 13 pro')")
  const productName = await iPhone13.innerText()
  console.log(productName)

/////////////////////////////////////////////////////////////////////////////////

const iphoneCard = page.locator('.card-body').filter({
  has: page.locator("b:has-text('iphone 13 pro')")})

  const name  = (await iphoneCard.locator('h5 b').innerText()).trim();
const price = (await iphoneCard.locator('.text-muted').innerText()).trim();
// const price = await iphoneCard.locator('.text-muted')

console.log(iphoneCard)
console.log(name)
console.log(price)

await page.pause()

    const iPhone13Price = iPhone13.locator('.text-muted')
    console.log(iPhone13)
    console.log("------------")
    console.log(iPhone13Price)
    const productPrice = await iPhone13Price.innerText()
  
  //const productPrice = await iPhone13Price.innerText()
  console.log(productPrice)

  console.log(iPhone13)
await page.pause()
  // product price (usually shown in an h6 under the title; contains a $)
  // If your markup differs, you can keep the :has-text('$') filter and it will still work.
  const priceText = (await card.locator("h6:has-text('$')").innerText()).trim();

  console.log('Name  :', name);
  console.log('Price :', priceText);

  // Optional: parse numeric price for later assertions/calculations
  const priceNumber = Number(priceText.replace(/[^\d.]/g, ''));
  expect(name.toLowerCase()).toContain('iphone 13 pro');
  expect(priceNumber).toBeGreaterThan(0);
});

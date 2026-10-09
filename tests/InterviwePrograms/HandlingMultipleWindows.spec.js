//Handling Multiple Windows
const {test, expect, chromium} = require('@playwright/test')

test("Multiple Windows", async ()=>{

const browser = await chromium.launch()
const context = await browser.newContext()
const page1 = await context.newPage()

await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

const pagePromise = context.waitForEvent('page')

await page1.locator("//*[@target='_blank'][text()='OrangeHRM, Inc']").click()
const newPage = await pagePromise
console.log(await newPage.title())


})
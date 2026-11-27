const{test, expect, chromium} = require('@playwright/test')

test('newTest', async()=>{

const browser = await chromium.launch()
const context = await browser.newContext()
const page1 = await context.newPage()


await page1.goto('asjbdkjas')
const pagePromise = context.waitForEvent('page')
await page1.locator('sfdksnlsk').click()

const page2 = await pagePromise
console.log(await page2.title())

})
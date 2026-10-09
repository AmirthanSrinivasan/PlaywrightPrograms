const{test, expect} = require('@playwright/test')

test('Amazon Shopping Site', async({page})=>{

    await page.goto("https://www.amazon.in/")
    const url = page.url()
    page.viewportSize()
    console.log(await page.title())

    await page.pause()

})
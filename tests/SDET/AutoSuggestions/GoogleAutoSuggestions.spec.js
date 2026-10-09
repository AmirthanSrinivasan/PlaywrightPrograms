const{test,expect} = require('@playwright/test')

test('Google Search Suggestions', async({page})=>{

    await page.goto("https://www.google.com/")
    const searchBox = page.locator("[role='combobox']")
    await searchBox.waitFor({state:'visible'})
    await searchBox.fill("Shoes")

    await page.waitForSelector("//div[@role='presentation']//span[contains(text(), 'shoes')]")
    const elements = await page.$$("//div[@role='presentation']//span[contains(text(), 'shoes')]")
    

    for(let each of elements){
        let s = await each.innerText()
        console.log(s)
    }

    await page.pause()
})
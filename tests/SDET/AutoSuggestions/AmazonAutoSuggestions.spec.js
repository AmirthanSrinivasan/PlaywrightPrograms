const{test, expect} = require('@playwright/test')

test('Amazon Auto Suggestions', async({page})=>{
    
    await page.goto("https://www.amazon.in/")
    const searchBox = page.locator("#twotabsearchtextbox")
    await searchBox.fill("iphone")

    await page.waitForSelector(".s-suggestion")
    const suggestions = await page.$$(".s-suggestion")

    for(let each of suggestions){
        let s = await each.textContent()
        console.log(s)
    }

})
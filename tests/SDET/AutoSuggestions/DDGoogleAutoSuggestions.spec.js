const{test,expect} = require('@playwright/test')

test('Google Search Suggestions', async({page})=>{

    await page.goto("https://www.google.com/")
    const searchBox = page.locator("[role='combobox']")
    await page.waitForSelector("[role='combobox']")
    await searchBox.fill("Mobile")

    //Locator, expect toBeVisible, count
    // const suggestionsList = page.locator("//li[@role='presentation']/following::div[@class='wM6W7d']")
    //const suggestionsList = page.locator("//div[@class='wM6W7d']")
    const suggestionsList = page.locator("//div[@class='lnnVSe']")
    //div[@class='lnnVSe']
    await expect(suggestionsList.first()).toBeVisible()
    let count = await suggestionsList.count()

    //Iteration, nth(i), innerText()
    for(let i=0; i<=count-1; i++){
        let s = await suggestionsList.nth(i).innerText()
            console.log(s)
        
    }

})
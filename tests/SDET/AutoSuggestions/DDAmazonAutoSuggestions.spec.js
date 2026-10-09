const{test, expect} = require('@playwright/test')

test('Amazon Auto Suggestions', async({page})=>{
    
    await page.goto("https://www.amazon.in/")
    await page.waitForSelector("#twotabsearchtextbox")
    const searchBox = page.locator("#twotabsearchtextbox")
    await searchBox.fill("Samsung")

    // const SuggestionsList = page.locator("//div[@class='s-suggestion s-suggestion-ellipsis-direction']")
    const SuggestionsList = page.locator("//div[@class='s-suggestion-container']")
    await expect(SuggestionsList.first()).toBeVisible()
    let count = await SuggestionsList.count()

    for(let i=0; i<=count-1; i++){
        let s = await SuggestionsList.nth(i).innerText()
        let firstName = s.split("\n")[0].trim()
        console.log(firstName)

        if(firstName =="samsung m36"){
            await SuggestionsList.nth(i).click()
        }
    }


    
    
})
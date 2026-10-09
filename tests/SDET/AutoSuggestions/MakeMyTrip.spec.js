const{test, expect}=require('@playwright/test')

test('Make My Trip - Auto Suggestions', async({page})=>{

    await page.goto("https://www.makemytrip.com/")
    
    await page.waitForSelector("span[data-cy='closeModal']")
    const popupCloseBtn = page.locator("span[data-cy='closeModal']")
    await popupCloseBtn.click()
    const from = page.locator("#fromCity")
    await from.click()
    await page.getByPlaceholder("From").fill("Chennai")


    //SuggestionBox
    //await page.locator("ul[role='listbox']")
    await page.waitForSelector("span[class='makeFlex flexOne spaceBetween appendRight10']")
    const citySuggestions = await page.$$("span[class='makeFlex flexOne spaceBetween appendRight10']")
    for(let each of citySuggestions){
        let names = await each.textContent()
        console.log(names)
    }
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    //Other Cities
    await page.waitForSelector("//div[@class='makeFlex column flexOne appendRight10']")
    const otherCities =await page.$$("//div[@class='makeFlex column flexOne appendRight10']")
    for(let each of otherCities){
        let others = await each.textContent()
        console.log(others)
    }

    await page.pause()



   

})
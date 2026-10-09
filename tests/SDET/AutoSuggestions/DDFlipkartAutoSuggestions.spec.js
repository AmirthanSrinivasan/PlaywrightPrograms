const{test, expect}=require('@playwright/test')

test('Flipkart Suggestions', async({page})=>{

    await page.goto("https://www.flipkart.com/")
    await page.waitForSelector("//input[@name = 'q']")
    const searchBox = page.locator("//input[@name = 'q']")
    await searchBox.fill("TV")

    // const suggestionsList = page.locator("//li[@class='_3D0G9a']//div[@class='YGcVZO _2VHNef']")
    const suggestionsList = page.locator("//div[@class='YGcVZO _2VHNef']")
    await expect(suggestionsList.first()).toBeVisible()
    let count = await suggestionsList.count()

    for(let i=0; i<=count-1; i++){
      let name = await suggestionsList.nth(i).innerText()
      let firstName = await name.split("\n")[0].trim()
      console.log(firstName)
    }

})
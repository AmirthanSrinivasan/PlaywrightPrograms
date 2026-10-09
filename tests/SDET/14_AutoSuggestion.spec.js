const{test,expect} = require('@playwright/test')

test('Flipkart Auto Suggestion', async({page})=>{

    await page.goto("https://www.flipkart.com/")
    //await page.locator("//label[@for='src']/following::div[@class='input-area']/following::div[@class='textboxes fl textarea']").fill("Delhi")
    const searchBox = page.getByPlaceholder("Search for Products, Brands and More")
    await searchBox.fill("iPhone 15")
    await page.waitForSelector("._1sFryS ._3D0G9a");
    const suggestions = await page.$$("._1sFryS ._3D0G9a") //common Locator for all suggestions
   

    for(let each of suggestions){
        const suggestionItems = await each.textContent()
        console.log(suggestionItems.replace("in Mobiles", ""))

        if(suggestionItems == "iphone 15 128 gb 5g"){ 
            await each.click()                      //Clicking a particular Suggestion
            break;
        }
    }

    await page.pause()
    
})
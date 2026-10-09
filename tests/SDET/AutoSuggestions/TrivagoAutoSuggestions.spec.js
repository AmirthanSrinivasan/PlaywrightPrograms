const{test, expect} = require('@playwright/test')

test('Trivago Auto Suggestions', async({page})=>{

    page.goto("https://www.trivago.in/")
   
    const destination = page.getByPlaceholder("Where to?")
    await destination.waitFor({state:'visible'})
    await destination.click()
    await destination.fill("Chennai")
    await page.pause()

})
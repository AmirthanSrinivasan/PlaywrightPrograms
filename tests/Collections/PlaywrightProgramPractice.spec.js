const{test, expect} = require('@playwright/test')

test.describe('Flipkart Scenarios', async()=>{

test('Search iPhone and check how many results are displaying', async({page})=>{
    await page.goto("https://www.flipkart.com/")
    const searchBox = page.getByPlaceholder('Search for Products, Brands and More')
    await searchBox.fill("iphone 15")
    await searchBox.press("Enter")

    await page.waitForLoadState('networkidle');
    const allResults = page.locator(".tUxRFH")
    const count = await allResults.count()
    console.log("Total Number of Results: "+ count)


    //
    // const productNames = page.locator(".KzDlHZ");
    // const names = await productNames.allInnerTexts();
    // const productPrice = page.locator("//div[@class='tUxRFH']//div[@class='hl05eU']")
    // const price = await productPrice.allInnerTexts();


    const cards = page.locator("//div[@class='tUxRFH']");
    const cardsCount = await cards.count();
    console.log("Cards Count" + cardsCount)

    let m = new Map()
    for(let i =0; i<=cardsCount-1; i++){
        const card = cards.nth(i)

        const names = await card.locator(".KzDlHZ").innerText();
        const price = await card.locator(".hl05eU").innerText();

        m.set(names,price)
    }

    console.log(m)

})

})
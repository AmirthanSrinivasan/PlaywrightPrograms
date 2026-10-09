const{test, expect}=require('@playwright/test')

test('Flipkart Suggestions', async({page})=>{

    await page.goto("https://www.flipkart.com/")
    await page.waitForSelector("//input[@name = 'q']")
    const searchBox = page.locator("//input[@name = 'q']")
    await searchBox.click()
    await searchBox.fill("Tommy")


    
    
    const suggestionList = page.locator("//div[@class='YGcVZO _2VHNef']")
    await expect(suggestionList.first()).toBeVisible()
    let count = await suggestionList.count()
    

    for(let i=0; i<=count-1; i++){
        let s = await suggestionList.nth(i).innerText()
        let firstLine = s.split("\n")[0].trim()   
        console.log(firstLine)
    }

    // for (let i = 0; i <= count-1; i++) {
    // let firstLine = await suggestionList.nth(i).evaluate(el => {
    //   return Array.from(el.childNodes)
    //     .filter(n => n.nodeType === Node.TEXT_NODE) // ignore children <div>
    //     .map(n => n.textContent.trim())[0] || ""
    // })
    // console.log(firstLine)
  //}

    

})
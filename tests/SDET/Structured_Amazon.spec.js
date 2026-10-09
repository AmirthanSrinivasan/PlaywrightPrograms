const{test, expect}=require('@playwright/test')

test('Amazon Scenario', async({page})=>{

    await page.goto("https://www.amazon.in/")
   const searchBox =  page.locator("#twotabsearchtextbox")

   //Search iPhone15 and Hit Enter
   await searchBox.fill("iPhone 15")
   await searchBox.press("Enter")

   await page.pause()

//Taking the locator common for all the suggestion list
const productWidgets = page.locator("div[role='listitem']")

//Specifying to filter only the required product from the list
const iPhone15_256_Blue = productWidgets.filter({
     
     //has: page.locator("span", { hasText: /^\s*Apple iPhone 15 \(256 GB\) - Blue\s*$/i })
     //has: page.locator("span", { hasText: /^Apple iPhone 15 \(256 GB\) - Blue$/ })  //----> Exact Match, case sensitive
    //has: page.locator("span", { hasText: /^Apple iPhone 15 \(256 GB\) - blue$/i })  //----> caseInsensitive
    //has: page.locator("span", { hasText: /iPhone 15/i }) //----> Partial Match
    has: page.locator("span", { hasText: /iPhone 15.*256.*Blue/i })   //---> Multiple filters in one statement
})

//Clicking the particular Product clickable area (Title area in most cases)
const iPhone15Blue = iPhone15_256_Blue.locator(".a-size-medium")
await iPhone15Blue.click()




    

})
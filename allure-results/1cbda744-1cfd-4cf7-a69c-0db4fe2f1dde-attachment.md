# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SDET\Structured_Amazon.spec.js >> Amazon Scenario
- Location: tests\SDET\Structured_Amazon.spec.js:3:1

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#twotabsearchtextbox')

```

# Test source

```ts
  1  | const{test, expect}=require('@playwright/test')
  2  | 
  3  | test('Amazon Scenario', async({page})=>{
  4  | 
  5  |     await page.goto("https://www.amazon.in/")
  6  |    const searchBox =  page.locator("#twotabsearchtextbox")
  7  | 
  8  |    //Search iPhone15 and Hit Enter
> 9  |    await searchBox.fill("iPhone 15")
     |                    ^ Error: locator.fill: Target page, context or browser has been closed
  10 |    await searchBox.press("Enter")
  11 | 
  12 |    await page.pause()
  13 | 
  14 | //Taking the locator common for all the suggestion list
  15 | const productWidgets = page.locator("div[role='listitem']")
  16 | 
  17 | //Specifying to filter only the required product from the list
  18 | const iPhone15_256_Blue = productWidgets.filter({
  19 |      
  20 |      //has: page.locator("span", { hasText: /^\s*Apple iPhone 15 \(256 GB\) - Blue\s*$/i })
  21 |      //has: page.locator("span", { hasText: /^Apple iPhone 15 \(256 GB\) - Blue$/ })  //----> Exact Match, case sensitive
  22 |     //has: page.locator("span", { hasText: /^Apple iPhone 15 \(256 GB\) - blue$/i })  //----> caseInsensitive
  23 |     //has: page.locator("span", { hasText: /iPhone 15/i }) //----> Partial Match
  24 |     has: page.locator("span", { hasText: /iPhone 15.*256.*Blue/i })   //---> Multiple filters in one statement
  25 | })
  26 | 
  27 | //Clicking the particular Product clickable area (Title area in most cases)
  28 | const iPhone15Blue = iPhone15_256_Blue.locator(".a-size-medium")
  29 | await iPhone15Blue.click()
  30 | 
  31 | 
  32 | 
  33 | 
  34 |     
  35 | 
  36 | })
```
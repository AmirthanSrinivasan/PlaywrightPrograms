const{test, expect} = require('@playwright/test')

test('Rahul Shetty', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("#userEmail").fill("Automationtest123@gmail.com")
    await page.locator("#userPassword").fill("Testing@12345")
    await page.locator("#login").click()

    await page.waitForURL("https://rahulshettyacademy.com/client/#/dashboard/dash")
    await page.waitForTimeout(2000)
    //await page.getByText("iphone 13 pro").locator(".btn").click()
    //const iPhone13 = page.locator(".card-body:has-text('iPhone 13 Pro')") //-->ChatGpt
    //h5/b[text()='iphone 13 pro']/following::button[contains(text(),'Add To Cart')] //--> Xpath Locator
    //await page.locator("//h5/b[text()='iphone 13 pro']/ancestor::div[@class='card-body']//button[contains(text(),'Add To Cart')]").click(); //--> Xpath Locator
    await page.locator(".card-body:has-text('iphone 13 pro') .btn:has-text('Add To Cart')").click(); //-->Playwright Using has-text


    ///const iPhone13 = page.locator("//div[@class='card-body']//b[contains(text(), 'iphone 13 pro')]")
    //const addToCart = iPhone13.getByText(" Add To Cart")
    //const addToCart = iPhone13.locator(contains(text(), "Add to cart"))
    //await addToCart.click()

    const cartIcon = page.locator("[routerlink='/dashboard/cart']")
    await cartIcon.click()

    await page.pause()

})
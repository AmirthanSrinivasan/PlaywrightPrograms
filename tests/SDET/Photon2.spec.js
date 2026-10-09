const {test, expect} = require('@playwright/test')

test.only('Photon 2 Rahul Shetty', async({page})=>{

     await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("#userEmail").fill("Automationtest123@gmail.com")
    await page.locator("#userPassword").fill("Testing@12345")
    await page.locator("#login").click()

    //Find the common Locator
    const card = page.locator(".card-body")

    //Navigate to the particular product with the above card
    const iPhone13Pro = card.filter({
        has:page.locator("b", {hasText: /iphone 13 pro/i})
    })

    //Get the fields of the poduct by using the nearby TagName & InnerText
    const productName = await iPhone13Pro.locator("h5").innerText()
    console.log("ProductName: "+productName)
    const productPrice = await iPhone13Pro.locator(".text-muted").innerText()
    console.log("Product Price : "+productPrice)


    //click on the Add to Cart button
    const addToCart = iPhone13Pro.locator("button", {hasText: /Add To Cart/i})
    await addToCart.click()

    //Clicking Cart Icon
    const cartIcon = page.locator("button[routerlink='/dashboard/cart']")
    await cartIcon.click()

    //Cart page common Box and using the tag name get the Inner Text
    const cartSec = page.locator(".cart")
    const pName = await cartSec.locator("h3").innerText()
    const pPrice = await cartSec.locator("p").nth(1).innerText()
    console.log(pName)
    console.log(pPrice)
    //Cart Validation
    expect(productName).toEqual(pName)
    expect(productPrice.replace("$", "").trim()).toEqual(pPrice.replace("MRP $", "").trim())

    //Move to Checkout
    const checkoutBtn = page.getByRole("button", {name: 'Checkout'})
    await checkoutBtn.click()

    //Country Suggestion Box
    await page.waitForTimeout(2000)
    const countryBox = page.getByPlaceholder("Select Country")
    await countryBox.click()
    await countryBox.type("Ind")

    const countrySuggestion = page.locator("//span[@class='ng-star-inserted']")
    //await page.pause()
    await expect(countrySuggestion.first()).toBeVisible()
    const num = await countrySuggestion.count()
   
    for(let i=0; i<=num-1; i++){
        let cName = await countrySuggestion.nth(i).innerText()
       const c =  cName.trim()
        console.log(c)

        if(c == "India"){
            await countrySuggestion.nth(i).click()
            break;
        }
    }


    
    await page.pause()
    
    
})
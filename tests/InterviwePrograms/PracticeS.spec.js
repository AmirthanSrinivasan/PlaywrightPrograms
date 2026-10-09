const{test, expect}=require('@playwright/test')

test.describe('Login Scenarios', ()=>{
    const baseURL= "https://www.saucedemo.com/"
    const username1= "standard_user"
    const password1= "secret_sauce"

    async function login(page,username,password){
        await page.goto(baseURL)
        await page.getByPlaceholder("Username").fill(username)
        await page.getByPlaceholder("Password").fill(password)
        await page.locator('#login-button').click()
    }

    test('Valid Login', async({page})=>{
        await login(page,username1, password1)
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
        await expect(page).toHaveTitle("Swag Labs")
    })
})
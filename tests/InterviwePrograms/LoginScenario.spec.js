const{test, expect} = require('@playwright/test');
const { log } = require('console');

const baseURL = "https://www.saucedemo.com/"
const username = "standard_user"
const password = "secret_sauce"

async function login(page, username, password){
    await page.goto(baseURL);
    await page.getByPlaceholder('Username').fill(username)
    await page.getByPlaceholder('Password').fill(password)
    await page.locator('#login-button').click()
}

test.describe('Website Login Scenarios', ()=>{
    test('Valid Login', async({page})=>{
        await login(page,username,password)
        //Assertions
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(page).toHaveTitle("Swag Labs")
        const items = page.locator('.inventory_item')
        const count = await items.count()
        
        expect(count).toBeGreaterThan(0)

    })
    test('Invalid Login', async({page})=>{
        await login(page,username,"xyz")
        //
        const error = page.locator("h3[data-test='error']");
        expect(error).toBeVisible;

    })
})


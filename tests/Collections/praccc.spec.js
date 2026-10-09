const{test, expect} = require('@playwright/test')
const { parseArgs } = require('util')

test('login sample websire', async({page})=>{

    await page.goto('https://www.saucedemo.com/')
    const username = await page.getByPlaceholder("Username").fill("standard_user")
    const password = await page.getByPlaceholder("Password").fill("secret_sauce")
    const submitBtn = await page.locator("#login-button").click()

    // await username.fill("standard_user")
    // await password.fill("secret_sauce")
    // await submitBtn.click()

    await page.pause()


})
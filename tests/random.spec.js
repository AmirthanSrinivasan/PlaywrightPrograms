const{test, expect} = require('@playwright/test')

test('Name, @amirthan', async({page})=>{

    await page.goto('https://www.google.com/');
    await page.pause();

})

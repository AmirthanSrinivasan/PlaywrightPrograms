const{test, expect} = require('@playwright/test')

test('Handling web tables', async({page})=>{

    await page.goto('https://demoqa.com/webtables')

    const table = page.locator(".table-hover")

    const columns = table.locator('thead tr th')


})
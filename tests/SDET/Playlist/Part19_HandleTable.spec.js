const{test, expect} = require('@playwright/test')

test('Handle Table', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const table = page.locator("#productTable")

    const columns = table.locator("thead tr th")
    const columnCount = await columns.count()
    console.log("Columns :" + columnCount)
    
    const rows = table.locator("tbody tr")
    const rowCount = await rows.count()
    console.log("Rows :" + rowCount)

    

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })

    console.log(await matchedRow.count())
    await matchedRow.locator("td input[type='checkbox']").check()
    
    await page.pause()
})
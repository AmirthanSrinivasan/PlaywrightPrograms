const{test, expect} = require('@playwright/test')

test('Table', async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/")
const table = await page.locator("#productTable")


const columns = table.locator('thead tr th')
const columnCount = await columns.count()
console.log("Column count:", columnCount)

const rows = table.locator('tbody tr')
const rowsCount = await rows.count()
console.log( "Rows Count :", rowsCount)


const matchedRow = rows.filter({
    has: page.locator('td'),
    hasText: 'Laptop'
})

await matchedRow.locator('input').click();

await page.pause()
})
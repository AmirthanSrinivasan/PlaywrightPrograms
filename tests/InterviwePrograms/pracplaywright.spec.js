const{test, expect} = require('@playwright/test')

test('New', async({page})=>{

    const date = 24
    const month = "December"
    const year = 2027

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//*[@id='datepicker']").click()

    while(true){
        const currentMonth = await page.locator(".ui-datepicker-month").textContent()
        const currentYear = await page.locator(".ui-datepicker-year").textContent()

        if(currentMonth==month && currentYear==year){
            break;
        }
        await page.locator(".ui-icon-circle-triangle-e").click()
    }


const allDates = await page.$$(".ui-state-default")

for(let dt of allDates){
    if(await dt.textContent()==date){
await dt.click()
    }
    
}

await page.pause()
})
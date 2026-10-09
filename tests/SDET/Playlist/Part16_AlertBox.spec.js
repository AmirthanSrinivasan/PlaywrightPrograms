const{test, expect}=require('@playwright/test')

test.skip('Simple Alert', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog', async dialog => {
        console.log(dialog.message())
        console.log(dialog.type())
        await dialog.accept()
    })
    await page.locator("#alertBtn").first().click()
    

})

test.skip('Confirmation Alert', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async dialog => {
        console.log(
            dialog.type(), dialog.message()
        )
        //await dialog.accept()
        await dialog.dismiss()
    })
    
    await page.locator("#confirmBtn").click()
    await page.pause()

})

test('Prompt Alert', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async dialog=>{
        console.log(dialog.defaultValue())
        dialog.accept("Amirthan")
    })
    await page.locator("#promptBtn").click()

    await page.pause()

    
})
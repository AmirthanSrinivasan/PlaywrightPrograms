const {test, expect} = require('@playwright/test')

test('Handling a Frame', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")
    // const frame1 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill("//input[@name='mytext1']", "Hi")
    // await page.waitForTimeout(5000)

    const frame1 = page.frameLocator("//*[@src='frame_1.html']")
    await frame1.locator("//*[@name='mytext1']").fill("gjhvh")
})

test.only('Nested Frames', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame3 =  page.frameLocator("//*[@src='frame_3.html']")

    await frame3.locator("//*[@name='mytext3']").fill("sdfsdf")


    //nested
    await frame3.childFrames()

})
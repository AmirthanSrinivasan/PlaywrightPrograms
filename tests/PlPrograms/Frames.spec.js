const {test, expect} = require('@playwright/test')

test('Handling Frames', async({page})=>{

    //Capture the number of frames
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe', {waitUntil : 'domcontentloaded', timeout:15_000})
    const allFrames = await page.frames()
    const count = allFrames.length
    console.log(count)

    //Approach 1 : Using Name Or Locator
    const f = await page.frame({url: "https://www.w3schools.com"})
    await f.click(".tnb-menu-btn");
    await page.pause()


})
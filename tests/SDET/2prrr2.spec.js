const{test, expect} = require('@playwright/test')

test('RedBus Auto Suggestions', async({page})=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/frames.php")
    const allFrames = page.frames()
    console.log(allFrames.length)
    for (const f of allFrames) {
  console.log('Frame name:', f.name());
  console.log('Frame URL:', f.url());
    }

    const F2 = await page.frame({name: 'Iframe 1'})
    const childFrames = await F2.childFrames()
    console.log(childFrames.length)

    page.keyboard.press('Control+A')




})
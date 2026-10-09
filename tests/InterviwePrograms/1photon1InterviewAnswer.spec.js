const{test, expect} = require('@playwright/test');
const { Console } = require('console');
const { hostname } = require('os');

test('Fetch resort details', async({page, context})=>{

    await page.goto('https://www.trivago.in/en-IN?themeId=280&sem_keyword=trivago&sem_creativeid=72636953390707&sem_matchtype=be&sem_network=o&sem_device=c&sem_campaignid=191340818&sem_adgroupid=3930406455&sem_targetid=40966707859&cipc=br&cip=9119110005&msclkid=d656d2f7fc141ec068a9ba398cbce32b');
    await page.waitForLoadState('load')
    const allHotels = page.locator("//ul[@class='KB_WWi']//li//div[@class='VGvZ9a']//button//span")

    let arr =[]
    const count = await allHotels.count();
    for(let i=0; i<=count-1; i++){
        const hotelName = await allHotels.nth(i).getAttribute('title')
        console.log("All stays" + hotelName)
        arr.push(hotelName)
        
        
    }
    let hotelMap = arr.filter(x=>x.includes("Resort"))
    await hotelMap.click()
    await page.pause()
  
    // const h = allHotels.nth(1)
    // await h.click()
    // console.log("The count is: "+count)

    await promise.all([
        context.waitForEvent('page'),
        openbtn.click(),
    ]).then(([newPage])=>newPage)





    await page.pause()
    
})
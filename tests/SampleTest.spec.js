const{test, expect} = require('@playwright/test');
const { Console } = require('console');

test('Fetch resort details', async({page})=>{

    await page.goto('https://www.trivago.in/en-IN?themeId=280&sem_keyword=trivago&sem_creativeid=72636953390707&sem_matchtype=be&sem_network=o&sem_device=c&sem_campaignid=191340818&sem_adgroupid=3930406455&sem_targetid=40966707859&cipc=br&cip=9119110005&msclkid=cd438c41a7ce11865747e48c93e3d464');
    const allHotels = await page.locator("//ul[@class='KB_WWi']//li").all();

    for(let eachHotel of allHotels){

        if(expect(eachHotel).toHaveText("Resort")){
            console.log(eachHotel);


        }
        const secondHotelWithResort = eachHotel[1];
        const select = await secondHotelWithResort.click();
        expect(select).toBeTruthy;
    }
})
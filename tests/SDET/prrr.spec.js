const{test, expect} = require('@playwright/test')

test('Trivago', async({page})=>{

await page.goto("https://www.trivago.in/en-IN?themeId=280&sem_keyword=trivago&sem_creativeid=72636953390707&sem_matchtype=be&sem_network=o&sem_device=c&sem_campaignid=191340818&sem_adgroupid=3930406455&sem_targetid=40966707859&cipc=br&cip=9119110005&msclkid=cd438c41a7ce11865747e48c93e3d464")

const slides = page.locator("._1KYTTK")
//const itemCard = page.locator("div[data-action='itemCard']")
await page. waitForSelector('span',{hasText:/Radisson Blu Hotel New Delhi Paschim Vihar/i})
const radissonCard = slides.locator('span',{hasText:/Radisson Blu Hotel New Delhi Paschim Vihar/i})
//const radissonCard = slides.filter({ hasText: /Radisson Blu Hotel New Delhi Paschim Vihar/i });

console.log(await radissonCard.count())
const checkDeal = page.locator("(//button[@data-action='ctaButton'])[4]")


const count = await checkDeal.count()
console.log(count)
await checkDeal.click()
//await checkDeal.click()

await page.pause()


})
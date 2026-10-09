const{test, expect}=require('@playwright/test')

test('Product selection', async({page})=>{

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
  await page.locator("//input[@id='userEmail']").fill("Automationtest123@gmail.com")
  await page.locator("//input[@id='userPassword']").fill("Testing@12345")
  await page.locator("//input[@id='login']").click()

  await page.waitForLoadState('networkidle')
  const productPrice = await page.locator("(//div[@class='text-muted'])[3]").innerText()
  await page.locator("//button[@fdprocessedid='qqb90o']").click()
  await page.locator("//button[@fdprocessedid='u48vq']").click()
  await page.locator("//button[@fdprocessedid='lj0glr']").click()
  const countrySelection = await page.locator("(//input[@class='input txt text-validated'])[2]").fill("Ind")
  const countryDropdown = await page.locator("//section[@class='ta-results list-group ng-star-inserted']")

  for(let each of countryDropdown){
    let countryNames = countryDropdown.nth(i).innerText()
    if(countryNames == "India"){
        countryDropdown.nth(i).click()
    }
  }

  await page.locator("//a[@class='btnn action__submit ng-star-inserted']").click()
  



})
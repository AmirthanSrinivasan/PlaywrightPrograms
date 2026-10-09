const{test, expect} = require('@playwright/test')
const{POManager} = require('../PageObjects/POManager');
test('Test Script', async({page})=>{

    const PO =new POManager(page);
    const Login = PO.getLoginPage();

    await page.goto('https://www.facebook.com/login.php/')
    await Login.login("asasa","dsdsdsd");
  

})
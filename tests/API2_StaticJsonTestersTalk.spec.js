const{test,expect}=require('@playwright/test');


const staticJsonBody = require('../test-data/APIBodyTestersTalk.json')


// test('Get TestersTalk', async({request})=>{

//    const response = await request.get('/booking');
//    const responseBody = await response.json();
//    console.log(responseBody);


// })

test('Post TestersTalk', async({request})=>{

    const response = await request.post('/booking', {
        data:staticJsonBody.APIbody
    })
//Validate Status Code
    expect(response.ok()).toBeTruthy;
    expect(response.status()).toBe(200);
    console.log(response.status());

//Validate Response Body    
    const responseBody = await response.json();

    console.log("Booking ID : "+responseBody.bookingid);
    expect(responseBody.booking).toHaveProperty("firstname","Amirthan");
    console.log('Completed')
})
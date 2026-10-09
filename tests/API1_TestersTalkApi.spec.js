const{test,expect}=require('@playwright/test');
// test('Get TestersTalk', async({request})=>{

//    const response = await request.get('/booking');
//    const responseBody = await response.json();
//    console.log(responseBody);


// })

test('Post TestersTalk', async({request})=>{

    const response = await request.post('/booking', {
        data:{
    "firstname": "Amirthan",
    "lastname": "Srinivasan",
    "totalprice": 1000,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "super bowls"
        }
    })
//Validate Status Code
    expect(response.ok()).toBeTruthy;
    expect(response.status()).toBe(200);
    console.log(response.status());

//Validate Response Body    
    const responseBody = await response.json();

    console.log("Booking ID : "+responseBody.bookingid);
    expect(responseBody.booking).toHaveProperty("firstname","Amirthan");
})
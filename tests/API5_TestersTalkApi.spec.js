const{test,expect}=require('@playwright/test');

import {faker} from '@faker-js/faker';
const {DateTime} = require('luxon');
const Credentials = require('../test-data/PostCredentials.json');
const {putRequestBody} = require('../test-data/PutRequestBody.json');
// test('Get TestersTalk', async({request})=>{

//    const response = await request.get('/booking');
//    const responseBody = await response.json();
//    console.log(responseBody);


// })

test('Post TestersTalk', async({request})=>{

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int(1000);

    const checkIn = DateTime.now().toFormat('yyyy-MM-dd');
    const checkOut = DateTime.now().toFormat('yyyy-MM-dd')


    const response = await request.post('/booking', {
        data:{
    "firstname": firstName,
    "lastname": lastName,
    "totalprice": totalPrice,
    "depositpaid": true,
    "bookingdates": {
        "checkin": checkIn,
        "checkout": checkOut
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
    expect(responseBody.booking).toHaveProperty("firstname", firstName);
        console.log("=======================");
    const bId = responseBody.bookingid;
    const getBookinId = await request.get(`/booking/${bId}`)
    console.log(await getBookinId.json());

    console.log("=======================");

    const par = await request.get('/booking/',{
        params:{
            "firstname":"Amirthan"
        }
    })

    console.log(await par.json())
console.log('============Generate Token=========')
    //Generate Token
    const credentialsResponse = await request.post('/auth',{
        data:Credentials
    })
        const CredentialsBody = await credentialsResponse.json();
        const tokenNo = CredentialsBody.token;
        console.log("The token is : "+ tokenNo);
   

    //     //Put API
    //    const putResponse = await request.put(`/booking/${bId}`,{
      
    //         headers: {
    //                     'Content-Type': 'application/json',
    //                     Cookie: `token=${tokenNo}`,
    //                 },
        
    //         data:putRequestBody
    //     })
        
    //     const putBody = await putResponse.json();
    //     console.log('=========')
    //     console.log(putBody)

})
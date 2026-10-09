const { test, expect } = require('@playwright/test');

test('GET request', async ({ request }) => {
  const response = await request.get('https://restful-booker.herokuapp.com/bookingid=');
  console.log(await response.json());
  expect(response.status()).toBe(200);
});

test.only('POST request', async ({ request }) => {
  const postResponse = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: {
      "firstname": "Amirthan",
      "lastname": "Srinivasan",
      "totalprice": 1500,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
      },
      "additionalneeds": "super bowls"
    }
  });
  console.log("Status Code:", postResponse.status());
  

  const responseBody = await postResponse.json();
console.log(responseBody);
console.log(responseBody.bookingid);
console.log(responseBody.booking.firstname);


});

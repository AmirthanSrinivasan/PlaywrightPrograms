const{test, expect} =require('@playwright/test')

test('API Post', async({request})=>{

    const response = await request.post('https://reqres.in/booking', {
        data: {
            "Name" : "Amirthan",
            "City" : "Chennai"
        }
    })

    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(201)
    const responseBody = await response.json()

    expect(responseBody).toHaveProperty("Name" , "Amirthan")

})
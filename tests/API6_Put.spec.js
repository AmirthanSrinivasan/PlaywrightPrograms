const{test, expect} = require('@playwright/test');
const Credentials = require('../test-data/PostCredentials.json');

test('Put API', async({request})=>{

    const credentialsResponse = await request.post('/auth',{
        data:Credentials
    })
        const CredentialsBody = await credentialsResponse.json();
        console.log("The token is : "+ CredentialsBody.token);
})
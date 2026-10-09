const{test, expect}=require('@playwright/test');
test('Skip Feature', async({page})=>{
    const name = 'Amir';
    name='Suresh';
    if(name == 'Amir'){
        test.skip()
    }
    console.log("Hi hello");

})
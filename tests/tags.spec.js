const{test, expect} = require('playwright/test')
test('First TC @new', async({page})=>{
console.log("First TC")
})

test('Second TC @regression @sanity', async({page})=>{
console.log("Second TC")
})

test('Third TC @regression @progression', async({page})=>{
console.log("Third TC")
})

test('Fourth TC @regression @important', async({page})=>{
console.log("Fourth TC")
})

test('Fifth TC @important ', async({page})=>{
console.log("Fifth TC")
})


//Including a particular Tag
//npx playwright test tags.spec.js --grep "@regression"

//Excluding a particular Tag
//npx playwright test tags.spec.js --headed --project=chromium --grep "@regression" --grep-invert "@important"

//All the tests with @new, @important
//npx playwright test tags.spec.js --headed --grep "@new|@important"

//All the tests with the combination of these tags
//npx playwright test tags.spec.js --headed --grep "@regression.*@important
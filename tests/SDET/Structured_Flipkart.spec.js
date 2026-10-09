const{test, expect} = require('@playwright/test')

test('Flipkart Structured Apprpach', async({page, context})=>{

    await page.goto('https://www.flipkart.com/')
    const searchBox = page.getByPlaceholder('Search for Products, Brands and More')
    await searchBox.fill("Allen Solly Shirt")
    await searchBox.press("Enter")
    

    const product = page.getByTitle('Men Regular Fit Solid Casual Shirt')
    

    const parentPage = page;
    const firstChild = await Promise.all([                
    context.waitForEvent('page'),
    
    product.first().click(),
  ]).then(([newPage]) => newPage);

  await firstChild.waitForLoadState('domcontentloaded');
  const allPages = context.pages();  
  console.log('Total pages in context:', allPages.length);

  const childPage = allPages.filter(p => p !==parentPage)
  //Accessing the child page
  console.log(childPage[0].url())



})
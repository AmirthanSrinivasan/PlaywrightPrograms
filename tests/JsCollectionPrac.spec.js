// // Create an Array
// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// // 1. Access by Index
// console.log(fruits[0]); // Apple
// console.log(fruits[2]); // Mango

// // 2. Loop using for
// console.log("Using for loop:");
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // 3. Loop using for...of
// console.log("Using for...of:");
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// // 4. Loop using forEach
// console.log("Using forEach:");
// fruits.forEach((fruit, index) => {
//   console.log(index + " -> " + fruit);
// });

// // 5. Navigate backwards
// console.log("Reverse navigation:");
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

//////============================================================================================
// const { test, expect } = require('@playwright/test');

// test('Fetch all elements and print name attribute', async ({ page }) => {
//   await page.goto('https://example.com');

//   // Example: all input fields on the page
//   const elements = await page.locator('input').all();

//   console.log(`Total elements found: ${elements.length}`);

//   for (let i = 0; i < elements.length; i++) {
//     const nameAttr = await elements[i].getAttribute('name');
//     console.log(`Element ${i} name: ${nameAttr}`);
//   }
// });
//////============================================================================================


const { test, expect } = require('@playwright/test');

test('Fetch all book names', async ({ page }) => {
  // Navigate to the site
  await page.goto('https://books.toscrape.com/');

  // Locate all book elements
  const books = await page.locator('.product_pod h3 a').all();

  //console.log(`Total Books Found: ${books.length}`);
  console.log("Total Books Found: "+ books.length)

  // Print each book name
  for (const book of books) {
    const title = await book.getAttribute('title');
    console.log(title);
  }
});

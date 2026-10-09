const { test, expect } = require('@playwright/test');

test('Array Practice', async ({ page }) => {

  //Declaration
 let arr = [];

//Add Element
arr.push("Apple");
arr.push("Ball")
arr.push("Cat")

//Get element
console.log("Get Element: " + arr[1])

//Iterate and Print
for(let objectName of arr){
  console.log("Iterate and Print :" + objectName)
}

//Reverse Iterate
const count = arr.length;
for(let i = count-1; i>=0; i--){
  console.log("Reverse Iteration: " + arr[i])
}



});

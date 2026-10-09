const{test, expect} = require('@playwright/test')

test('Set Prac', async({page})=>{
//Declaration
let obj = new Set();

//Add Element
obj.add("Hi");
obj.add("Hello")
obj.add("How")
obj.add("Hello")


//Iterate and Print
for(let s of obj){
    console.log(s)
}

//Reverse Iteration
// for(let i = obj.size-1; i>=0; i--){
//     console.log("Reverse Iteration :"+ obj[i])
// }

let arr = [...obj]
for(let i = arr.length-1; i>=0; i--){
    console.log("Reverse Iteration :"+ arr[i])
}

})
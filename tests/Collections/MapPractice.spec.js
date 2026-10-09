const{test} = require('@playwright/test')

test('Map Practice', async({page})=>{
//Declaration
    let m = new Map();

//Add Element
    m.set(1, "Apple");
    m.set(2, "Ball")
    m.set(3,"Cat")

//Iterate and Print
    for(let[key,v] of m){
            console.log(key, v)
    }

    // Reverse iterate
    let arr = [...m]
for (let i = arr.length - 1; i >= 0; i--) {
  let [key, value] = arr[i];
  console.log("Key:"+ key +"Value:"+ value);
}
})
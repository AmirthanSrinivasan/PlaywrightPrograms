//Find the number of digits present in a string.

// let input = "hi hello8 how3 are5 you2"
// let inputArray = input.split("")
// let count = 0;
// for(let each of inputArray){
//     if(each>=0 && each<=9){
//             count++
//     }
// }
// console.log(count)

let input = "hi hello8 how3 are5 you2";
let inputArray = input.split("");
let count = 0;
let character = ""

for (let ch of inputArray) {
  if (ch >= "0" && ch <= "9") {
    count++;
  }

}

console.log(count); // 4

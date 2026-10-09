//Remove duplicate words in sentence.

let input = "Hi hello how how are you"
let inputArray = input.split(" ")
let sentence = "";

let s = new Set()
for(let each of inputArray){
    s.add(each)
}

for(let word of s){
    sentence = sentence + word + " "
}

console.log(sentence)

//Method 2
// const input = "Hi hello hello how are you"
// const inputArray = input.split(" ")
// let s = new Set()

// for(let each of inputArray){
//     s.add(each)
// }
// console.log(s)
// let sentence = [...s]
// console.log(sentence.join(" "))
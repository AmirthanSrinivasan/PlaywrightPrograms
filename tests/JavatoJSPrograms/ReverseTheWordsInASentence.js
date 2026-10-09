//Reverse the words in a sentence.

let input = "Hi hello how are you"
let inputArray = input.split(" ")

let reverse = ""

for(let i = inputArray.length-1; i>=0; i--){
    reverse = reverse + inputArray[i] + " "
}

console.log(reverse)
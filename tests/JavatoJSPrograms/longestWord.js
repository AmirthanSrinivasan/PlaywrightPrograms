//Find the longest word in a sentence.


let input = "Hi hellasdsdfsfsfdfssdfsdfcwefwefwadsasdadasdo how are youosjdclsh"
let inputArray = input.split(" ")

let maxLength = 0
let longestWord = ""

for(let each of inputArray){
    let count = 0
    for(let ch of each){
        count++
    }
    if(count>maxLength){
        maxLength = count
        longestWord = each
    }
}

console.log(longestWord)
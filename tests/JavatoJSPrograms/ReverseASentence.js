//Reverse a sentence.

let input = "Hi hello how are you"
let inputArray = input.split("");

let Sentence = ""

for(let i=inputArray.length-1; i>=0; i--){
    Sentence = Sentence + inputArray[i]
}
console.log(Sentence)


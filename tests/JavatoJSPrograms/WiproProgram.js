//input = "welcome4 to5 wipro"
//output = "orpiw ot emoclew"


let input = "welcome4 to5 wipro"
let inputArray = input.split('')

let sentence = ""

for(let each of inputArray){
    if(!(each >= '0' && each <='9')){
        sentence = sentence + each
        
    }
   
        
    
}
console.log(sentence)
let sentenceArray = sentence.split('')
let reverse = ""

for(let i=sentenceArray.length-1; i>=0; i--){
reverse = reverse + sentenceArray[i]
}
console.log(reverse) 
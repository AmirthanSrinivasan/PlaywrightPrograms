//Find the number of vowels in a String. -


let input = "Hi45 h45ello"
let inputArray = input.split('')
let count = 0

let sentence = ""

for(let each of inputArray){
    
        if(each == 'a' || each == 'e' || each == 'i' || each =='o' || each =='u' ){
                sentence = sentence + "*"
        }
        else{
            sentence = sentence + each
        }
    }


console.log(sentence)
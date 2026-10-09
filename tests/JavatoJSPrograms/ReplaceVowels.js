//Replace vowels to special Characters

const input = "Hi hello hello how are you"
const inputArray = input.toLowerCase().split('')
let sentence=""

for(let each of inputArray){
    if(each=='a' || each == 'e' || each == 'i'||
    each=='o'|| each=='u'){
       sentence = sentence + "*"
    }
    else{
        sentence = sentence + each
    }
}
console.log(sentence)


//Find the number of vowels present in a String

const input = "Hi hello hello how are you"
const inputArray = input.toLowerCase().split('')

let vowelsCount = 0

for(let each of inputArray){
    if(each == 'a' || each == 'e' || each == 'i' ||
    each == 'o' || each == 'u' ){
        vowelsCount++
    }
}
console.log(vowelsCount)
//Find the length of a string.	

let input = "Hi hello how are you"
let inputArray = input.split("")
let count = 0

for(let each of inputArray){
    if(each !=' '){
        count++
    }
}
console.log(count)
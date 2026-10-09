let input = "Hello world"
let inputArray = input.split('')
let count = 0;

for(let i =0; i<=inputArray.length-1; i++){
    if(inputArray[i]== 'l'){
        count++
    }
}

console.log(count)
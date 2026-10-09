const input = "Amirthan"
const inputArray = input.toLowerCase().split('')

let inputReduce = inputArray.reduce((acc,curr)=>{

    acc[curr] = (acc[curr]||0) +1;
    return acc;

},{})

console.log(inputReduce)
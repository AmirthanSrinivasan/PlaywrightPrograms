const input = "Hi hello how are are you"
const inputArray = input.split(" ")

let inputReduce = inputArray.reduce((acc, curr)=>{
    acc[curr] = (acc[curr]||0)+1;
    return acc;

},{})

console.log(inputReduce)
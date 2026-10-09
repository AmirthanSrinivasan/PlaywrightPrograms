//Fibonacci


let input = 10;
let first = 0;
let second = 1;

for(let i =0; i<=input-1; i++){
    console.log(first + " ")

    let next = first + second
    first = second
    second = next
}
const input = [56,34,45,56,89]

let inputReduce = input.reduce((acc,curr)=> 
 curr>acc? curr:acc
,0)

console.log(inputReduce)
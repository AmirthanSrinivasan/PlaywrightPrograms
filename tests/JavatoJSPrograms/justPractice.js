//Find the key vacharacter occurrence
let input = "Amirthan"
let inputArray = input.toLowerCase();
inputArray = inputArray.split("")
let largest = 0
let maxChar = ''

let m = new Map();
for(let each of inputArray){
    if(m.has(each)){
        m.set(each, m.get(each)+1)
    }
    else{
        m.set(each,1)
    }
}

m.set('z',4)
for(let [k,v] of m){
    console.log(k,v)
    if(v>largest){
        largest =v
        maxChar = k
    }
   
}
console.log(largest,maxChar)




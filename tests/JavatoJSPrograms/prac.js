//Find the most occurred character in a sentence.

let input = "Amirthan"
let inputArray = input.toLowerCase().split('')
let mostOccuredCharacter = ""
let occurenceCount = 0
let map = new Map()

for(let each of inputArray){
    if(each != ' '){
        if(map.has(each)){
            map.set(each, map.get(each) + 1)
        }

        else{
            map.set(each,1)
        }
    }
}

for(let [k,v] of map){
    if(v>occurenceCount){
        mostOccuredCharacter = k
        occurenceCount = v
    }
}

console.log(mostOccuredCharacter,":",occurenceCount)
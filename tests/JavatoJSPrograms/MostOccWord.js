//Find the Most Occurred Word in a sentence

const input = "Hi hello hello how are you"
const inputArray = input.split(" ")

let mostOccWord = "", count = 0

let map = new Map()
for(let each of inputArray){
    if(map.has(each)){
        map.set(each, map.get(each) + 1)
    }
    else{
        map.set(each,1)
    }
}
for(let [k,v] of map){
    if(v>count){
        mostOccWord = k
        count = v
    }
}
console.log(mostOccWord +":"+ count)

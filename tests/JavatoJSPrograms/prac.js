let input = "Hi hello howefsddaasdasd are you hello"
let inputArray = input.split(" ")
let occCount = 0
let mostOccWord = ""

let m = new Map()

for(let each of inputArray){
    if(m.has(each)){
        m.set(each, m.get(each)+1)
    }
    else{
        m.set(each, 1)
    }
}

for(let [k,v] of m){
    if(v>occCount){
        mostOccWord = k
        occCount = v
    }
}

console.log(mostOccWord + ":" + occCount)
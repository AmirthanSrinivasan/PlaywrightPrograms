//Character Occurrence

let input = "Amirtttttttttttttttthannnnn"
let inputArray = input.toLowerCase().split("")

let map = new Map()
let mostOccurredCharacter = ''
let occurrenceCount = 0

for(let each of inputArray){
    if(each !=' '){
        if(map.has(each)){
            map.set(each, map.get(each) + 1)
        }
        else{
            map.set(each,1)
        }
    }
}
for(let [k,v] of map){
    if(v>occurrenceCount){
        mostOccurredCharacter = k
        occurrenceCount = v
    }

}
console.log("Most Occurred Character :"+ mostOccurredCharacter+":"+ occurrenceCount)
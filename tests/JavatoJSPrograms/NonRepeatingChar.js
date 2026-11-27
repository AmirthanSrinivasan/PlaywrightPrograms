let input = "swiss"
let inputArray = input.split('')
for(let each of inputArray){
    if(inputArray.indexOf(each) == inputArray.lastIndexOf(each)){
        console.log(each)
        
    }
}
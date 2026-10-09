//Find the second largest number in an array

let input = [5,3,7,4,1,10]
let largest = Number.MIN_SAFE_INTEGER;
let secondLargest = Number.MIN_SAFE_INTEGER;

for(let each of input){
    if(each>largest){
        secondLargest = largest
        largest = each
    }
    else if(each>secondLargest && each !=largest){
        secondLargest = each
    }
}
console.log(secondLargest)
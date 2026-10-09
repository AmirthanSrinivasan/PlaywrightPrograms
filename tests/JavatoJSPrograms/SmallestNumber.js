//Find the smallest number in an Array.


let input = [5,3,6,2,9]

let smallest = Number.MAX_SAFE_INTEGER

for(let each of input){
    if(each <= smallest){
        smallest = each
    }
}

console.log(smallest)
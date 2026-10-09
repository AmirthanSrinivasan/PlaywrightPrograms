const input = "Malayalam"
const inputArray = input.toLowerCase().split('')
let reverse = []

for(let i =inputArray.length-1; i>=0; i--){
    reverse.push(inputArray[i])
}

if(inputArray.toString() == reverse.toString()){
    console.log("The given String is Palindrome")
}
else{
    console.log("The given String is not Palindrome")
}
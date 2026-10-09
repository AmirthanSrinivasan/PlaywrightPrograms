//Reverse Integer

let input = 654
let reverse = 0

while(input!=0){
    let digit = input%10
    reverse = reverse *10 + digit
    input = input/10
    input = Math.floor(input)

}

console.log(reverse)
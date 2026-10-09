let num = 6;
let isPrime = true

if(num<=1){
    return false
}

for(let i=2; i<=num-1; i++){
    if(num%i ===0){
        isPrime = false
        break;
    }
    
}

if(isPrime){
    console.log("It is Prime Number")
}
else{
    console.log("It is Non Prime Number")
}
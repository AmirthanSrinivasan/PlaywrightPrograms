//Prime or Non Prime

let num = 3
let isPrime = true

if(num <=1){
    isPrime = false
}
else{
    for( let i =2 ; i < num ; i++ ){
        if(num %i ==0){
 isPrime = false
    break;
        }
   
}
}


if(isPrime){
    console.log("THis is Prime Num")
}
else{
    console.log("THis is non Prime")
}
let input_A = "listen"
let input_B = "sildent"

let a = input_A.split('').sort().join()
let b = input_B.split('').sort().join()

if(a==b){
    console.log('anagram')
}
else{
    console.log('not anagram')
}
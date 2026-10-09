const input = [
  {name:"A",salary:2000,active:true},
  {name:"B",salary:4000,active:false},
  {name:"C",salary:3000,active:true}
]

let inputFilter = input.filter(x=>x.active==true)

let inputMap = inputFilter.map(x=>x.salary)
console.log(inputMap)

let inputReduce = inputMap.reduce((acc,curr)=> (acc+curr),0)
const average = inputReduce/inputMap.length
console.log(average)

function empName(firstName:string, lastName=" Thomas"){
  console.log(firstName + lastName);
}
empName("Vinoth");
//object type
let payload = {
  name: "Vinoth",
  age: 150
}
console.log(payload)
console.log(payload.age=10)
interface divideInterface {
  dividend: number, 
  divisor: number 
}
const divideInterface: divideInterface = {
  dividend: 100,
  divisor: 5
}
function divide(divInterface: divideInterface) {
  let topValue = divInterface.dividend
  let botValue = divInterface.divisor
 console.log(topValue/botValue)
}
divide(divideInterface)

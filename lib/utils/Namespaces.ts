

//A namespace is a way to group related code under one name.
namespace MathTools {

 export function add(a: number, b: number) {
  return a + b;
 }
 export const pi = 3.14;
}
//Use Use its members with .
const total = MathTools.add(2, 3); // 5
console.log(total);     //5
console.log(MathTools.pi);     // 3.14

// export makes a function or value available outside the namespace. Without namespace, this would fail:

// Another Example:
namespace User {
 export interface Person {
  name: string;
  age: number;
 }
export function greet(person: Person) {
  console.log(`Hi ${person.name}`);
 }
}
const max: User.Person = {
 name: "Max",
 age: 27,
};
User.greet(max); // Hi Max

// user.ts
export function greet(name: string) {
 console.log(`Hi ${name}`);
}
// app.ts
// import { greet } from "./user";
greet("Max");

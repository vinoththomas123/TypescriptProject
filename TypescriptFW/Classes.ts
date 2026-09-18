
// Example for Inheritance
class Person {
    name: string;
constructor(name: string) {
this.name = name;
}
async totalMarks(s1: number, s2: number, s3: number): Promise<number> {
return s1 + s2 + s3;
}
}
//==================================================================================================================
// Extends
//It will reuse member variables and functions from the base class 
//==================================================================================================================
class Student extends Person {
constructor(name: string, grade: number) {
super(name);
}
async getAverage(s1: number, s2: number, s3: number) { //we can have additional methods
console.log("Get Averag - Extended Class")
let total = await this.totalMarks(s1, s2, s3); //totalMarks method is called from base class
console.log("Avg: " + total / 3);
return total / 3
}
}
//==================================================================================================================
// Implements
// All the member variables and functions should present
// We can have additional variables or functions
//==================================================================================================================
class HighStudent implements Student {
// Implements

name: string;  //member variable should be declared
constructor() { //constructor do not have a super() method in implements 
}
// same member function should be implemented 
// return type should be same as in base class
async totalMarks(s1: number, s2: number, s3: number): Promise<number> {
return s1 + s2 + s3 + 10;
}
async getAverage(s1: number, s2: number, s3: number) { //we can have additional methods
console.log("Get Averag - Implemented Class")
let total = await this.totalMarks(s1, s2, s3); //totalMarks method is called from same class
console.log("Avg: " + total / 3);
return total / 3
}
async isPassed(s1: number, s2: number, s3: number) {
let avg = await this.getAverage(s1, s2, s3);
if (avg > 40)
return "pass";
else
return "fail"
}
}

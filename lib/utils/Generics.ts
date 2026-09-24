
// Normal function: only works for strings
function wrapString(value: string): string {
  return value;
}
var result = wrapString("hello");
// result is string[]3
// wrapString(123); // Error: 123 is not a string
//So we can use generics
function wrap<T>(value: T): T {
  return value;
}
var words = wrap("hello"); // string
var numbers = wrap(123); // number
var flags = wrap(true); // boolean
//T means: “whatever type was passed in.”
console.log(words);
console.log(numbers);
console.log(flags);

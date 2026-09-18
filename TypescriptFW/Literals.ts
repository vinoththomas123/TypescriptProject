
import { fail } from "yargs";
let gender: "male" | "female";
gender = "female"    // we can pass only male or female
//=======================================================
function getDirection(direction: "south" | "north" | "west" | "east") {
  console.log("Direction is: " + direction);
}
getDirection("south");
//=======================================================
//     Creating variables with type 
//=======================================================
type pass = "success" | true | 1;
type fail = "failure" | false | 0;
function getResult(): pass|fail {
  return true;
}
console.log(getResult());

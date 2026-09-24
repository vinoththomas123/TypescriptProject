interface Emp {
  name: string;
  age: number;
  marritalStatus: boolean;
  dept: string;
}

const emp: Emp = {
  name: "Vinoth",
  age: 30,
  marritalStatus: true,
  dept: "software"
};
console.log(emp);

// implementation of keyof using the same interface
function getDataUsingKey(obj: object, property: keyof Emp) {
  console.log(`Print the Value: ${obj[property]}`);    // whatever inside curly braces will get executed
  return obj[property];
}
console.log(getDataUsingKey(emp, "name"));

interface EmpWithPhone extends Emp {
  phone: number;
}

const emp1: EmpWithPhone = {
  name: "Vinoth",
  age: 30,
  marritalStatus: true,
  dept: "software",
  phone: 123456
};
console.log(emp1);

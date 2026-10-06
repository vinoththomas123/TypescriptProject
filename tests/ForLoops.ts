let json = {
    name: "vinoth",
    city: "Salem",
    pincode: "636008"

}

let arrayStr = ["a", "b", "c", "d"];

interface interFace {
    EmpName: string,
    Age: number,
    Empcode: number
}

let inter: interFace;
inter = {
    EmpName: "Smith",
    Age: 37,
    Empcode: 1000
}

for (let i = 0; i < arrayStr.length; i++) {
    console.log(arrayStr[i]);
}

for (let item in json) {
    console.log(json[item]);
}

for (let x in inter) {
    console.log(inter[x]);
}

//We need make am interface into an array to use forEach loop
//We need to use forEach loop to iterate through an array of interface
let interArray: interFace[];
interArray = [
    {
        EmpName: "Smith",
        Age: 37,
        Empcode: 1000
    }
]

interArray.forEach(element => {
    console.log(element.EmpName);
    console.log(element.Age);
});

enum Enum {
    a,
    b,
    c
}

for (let i in Enum) {
    console.log(Enum[i]);
}



let response = {
    "data": [
        {
            "EmpName": "Smith",
            "Age": 37,
            "Empcode": 1000
        },
        {
            "EmpName": "John",
            "Age": 29,
            "Empcode": 1001
        }
    ]
}

console.log(response.data[0].EmpName)
console.log(response.data[0].Age)
console.log(response.data[0].Empcode)


// Here the response.data is an array of interface so we can use ForEach loop
response.data.forEach(element => {
    console.log(element.EmpName);
    console.log(element.Age);
    console.log(element.Empcode);
});



// Alternate way to iterate the array of interface: 
// Using tbe for... of... Loop to print the values

for (const item of response.data) {
    console.log("For of Loop");
    console.log(item.EmpName);
    console.log(item.Age);
    console.log(item.Empcode);
}

// We cannot use For in Loop since item will contain only the index not the actual objects
// So we cannot use response.data.EmpName - but we have to use response.data[item]
for (const item in response.data) {
    console.log("For in Loop");
    console.log(response.data[item].EmpName);      
}
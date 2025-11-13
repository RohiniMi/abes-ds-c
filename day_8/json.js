//json
//javaScript object notation
//object
const student = {
    rollNo: 123,
    name: "xyz"
}

// convert object to json object
const objToJSON = JSON.stringify(student);
console.log(objToJSON);
console.log("type of objToJSON: ", typeof objToJSON);

//json to object
const jsonToObj = JSON.parse(objToJSON);
console.log(jsonToObj);
console.log("type of jsonToObj: ", typeof jsonToObj);

const jsonData = [
    {
        "rollNo": 1,
        "name": "A"
    },
    {
        "rollNo": 2,
        "name": "B"
    },
    {
        "rollNo": 3,
        "name": "C"
    }
]

jsonData.forEach((data) => {
    console.log(data.rollNo);
    console.log(data['name']);
    
})

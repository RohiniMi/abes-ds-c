const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const output = document.getElementById("output");
const error = document.getElementById("error");

let result = 0;
const add = () => {
    if (num1.value === "" || num2.value === "") {
        error.innerText = "Please enter both number";
        error.style.color = "red";
    } else{
        error.innerText = "";

    }
    console.log("parseInt(num1.value)", parseInt(num1.value));
    console.log("parseInt(num2.value)", parseInt(num2.value));
    result = parseInt(num1.value) + parseInt(num2.value);
    output.value = result;
}
const sub = () => {
    result = parseInt(num1.value) - parseInt(num2.value);
    output.value = result;
}
const mul = () => {
    result = parseInt(num1.value) * parseInt(num2.value);
    output.value = result;
}
const div = () => {
    result = parseInt(num1.value) / parseInt(num2.value);
    output.value = result;
}
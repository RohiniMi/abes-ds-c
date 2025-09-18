//let and const in global scope
// let name = "xyz";
// const pi = 3.14;
// console.log("let and const in global scpoe:");
// console.log("Value of name in global scope: ",name);
// console.log("Value of pi in global scope: ",pi);

// {
//     let name = "xyz";
//     const pi = 3.14;
//     console.log("let and const in block scpoe:");
//     console.log("Value of name in block scope: ", name);
//     console.log("Value of pi in block scope: ", pi);
// }
// console.log(typeof name);
// console.log(name);


// console.log("let and const outside the scpoe:");
// console.log("Value of name outside the scope: ", name);
// console.log("Value of pi outside the scope: ", pi);


function getValue() {
    let name = "xyz";
    const pi = 3.14;
    console.log("let and const in function scpoe:");
    console.log("Value of name in function scope: ", name);
    console.log("Value of pi in function scope: ", pi);
}
getValue();
console.log("let and const outside the function scpoe:");
console.log("Value of name outside the function scope: ", name);
console.log("Value of pi outside the function scope: ", pi);
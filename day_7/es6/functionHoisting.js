console.log("Before initializing the function: ");
console.log(add(2, 3)); //invokation of function

function add(a, b) {
    return a + b;
}
console.log("After initializing the function: ");
console.log(add(4, 5));  //invokation of function

//non-hoisted function --> arrow function
// console.log("Before initializing the arrow function: ");
// console.log(sub(2, 3));

const sub = (a, b) => a - b;

console.log("After initializing the arrow function: ");
console.log(sub(2, 3));

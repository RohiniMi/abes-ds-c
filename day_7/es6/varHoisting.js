//hoisting of var a
console.log(a);
var a;
a = 34;
console.log(a);

//non hoisted variables
console.log(b);
let b;
b = 67;
console.log(b);

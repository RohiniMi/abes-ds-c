
// function fun(a,b,c,d,e,f,){

// }

//rest parameter
const sum = (...args) => {
    let output = 0
    args.forEach((val) => {
        output += val;
    })
    return output;

}
let output = sum(1, 2, 3, 4, 6, 8, 9, 0, 0, 89, 41, 16)
console.log(output);
const car = {
    brand :"Mahindra" ,
    model: "XUV-700",
    year : {
        y1: 2021,
        y2: 2022
    }
}
const myCar = Object.assign({},car);
myCar.model = "Thar";
myCar.year['y1'] = 2023;
console.log(myCar.model);
console.log(car.model);
console.log(myCar.year['y1']);
console.log(car.year['y1']);
// console.log(car.brand);
// console.log(car.model);
// function changeModel(obj){
//     obj.model = "SUV";
// }
// changeModel(car);
// console.log(car.brand);
// console.log(car.model);

// const myCar = Object.assign({},car);
// myCar.model = "Thar";
// console.log(myCar.model);
// console.log(car.model);



const waitForSomeTime = (sec)=>{
    setTimeout(()=>{
       console.log("Wait has been completed.");    
    },sec);
}
const asyncFun = ()=>{
    waitForSomeTime(5000);
}
console.log("before invokation of function.");
asyncFun();
console.log("after invokation of function.");
const waitForSomeTime = (sec)=>{
    const start = Date.now();
    while(Date.now()-start < sec){
        //do nothing
    }
}
const syncFun = ()=>{
    waitForSomeTime(5000);
    console.log("Wait has been completed.");
}
console.log("before invokation of function.");
syncFun();
console.log("after invokation of function.");

const printMessage = (msg) => {
    console.log(msg);
}
const waitFun = (msg, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            printMessage(msg);
            resolve();
        }, time)
    })
}
const bookTicket = () => {
    printMessage("Welcome");
    waitFun("Login has been done successfully.", 2000)
        .then(() => waitFun("seat has been choosen successfully.", 3000))
        .then(() => waitFun("payment has been done successfully.", 4000))
        .then(() => waitFun("Ticket has been confirmed", 2000))
        .then(() => waitFun("Thankyou", 1000))
}
const bookTicket2 = async () => {
    printMessage("Welcome");
    waitFun("Login has been done successfully.", 2000)
    await waitFun("seat has been choosen successfully.", 3000)
    await waitFun("payment has been done successfully.", 4000)
    await waitFun("Ticket has been confirmed", 2000)
    await waitFun("Thankyou", 1000)
}
const printMessage = (msg)=>{
    console.log(msg);   
}
const bookTicket = () => {
    printMessage("Welcome!")
    setTimeout(() => {
        printMessage("Login has been done successfully.");
        setTimeout(()=>{
            printMessage("seat has been choosen successfully.");
            setTimeout(()=>{
                printMessage("payment has been done successfully.");
                setTimeout(()=>{
                    printMessage("Ticket has been confirmed");
                    printMessage("Thankyou!!");
                },2000)
            },4000)
        },3000)
    }, 2000)
}
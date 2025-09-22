const calculateAge = () => {
    const dob = document.getElementById("user-date");
    const output = document.getElementById("output");

    const currentDate = new Date();
    const userDate = new Date(dob.value);

    //current Year details
    const currentDobYear = currentDate.getFullYear();
    const currentDobMonth = currentDate.getMonth();
    const currentDobDate = currentDate.getDate();

    //user details
    const userDobYear = userDate.getFullYear();
    const userDobMonth = userDate.getMonth();
    const userDobDate = userDate.getDate();

    let ageInYears = currentDobYear - userDobYear;
    let ageInMonths = currentDobMonth - userDobMonth;

    if (userDobMonth > currentDobMonth) {
        ageInYears -= 1;
    }
    if(ageInMonths <0){
        ageInMonths += 12;
    }
    output.innerText = `User's Current Age is ${ageInYears} Year and ${ageInMonths}`;
}
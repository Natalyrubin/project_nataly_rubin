'use strict'

const userNameValue = document.querySelector('#userName');
const passwordValue = document.querySelector('#password');


const login = () => {
    if (userNameValue.value === "Admin" && passwordValue.value === "buybuy30") {
        alert("You have successfully logged in.");
        window.location.href = `productPage.html`;
    }
    else {
        alert("You are not allowed - search the Admin details in JS :)");
    }
}



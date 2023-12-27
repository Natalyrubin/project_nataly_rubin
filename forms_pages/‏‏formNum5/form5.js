'use strip'

const formSubmit = document.querySelector('form');
const formSubmit2 = document.querySelector('#formSmartphone');

document.querySelector('#submitButton').addEventListener('click', function (event) {
    let html = '';

    if (validateForm()) {
        alert('הפרטים שלך התקבלו בהצלחה!');


        html = `
    <h2 style="direction: rtl;"> הפרטים שלך התקבלו בהצלחה! <br> אצור איתך קשר בהקדם </h2>
    `;

        formSubmit2.innerHTML = html;
    }
});



document.querySelector('#submitButton2').addEventListener('click', function (event) {
    let html = '';

    if (validateForm()) {
        alert('הפרטים שלך התקבלו בהצלחה!');


        html = `
    <h1> הפרטים שלך התקבלו בהצלחה! אצור איתך קשר בהקדם </h1>
    `;

        formSubmit.innerHTML = html;
    }
});



function validateForm() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;

    if (name && email) {
        return true;
    } else {
        alert('אנא מלא את כל שדות החובה בטופס.');
        return false;
    }
}



document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});
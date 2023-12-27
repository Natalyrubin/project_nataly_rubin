'use strip'

const formSubmit = document.querySelector('form');

document.querySelector('#submitButtom').addEventListener('click', function (event) {
    let html = '';

    if (validateForm()) {
        alert('הפרטים שלך התקבלו בהצלחה!');


        html = `
    <p id="pForm" style="margin-bottom: 50px;"> הפרטים שלך התקבלו בהצלחה! <br> אצור איתך קשר בהקדם </p>
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
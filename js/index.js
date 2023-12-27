'use strip'

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');



function showHideMenu() {
    console.log('menu clicked');
    nav.classList.toggle('open');
}






const formSubmit = document.querySelector('#formSubmit');

document.querySelector('#submitButtom').addEventListener('click', function (event) {
    let html = '';

    if (validateForm()) {
        alert('Your details have been received successfully.');

        html = `
            <h2 id="h2Form"> Your details have been received successfully. <br>   I will contact you shortly.  </h2>
            `;

        formSubmit.innerHTML = html;
    }
});

function validateForm() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone_number').value;

    if (name && email && phone) {
        return true;
    } else {
        alert('Please fill in all the mandatory fields in the form.');
        return false;
    }
}



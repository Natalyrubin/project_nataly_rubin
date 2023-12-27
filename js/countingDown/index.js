'use strict'



let countdownInterval;

function startCountdown() {
    const selectedTimeInput = document.querySelector('#dateInput');
    const selectedTime = new Date(selectedTimeInput.value).getTime();
    console.log(selectedTime);


    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const timeRemaining = selectedTime - currentTime;

        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.querySelector('.hour').innerText = hours;
        document.querySelector('.minutes').innerText = minutes;
        document.querySelector('.second').innerText = seconds;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
        }
    }


    countdownInterval = setInterval(updateCountdown, 1000);


    setTimeout(() => {
        document.querySelector('.hour').innerText = '0';
        document.querySelector('.minutes').innerText = '0';
        document.querySelector('.second').innerText = '0';
    }, selectedTime - new Date().getTime());
}

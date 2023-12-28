"use strict"




const cardContainer = document.querySelector(".cardArea");
const cards = document.querySelectorAll('.memoryCard');
const cardsBack = document.querySelectorAll(".card-back");
const cardsFront = document.querySelectorAll(".card-front");

let cardBack;
let cardFront;
let firstChoice;
let secondChoice;



//------------------------------


function flipCard() {
    this.classList.toggle('flip');

    cardBack = this.querySelector(".card-back");
    cardFront = this.querySelector(".card-front");

    cardFront.style.display = "none";
    cardBack.style.display = "block";

    valueCard()
}

cards.forEach(card => card.addEventListener('click', flipCard));




//------------------------------------

const valueCard = () => {

    if (firstChoice === undefined) {
        firstChoice = cardBack
    } else {
        secondChoice = cardBack
    }

    ifSame()
}



const ifSame = () => {
    if (firstChoice && secondChoice !== undefined) {

        const firstChoicePath = firstChoice.src;
        const secondChoicePath = secondChoice.src;

        if (firstChoicePath === secondChoicePath) {

            const audio = new Audio("./audio/Friends-_Janice_Oh_My_God-141124.mp3");
            audio.play();

            console.log('good job');
            firstChoice = undefined;
            secondChoice = undefined;
        }

        if (firstChoicePath !== secondChoicePath) {
            console.log('try again');
            setTimeout(flipBack, 500);
        }
    }
}


function flipBack() {
    let parent1 = firstChoice.parentNode;
    let parent2 = secondChoice.parentNode;
    parent1.classList.toggle('flip');
    parent2.classList.toggle('flip');

    parent1.querySelector('.card-front').style.display = 'block';
    parent1.querySelector('.card-back').style.display = 'none';

    parent2.querySelector('.card-front').style.display = 'block';
    parent2.querySelector('.card-back').style.display = 'none';

    firstChoice = undefined;
    secondChoice = undefined;
}


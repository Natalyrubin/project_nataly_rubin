'use strict'


let score = 100;
console.log(typeof score);
let highScoreNum = 0;
console.log(typeof highScoreNum);


const againButton = document.querySelector('#againButton');
const checkButton = document.querySelector('#checkButton');
const guessInput = document.querySelector('.guess');
const computerNum = document.querySelector('.number');
const automaticMsg = document.querySelector('.message');
const highScoreElm = document.querySelector('.highscore');
const scoreScreen = document.querySelector('.score');
const left = document.querySelector('.left');
const h1 = document.querySelector('h1');
const body = document.querySelector('body');





function again() {
    scoreScreen.innerText = 100;
    score = 100;
    automaticMsg.innerText = "Start guessing...";
    computerNum.innerText = "?";
    guessInput.value = "";
    body.style.backgroundColor = "#222";
    h1.innerText = "Guess My Number!";
    left.appendChild(guessInput);
    left.appendChild(checkButton);
    console.log(score);
    console.log(scoreScreen.innerText);
}

function check() {

    let userGuess = parseFloat(guessInput.value);
    userGuess = guessInput.valueAsNumber;
    console.log(userGuess);

    for (let i = 1; i < 2; i++) {
        let rand = Math.trunc(Math.random() * 21);
        rand = Math.trunc(Math.random() * 21);
        console.log(rand);
        computerNum.innerText = rand;

        {
            if (rand !== userGuess); {
                score -= 10;
                automaticMsg.innerText = "💩 Shit Happens 💩";
                h1.innerText = automaticMsg.innerText + " Try again 💩";
                body.style.backgroundColor = "#8e1a1a";
            }
            if (rand === userGuess) {
                automaticMsg.innerText = "👑 OMG! YOU WIN! 👑";
                score += 10;
                guessInput.remove();
                checkButton.remove();
                h1.innerText = automaticMsg.innerText;
                body.style.backgroundColor = "#60b347";
                console.log(highScoreNum);
                if (score > highScoreNum) {
                    highScoreNum = score;
                    highScoreElm.innerText = highScoreNum;
                }
            }
            if (score === 0) {
                guessInput.remove();
                checkButton.remove();
                automaticMsg.innerText = "GAME OVER! Try again";
                h1.innerText = "GAME OVER! Try again";
                body.style.backgroundColor = "#ff1e1e";
            }

            scoreScreen.innerText = score;
            console.log(score);
            console.log(highScoreNum);
        }
    }
}

console.log(highScoreNum);
console.log(score);
console.log(typeof highScoreNum);
console.log(typeof score);


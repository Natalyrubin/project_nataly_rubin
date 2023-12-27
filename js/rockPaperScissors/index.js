/* 'use strict'


let playerScore = 0;
let coputerScore = 0;
let gameCounter = 0;






const playerScreenScore = document.querySelector('.player-score');
const computerScreenScore = document.querySelector('.computer-score');
const rockId = document.querySelector('#rock');
const paperId = document.querySelector('#paper');
const scissorsId = document.querySelector('#scissors');
const result = document.querySelector('#result');
const computerChoice = document.querySelector('#computer-choice');
const playAgain = document.querySelector('#play-again');

const choiceButtons = document.querySelector('.choices');







playerScreenScore.innerText = ` Player Scores: ${playerScore}`;
computerScreenScore.innerText = ` Computer Scores: ${coputerScore}`;



let computerRandomChoise = 0;

function randComputerChoice() {
    computerRandomChoise = Math.trunc((Math.random() * 3) + 1);
    console.log("Computer Choise Is:", computerRandomChoise);
}






function rock() {
    randComputerChoice()
    {
        if (computerRandomChoise === 1) {
            computerChoice.innerHTML = `<br><br> <p> Computer Choice: </p> <i class="fas fa-hand-rock" style="border: 2px solid var(--main-color); border-radius: 10px; margin: 10px 2rem; padding: 1rem; background-color:  #660033; align-items: center; color: white;"></i>`;
            result.innerHTML = `<p> Rock VS Rock - It's a TIE </p>`;
        }

        if (computerRandomChoise === 2) {
            computerChoice.innerHTML = `<br><br> <p> Computer Choice: </p> <i class="fas fa-hand-paper" style="border: 2px solid var(--main-color); border-radius: 10px; margin: 10px 2rem; padding: 1rem; background-color:  #660033; align-items: center; color: white;"></i>`;
            result.innerHTML = `<p> Rock VS Paper - Computer win</p>`;
            coputerScore += 1;
            console.log(`computer scores is: ${coputerScore}`);
            computerScreenScore.innerText = ` Computer Scores: ${coputerScore}`;
        }

        if (computerRandomChoise === 3) {
            computerChoice.innerHTML = `<br><br> <p> Computer Choice: </p> <i class="fas fa-hand-scissors" style="border: 2px solid var(--main-color); border-radius: 10px; margin: 10px 2rem; padding: 1rem; background-color:  #660033; align-items: center; color: white;"></i>`;
            result.innerHTML = `<p> Rock VS Scissors - You win</p>`;
            playerScore += 1;
            console.log(`player scores is: ${playerScore}`);
            playerScreenScore.innerText = ` Player Scores: ${playerScore}`;
        }

    }
    gameCounter++;
    counter();
    console.log(`Game Number is: ${gameCounter}`);
}





function paper() {
    randComputerChoice()
    {
        if (computerRandomChoise === 1) {
            computerChoice.innerHTML = `<br><br> <p> Computer Choice: </p> <i class="fas fa-hand-rock" style="border: 2px solid var(--main-color); border-radius: 10px; margin: 10px 2rem; padding: 1rem; background-color: #660033; align-items: center; color: white;"></i>`;
            result.innerText = "Paper VS Rock - You win";
            playerScore += 1;
            playerScreenScore.innerText = ` Player Scores: ${playerScore}`;
        }

        if (computerRandomChoise === 2) {
            computerChoice.innerHTML = `<br><br> <p> Computer Choice: </p> <i class="fas fa-hand-paper" style="border: 2px solid var(--main-color); border-radius: 10px; margin: 10px 2rem; padding: 1rem; background-color: #660033; align-items: center; color: white;"></i>`;
            result.innerText = "Paper VS Paper - It's a TIE";
        }

        if (computerRandomChoise === 3) {
            computerChoice.innerHTML = `<br><br> <p> Computer Choice: </p> <i class="fas fa-hand-scissors" style="border: 2px solid var(--main-color); border-radius: 10px; margin: 10px 2rem; padding: 1rem; background-color: #660033; align-items: center; color: white;"></i>`;
            result.innerText = "Paper VS Scissors - Computer win";
            coputerScore += 1;
            computerScreenScore.innerText = ` Computer Scores: ${coputerScore}`;
        }

    }
    gameCounter++;
    counter();
    console.log(`Game Number is: ${gameCounter}`);
}





function scissors() {
    randComputerChoice()
    {
        if (computerRandomChoise === 1) {
            computerChoice.innerHTML = `<br><br> <p> Computer Choice: </p> <i class="fas fa-hand-rock" style="border: 2px solid var(--main-color); border-radius: 10px; margin: 10px 2rem; padding: 1rem; background-color: #660033; align-items: center; color: white;"></i>`;
            result.innerText = "Scissors VS Rock - Computer win";
            coputerScore += 1;
            computerScreenScore.innerText = ` Computer Scores: ${coputerScore}`;
        }

        if (computerRandomChoise === 2) {
            computerChoice.innerHTML = `<br><br> <p> Computer Choice: </p> <i class="fas fa-hand-paper" style="border: 2px solid var(--main-color); border-radius: 10px; margin: 10px 2rem; padding: 1rem; background-color: #660033; align-items: center; color: white;"></i>`;
            result.innerText = "Scissors VS Paper - You win";
            playerScore += 1;
            playerScreenScore.innerText = ` Player Scores: ${playerScore}`;
        }

        if (computerRandomChoise === 3) {
            computerChoice.innerHTML = `<br><br> <p> Computer Choice: </p> <i class="fas fa-hand-scissors" style="border: 2px solid var(--main-color); border-radius: 10px; margin: 10px 2rem; padding: 1rem; background-color: #660033; align-items: center; color: white;"></i>`;
            result.innerText = "Scissors VS Scissors - It's a TIE";
        }

    }
    gameCounter++;
    counter();
    console.log(`Game Number is: ${gameCounter}`);
}


function counter() {
    if (gameCounter % 10 === 0) {
        choiceButtons.innerHTML = `<p style="font-size: 45px;" >GAME OVER</p`;
        result.innerText = 'We Finnish';
        if (playerScore > coputerScore) {
            computerChoice.innerText = `The Winner Is: The Player!!!`;
        }
        if (coputerScore > playerScore) {
            computerChoice.innerText = `The Winner Is: The Computer!!!`;
        }
        if (coputerScore === playerScore) {
            computerChoice.innerText = `There is no Winner! It's a TIE - try again.`;
        }
    }
}

console.log(`Game Number is: ${gameCounter}`);


function playagain() {
    playerScore = 0;
    coputerScore = 0;
    playerScreenScore.innerText = ` Player Scores: ${playerScore}`;
    computerScreenScore.innerText = ` Computer Scores: ${coputerScore}`;
    choiceButtons.innerHTML = `<div class="choice" id="rock" onclick="rock()">
    <i class="fas fa-hand-rock"></i>
    </div>
    <div class="choice" id="paper" onclick="paper()">
    <i class="fas fa-hand-paper"></i>
    </div>
    <div class="choice" id="scissors" onclick="scissors()">
    <i class="fas fa-hand-scissors"></i>
    </div>`;
    computerChoice.innerHTML = "";
    result.innerText = "Choose your weapon!";
}





 */






//-----------------------------------------------------------------


'use strict';

let playerScore = 0;
let computerScore = 0;
let gameCounter = 0;

const playerScreenScore = document.querySelector('.player-score');
const computerScreenScore = document.querySelector('.computer-score');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultDiv = document.querySelector('#result');
const computerChoiceDiv = document.querySelector('#computer-choice');
const playAgainButton = document.querySelector('#play-again');
const choiceButtons = document.querySelector('.choices');

playerScreenScore.innerText = `Player Scores: ${playerScore}`;
computerScreenScore.innerText = `Computer Scores: ${computerScore}`;


rockButton.addEventListener('click', () => playRound(1));
paperButton.addEventListener('click', () => playRound(2));
scissorsButton.addEventListener('click', () => playRound(3));
playAgainButton.addEventListener('click', playAgain);



function getRandomChoice() {
    return Math.trunc(Math.random() * 3) + 1;
}

function playRound(playerChoice) {
    const computerChoice = getRandomChoice();

    displayComputerChoice(computerChoice);

    if (playerChoice === computerChoice) {
        showResult("It's a TIE");
    } else if (
        (playerChoice === 1 && computerChoice === 3) ||
        (playerChoice === 2 && computerChoice === 1) ||
        (playerChoice === 3 && computerChoice === 2)
    ) {
        playerScore++;
        showResult('You win');
    } else {
        computerScore++;
        showResult('Computer wins');
    }

    gameCounter++;
    updateScores();

    if (gameCounter % 10 === 0) {
        endGame();
    }
}

function displayComputerChoice(choice) {
    const choiceIcons = [
        '<i class="fas fa-hand-rock"></i>',
        '<i class="fas fa-hand-paper"></i>',
        '<i class="fas fa-hand-scissors"></i>',
    ];
    computerChoiceDiv.innerHTML = `<br><br><p>Computer Choice:</p>${choiceIcons[choice - 1]}`;
}

function showResult(message) {
    resultDiv.innerHTML = `<p>${message}</p>`;
}

function updateScores() {
    playerScreenScore.innerText = `Player Scores: ${playerScore}`;
    computerScreenScore.innerText = `Computer Scores: ${computerScore}`;
}

function endGame() {
    choiceButtons.innerHTML = `<p style="font-size: 45px;">GAME OVER</p>`;
    resultDiv.innerText = 'We Finished';

    if (playerScore > computerScore) {
        computerChoiceDiv.innerText = `The Winner Is: The Player!!!`;
    } else if (computerScore > playerScore) {
        computerChoiceDiv.innerText = `The Winner Is: The Computer!!!`;
    } else {
        computerChoiceDiv.innerText = `There is no Winner! It's a TIE - try again.`;
    }
}

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    gameCounter = 0;

    updateScores();
    resultDiv.innerText = 'Choose your weapon!';
    computerChoiceDiv.innerHTML = '';

    choiceButtons.innerHTML = `<div class="choice" id="rock" onclick="playRound(1)">
        <i class="fas fa-hand-rock"></i>
    </div>
    <div class="choice" id="paper" onclick="playRound(2)">
        <i class="fas fa-hand-paper"></i>
    </div>
    <div class="choice" id="scissors" onclick="playRound(3)">
        <i class="fas fa-hand-scissors"></i>
    </div>`;
}





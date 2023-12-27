'use strict'

const triviaQuestion = [
    {
        question: 'שאלון הטריויה שיסעיר אתכם! מוכנים להתחיל?',
        answer: ['חד מש', 'לגמרי', 'כן', 'אם אין ברירה, אז בסדר..'],
        correctAnswer: 'כל-התשובות-נכונות'
    },
    {
        question: 'מאיפה מקבלים אריות את רוב המים שלהם?',
        answer: ['מהטרף שלהם', 'מנחלים', 'ממעיינות', 'מאכילת עלים וצמחים'],
        correctAnswer: 'מהטרף שלהם'
    },
    {
        question: 'מכמה נוירונים מורכב המוח הממוצע?',
        answer: ['100 אלף', 'מיליון', 'מאה מיליארד', '10 מיליון'],
        correctAnswer: 'מאה מיליארד'
    },
    {
        question: 'מה סוג הסוכר שיש בחלב?',
        answer: ['פרוקטוז', 'גלקטוז', 'סוכרוז', 'לקטוז'],
        correctAnswer: 'לקטוז'
    },
    {
        question: 'באיזו שנה טבעה הטיטאניק?',
        answer: ['1921', '1915', '1912', '1927'],
        correctAnswer: '1912'
    },
    {
        question: 'באיזו תקופה גאולוגית חי הדינוזאור הטורף טירנוזאור רקס?',
        answer: ['פלאוגן', 'קרטיקון', 'יורה', 'פרם'],
        correctAnswer: 'קרטיקון'
    },
    {
        question: 'איך קוראים לאטום עם מטען חשמלי חיובי או שלילי?',
        answer: ['מולקולה', 'אלקטרון', 'פרוטון', 'יון'],
        correctAnswer: 'יון'
    }
]





let currentQuestion = 0;
let score = 0;
let counter = 0;
const scoreCounter = document.querySelector('#totalScore');
const answerCounter = document.querySelector('#questionNum');
const restartGame = document.querySelector('.restartGame');
const container = document.querySelector('.container');




const innerQues = document.querySelector('#question');
const innerAnswer = document.querySelector('#answer1');
const innerAnswer1 = document.querySelector('#answer2');
const innerAnswer2 = document.querySelector('#answer3');
const innerAnswer3 = document.querySelector('#answer4');



function showQuestion() {
    innerQues.innerText = triviaQuestion[currentQuestion].question;
    innerAnswer.innerText = triviaQuestion[currentQuestion].answer[0];
    innerAnswer1.innerText = triviaQuestion[currentQuestion].answer[1];
    innerAnswer2.innerText = triviaQuestion[currentQuestion].answer[2];
    innerAnswer3.innerText = triviaQuestion[currentQuestion].answer[3];
}


function userChoose(answer) {
    counter += 1;
    const isCorrect = answer === triviaQuestion[currentQuestion].correctAnswer
    if (isCorrect) {
        score += 10;
        scoreCounter.innerText = score;
        answerCounter.innerText = counter;
        console.log(true);
        currentQuestion++;
    } else {
        answerCounter.innerText = counter;
        console.log(false);
        currentQuestion++;
    }
    if (currentQuestion === triviaQuestion.length) {
        let html = '';
        html = `
        <h1>המשחק הסתיים! <br> הניקוד שלך הוא: ${score} מתוך ${(triviaQuestion.length * 10) - 10} <br><br> נשמח לדעת איך היתה החוויה שלך</h1>
        
        <button onclick="rateGame()" style="width: 25%;">LIKE</button>
        <button onclick="rateGame()" style="width: 25%;">UNLINE</button>
        `;
        container.innerHTML = html;
        return;
    }
    showQuestion();
}






function rateGame() {
    document.querySelector('.dashboard').style.display = 'none';


    let html = `
    <h1 style="margin-top: 15%;"> תודה ששיתפת אותנו <br> נתראה במשחק הבא </h1>
    <a href="/html/index.html" style="text-decoration: none;">
        <button>חזרה לעמוד הבית</button>
    </a>


    `;
    container.innerHTML = html;
}






showQuestion()

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});
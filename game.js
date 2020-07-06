const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question: "Question 1?",
        choice1: "Answer A for Question 1",
        choice2: "Answer B for Question 1",
        choice3: "Answer C for Question 1",
        choice4: "Answer D for Question 1",
        answer: 1
    },


    {
        question: "Question 2?",
        choice1: "Answer A for Question 2",
        choice2: "Answer B for Question 2",
        choice3: "Answer C for Question 2",
        choice4: "Answer D for Question 2",
        answer: 3
    },


    {
        question: "Question 3?",
        choice1: "Answer A for Question 3",
        choice2: "Answer B for Question 3",
        choice3: "Answer C for Question 3",
        choice4: "Answer D for Question 3",
        answer: 4
    },


    {
        question: "Question 4?",
        choice1: "Answer A for Question 4",
        choice2: "Answer B for Question 4",
        choice3: "Answer C for Question 4",
        choice4: "Answer D for Question 4",
        answer: 2
    },


    {
        question: "Question 5?",
        choice1: "Answer A for Question 5",
        choice2: "Answer B for Question 5",
        choice3: "Answer C for Question 5",
        choice4: "Answer D for Question 5",
        answer: 1
    },

];


//constants
const CORRECT_Bonus = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign("/end.html");
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        getNewQuestion();
    });
});

startGame();



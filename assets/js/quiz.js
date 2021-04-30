//This contains all the functionality for the quiz, answer checks, and score calculations.
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}
Quiz.prototype.choose = function (answer) {
    if (this.getQuestionIndex().isCorrect(answer)) {
        this.score++;
    }
    this.questionIndex++;
}
Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.isCorrect = function (choice) {
    return this.answer === choice;
}

function populate() {
    if (quiz.isEnded()) {
        showResults();
    } else {
        // show question
        let the_element = document.getElementById("question");
        the_element.innerHTML = quiz.getQuestionIndex().text;
        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            choose("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function choose(id, choose) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.choose(choose);
        populate();
    }
};

//display the question number out of the total questions as the user progresses through the quiz
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

//result messages displayed to the user depending on their score
function showResults() {
    let gameOverHTML = "<h1>Result</h1>";
    let message
    if (quiz.score >= 5) {
        message = "Sláinte! You're Irish no doubt!"
    }
    if (quiz.score < 5) {
        message = "'Getting there!' says the Leprechaun!"
    }
    if (quiz.score < 2) {
        message = "Not impressed!"
    }
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + ", " + message + "</h2>";
    let element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// quiz questions go here
let questions = [
    new Question("How many 'shades of green' does the song say can be found in Ireland?", ["60", "50", "40", "30"], "40"),
    new Question("Which famous city was James Galway born?", ["Galway", "Dublin", "Cork", "Belfast"], "Belfast"),
    new Question("Who was the first female president of Ireland?", ["Mary McAleese", "Mary Robinson", "Mary Lou McDonald", "Mary Kenny"], "Mary Robinson"),
    new Question("What are the Twelve Bens?", ["Mountains", "Hills", "Lakes", "Rivers"], "Mountains"),
    new Question("Which bird is said to be 'king of the birds'?", ["Robin", "Wren", "Magpie", "Kingfisher"], "Wren"),
    new Question("How many leaves does a shamrock have?", ["5", "4", "3", "2"], "3"),
    new Question("What are the two drinks that make up a Black Velvet?", ["Whiskey & Champagne", "Guinness & Vodka", "Whiskey & Vodka", "Guinness and Champagne"], "Guinness and Champagne"),
    new Question("Which is the most northernly county of Ireland?", ["Antrim", "Fermanagh", "Donegal", "Derry"], "Donegal"),
    new Question("'Nadolig Llawen' is 'Happy Christmas' in ...?", ["Welsh", "Ulster Scots", "Gaelic", "Shelta"], "Welsh"),
    new Question("How many counties touch River Shannon?", ["10", "11", "12", "13"], "11"),
];
// create quiz
let quiz = new Quiz(questions);
// display quiz
populate();
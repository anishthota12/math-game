// VARIABLES //
var randomNumber1 = Math.round(Math.random() * 999);
var randomNumber2 = Math.round(Math.random() * 999);
var randomSign = Math.ceil(Math.random() * 2);

var timerNumber = 1;

var computerAnswer = 0;
var userAnswer = 0;

var correctQuestions = 0;
var numberQuestions = 0;
var incorrectQuestions = 0;
var incorrectQuestionsList = "";

// GAME SCREEN JAVASCRIPT //

//TIMER//

setInterval(setTimer, 1000);

function setTimer() {
    document.getElementById("timer").innerHTML = "Time: " + timerNumber;
    timerNumber = timerNumber + 1;
    if (timerNumber >= 121) {
        clearInterval();
        localStorage.setItem("correct", correctQuestions);
        localStorage.setItem("incorrect", incorrectQuestions);
        localStorage.setItem("number", numberQuestions);
        localStorage.setItem("list", incorrectQuestionsList);
        window.location = "results.html";
    }
}

//SETTING UP//

setup();

function setup() {
    randomNumber1 = Math.round(Math.random() * 999);
    randomNumber2 = Math.round(Math.random() * 999);
    randomSign = Math.ceil(Math.random() * 2);
    if (randomSign == 1) {
        computerAnswer = parseInt(randomNumber1) + parseInt(randomNumber2);
        document.getElementById("questionLabel").innerHTML = randomNumber1 + "<br> + " + randomNumber2;
    } else {
        computerAnswer = parseInt(randomNumber1) - parseInt(randomNumber2);
        document.getElementById("questionLabel").innerHTML = randomNumber1 + "<br> - " + randomNumber2;

        if (Math.sign(computerAnswer) == -1) {
            computerAnswer = Math.abs(computerAnswer);
            randomNumber1 = randomNumber2;
            randomNumber2 = randomNumber1 - computerAnswer;
            document.getElementById("questionLabel").innerHTML = randomNumber1 + "<br> - " + randomNumber2;
        }
    }
}

//SUBMITTING//

function submit() {
    userAnswer = document.getElementById("answerLabel").value;
    if (userAnswer == "") {
        return
    }
    if (userAnswer == computerAnswer) {
        correctQuestions = correctQuestions + 1;
        numberQuestions = numberQuestions + 1;
        document.getElementById("status").innerHTML = "CORRECT";
        document.getElementById("status").style.color = "lime";
        document.getElementById("answerLabel").value = "";
        document.getElementById("score").innerHTML = "Correct: " + correctQuestions;
    } else {
        incorrectQuestions = incorrectQuestions + 1;
        numberQuestions = numberQuestions + 1;
        document.getElementById("status").innerHTML = "INCORRECT";
        document.getElementById("status").style.color = "red";
        document.getElementById("answerLabel").value = "";

        if (randomSign == 1) {
            incorrectQuestionsList += randomNumber1 + " + " + randomNumber2 + " = " + userAnswer + "<br>";
        }
        else {
            incorrectQuestionsList += randomNumber1 + " - " + randomNumber2 + " = " + userAnswer + "<br>";
        }
    }
    setup();
}

window.addEventListener("keypress", function(event){
    if (event.keyCode === 13) {
        submit();
    }
})

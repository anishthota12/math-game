/* NORMAL SCREEN JAVASCRIPT */

// VARIABLES //
var timerNumber = 1;
var numberRange = 10;

var randomNumber1 = Math.round(Math.random() * numberRange);
var randomNumber2 = Math.round(Math.random() * numberRange);
var randomSign = Math.ceil(Math.random() * 3);

var computerAnswer = 0;
var userAnswer = 0;

var correctQuestions = 0;
var incorrectQuestions = 0;
var incorrectQuestionsList = "";

var additionOperation = true
var subtractionOperation = true
var multiplicationOperation = false
var divisionOperation = false


//TIMER//
if (localStorage.getItem("timerEnablement") == "true") {
    setInterval(setTimer, 1000);
    localStorage.removeItem("timerEnablement")

    function setTimer() {
        document.getElementById("timer").innerHTML = "Time: " + timerNumber;
        timerNumber = timerNumber + 1;
        if (timerNumber >= 121) {
            clearInterval();
            localStorage.setItem("game-mode", "normal");
            localStorage.setItem("correct", correctQuestions);
            localStorage.setItem("incorrect", incorrectQuestions);
            localStorage.setItem("list", incorrectQuestionsList);
            window.location = "../results/results.html";
        }
    }
}

//SETTING UP//

setup();

if (localStorage.getItem("timerEnablement") == "false") {
    document.getElementById("doneButton").style.display = "block";
}

function setup() {
    randomNumber1 = Math.round(Math.random() * numberRange);
    randomNumber2 = Math.round(Math.random() * numberRange);
    randomSign = Math.ceil(Math.random() * 4);
    if (randomSign == 1) {
        if (additionOperation == false) {
            setup();
            return;
        }
        computerAnswer = parseInt(randomNumber1) + parseInt(randomNumber2);
        document.getElementById("questionLabel").innerHTML = "ㅤ" + randomNumber1 + "<br> + " + randomNumber2;
        if (randomNumber1 < randomNumber2) {
            randomNumber1 = randomNumber2;
            randomNumber2 = computerAnswer - randomNumber1;
            document.getElementById("questionLabel").innerHTML = "ㅤ" + randomNumber1 + "<br> + " + randomNumber2;
        }
    } else if (randomSign == 2) {
        if (subtractionOperation == false) {
            setup();
            return;
        }
        computerAnswer = parseInt(randomNumber1) - parseInt(randomNumber2);
        document.getElementById("questionLabel").innerHTML = "ㅤ" + randomNumber1 + "<br> - " + randomNumber2;

        if (Math.sign(computerAnswer) == -1) {
            computerAnswer = Math.abs(computerAnswer);
            randomNumber1 = randomNumber2;
            randomNumber2 = randomNumber1 - computerAnswer;
            document.getElementById("questionLabel").innerHTML = "ㅤ" + randomNumber1 + "<br> - " + randomNumber2;
        }
    } else if (randomSign == 3) {
        if (multiplicationOperation == false) {
            setup();
            return;
        }
        computerAnswer = parseInt(randomNumber1) * parseInt(randomNumber2);
        document.getElementById("questionLabel").innerHTML = "ㅤ" + randomNumber1 + "<br> x " + randomNumber2;
    }
    else if (randomSign == 4) {
        if (divisionOperation == false) {
            setup();
            return;
        }
        bob = []
        for(let i = 2; i <= 30; i++) {
            if(randomNumber1 % i == 0) {
                bob.push(i)
            }
        }
        randomNumber2 = bob[Math.floor(Math.random() * bob.length)]
        computerAnswer = parseInt(randomNumber1) / parseInt(randomNumber2);
        document.getElementById("questionLabel").innerHTML = "ㅤ" + randomNumber1 + "<br> / " + randomNumber2;
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
        document.getElementById("status").innerHTML = "CORRECT";
        document.getElementById("status").style.color = "lime";
        document.getElementById("answerLabel").value = "";
        document.getElementById("score").innerHTML = "Correct: " + correctQuestions;
    } else {
        incorrectQuestions = incorrectQuestions + 1;
        document.getElementById("status").innerHTML = "INCORRECT";
        document.getElementById("status").style.color = "red";
        document.getElementById("answerLabel").value = "";

        if (randomSign == 1) {
            incorrectQuestionsList += randomNumber1 + " + " + randomNumber2 + " = " + userAnswer + "<br>";
        } else if (randomSign == 2) {
            incorrectQuestionsList += randomNumber1 + " - " + randomNumber2 + " = " + userAnswer + "<br>";
        } else if (randomSign == 3) {
            incorrectQuestionsList += randomNumber1 + " x " + randomNumber2 + " = " + userAnswer + "<br>";
        } else if (randomSign == 4) {
            incorrectQuestionsList += randomNumber1 + " / " + randomNumber2 + " = " + userAnswer + "<br>";
        }
    }
    setup();
}

window.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        submit();
    }
})

function finish() {
    localStorage.setItem("game-mode", "normal");
    localStorage.setItem("correct", correctQuestions);
    localStorage.setItem("incorrect", incorrectQuestions);
    localStorage.setItem("list", incorrectQuestionsList);
    window.location = "../results/results.html";
}

// NUMBER RANGES //

function changeNumberRange(numberRangeButton, newNumberRange) {
    numberRange = newNumberRange;
    document.getElementById("oneTen").style.backgroundColor = "hsl(60, 67%, 84%)";
    document.getElementById("oneHundred").style.backgroundColor = "hsl(60, 67%, 84%)";
    document.getElementById("oneThousand").style.backgroundColor = "hsl(60, 67%, 84%)";
    document.getElementById("tenThousand").style.backgroundColor = "hsl(60, 67%, 84%)";
    document.getElementById(numberRangeButton).style.backgroundColor = "lightgreen";
}

function changeOperation(operation) {
    if (operation == "addition") {
        if (additionOperation == false) {
            additionOperation = true;
            document.getElementById("operationAdditionButton").style.backgroundColor = "lightgreen";
        } else if (additionOperation == true) {
            additionOperation = false;
            document.getElementById("operationAdditionButton").style.backgroundColor = "hsl(60, 67%, 84%)";
        }
    } else if (operation == "subtraction") {
        if (subtractionOperation == false) {
            subtractionOperation = true;
            document.getElementById("operationSubtractionButton").style.backgroundColor = "lightgreen";
        } else if (subtractionOperation == true) {
            subtractionOperation = false;
            document.getElementById("operationSubtractionButton").style.backgroundColor = "hsl(60, 67%, 84%)";
        }
    } else if (operation == "multiplication") {
        if (multiplicationOperation == false) {
            multiplicationOperation = true;
            document.getElementById("operationMultiplicationButton").style.backgroundColor = "lightgreen";
        } else if (multiplicationOperation == true) {
            multiplicationOperation = false;
            document.getElementById("operationMultiplicationButton").style.backgroundColor = "hsl(60, 67%, 84%)";
        }
    } else if (operation == "division") {
        if (divisionOperation == false) {
            divisionOperation = true;
            document.getElementById("operationDivisionButton").style.backgroundColor = "lightgreen";
        } else if (divisionOperation == true) {
            divisionOperation = false;
            document.getElementById("operationDivisionButton").style.backgroundColor = "hsl(60, 67%, 84%)";
        }
    }
}

/* BUBBLE SCREEN JAVASCRIPT */
/* VARIABLES */
var chosenNumber = Math.ceil(Math.random() * 20);
var correctBubbles = 0;
var lives = 3;
var i = 1;
var firstAddend = 0;
var secondAddend = 0;
var equation = "";
var bubbleStatusNumber = Math.ceil(Math.random() * 2);
var bubbleStatus = "";
var correctBubbleClickStatus = true;
var incorrectQuestionsList = "";

document.getElementById("chosenNumber").innerHTML = chosenNumber;
document.getElementById("bubbleDarkScreen").style.display = "none";

var timer = setInterval(test, 3000)

function test() {
    bubbleStatusNumber = Math.ceil(Math.random() * 2);
    document.getElementById("screen").innerHTML = "";
    randomLeftValue = Math.round(Math.random() * 93)
    if (correctBubbleClickStatus != true) {
        lives = lives - 1;
        incorrectQuestionsList += equation + "<br>";
        if (lives == 0) {
            document.getElementById("bubbleDarkScreen").style.display = "block";
            document.getElementById("bubbleGameOver").classList.add('game-over');
            clearInterval(timer);
            setTimeout(end, 5000);
            return;
        }
        clearInterval(timer);
        document.getElementById("bubbleDarkScreen").style.display = "block";
        document.getElementById("bubbleLifeLost").classList.add('lose-life');
        document.getElementById("livesLabel").innerHTML = "Lives: " + lives;
        setTimeout(loseLife, 5000);
        return;
    }
    if (bubbleStatusNumber == 1) {
        correctBubbleClickStatus = false;
        firstAddend = Math.ceil(Math.random() * (chosenNumber - 1));
        secondAddend = chosenNumber - firstAddend;
        equation = firstAddend + " + " + secondAddend;
        bubbleStatus = "true";
        document.getElementById("screen").innerHTML = "<div id = 'bubble" + i + "' class = 'bubble' style = 'left:" + randomLeftValue + "vw;' onclick = 'clickCorrectBubble(this.id)'>" + equation + "  </div>";
    }

    if (bubbleStatusNumber == 2) {
        firstAddend = Math.ceil(Math.random() * (chosenNumber - 1));
        secondAddend = chosenNumber - firstAddend + Math.ceil(Math.random() * 4);
        equation = firstAddend + " + " + secondAddend;
        bubbleStatus = "false";
        document.getElementById("screen").innerHTML = "<div id = 'bubble" + i + "' class = 'bubble' style = 'left:" + randomLeftValue + "vw;' onclick = 'clickWrongBubble(this.id)'>" + equation + "  </div>";
    }
    i = i + 1;
}

function clickCorrectBubble(bubbleID) {
    correctBubbles = correctBubbles + 1;
    document.getElementById("correctLabel").innerHTML = "Correct: " + correctBubbles;
    document.getElementById(bubbleID).classList.add('bubble-popped');
    correctBubbleClickStatus = true;
}

function clickWrongBubble(bubbleID) {
    lives = lives - 1;
    incorrectQuestionsList += equation + "<br>";
    if (lives == 0) {
        document.getElementById("bubbleDarkScreen").style.display = "block";
        document.getElementById("bubbleGameOver").classList.add('game-over');
        clearInterval(timer);
        setTimeout(end, 5000);
        return;
    }
    document.getElementById(bubbleID).style.color = "red";
    clearInterval(timer);
    document.getElementById("bubbleDarkScreen").style.display = "block";
    document.getElementById("bubbleLifeLost").classList.add('lose-life');
    document.getElementById("livesLabel").innerHTML = "Lives: " + lives;
    setTimeout(loseLife, 5000);
}

function end() {
    localStorage.setItem("game-mode", "bubble");
    localStorage.setItem("correct", correctBubbles);
    localStorage.setItem("list", incorrectQuestionsList);
    window.location = "../results/results.html"
}

function loseLife() {
    document.getElementById("bubbleDarkScreen").style.display = "none";
    document.getElementById("bubbleLifeLost").classList.remove('lose-life');
    timer = setInterval(test, 3000);
    correctBubbleClickStatus = true;
}

function finish() {
    localStorage.setItem("game-mode", "bubble");
    localStorage.setItem("correct", correctBubbles);
    localStorage.setItem("list", incorrectQuestionsList);
    window.location = "../results/results.html"
}
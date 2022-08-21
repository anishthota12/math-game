/*RESULTS SCREEN JAVASCRIPT*/
document.getElementById("questionNumber").style.display = "block";
document.getElementById("correct").style.display = "block";
document.getElementById("wrong").style.display = "block";
document.getElementById("score").style.display = "block";
document.getElementById("list").style.display = "block";

if (localStorage.getItem("game-mode") == "normal") {
    score = (localStorage.getItem("correct") * 10) - (localStorage.getItem("incorrect") * 15);
    if (localStorage.getItem("list") != null) {
        document.getElementById("questionNumber").innerHTML = "Number of Questions: " + (parseInt(localStorage.getItem("correct")) + parseInt(localStorage.getItem("incorrect")));
        document.getElementById("correct").innerHTML = "Correct Questions: " + localStorage.getItem("correct");
        document.getElementById("wrong").innerHTML = "Incorrect Questions: " + localStorage.getItem("incorrect");
        document.getElementById("score").innerHTML = "Score: " + score;
        document.getElementById("list").innerHTML = "List of Incorrect Questions: <br>" + localStorage.getItem("list");
    }
}

if (localStorage.getItem("game-mode") == "bubble") {
    document.getElementById("questionNumber").style.display = "none";
    document.getElementById("correct").innerHTML = "Correct Questions: " + localStorage.getItem("correct");
    document.getElementById("wrong").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("list").innerHTML = "List of Incorrect Questions: <br>" + localStorage.getItem("list");
}

localStorage.removeItem("questionNumber");
localStorage.removeItem("correct");
localStorage.removeItem("wrong");
localStorage.removeItem("score");
localStorage.removeItem("list");
localStorage.removeItem("game-mode");
localStorage.removeItem("timerEnablement");

function startGame() {
    localStorage.setItem("timerEnablement", "true")
    window.location = "../normal-mode/normal.html";
}

function startPractice() {
    localStorage.setItem("timerEnablement", "false")
    window.location = "../normal-mode/normal.html";
}

function startBubbleMode() {
    window.location = "../normal-mode/normal.html";
}
/*RESULTS SCREEN JAVASCRIPT*/
score = (localStorage.getItem("correct") * 10) - (localStorage.getItem("incorrect") * 15);
document.getElementById("questionNumber").innerHTML = "Number of Questions Right: " + localStorage.getItem("number");
document.getElementById("correct").innerHTML = "Correct Questions: " + localStorage.getItem("correct");
document.getElementById("wrong").innerHTML = "Incorrect Questions: " + localStorage.getItem("incorrect");
document.getElementById("score").innerHTML = "Score: " + score;
document.getElementById("list").innerHTML = "Incorrect Questions: <br>" + localStorage.getItem("list");

function startGame() {
    localStorage.setItem("timerEnablement", "true")
    window.location = "game.html";
}

function startPractice() {
    localStorage.setItem("timerEnablement", "false")
    window.location = "game.html";
}
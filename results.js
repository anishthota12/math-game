document.getElementById("questionNumber").innerHTML = "Number of Questions Answered: " + localStorage.getItem("number");
document.getElementById("correct").innerHTML = "Correct Questions: " + localStorage.getItem("correct");
document.getElementById("wrong").innerHTML = "Incorrect Questions: " + localStorage.getItem("incorrect");

score = (localStorage.getItem("correct") * 10) - (localStorage.getItem("incorrect") * 15);
document.getElementById("score").innerHTML = "Score: " + score;

document.getElementById("list").innerHTML = "Incorrect Questions: <br>" + localStorage.getItem("list");

function play() {
    window.location = "game.html";
}

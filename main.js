/* START SCREEN JAVASCRIPT */

function normalGame() {
    window.location = "normal-mode/normal.html";
    localStorage.setItem("timerEnablement", "true");
}

function normalPractice() {
    window.location = "normal-mode/normal.html";
    localStorage.setItem("timerEnablement", "false");
}

function bubbleGame() {
    window.location = "bubble-mode/bubble.html";
}

function infoBox() {
    document.getElementById("darkScreen").style.display = "block";
    document.getElementById("infoBox").style.display = "block";
}

function close() {
    document.getElementById("darkScreen").style.display = "none";
    document.getElementById("infoBox").style.display = "none";
    console.log("hi")
}
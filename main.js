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
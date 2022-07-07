/* START SCREEN JAVASCRIPT */

function game() {
    window.location = "game.html";
    localStorage.setItem("timerEnablement", "true");
}

function practice() {
    window.location = "game.html";
    localStorage.setItem("timerEnablement", "false");
}
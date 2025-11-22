let totalSeconds = 0;
let remaining = 0;
let interval = null;

const display = document.getElementById("time-display");
const progress = document.getElementById("progress");
const input = document.getElementById("minutes-input");

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

function startTimer() {
    if (interval) return; // prevent multiple timers

    if (remaining <= 0) {
        const mins = parseInt(input.value);
        if (!mins || mins <= 0) {
            alert("Enter valid minutes!");
            return;
        }
        totalSeconds = mins * 60;
        remaining = totalSeconds;
    }

    interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (remaining <= 0) {
        clearInterval(interval);
        interval = null;
        alert("Time's up!");
        return;
    }

    remaining--;

    const mins = String(Math.floor(remaining / 60)).padStart(2, "0");
    const secs = String(remaining % 60).padStart(2, "0");

    display.textContent = `${mins}:${secs}`;

    // progress circle
    let progressCalc = (remaining / totalSeconds) * 565;
    progress.style.strokeDashoffset = progressCalc;
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    remaining = 0;
    display.textContent = "00:00";
    progress.style.strokeDashoffset = 565;
}

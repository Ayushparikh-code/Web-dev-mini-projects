const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const Diwali = "2024-11-04"; // Changed to YYYY-MM-DD format

function countdown() {
    const diwaliDate = new Date(Diwali);
    const currentDate = new Date();

    const totalSeconds = (diwaliDate - currentDate) / 1000;

    if (totalSeconds < 0) {
        // If Diwali has already passed, display a message
        daysEl.innerHTML = "Diwali has already passed!";
        hoursEl.innerHTML = "";
        minsEl.innerHTML = "";
        secondsEl.innerHTML = "";
        return;
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

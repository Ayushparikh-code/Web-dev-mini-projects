const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// Set the upcoming Diwali date
const Diwali = "4 Nov 2024";

function countdown() {
    const diwaliDate = new Date(Diwali);
    const currentDate = new Date();

    // Calculate total seconds until Diwali
    const totalSeconds = (diwaliDate - currentDate) / 1000;

    // If the countdown has reached zero or passed
    if (totalSeconds < 0) {
        // Display "Celebration!" if the date has passed
        daysEl.innerHTML = "0";
        hoursEl.innerHTML = "00";
        minsEl.innerHTML = "00";
        secondsEl.innerHTML = "00";
        return; // Stop the countdown
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // Update the HTML elements with the calculated values
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial call to update the countdown immediately
countdown();

// Set an interval to update the countdown every second
setInterval(countdown, 1000);

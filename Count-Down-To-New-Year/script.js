const dayEl = document.getElementById("days")
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const d = 1
const m = "jan"
var y = 2024

function countdown() {
    const newYear = d + m + y;
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    dayEl.innerHTML = formateTime(days);
    hourEl.innerHTML = formateTime(hours);
    minuteEl.innerHTML = formateTime(minutes);
    secondEl.innerHTML = formateTime(seconds);
  
    if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
        y+=1;
    }
    
}
function formateTime(time){
    return time < 10 ? `0${time}` : time;}
    
countdown();
setInterval(countdown, 1000);
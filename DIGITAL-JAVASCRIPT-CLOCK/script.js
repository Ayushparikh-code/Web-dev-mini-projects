setInterval(getCurrentTime, 1000);

    
function getCurrentTime() {
    var currentTime =  new Date();
    var hourRatio = currentTime.getHours();
    var minuteRatio = currentTime.getMinutes();
    var secondRatio = currentTime.getSeconds();
    let hourHand = (30*hourRatio) + (minuteRatio/2);
    let minuteHand = (6*minuteRatio);
    let secondHand = (6*secondRatio);

    hour.style.transform = `rotate(${hourHand}deg)`;
    minute.style.transform = `rotate(${minuteHand}deg)`;
    second.style.transform = `rotate(${secondHand}deg)`;

}


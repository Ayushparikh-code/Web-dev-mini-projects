const startStopBtnEl = document.querySelector('.startStopBtn');
const resetBtnEl = document.querySelector('.resetBtn');



let sec=0;
let min=0;
let hrs=0;

//leading zeros

let leadingSec = 0;
let leadingMin = 0;
let leadingHrs = 0;

//Interval Settings
let timeInterval = undefined;
let timeStopped = "stopped";

function stopWatch(){

        sec++;

        if(sec / 60 === 1){
            sec = 0;
            min++;

            if(min / 60 === 1){
                min = 0;
                hrs++;
            }
        }

        if(sec<10){
            leadingSec = 0 + sec.toString();
        }
        else{
            leadingSec= sec;
        }

    if(min<10){
        leadingMin = 0 + min.toString();
    }
    else{
        leadingMin= min;
    }

    if(hrs<10){
        leadingHrs = 0 + hrs.toString();
    }
    else{
        leadingHrs= hrs;
    }


    document.getElementById('stop-watch').textContent = leadingHrs + ":" + leadingMin +":" + leadingSec;

}

startStopBtnEl.addEventListener('click',function (){
    if (timeStopped === "stopped"){

        timeInterval = window.setInterval(stopWatch,1000);

        startStopBtnEl.innerHTML = `<i class="fa-solid fa-2xl fa-pause" id="pause"></i>`

        timeStopped = "started"
    }
    else{
        window.clearInterval(timeInterval);

        startStopBtnEl.innerHTML = ` <i id="play" class="fa-solid fa-2xl fa-play"></i>`;

        timeStopped = "stopped";
    }


})

resetBtnEl.addEventListener('click',function (){

    document.getElementById('stop-watch').textContent = "00:00:00";

    window.clearInterval(timeInterval);

    startStopBtnEl.innerHTML = ` <i id="play" class="fa-solid fa-2xl fa-play"></i>`;

    timeStopped = "stopped";

    sec = 0;
    min = 0;
    hrs = 0;
})
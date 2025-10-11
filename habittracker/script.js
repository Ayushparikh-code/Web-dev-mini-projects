var date = new Date(); // creates a js date obj for current date n time
console.log(date); // shows full date time in console
// extract current date info
var currentYear = date.getFullYear();
var curretMonth = date.getMonth();
var currentDay = date.getDay();
var currentDate = date.getDate();
console.log(currentYear);
console.log(curretMonth);
console.log(currentDay);
console.log(currentDate);
// imp date info
var months = [ // this array maps month index 0 to 11 
    'January',
    'February',
    'March',
    'April',
    'May',
    'June', 
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
// setting year and month
var yeart = document.getElementById("title");
yeart.innerHTML = currentYear;
var title = document.getElementById("titletwo");
title.innerHTML = months[curretMonth];
//update calender information
var habitTitle = document.getElementById("habitTitle");
habitTitle.onclick = function(){
    let habits = prompt("what's your habit?", habitTitle.innerHTML);
    if(habits.length==0){
        habitTitle.innerHTML = "click to set your habit";
    }else{
        habitTitle.innerHTML = habits;
    }
}
var daysinmonth = [31,28,31,30,31,30,31,31,30,31,30,31];
var daysinthismonth = daysinmonth[curretMonth];
var dayscompleted = 0;
var totaldays = document.getElementById("totaldays");
totaldays.innerHTML = "0/"+daysinthismonth;
// set the calender days
var daycount = 0;
var rowcount = 0;
var days = document.getElementsByClassName("days");
for(var i=0; i<days.length; i++){
    var day = days[rowcount].getElementsByClassName("day");
    for(var j=0; j<day.length; j++){
        if(daycount==currentDate-1){ // highliughts current day with border blaxk
            day[j].setAttribute("style", "border: 2px solid black");
        }
        if(daycount<daysinthismonth){
            day[j].innerHTML = daycount+1;
            day[j].setAttribute("id", "day"+(daycount+1));
            daycount++;
        }else{
            day[j].innerHTML=""; // unused boxes emptied and white
            day[j].setAttribute("style", "background-color:white");
        }
    }
    rowcount++;
}
var completed = new Array(31); // blank array of 31 elements
for(var i=0; i<daycount; i++){
    var tempstring =  // 6-12-2025
    "" + (curretMonth+1) + "-" + (i+1) + "-" + currentYear;
    console.log("storing data: "+ tempstring);
    var tempday = localStorage.getItem(tempstring);
    console.log(tempday);
    if(tempday==null || tempday == "false"){
        localStorage.setItem(tempstring, "false");
    }else if(tempday=="true"){
        dayscompleted++;
    }
    totaldays.innerHTML = dayscompleted + "/" + daysinthismonth;
}
console.log("completed array: "+ completed);
console.log("total days completed: "+ dayscompleted);

for(var i =0; i<currentDate; i++){
    var tempstring =
    ""  + (curretMonth+1) + "-" + (i+1) + "-" + currentYear;
    console.log(tempstring);
    var chosenday = localStorage.getItem(tempstring);
    console.log(i+1 + ": "+ chosenday);
    var chosendaydiv = document.getElementById("day"+ (i+1));
    if(chosenday==="true"){
        chosendaydiv.style.backgrounColor = "pink";
    }else if(chosenday==="false"){
        chosendaydiv.style.backgroundColor = "white";
    }
}
var daysdivs = document.querySelectorAll(".day");
for(var i=0; i<currentDate; i++){
    daysdivs[i].onclick = function(e) {
        var num = e.target.innerText;
        var selecteddate = document.getElementById(e.target.id);
        var storagestring =
        "" + (curretMonth+1) + "-" + num + "-" + currentYear;   
        if(localStorage.getItem(storagestring)==="false"){
            selecteddate.style.backgroundColor = "pink";
            localStorage.setItem(storagestring, true);
            dayscompleted++;
        }else if(localStorage.getItem(storagestring)==="true"){
            selecteddate.style.backgroundColor = "white";
            localStorage.setItem(storagestring, false);
            dayscompleted--;
        }
        totaldays.innerHTML = dayscompleted + "/" + daycount;
        console.log(dayscompleted, currentDate);
        if(dayscompleted === currentDate){
            alert("great progress");
        }
    }
}
var resetb = document.getElementById("resetbutton");
resetb.onclick = function() {
    for(var i=0; i<daycount; i++){
        var tempstrings =
        "" + (curretMonth+1)+"-"+(i+1)+"-"+currentYear;
        console.log(tempstrings);
        localStorage.setItem(tempstrings, "false");
        var curday = document.getElementById("day"+(i+1));
        curday.style.backgroundColor = "white";
    }
    dayscompleted = 0;
    totaldays.innerHTML = dayscompleted + "/" + daysinthismonth;
};

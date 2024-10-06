function updateClock() {

	var now = new Date();
	var dayname = now.getDay(),
		month = now.getMonth(),
		date = now.getDate(),
		year = now.getFullYear(),
		hours = now.getHours(),
		min = now.getMinutes(),
		sec = now.getSeconds(),
		period = "AM";

	var months = ["Janaury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

	if (hours == 0)
		hours = 12;

	if (hours > 12) {
		// hours  = hours -12;
		period = "PM";
	}

	// add 0 in the beginning of number if less than 10
	hours = (hours < 10) ? "0" + hours : hours;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? '0' + sec : sec;

	document.querySelector("#dayname").innerHTML = days[dayname];
	document.querySelector("#month").innerHTML = months[month];
	document.querySelector("#daynum").innerHTML = date;
	document.querySelector("#year").innerHTML = year;
	document.querySelector("#hour").innerHTML = hours;
	document.querySelector("#minutes").innerHTML = min;
	document.querySelector("#seconds").innerHTML = sec;
	document.querySelector("#period").innerHTML = period;

}

function intiClock() {
	updateClock();
	window.setInterval("updateClock()", 1);
}

intiClock();

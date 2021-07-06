@ @ - 0, 0 + 1, 72 @ @
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalc() {
	let today = new Date();
	let inputDate = new Date(document.getElementById("date").value);
	let birthMonth, birthDate, birthYear;
	let birthDetails = {
		date: inputDate.getDate(),
		month: inputDate.getMonth() + 1,
		year: inputDate.getFullYear()
	}
	let currentYear = today.getFullYear();
	let currentMonth = today.getMonth() + 1;
	let currentDay = today.getDate();


	leapChecker(currentYear);


	if (birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
		(birthDetails.date > currentDay && birthDetails.month == currentMonth && birthDetails.year == currentYear)) {
		alert("Enter Valid Date");

	}
	birthYear = currentYear - birthDetails.year;
	if (currentMonth >= birthDetails.month) {
		birthMonth = currentMonth - birthDetails.month;
	} else {
		birthYear--;
		birthMonth = 12 + currentMonth - birthDetails.month;
	}
	if (currentDay >= birthDetails.date) {
		birthDate = currentDay - birthDetails.date;

	} else {
		birthMonth--;
		let days = months[currentMonth - 2];
		birthDate = days + currentDay - birthDetails.date;
		if (birthMonth < 0) {
			birthMonth = 11;
			birthYear--;
		}

	}

	display(birthDate, birthMonth, birthYear);

}

function display(bdate, bmonth, byear) {
	document.getElementById("years").textContent = byear;
	document.getElementById("months").textContent = bmonth;
	document.getElementById("days").textContent = bdate;


}

function leapChecker(year) {
	if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
		months[1] = 29;
	} else {
		months[1] = 28;
	}





}

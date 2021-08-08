const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

const deg = 6;

setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;
	console.log(hh);
	console.log(mm);
	console.log(ss);
	hr.style.transform = `rotate(${hh+(mm/12)}deg)`;
	mn.style.transform = `rotate(${mm}deg)`;
	sc.style.transform = `rotate(${ss}deg)`;
});

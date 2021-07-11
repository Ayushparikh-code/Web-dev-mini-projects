var boxes = document.querySelectorAll(".box");
var s = document.querySelector("#rgbspan");
var colors = generateRandomColor(6);
var pickedColor = colors[Math.floor(Math.random() * 6)];
s.textContent = pickedColor;
var playbtn = document.querySelector("#playAgain");
var easybtn = document.querySelector("#easyBtn");
var hardbtn = document.querySelector("#hardBtn");
var boxCount = 6;
var statusText = document.querySelector(".status");
statusText.textContent = "Lets Play!";

easybtn.addEventListener("click", function() {
	document.querySelector("h1").style.background = "#f88989";
	statusText.textContent = "Lets Play!";
	boxCount = 3;
	this.style.background = "#f88989";
	this.style.color = "white";
	hardbtn.style.background = "white";
	hardbtn.style.color = "rgb(233,119,119)";

	colors = generateRandomColor(boxCount);
	pickedColor = colors[Math.floor(Math.random() * 3)];
	s.textContent = pickedColor;

	for (var i = 0; i < boxes.length; i++) {
		if (colors[i]) {
			boxes[i].style.background = colors[i];
		} else {
			boxes[i].style.display = "none";
		}
	}

});
hardbtn.addEventListener("click", function() {
	document.querySelector("h1").style.background = "rgb(233,119,119)";
	statusText.textContent = "Lets Play!";

	this.style.background = "rgb(233,119,119)";
	this.style.color = "white";
	easybtn.style.background = "white";
	easybtn.style.color = "rgb(233,119,119)";
	boxCount = 6;

	colors = generateRandomColor(boxCount);
	pickedColor = colors[Math.floor(Math.random() * 6)];

	for (var i = 0; i < boxes.length; i++) {
		boxes[i].style.background = colors[i];
		boxes[i].style.display = "block";

	}


});


playbtn.addEventListener("click", function() {
	document.querySelector("h1").style.background = "rgb(233,119,119)";
	statusText.textContent = "Lets Play!";


	colors = generateRandomColor(boxCount);
	pickedColor = colors[Math.floor(Math.random() * boxCount)];
	s.textContent = pickedColor;

	for (var i = 0; i < boxes.length; i++) {

		boxes[i].style.background = colors[i];


	}
});
for (var i = 0; i < colors.length; i++) {
	boxes[i].style.background = colors[i];
	boxes[i].addEventListener("click", function() {
		var selectedcolor = this.style.background;
		if (selectedcolor === pickedColor) {
			win();
		} else {
			loose(this);
		}
	});
}

function win() {
	for (var i = 0; i < colors.length; i++) {
		boxes[i].style.background = pickedColor;
	}
	document.querySelector("h1").style.background = pickedColor;
	statusText.textContent = "CORRECT!!!";
}

function loose(a) {
	a.style.background = "#2f2f2f";
	statusText.textContent = "TRY AGAIN !";
}

function generateRandomColor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


let canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;

window.addEventListener("resize", function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight - 100;
	drawLinesFromDB();
});


let ctx = canvas.getContext("2d");

let linesDB = [];
let redoLinesDB = [];
let isPenDown = false;
let line = [];

canvas.addEventListener("mousedown", function(e) {
	if (redoLinesDB.length) {
		redoLinesDB = [];
	}
	console.log("Inside mouse down");
	isPenDown = true;
	let x = e.clientX;
	let y = e.clientY - 100;
	ctx.beginPath();
	ctx.moveTo(x, y);

	let pointObject = {
		x: x,
		y: y,
		type: "md",
		lineWidth: ctx.lineWidth,
		strokeStyle: ctx.strokeStyle,
	};
	line.push(pointObject);
});

canvas.addEventListener("mousemove", function(e) {
	if (isPenDown) {
		console.log("Inside mousemove");
		let x = e.clientX;
		let y = e.clientY - 100;
		ctx.lineTo(x, y);
		ctx.stroke();

		let pointObject = {
			x: x,
			y: y,
			type: "mm",
		};
		line.push(pointObject);
	}
});

canvas.addEventListener("mouseup", function() {
	console.log("mouseup");
	isPenDown = false;

	linesDB.push(line);
	line = [];

	console.log(linesDB);
});

// Drawing


let pen = document.querySelector("#pen");
let eraser = document.querySelector("#eraser");

let penOptions = pen.querySelector(".tool-options");
let eraserOptions = eraser.querySelector(".tool-options");

let penSize = penOptions.querySelector("#pensize");
let eraserSize = eraserOptions.querySelector("#erasersize");

let penColors = penOptions.querySelectorAll(".pen-colors div");

let currentPenSize = 1;
let currentPenColor = "black";
let currentEraserSize = 1;

penSize.addEventListener("change", function() {
	// handle pen size
	let penSizeValue = penSize.value;
	// console.log(penSizeValue);
	// pensize set hoga
	currentPenSize = penSizeValue;
	ctx.lineWidth = currentPenSize;
});

eraserSize.addEventListener("click", function() {
	let eraserSizeValue = eraserSize.value;
	currentEraserSize = eraserSizeValue;
	ctx.lineWidth = currentEraserSize;
});

for (let i = 0; i < penColors.length; i++) {
	penColors[i].addEventListener("click", function(e) {
		let penColor = e.target.className;
		currentPenColor = penColor;
		ctx.strokeStyle = currentPenColor; // for lines
	});
}

pen.addEventListener("click", function() {
	if (pen.classList.contains("active-tool")) {
		// pen already active hai
		// pen tool options open honge
		if (penOptions.classList.contains("hide")) {
			penOptions.classList.remove("hide"); // remove hide class from penOptions
		} else {
			penOptions.classList.add("hide");
		}
	} else {
		// pen is not active
		// make pen active
		eraser.classList.remove("active-tool");
		eraser.classList.add("fade");
		eraserOptions.classList.add("hide");

		pen.classList.remove("fade");
		pen.classList.add("active-tool");

		ctx.lineWidth = currentPenSize;
		ctx.strokeStyle = currentPenColor;
	}
});

eraser.addEventListener("click", function() {
	if (eraser.classList.contains("active-tool")) {
		// eraser already active
		if (eraserOptions.classList.contains("hide")) {
			eraserOptions.classList.remove("hide"); // remove hide class from penOptions
		} else {
			eraserOptions.classList.add("hide");
		}
	} else {
		// eraser not active
		pen.classList.remove("active-tool");
		pen.classList.add("fade");
		penOptions.classList.add("hide");

		eraser.classList.add("active-tool");
		eraser.classList.remove("fade");

		ctx.strokeStyle = "white";
		ctx.lineWidth = currentEraserSize;
	}
});




// Sticky Note


let sticky = document.querySelector("#sticky");

sticky.addEventListener("click", function() {
	addSticky();
});

function addSticky(imageElement) {
	let stickyDiv = document.createElement("div");
	stickyDiv.classList.add("sticky");
	stickyDiv.innerHTML = `<div class="sticky-header">
    <div class="minimize"></div>
    <div class="close"></div>
  </div>`;
	let minimize = stickyDiv.querySelector(".minimize");
	let close = stickyDiv.querySelector(".close");
	let stickyHeader = stickyDiv.querySelector(".sticky-header");
	let stickyContent;
	if (imageElement) {
		let stickyImageDiv = document.createElement("div");
		stickyImageDiv.classList.add("sticky-image-div");
		stickyDiv.append(stickyImageDiv);
		stickyImageDiv.append(imageElement);
		stickyContent = stickyImageDiv;
	} else {
		// <div class="sticky-content" contenteditable="true"></div>
		let stickyContentDiv = document.createElement("div");
		stickyContentDiv.classList.add("sticky-content");
		stickyContentDiv.setAttribute("contenteditable", "true");
		stickyDiv.append(stickyContentDiv);
		stickyContent = stickyContentDiv;
	}

	minimize.addEventListener("click", function() {
		stickyContent.style.display == "none" ?
			(stickyContent.style.display = "block") :
			(stickyContent.style.display = "none");
	});

	close.addEventListener("click", function() {
		stickyDiv.remove();
	});

	let stickyHold = false;
	let initialX;
	let initialY;
	stickyHeader.addEventListener("mousedown", function(e) {
		stickyHold = true;
		initialX = e.clientX;
		initialY = e.clientY;
	});

	stickyHeader.addEventListener("mousemove", function(e) {
		if (stickyHold) {
			let finalX = e.clientX;
			let finalY = e.clientY;

			let dx = finalX - initialX;
			let dy = finalY - initialY;

			let {
				top,
				left
			} = stickyDiv.getBoundingClientRect();
			//   sticky => top + dy
			//  sticky => left + dx
			stickyDiv.style.top = top + dy + "px";
			stickyDiv.style.left = left + dx + "px";

			initialX = finalX;
			initialY = finalY;
		}
	});

	stickyHeader.addEventListener("mouseup", function() {
		stickyHold = false;
	});

	document.body.append(stickyDiv);
}

// Undo redo

let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");
undo.addEventListener("click", undoLine);
redo.addEventListener("click", redoLine);

function undoLine() {
	if (linesDB.length) {
		let undoLine = linesDB.pop();
		redoLinesDB.push(undoLine);

		// clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		drawLinesFromDB();
	}
}

function redoLine() {
	if (redoLinesDB.length) {

		let currentLineWidth = ctx.lineWidth;
		let currentStrokeStyle = ctx.strokeStyle;

		let redoLine = redoLinesDB.pop();
		for (let i = 0; i < redoLine.length; i++) {
			let pointObject = redoLine[i];
			if (pointObject.type == "md") {
				ctx.lineWidth = pointObject.lineWidth;
				ctx.strokeStyle = pointObject.strokeStyle;
				ctx.beginPath();
				ctx.moveTo(pointObject.x, pointObject.y);
			} else {
				ctx.lineTo(pointObject.x, pointObject.y);
				ctx.stroke();
			}
		}
		linesDB.push(redoLine);

		ctx.lineWidth = currentLineWidth;
		ctx.strokeStyle = currentStrokeStyle;
	}
}

function drawLinesFromDB() {
	let currentLineWidth = ctx.lineWidth;
	let currentStrokeStyle = ctx.strokeStyle;

	for (let i = 0; i < linesDB.length; i++) {
		let line = linesDB[i];
		for (let i = 0; i < line.length; i++) {
			let pointObject = line[i];
			if (pointObject.type == "md") {
				ctx.lineWidth = pointObject.lineWidth;
				ctx.strokeStyle = pointObject.strokeStyle;
				ctx.beginPath();
				ctx.moveTo(pointObject.x, pointObject.y);
			} else {
				ctx.lineTo(pointObject.x, pointObject.y);
				ctx.stroke();
			}
		}
	}

	ctx.lineWidth = currentLineWidth;
	ctx.strokeStyle = currentStrokeStyle;
}


// Img Upload

let photoDiv = document.querySelector("#photo");
let photoUploadInput = document.querySelector("#photo-upload");
let downloadDiv = document.querySelector("#download");

photoDiv.addEventListener("click", function() {
	photoUploadInput.click();
});

photoUploadInput.addEventListener("change", function(event) {
	console.log(event);
	let fileObj = event.target.files[0];
	console.log(fileObj);
	let filePath = URL.createObjectURL(fileObj, {
		type: "image/jpg"
	});
	let img = document.createElement("img");
	img.setAttribute("src", filePath);
	img.classList.add("sticky-image");
	addSticky(img);
});


downloadDiv.addEventListener("click", function() {
	let imagePath = canvas.toDataURL("image/jpg");
	console.log(imagePath);
	// <a href="" download="canvas.jpg"></a> 
	let aTag = document.createElement("a");
	aTag.download = "canvas.jpg";
	aTag.href = imagePath;
	aTag.click();
})

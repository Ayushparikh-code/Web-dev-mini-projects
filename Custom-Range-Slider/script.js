const sliders = document.querySelectorAll(".slider-ui");

sliders.forEach(slider => {
	let input = slider.querySelector("input[type=range]");
	let min = input.getAttribute("min");
	let max = input.getAttribute("max");
	let valueElem = slider.querySelector(".value");

	slider.querySelector(".min").innerText = min;
	slider.querySelector(".max").innerText = max;

	function setValueElem() {
		valueElem.innerText = input.value;
		let percent = (input.value - min) / (max - min) * 100;
		valueElem.style.left = percent + "%";
	}
	setValueElem();

	input.addEventListener("input", setValueElem);
	input.addEventListener("mousedown", () => {
		valueElem.classList.add("up");
	});
	input.addEventListener("mouseup", () => {
		valueElem.classList.remove("up");
	});
});
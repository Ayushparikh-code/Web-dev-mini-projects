const colour = document.querySelector('#random');
const h = document.querySelector('h1');
const gradcolor = document.querySelector('#gradc');
const buttoncolor = document.querySelector('.brndm')

// to generate random color
const rndmcolor = () => {

	let rgb = [1, 1, 1];
	rgb[0] = Math.floor(Math.random() * 255);
	rgb[1] = Math.floor(Math.random() * 255);
	rgb[2] = Math.floor(Math.random() * 255);

	return rgb;
}
// To Check contrast of the text
const checkContrast = (tcolor) => {
	const textc = Math.floor(((parseInt(tcolor[0]) * 255) + (parseInt(tcolor[1]) * 255) + (parseInt(tcolor[2]) * 255)) / 765);
	const textColour = (textc > 96) ? 'black' : 'white';
	return textColour;
}

//For Random Background color
colour.addEventListener('click', function() {
	const tempcolor = rndmcolor();
	const newcolor = `rgb(${tempcolor[0]},${tempcolor[1]},${tempcolor[2]})`;
	const textcolor = checkContrast(tempcolor);
	document.body.style.background = newcolor;
	h.style.color = textcolor;
	h.innerText = `THE BACKGROUND COLOR IS: ${newcolor}`;
	buttoncolor.style.background = "white";

});
//For Random gradient background
gradcolor.addEventListener('click', function() {
	const tempcolor = rndmcolor();
	const tempcolor2 = rndmcolor();
	const newcolor = `rgb(${tempcolor[0]},${tempcolor[1]},${tempcolor[2]})`;
	const newcolorr2 = `rgb(${tempcolor2[0]},${tempcolor2[1]},${tempcolor2[2]})`;

	document.body.style.background = "linear-gradient(to right, " +
		newcolor +
		", " +
		newcolorr2 +
		")";

	h.innerText = `THE GRADIENT COLOR IS: ${newcolor},${newcolorr2}`;
	h.style.color = "black";
	buttoncolor.style.background = "white";
});
// For random button background
buttoncolor.addEventListener('click', function() {
	const tempcolor = rndmcolor();
	const newcolor = `rgb(${tempcolor[0]},${tempcolor[1]},${tempcolor[2]})`;
	const contrast = checkContrast(tempcolor);
	document.body.style.background = contrast;
	buttoncolor.style.background = newcolor;
	h.style.color = newcolor;
	h.innerText = `THE BUTTON BACKGROUND COLOR IS: ${newcolor}`;
});



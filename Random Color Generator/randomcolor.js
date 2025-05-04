const colour = document.querySelector('#random');
const h = document.querySelector('h1');
const gradcolor = document.querySelector('#gradc');
const buttoncolor = document.querySelector('.brndm');

// Function to generate a random color
const rndmcolor = () => {
    return [
        Math.floor(Math.random() * 256), // Correct range for RGB (0-255)
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
    ];
};

// Function to check the contrast of the text
const checkContrast = (tcolor) => {
    const textc = Math.floor((tcolor[0] + tcolor[1] + tcolor[2]) / 3); // Average the RGB values
    return (textc > 128) ? 'black' : 'white'; // Use 128 for better contrast threshold
};

// Event listener for random background color
colour.addEventListener('click', function() {
    const tempcolor = rndmcolor();
    const newcolor = `rgb(${tempcolor[0]},${tempcolor[1]},${tempcolor[2]})`;
    const textcolor = checkContrast(tempcolor);
    
    document.body.style.background = newcolor;
    h.style.color = textcolor;
    h.innerText = `THE BACKGROUND COLOR IS: ${newcolor}`;
    buttoncolor.style.background = "white";
});

// Event listener for random gradient background
gradcolor.addEventListener('click', function() {
    const tempcolor1 = rndmcolor();
    const tempcolor2 = rndmcolor();
    const newcolor1 = `rgb(${tempcolor1[0]},${tempcolor1[1]},${tempcolor1[2]})`;
    const newcolor2 = `rgb(${tempcolor2[0]},${tempcolor2[1]},${tempcolor2[2]})`;

    document.body.style.background = `linear-gradient(to right, ${newcolor1}, ${newcolor2})`;
    h.innerText = `THE GRADIENT COLOR IS: ${newcolor1}, ${newcolor2}`;
    h.style.color = "black"; // You may want to calculate text color based on gradient colors
    buttoncolor.style.background = "white";
});

// Event listener for random button background color
buttoncolor.addEventListener('click', function() {
    const tempcolor = rndmcolor();
    const newcolor = `rgb(${tempcolor[0]},${tempcolor[1]},${tempcolor[2]})`;
    const contrast = checkContrast(tempcolor);
    
    buttoncolor.style.background = newcolor;
    h.style.color = contrast; // Text color should not be the background color
    h.innerText = `THE BUTTON BACKGROUND COLOR IS: ${newcolor}`;
});

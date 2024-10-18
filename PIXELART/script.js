// Select the color input and pixel canvas
const colorPicker = document.getElementById("color");
const pixelCanvas = document.getElementById("pixel-canvas");
const clearButton = document.getElementById("clear");

// Create a 20x20 grid of pixel divs
const createGrid = (rows, cols) => {
    for (let i = 0; i < rows * cols; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = colorPicker.value;
        });
        pixelCanvas.appendChild(pixel);
    }
};

// Clear the grid
const clearGrid = () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.style.backgroundColor = '#fff');
};

// Initialize the grid
createGrid(20, 20);

// Clear button event listener
clearButton.addEventListener('click', clearGrid);

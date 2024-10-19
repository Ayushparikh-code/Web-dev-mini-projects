const pixelCanvas = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
const clearCanvasBtn = document.getElementById('clearCanvas');
const colorSwatches = document.querySelectorAll('.color-swatch');

let currentColor = '#000000'; // Default color

// Create a 16x16 grid of pixels
function createCanvas(size) {
    pixelCanvas.innerHTML = ''; // Clear the canvas
    pixelCanvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    pixelCanvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create pixels
    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('click', function() {
            pixel.style.backgroundColor = currentColor;
        });
        pixelCanvas.appendChild(pixel);
    }
}

// Update current color from color picker
colorPicker.addEventListener('input', function() {
    currentColor = colorPicker.value;
});

// Clear the canvas by resetting all pixel colors to white
clearCanvasBtn.addEventListener('click', function() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.style.backgroundColor = '#fff');
});

// Set the current color when a color swatch is clicked
colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', function() {
        currentColor = swatch.getAttribute('data-color');
        colorPicker.value = currentColor; // Update color picker to match swatch
    });
});

// Initialize the canvas with 16x16 pixels
createCanvas(16);

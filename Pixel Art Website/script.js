const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const clearCanvasBtn = document.getElementById('clearCanvas');
const saveImageBtn = document.getElementById('saveImage');

const pixelSize = 20; // Size of each pixel square
const canvasWidth = 400; // Canvas width in pixels
const canvasHeight = 400; // Canvas height in pixels

canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Add event listener for drawing on the canvas
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / pixelSize) * pixelSize;
    const y = Math.floor((event.clientY - rect.top) / pixelSize) * pixelSize;

    ctx.fillStyle = colorPicker.value;
    ctx.fillRect(x, y, pixelSize, pixelSize);
});

// Clear canvas button
clearCanvasBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save as PNG button
saveImageBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'pixel-art.png';
    link.href = canvas.toDataURL();
    link.click();
});

// Optional: Draw the grid on the canvas
function drawGrid() {
    ctx.strokeStyle = '#ddd';
    for (let x = 0; x < canvasWidth; x += pixelSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
    }
    for (let y = 0; y < canvasHeight; y += pixelSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
    }
    ctx.stroke();
}

// Uncomment this line if you want to see the grid while drawing
// drawGrid();

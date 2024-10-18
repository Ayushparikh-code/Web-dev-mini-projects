const bottle = document.getElementById('bottle');
const flipButton = document.getElementById('flipButton');
const message = document.getElementById('message');
const scoreValue = document.getElementById('scoreValue');
const flipSound = new Audio('flip-sound.mp3'); // Ensure you have a sound file

let score = 0;
let flipTime = 0;
let isFlipping = false;

flipButton.addEventListener('mousedown', () => {
    if (!isFlipping) {
        isFlipping = true;
        flipTime = Date.now(); // Record the time when the button is pressed
        bottle.classList.add('flipped');
        flipSound.play();
    }
});

flipButton.addEventListener('mouseup', () => {
    if (isFlipping) {
        isFlipping = false;
        bottle.classList.remove('flipped');

        // Calculate the duration of the flip
        const duration = Date.now() - flipTime;

        // Define a threshold for a successful flip (e.g., 300ms to 600ms)
        if (duration >= 300 && duration <= 600) {
            score++;
            scoreValue.textContent = score;
            message.textContent = "You flipped the bottle successfully!";
        } else {
            message.textContent = "Try again! Timing was off.";
        }
    }
});

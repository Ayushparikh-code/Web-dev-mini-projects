let score = 0;
let highScore = 0;
let strength = 10;  // Start strength at 10
let isFlipping = false;
let pressStartTime = 0;
const maxStrength = 100;
let strengthIncrement = 1;  // Controls whether strength is increasing or decreasing
let bottleAngle = 0;
let strengthLoop;
let speedFactor = 1;  // This factor increases after successful flips

const bottle = document.getElementById('bottle');
const brokenBottle = document.getElementById('broken-bottle');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('high-score');
const strengthBar = document.getElementById('strength-bar');
const strengthValue = document.getElementById('strength-value');
const newGameBtn = document.getElementById('new-game');
const progressFill = document.createElement('div');
progressFill.classList.add('progress-fill');
document.querySelector('.strength-bar-wrapper').appendChild(progressFill);

// Start game function
function startGame() {
    // Reset everything for a new game
    score = 0;
    updateScore();
    brokenBottle.style.display = 'none';
    bottle.style.display = 'block';
    newGameBtn.style.display = 'none';
    bottleAngle = 0;
    bottle.style.transform = 'rotate(0deg)';
    speedFactor = 1;  // Reset speed factor
    
    // Reset the strength bar to 0
    strength = 0;
    strengthBar.value = strength;
    strengthValue.textContent = `${strength}%`;
}

// Handle mouse down (start strength calculation)
bottle.addEventListener('mousedown', () => {
    if (!isFlipping) {
        isFlipping = true;
        pressStartTime = Date.now();
        strengthIncrement = 1;  // Start with increasing strength
        startStrengthLoop();
    }
});

// Handle mouse up (calculate strength and flip the bottle)
bottle.addEventListener('mouseup', () => {
    if (isFlipping) {
        isFlipping = false;
        clearInterval(strengthLoop);

        // Check if the strength is in the success range
        if (strength >= 50 && strength <= 60) {
            flipBottle();  // Successful flip
        } else {
            breakBottle();  // Bottle breaks due to incorrect strength
        }
    }
});

// Loop strength bar from 10-100 and back to 10, with increasing complexity
function startStrengthLoop() {
    strengthLoop = setInterval(() => {
        strength += strengthIncrement * speedFactor;
        if (strength >= 100) {
            strengthIncrement = -1;  // Switch to decreasing strength
        } else if (strength <= 10) {
            strengthIncrement = 1;  // Switch to increasing strength
        }

        strengthBar.value = strength;
        updateStrengthBarColor();
        strengthValue.textContent = `${Math.floor(strength)}%`;

        // Spin bottle according to strength
        bottleAngle += (strength / 5) * speedFactor;  // Adjust spin speed
        bottle.style.transform = `rotate(${bottleAngle}deg)`;
    }, 50);  // Adjust timing for smooth strength increase
}

// Function to update the strength bar color and width dynamically
function updateStrengthBarColor() {
    // Set the width of the progress fill according to strength percentage
    progressFill.style.width = `${strength}%`;

    // Change the color based on strength value
    if (strength >= 0 && strength < 50) {
        // Yellow for 0% - 49%
        progressFill.style.backgroundColor = 'yellow';
    } else if (strength >= 50 && strength <= 59) {
        // Green for 50% - 59%
        progressFill.style.backgroundColor = 'green';
    } else if (strength >= 60 && strength <= 100) {
        // Red for 60% - 100%
        progressFill.style.backgroundColor = 'red';
    }

    // Update the text value for the strength
    strengthValue.textContent = `${Math.floor(strength)}%`;
}


// Flip the bottle
function flipBottle() {
    // Random angle between +7 to -7 from 360 degrees
    let finalAngle = 360 + (Math.random() * 14 - 7);
    bottle.style.transform = `rotate(${finalAngle}deg)`;

    // Success, reset strength, increase difficulty, and reset progress bar to 0
    score++;
    updateScore();
    resetStrength();
    speedFactor += 0.2;  // Increase speed factor to make next flip harder

    // Reset the strength bar to 0
    strength = 0;
    strengthBar.value = strength;
    strengthValue.textContent = `${strength}%`;
}

// Break the bottle
function breakBottle() {
    brokenBottle.style.display = 'block';
    bottle.style.display = 'none';
    newGameBtn.style.display = 'block';  // Show "New Game" button
    clearInterval(strengthLoop);  // Stop strength loop
}

// Reset strength bar and values
function resetStrength() {
    strength = 10;
    strengthIncrement = 1;
    strengthBar.value = strength;
    updateStrengthBarColor();
    strengthValue.textContent = `${strength}%`;
}

// Update the score display
function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
    if (score > highScore) {
        highScore = score;
        updateHighScore();
    }
}

// Update the high score display
function updateHighScore() {
    highScoreDisplay.textContent = `High Score: ${highScore}`;
}

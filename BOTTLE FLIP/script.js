const bottle = document.getElementById('bottle');
const flipButton = document.getElementById('flipButton');
const result = document.getElementById('result');

flipButton.addEventListener('click', () => {
    // Add flipping class
    bottle.classList.add('flipped');

    // Wait for the animation to finish before checking the result
    setTimeout(() => {
        bottle.classList.remove('flipped');

        // Randomly decide if it lands upright (50% chance)
        const landedUpright = Math.random() > 0.5;

        if (landedUpright) {
            bottle.classList.add('upright');
            result.textContent = "You landed it! 🎉";
        } else {
            result.textContent = "Oops! Try again. 😢";
        }
    }, 500); // Match this timeout with the CSS transition duration
});

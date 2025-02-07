
const bottle = document.getElementById('bottle');
const scoreDisplay = document.getElementById('score');
const flipBtn = document.getElementById('flipBtn');
const messageDisplay = document.getElementById('message');

let score = 0;

flipBtn.addEventListener('click', function () {
    // Add bounce animation before flipping
    bottle.classList.add('bounce');
    messageDisplay.classList.add('hidden'); // Hide message while flipping

    // Wait for the bounce to finish before starting the flip
    setTimeout(() => {
        bottle.classList.remove('bounce');

        // Generate random success (50% chance)
        const success = Math.random() > 0.5;

        // Add rotation with random degrees
        const rotation = Math.floor(Math.random() * 360) + 360; // at least one full rotation
        bottle.style.transform = `rotate(${rotation}deg)`;

        // Reset after flip and check for success
        setTimeout(() => {
            bottle.style.transform = 'rotate(0deg)';

            // Update score and message based on the result
            if (success) {
                score++;
                messageDisplay.textContent = "Successful Flip!";
                messageDisplay.className = 'success visible'; // Show success message
                scoreDisplay.textContent = score;
                scoreDisplay.style.color = 'green'; // Highlight score
            } else {
                messageDisplay.textContent = "Failed Flip!";
                messageDisplay.className = 'failure visible'; // Show failure message
                scoreDisplay.style.color = 'red'; // Red flash for failure
            }

            // Reset score color after a moment
            setTimeout(() => {
                scoreDisplay.style.color = '#007bff';
            }, 500);

            // Hide message after 1.5 seconds
            setTimeout(() => {
                messageDisplay.classList.remove('visible');
                messageDisplay.classList.add('hidden');
            }, 1500);
        }, 1000);
    }, 500);
});

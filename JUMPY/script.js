let character = document.getElementById('character');
let obstacle = document.getElementById('obstacle');
let scoreDisplay = document.getElementById('score');
let score = 0;
let isJumping = false;
let obstacleSpeed = 10; // Speed of the obstacle

// Function to jump
function jump() {
    if (isJumping) return; // Prevents jumping again while in the air
    isJumping = true;

    let jumpHeight = 0;
    let jumpInterval = setInterval(() => {
        if (jumpHeight >= 100) { // Max jump height
            clearInterval(jumpInterval);
            let fallInterval = setInterval(() => {
                if (jumpHeight <= 0) {
                    clearInterval(fallInterval);
                    isJumping = false;
                } else {
                    jumpHeight -= 5;
                    character.style.bottom = jumpHeight + 'px';
                }
            }, 20);
        } else {
            jumpHeight += 5;
            character.style.bottom = jumpHeight + 'px';
        }
    }, 20);
}

// Function to move the obstacle
function moveObstacle() {
    let obstaclePosition = window.innerWidth;
    let gameInterval = setInterval(() => {
        if (obstaclePosition < -40) {
            obstaclePosition = window.innerWidth;
            score++;
            scoreDisplay.textContent = 'Score: ' + score;
        } else {
            obstaclePosition -= obstacleSpeed;
        }

        obstacle.style.right = obstaclePosition + 'px';

        // Collision detection
        if (obstaclePosition < 100 && obstaclePosition > 50 && !isJumping) {
            clearInterval(gameInterval);
            alert('Game Over! Your score: ' + score);
            document.location.reload(); // Reloads the game
        }
    }, 20);
}

// Event listener for jump
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

// Start the game
moveObstacle();

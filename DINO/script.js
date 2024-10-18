const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let isJumping = false;
let gravity = 0.9;
let isGameOver = false;
let score = 0;

// Make the dino jump
function jump() {
    if (isJumping) return;
    let position = 0;
    isJumping = true;

    const upInterval = setInterval(() => {
        // Going up
        if (position >= 150) {
            clearInterval(upInterval);

            // Fall down
            const downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 5;
                    position *= gravity;
                    dino.style.bottom = position + "px";
                }
            }, 20);
        } else {
            // Jump up
            position += 20;
            dino.style.bottom = position + "px";
        }
    }, 20);
}

// Handle key press to make the dino jump
document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !isGameOver) {
        jump();
    }
});

// Move the cactus
function createCactus() {
    let cactusPosition = 600;
    const randomTime = Math.random() * 4000;

    if (isGameOver) return;

    const cactusInterval = setInterval(() => {
        if (cactusPosition < -20) {
            clearInterval(cactusInterval);
            cactus.style.left = "600px";
            cactusPosition = 600;
            score++;
            document.getElementById("score").innerText = `Score: ${score}`;
            createCactus();
        } else if (cactusPosition > 0 && cactusPosition < 40 && parseInt(dino.style.bottom) < 40) {
            // Game over
            clearInterval(cactusInterval);
            isGameOver = true;
            alert("Game Over! Your score: " + score);
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();

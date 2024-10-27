// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Update the dice face and result based on the roll
function updateGame(diceValue) {
    const diceDiv = document.querySelector('.dice');
    const resultDiv = document.querySelector('.result');
    
    // Display different dice faces based on the roll value
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    diceDiv.textContent = diceFaces[diceValue - 1];

    // Display the result
    resultDiv.textContent = You rolled a ${diceValue}!;
}

// Add event listener to the roll button
document.getElementById('rollButton').addEventListener('click', () => {
    const diceValue = rollDice();
    updateGame(diceValue);
});

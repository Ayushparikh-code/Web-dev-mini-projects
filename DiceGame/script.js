document.getElementById('rollButton').addEventListener('click', function() {
    // Generate random numbers for the dice
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Update the dice display
    document.getElementById('dice1').textContent = getDiceEmoji(dice1);
    document.getElementById('dice2').textContent = getDiceEmoji(dice2);

    // Show the result
    const resultText = `You rolled a ${dice1} and a ${dice2}. Total: ${dice1 + dice2}`;
    document.getElementById('result').textContent = resultText;
});

// Function to get dice emoji based on number
function getDiceEmoji(num) {
    switch (num) {
        case 1: return '⚀';
        case 2: return '⚁';
        case 3: return '⚂';
        case 4: return '⚃';
        case 5: return '⚄';
        case 6: return '⚅';
        default: return '🎲'; // fallback
    }
}

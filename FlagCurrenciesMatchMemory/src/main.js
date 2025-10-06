// main.js - Entry point and event handlers

document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI
    UI.init();

    // DOM Elements
    const flagModeBtn = document.getElementById('flagModeBtn');
    const currencyModeBtn = document.getElementById('currencyModeBtn');
    const difficultySelect = document.getElementById('difficultySelect');
    const botToggle = document.getElementById('botToggle');
    const botDifficulty = document.getElementById('botDifficulty');
    const startBtn = document.getElementById('startBtn');
    const restartBtn = document.getElementById('restartBtn');
    const playAgainBtn = document.getElementById('playAgainBtn');
    const changeDifficultyBtn = document.getElementById('changeDifficultyBtn');

    let selectedMode = 'flags';
    let selectedDifficulty = 'easy';
    let isBotEnabled = false;
    let selectedBotDifficulty = 'random';

    // Mode selection
    flagModeBtn.addEventListener('click', () => {
        selectedMode = 'flags';
        flagModeBtn.classList.add('active');
        currencyModeBtn.classList.remove('active');
    });

    currencyModeBtn.addEventListener('click', () => {
        selectedMode = 'currency';
        currencyModeBtn.classList.add('active');
        flagModeBtn.classList.remove('active');
    });

    // Difficulty selection
    difficultySelect.addEventListener('change', (e) => {
        selectedDifficulty = e.target.value;
    });

    // Bot toggle
    botToggle.addEventListener('change', (e) => {
        isBotEnabled = e.target.checked;
        botDifficulty.disabled = !isBotEnabled;
    });

    botDifficulty.addEventListener('change', (e) => {
        selectedBotDifficulty = e.target.value;
    });

    // Start game
    startBtn.addEventListener('click', async () => {
        startBtn.disabled = true;
        startBtn.textContent = 'Loading...';

        try {
            await Game.init(selectedMode, selectedDifficulty, isBotEnabled, selectedBotDifficulty);
            startBtn.textContent = '▶ Start Game';
        } catch (error) {
            console.error('Error starting game:', error);
            alert('Failed to start game. Please try again.');
            startBtn.textContent = '▶ Start Game';
        }

        startBtn.disabled = false;
    });

    // Restart game
    restartBtn.addEventListener('click', async () => {
        await Game.init(selectedMode, selectedDifficulty, isBotEnabled, selectedBotDifficulty);
    });

    // Play again (same settings)
    playAgainBtn.addEventListener('click', async () => {
        UI.hideWinModal();
        await Game.init(selectedMode, selectedDifficulty, isBotEnabled, selectedBotDifficulty);
    });

    // Change difficulty
    changeDifficultyBtn.addEventListener('click', () => {
        UI.hideWinModal();
        UI.resetBoard();
        Game.reset();
    });
});

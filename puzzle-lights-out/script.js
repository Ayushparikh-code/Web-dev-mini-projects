class LightsOutGame {
    constructor(size = 5) {
        this.size = size;
        this.board = [];
        this.moves = 0;
        this.initializeBoard();
        this.renderBoard();
        this.addEventListeners();
    }

    initializeBoard() {
        // Create a random initial board state
        this.board = Array.from({ length: this.size }, () => 
            Array.from({ length: this.size }, () => Math.random() < 0.5)
        );
    }

    renderBoard() {
        const gameBoard = document.getElementById('game-board');
        gameBoard.innerHTML = '';
        gameBoard.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;

        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                const light = document.createElement('div');
                light.classList.add('light');
                light.dataset.row = row;
                light.dataset.col = col;
                if (this.board[row][col]) {
                    light.classList.add('on');
                }
                gameBoard.appendChild(light);
            }
        }
    }

    addEventListeners() {
        const gameBoard = document.getElementById('game-board');
        gameBoard.addEventListener('click', this.handleLightClick.bind(this));

        const resetBtn = document.getElementById('reset-btn');
        resetBtn.addEventListener('click', this.resetGame.bind(this));
    }

    handleLightClick(event) {
        const light = event.target.closest('.light');
        if (!light) return;

        const row = parseInt(light.dataset.row);
        const col = parseInt(light.dataset.col);

        this.toggleLight(row, col);
        this.toggleAdjacentLights(row, col);

        this.moves++;
        document.getElementById('moves-counter').textContent = `Moves: ${this.moves}`;

        this.checkWinCondition();
    }

    toggleLight(row, col) {
        if (row >= 0 && row < this.size && col >= 0 && col < this.size) {
            this.board[row][col] = !this.board[row][col];
            this.updateLightDisplay(row, col);
        }
    }

    toggleAdjacentLights(row, col) {
        const directions = [
            [0, 1],   // right
            [0, -1],  // left
            [1, 0],   // down
            [-1, 0]   // up
        ];

        directions.forEach(([dx, dy]) => {
            this.toggleLight(row + dx, col + dy);
        });
    }

    updateLightDisplay(row, col) {
        const light = document.querySelector(`.light[data-row="${row}"][data-col="${col}"]`);
        light.classList.toggle('on');
    }

    checkWinCondition() {
        const allLightsOff = this.board.every(row => 
            row.every(light => !light)
        );

        if (allLightsOff) {
            setTimeout(() => {
                alert(`Congratulations! You solved the puzzle in ${this.moves} moves!`);
                this.resetGame();
            }, 100);
        }
    }

    resetGame() {
        this.initializeBoard();
        this.renderBoard();
        this.moves = 0;
        document.getElementById('moves-counter').textContent = 'Moves: 0';
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new LightsOutGame();
});

// Add to existing script.js, at the end of the file
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the game
    const game = new LightsOutGame();

    // Modal functionality
    const modal = document.getElementById('instructions-modal');
    const instructionsBtn = document.getElementById('instructions-btn');
    const closeBtn = document.querySelector('.close-btn');

    // Open modal
    instructionsBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal when clicking X
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal if clicked outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
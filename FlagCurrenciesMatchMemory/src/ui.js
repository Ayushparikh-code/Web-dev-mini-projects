// ui.js - UI rendering and updates

const UI = {
    elements: {},

    init() {
        // Cache DOM elements
        this.elements = {
            gameBoard: document.getElementById('gameBoard'),
            scoreboard: document.getElementById('scoreboard'),
            moveCount: document.getElementById('moveCount'),
            timerDisplay: document.getElementById('timerDisplay'),
            starsDisplay: document.getElementById('starsDisplay'),
            turnDisplay: document.getElementById('turnDisplay'),
            currentTurn: document.getElementById('currentTurn'),
            winModal: document.getElementById('winModal'),
            finalMoves: document.getElementById('finalMoves'),
            finalTime: document.getElementById('finalTime'),
            finalStars: document.getElementById('finalStars')
        };
    },

    renderBoard(cards, difficulty) {
        const board = this.elements.gameBoard;
        board.innerHTML = '';
        board.className = `game-board ${difficulty}`;

        cards.forEach((card, index) => {
            const cardElement = this.createCardElement(card, index);
            board.appendChild(cardElement);
        });

        board.classList.remove('hidden');
        this.elements.scoreboard.classList.remove('hidden');
    },

    createCardElement(card, index) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.dataset.index = index;

        // Back face
        const backFace = document.createElement('div');
        backFace.className = 'card-face card-back';
        backFace.innerHTML = '🌍';

        // Front face
        const frontFace = document.createElement('div');
        frontFace.className = 'card-face card-front';

        if (card.isImage) {
            const img = document.createElement('img');
            img.src = card.content;
            img.alt = card.type;
            img.onerror = () => {
                // Fallback if image doesn't load
                img.style.display = 'none';
                frontFace.innerHTML = `<div class="card-text">Image not found</div>`;
            };
            frontFace.appendChild(img);
        } else {
            frontFace.innerHTML = `<div class="card-text">${card.content}</div>`;
        }

        cardDiv.appendChild(backFace);
        cardDiv.appendChild(frontFace);

        return cardDiv;
    },

    flipCard(index) {
        const card = this.elements.gameBoard.children[index];
        if (card) {
            card.classList.add('flipped');
        }
    },

    unflipCard(index) {
        const card = this.elements.gameBoard.children[index];
        if (card) {
            card.classList.remove('flipped');
        }
    },

    markAsMatched(index) {
        const card = this.elements.gameBoard.children[index];
        if (card) {
            card.classList.add('matched');
        }
    },

    disableAllCards() {
        const cards = this.elements.gameBoard.querySelectorAll('.card');
        cards.forEach(card => card.classList.add('disabled'));
    },

    enableAllCards() {
        const cards = this.elements.gameBoard.querySelectorAll('.card');
        cards.forEach(card => card.classList.remove('disabled'));
    },

    updateMoves(moves) {
        this.elements.moveCount.textContent = moves;
    },

    updateTimer(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        this.elements.timerDisplay.textContent = 
            `${mins}:${secs.toString().padStart(2, '0')}`;
    },

    updateStars(stars) {
        const starElements = this.elements.starsDisplay.querySelectorAll('.star');
        starElements.forEach((star, index) => {
            if (index < stars) {
                star.classList.remove('lost');
            } else {
                star.classList.add('lost');
            }
        });
    },

    showTurnDisplay(isPlayerTurn) {
        this.elements.turnDisplay.classList.remove('hidden');
        this.elements.currentTurn.textContent = isPlayerTurn ? '🎮 Your Turn' : '🤖 Bot\'s Turn';
        this.elements.currentTurn.style.color = isPlayerTurn ? '#667eea' : '#ff6b6b';
    },

    hideTurnDisplay() {
        this.elements.turnDisplay.classList.add('hidden');
    },

    showWinModal(moves, time, stars) {
        this.elements.finalMoves.textContent = moves;
        this.elements.finalTime.textContent = time;
        this.elements.finalStars.textContent = '⭐'.repeat(stars);
        this.elements.winModal.classList.remove('hidden');
    },

    hideWinModal() {
        this.elements.winModal.classList.add('hidden');
    },

    resetBoard() {
        this.elements.gameBoard.innerHTML = '';
        this.elements.gameBoard.classList.add('hidden');
        this.elements.scoreboard.classList.add('hidden');
        this.hideTurnDisplay();
    },

    showMessage(message, type = 'info') {
        // Simple message display (can be enhanced with a toast notification)
        console.log(`[${type.toUpperCase()}] ${message}`);
    }
};

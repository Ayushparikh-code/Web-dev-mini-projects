// game.js - Core game logic

const Game = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    moves: 0,
    timer: 0,
    timerInterval: null,
    isProcessing: false,
    mode: 'flags',
    difficulty: 'easy',
    botEnabled: false,
    isPlayerTurn: true,

    async init(mode, difficulty, botEnabled, botDifficulty) {
        this.reset();
        this.mode = mode;
        this.difficulty = difficulty;
        this.botEnabled = botEnabled;

        if (botEnabled) {
            Bot.init(botDifficulty);
        }

        // Build deck
        this.cards = await Deck.buildDeck(mode, difficulty);
        this.cards = this.cards.map(card => ({
            ...card,
            flipped: false,
            matched: false
        }));

        // Render board
        UI.renderBoard(this.cards, difficulty);

        // Start timer
        this.startTimer();

        // Show turn display if bot enabled
        if (this.botEnabled) {
            UI.showTurnDisplay(this.isPlayerTurn);
        }

        // Attach click handlers
        this.attachClickHandlers();
    },

    reset() {
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.timer = 0;
        this.isProcessing = false;
        this.isPlayerTurn = true;

        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }

        UI.updateMoves(0);
        UI.updateTimer(0);
        UI.updateStars(3);
    },

    attachClickHandlers() {
        const board = document.getElementById('gameBoard');
        board.addEventListener('click', (e) => this.handleCardClick(e));
    },

    async handleCardClick(e) {
        if (this.botEnabled && !this.isPlayerTurn) return;
        if (this.isProcessing) return;

        const cardElement = e.target.closest('.card');
        if (!cardElement) return;

        const index = parseInt(cardElement.dataset.index);
        await this.flipCard(index);
    },

    async flipCard(index) {
        const card = this.cards[index];

        // Check if card can be flipped
        if (card.flipped || card.matched) return;
        if (this.flippedCards.length >= 2) return;

        // Flip the card
        card.flipped = true;
        this.flippedCards.push(index);
        UI.flipCard(index);

        // Remember card for bot
        if (this.botEnabled) {
            Bot.rememberCard(index, card.pairId);
        }

        // Check if two cards are flipped
        if (this.flippedCards.length === 2) {
            this.isProcessing = true;
            UI.disableAllCards();

            await this.delay(1000);
            this.checkMatch();
        }
    },

    checkMatch() {
        this.moves++;
        UI.updateMoves(this.moves);
        this.updateStars();

        const [index1, index2] = this.flippedCards;
        const card1 = this.cards[index1];
        const card2 = this.cards[index2];

        if (card1.pairId === card2.pairId) {
            // Match found
            card1.matched = true;
            card2.matched = true;
            UI.markAsMatched(index1);
            UI.markAsMatched(index2);
            this.matchedPairs++;

            // Check win condition
            if (this.matchedPairs === this.cards.length / 2) {
                this.win();
            }
        } else {
            // No match - flip back
            card1.flipped = false;
            card2.flipped = false;
            UI.unflipCard(index1);
            UI.unflipCard(index2);
        }

        this.flippedCards = [];
        this.isProcessing = false;
        UI.enableAllCards();

        // Switch turn if bot mode
        if (this.botEnabled && this.matchedPairs < this.cards.length / 2) {
            this.switchTurn();
        }
    },

    async switchTurn() {
        this.isPlayerTurn = !this.isPlayerTurn;
        UI.showTurnDisplay(this.isPlayerTurn);

        if (!this.isPlayerTurn) {
            // Bot's turn
            await this.botTakeTurn();
        }
    },

    async botTakeTurn() {
        UI.disableAllCards();

        // Bot flips first card
        const firstCard = await Bot.makeMove(this.cards, this.flippedCards);
        if (firstCard !== null) {
            await this.flipCard(firstCard);
            await this.delay(500);

            // Bot flips second card
            const secondCard = await Bot.makeMove(this.cards, this.flippedCards);
            if (secondCard !== null) {
                await this.flipCard(secondCard);
            }
        }

        UI.enableAllCards();
    },

    updateStars() {
        const maxMoves = Deck.getPairsCount(this.difficulty) * 2;
        let stars = 3;

        if (this.moves > maxMoves * 1.5) {
            stars = 1;
        } else if (this.moves > maxMoves) {
            stars = 2;
        }

        UI.updateStars(stars);
    },

    getStars() {
        const maxMoves = Deck.getPairsCount(this.difficulty) * 2;
        if (this.moves > maxMoves * 1.5) return 1;
        if (this.moves > maxMoves) return 2;
        return 3;
    },

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timer++;
            UI.updateTimer(this.timer);
        }, 1000);
    },

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    },

    getFormattedTime() {
        const mins = Math.floor(this.timer / 60);
        const secs = this.timer % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    },

    win() {
        this.stopTimer();
        const stars = this.getStars();
        UI.showWinModal(this.moves, this.getFormattedTime(), stars);
    },

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

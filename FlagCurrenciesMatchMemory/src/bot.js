// bot.js - Bot logic

const Bot = {
    difficulty: 'random',
    memory: {}, // { pairId: [indexes seen] }

    // Initialize with difficulty and optionally the deck (cards) for perfect bot
    init(difficulty, cards) {
        this.difficulty = difficulty;
        if (difficulty === 'perfect' && Array.isArray(cards)) {
            this.preloadMemory(cards);
        } else {
            this.memory = {};
        }
    },

    // Preload Perfect Bot memory with every card position at the start
    preloadMemory(cards) {
        this.memory = {};
        cards.forEach((card, index) => {
            if (!this.memory[card.pairId]) this.memory[card.pairId] = [];
            this.memory[card.pairId].push(index);
        });
    },

    rememberCard(index, pairId) {
        if (!this.memory[pairId]) {
            this.memory[pairId] = [];
        }
        if (!this.memory[pairId].includes(index)) {
            this.memory[pairId].push(index);
        }
    },

    async makeMove(cards, flippedCards) {
        switch (this.difficulty) {
            case 'perfect':
                return this.makePerfectMove(cards, flippedCards);
            case 'memory':
                return this.makeMemoryMove(cards, flippedCards);
            default:
                return this.makeRandomMove(cards, flippedCards);
        }
    },

    // --- Random Bot: guesses blindly ---
    makeRandomMove(cards, flippedCards) {
        const available = cards
            .map((c, i) => i)
            .filter(i => !cards[i].flipped && !cards[i].matched && !flippedCards.includes(i));
        if (available.length === 0) return null;
        return available[Math.floor(Math.random() * available.length)];
    },

    // --- Memory Bot: tries to match if remembered, else random ---
    makeMemoryMove(cards, flippedCards) {
        if (flippedCards.length === 1) {
            const firstCard = cards[flippedCards[0]];
            const knownIndexes = this.memory[firstCard.pairId] || [];
            const partner = knownIndexes.find(i => i !== flippedCards[0] && !cards[i].matched);
            if (partner !== undefined) return partner;
        }
        for (const pairId in this.memory) {
            const idxs = this.memory[pairId].filter(i => !cards[i].matched);
            if (idxs.length >= 2) {
                if (flippedCards.length === 0) return idxs[0];
                if (flippedCards.length === 1 && cards[flippedCards[0]].pairId === pairId) {
                    return idxs.find(i => i !== flippedCards[0]);
                }
            }
        }
        return this.makeRandomMove(cards, flippedCards);
    },

    // --- Perfect Bot: always makes an immediate match ---
    makePerfectMove(cards, flippedCards) {
        // If no cards are flipped, always pick the first from any unmatched pair
        if (flippedCards.length === 0) {
            for (const pairId in this.memory) {
                const idxs = this.memory[pairId].filter(i => !cards[i].matched);
                if (idxs.length === 2) return idxs[0];
            }
        }
        // If one card is flipped, immediately pick its match
        if (flippedCards.length === 1) {
            const firstCard = cards[flippedCards[0]];
            const knownIndexes = this.memory[firstCard.pairId] || [];
            const partner = knownIndexes.find(i => i !== flippedCards[0] && !cards[i].matched);
            if (partner !== undefined) return partner;
        }
        // Defensive fallback: pick any remaining card
        const unseen = cards
            .map((c, i) => i)
            .filter(i => !cards[i].flipped && !cards[i].matched && !flippedCards.includes(i));
        if (unseen.length === 0) return null;
        return unseen[Math.floor(Math.random() * unseen.length)];
    }
};

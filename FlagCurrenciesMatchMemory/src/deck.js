// deck.js - Build card deck and shuffle

const Deck = {
    // Build deck based on mode and difficulty
    async buildDeck(mode, difficulty) {
        const pairsNeeded = this.getPairsCount(difficulty);
        const countries = await API.fetchCountries();

        // Select random countries
        const selectedCountries = this.selectRandomCountries(countries, pairsNeeded);

        // Build pairs based on mode
        if (mode === 'flags') {
            return this.buildFlagDeck(selectedCountries);
        } else {
            return this.buildCurrencyDeck(selectedCountries);
        }
    },

    getPairsCount(difficulty) {
        const counts = {
            'easy': 8,      // 4x4 grid
            'medium': 15,   // 5x6 grid
            'hard': 18      // 6x6 grid
        };
        return counts[difficulty] || 8;
    },

    selectRandomCountries(countries, count) {
        // Shuffle and select
        const shuffled = [...countries].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    },

    buildFlagDeck(countries) {
        const cards = [];
        countries.forEach((country, index) => {
            // Card 1: Flag image
            cards.push({
                id: `flag-${index}`,
                pairId: index,
                type: 'flag',
                content: country.flag,
                isImage: true
            });

            // Card 2: Country name
            cards.push({
                id: `name-${index}`,
                pairId: index,
                type: 'name',
                content: country.name,
                isImage: false
            });
        });

        return this.shuffle(cards);
    },

    buildCurrencyDeck(countries) {
        const cards = [];
        countries.forEach((country, index) => {
            const currencyCode = country.currencies[0]; // Get first currency

            // Card 1: Country name
            cards.push({
                id: `name-${index}`,
                pairId: index,
                type: 'name',
                content: country.name,
                isImage: false
            });

            // Card 2: Currency image
            cards.push({
                id: `currency-${index}`,
                pairId: index,
                type: 'currency',
                content: `assets/currencies/${currencyCode}.png`,
                isImage: true,
                currencyCode: currencyCode
            });
        });

        return this.shuffle(cards);
    },

    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
};

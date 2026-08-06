// Bingo Core Logic - MeetingMasters Online (English)

class BingoGame {
    constructor(config) {
        this.config = config;
        this.cardNumber = null;
        this.cardData = [];
        this.crossedCells = new Set();
    }

    // Seeded random generator for reproducible cards
    seededRandom(seed) {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    // Shuffle array with seed (for reproducible cards)
    shuffleWithSeed(array, seed) {
        const shuffled = [...array];
        let currentSeed = seed;

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(this.seededRandom(currentSeed++) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }

    // Generate card based on card number (1-250)
    generateCard(cardNumber) {
        if (cardNumber < 1 || cardNumber > this.config.totalCards) {
            throw new Error(`Card number must be between 1 and ${this.config.totalCards}`);
        }

        this.cardNumber = cardNumber;
        const items = this.config.contentType === "words"
            ? this.config.words
            : this.config.images;

        if (items.length < 24) {
            throw new Error("At least 24 items required for bingo");
        }

        // Shuffle with card number as seed
        const shuffled = this.shuffleWithSeed(items, cardNumber * 1000);

        // Take first 24 items (center is logo)
        this.cardData = shuffled.slice(0, 24);
        this.crossedCells = new Set();

        // Center cell (index 12) is always "crossed" (logo)
        this.crossedCells.add(12);

        return this.cardData;
    }

    // Get card data including center cell
    getFullCardData() {
        const fullData = [...this.cardData];
        // Insert logo placeholder at position 12 (center of 5x5)
        fullData.splice(12, 0, { type: 'logo', value: this.config.logo });
        return fullData;
    }

    // Toggle cell crossed
    toggleCell(index) {
        if (index === 12) return; // Logo cannot be uncrossed

        if (this.crossedCells.has(index)) {
            this.crossedCells.delete(index);
        } else {
            this.crossedCells.add(index);
        }

        return this.crossedCells.has(index);
    }

    // Check if cell is crossed
    isCrossed(index) {
        return this.crossedCells.has(index);
    }

    // Check for winning lines
    checkWin() {
        const lines = this.getWinningLines();
        const completedLines = [];

        for (const line of lines) {
            if (line.every(index => this.crossedCells.has(index))) {
                completedLines.push(line);
            }
        }

        return {
            count: completedLines.length,
            lines: completedLines,
            status: this.getWinStatus(completedLines.length)
        };
    }

    // Determine win status
    getWinStatus(lineCount) {
        if (lineCount >= 3) return "BINGO";
        if (lineCount === 2) return "TWO LINES";
        if (lineCount === 1) return "LINE";
        return null;
    }

    // All possible winning lines (5x5 grid)
    getWinningLines() {
        return [
            // Horizontal rows
            [0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24],
            // Vertical columns
            [0, 5, 10, 15, 20],
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 19, 24],
            // Diagonals
            [0, 6, 12, 18, 24],
            [4, 8, 12, 16, 20]
        ];
    }

    // Verification for host: which items are crossed on a card?
    static verifyCard(cardNumber, crossedIndices, config) {
        const game = new BingoGame(config);
        game.generateCard(cardNumber);

        // Set crossed cells
        game.crossedCells = new Set([12, ...crossedIndices]); // 12 is always crossed (logo)

        return {
            cardNumber,
            cardData: game.getFullCardData(),
            crossedItems: crossedIndices.map(i => {
                const fullData = game.getFullCardData();
                return i === 12 ? 'LOGO' : fullData[i];
            }),
            winStatus: game.checkWin()
        };
    }

    // Generate all items for call card
    static getAllItems(config) {
        return config.contentType === "words"
            ? config.words
            : config.images;
    }

    // Get random available card number
    static getRandomCardNumber(usedNumbers, totalCards) {
        const available = [];
        for (let i = 1; i <= totalCards; i++) {
            if (!usedNumbers.has(i)) {
                available.push(i);
            }
        }

        if (available.length === 0) {
            throw new Error("All cards have been issued");
        }

        return available[Math.floor(Math.random() * available.length)];
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BingoGame;
}

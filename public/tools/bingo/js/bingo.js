// Bingo Core Logic - MeetingMasters Online

class BingoGame {
    constructor(config) {
        this.config = config;
        this.cardNumber = null;
        this.cardData = [];
        this.crossedCells = new Set();
    }

    // Seeded random generator voor reproduceerbare kaarten
    seededRandom(seed) {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    // Shuffle array met seed (voor reproduceerbare kaarten)
    shuffleWithSeed(array, seed) {
        const shuffled = [...array];
        let currentSeed = seed;

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(this.seededRandom(currentSeed++) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled;
    }

    // Genereer kaart op basis van kaartnummer (1-250)
    generateCard(cardNumber) {
        if (cardNumber < 1 || cardNumber > this.config.totalCards) {
            throw new Error(`Kaartnummer moet tussen 1 en ${this.config.totalCards} zijn`);
        }

        this.cardNumber = cardNumber;
        const items = this.config.contentType === "words"
            ? this.config.words
            : this.config.images;

        if (items.length < 24) {
            throw new Error("Minimaal 24 items nodig voor bingo");
        }

        // Shuffle met kaartnummer als seed
        const shuffled = this.shuffleWithSeed(items, cardNumber * 1000);

        // Neem eerste 24 items (middenveld is logo)
        this.cardData = shuffled.slice(0, 24);
        this.crossedCells = new Set();

        // Middenveld (index 12) is altijd "gekruist" (logo)
        this.crossedCells.add(12);

        return this.cardData;
    }

    // Krijg kaartdata inclusief middenveld
    getFullCardData() {
        const fullData = [...this.cardData];
        // Insert logo placeholder op positie 12 (midden van 5x5)
        fullData.splice(12, 0, { type: 'logo', value: this.config.logo });
        return fullData;
    }

    // Toggle cel gekruist
    toggleCell(index) {
        if (index === 12) return; // Logo kan niet ge-unkruist worden

        if (this.crossedCells.has(index)) {
            this.crossedCells.delete(index);
        } else {
            this.crossedCells.add(index);
        }

        return this.crossedCells.has(index);
    }

    // Check of cel gekruist is
    isCrossed(index) {
        return this.crossedCells.has(index);
    }

    // Check voor winnende rijtjes
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

    // Bepaal win status
    getWinStatus(lineCount) {
        if (lineCount >= 3) return "BINGO";
        if (lineCount === 2) return "TWEE RIJTJES";
        if (lineCount === 1) return "RIJTJE";
        return null;
    }

    // Alle mogelijke winnende lijnen (5x5 grid)
    getWinningLines() {
        return [
            // Horizontale rijen
            [0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24],
            // Verticale kolommen
            [0, 5, 10, 15, 20],
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 19, 24],
            // Diagonalen
            [0, 6, 12, 18, 24],
            [4, 8, 12, 16, 20]
        ];
    }

    // Verificatie voor host: welke items zijn gekruist op een kaart?
    static verifyCard(cardNumber, crossedIndices, config) {
        const game = new BingoGame(config);
        game.generateCard(cardNumber);

        // Zet de gekruiste cellen
        game.crossedCells = new Set([12, ...crossedIndices]); // 12 is altijd gekruist (logo)

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

    // Genereer alle items voor call card
    static getAllItems(config) {
        return config.contentType === "words"
            ? config.words
            : config.images;
    }

    // Krijg random beschikbaar kaartnummer
    static getRandomCardNumber(usedNumbers, totalCards) {
        const available = [];
        for (let i = 1; i <= totalCards; i++) {
            if (!usedNumbers.has(i)) {
                available.push(i);
            }
        }

        if (available.length === 0) {
            throw new Error("Alle kaarten zijn al uitgegeven");
        }

        return available[Math.floor(Math.random() * available.length)];
    }
}

// Exporteer
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BingoGame;
}

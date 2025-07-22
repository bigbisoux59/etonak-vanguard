
class Deck {
    constructor(cardsConfig) {
        this.cards = [];
        this.discardPile = [];
        this.build(cardsConfig);
        this.shuffle();
    }

    build(cardsConfig) {
        this.cards = [];
        for (const cardType in cardsConfig) {
            for (let i = 0; i < cardsConfig[cardType]; i++) {
                this.cards.push(cardType);
            }
        }
    }

    shuffle() {
        // Algorithme de mélange de Fisher-Yates
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw() {
        if (this.cards.length === 0) {
            console.log("Le paquet est vide. Remélange de la défausse.");
            this.cards = [...this.discardPile];
            this.discardPile = [];
            this.shuffle();
        }
        const card = this.cards.pop();
        this.discardPile.push(card);
        return card;
    }
}

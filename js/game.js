class Game {
    constructor() {
        this.playerShip = null;
        this.attemptDeck = new Deck(ATTEMPT_CARDS_CONFIG);
        this.currentSector = 16;
        // ... autres initialisations de decks (exploration, etc.)
    }

    async startGame(shipName) {
        this.playerShip = await Ship.create("allied", shipName);
        console.log(`Début de la partie avec le vaisseau ${this.playerShip.name}.`);
        this.playerShip.displayStatus();
        this.exploreSector();
    }

    exploreSector() {
        console.log(`\n--- Exploration du Secteur ${this.currentSector} ---`);
        // Pour l'instant, on simule une action simple
        this.handleExplorationCard(); 
    }

    handleExplorationCard() {
        // TODO: Implémenter la logique de pioche et de gestion des cartes exploration
        console.log("Vous tirez une carte exploration...");
        // Pour le test, on va simuler une bataille
        this.startBattle();
    }

    async startBattle() {
        console.log("\n--- Début de la Bataille ! ---");
        const enemyData = this.enemyLoader.getRandomEnemy();
        if (!enemyData) return;

        const enemyShip = new ShipEnemy(enemyData);
        console.log(`Un vaisseau ennemi apparaît : ${enemyShip.name}`);
        enemyShip.displayStatus();

        // Pour l'instant, on va juste simuler quelques actions
        this.playerShip.createShield();
        this.playerShip.fireMissile();
        this.playerShip.displayStatus();
    }

}
import { Deck } from './deck.js';
import { ShipAllied, ShipEnemy } from './ship.js';
import { ATTEMPT_CARDS_CONFIG } from './constants.js';

export class Game {
    constructor(enemyLoader, alliedLoader) {
        this.playerShip = null;
        this.enemyLoader = enemyLoader;
        this.alliedLoader = alliedLoader;
        this.attemptDeck = new Deck(ATTEMPT_CARDS_CONFIG);
        this.currentSector = 16;
        // ... autres initialisations de decks (exploration, etc.)
    }

    async startGame(shipName) {
        const shipData = this.alliedLoader.getAlliedShipByName(shipName);
        if (!shipData) {
            throw new Error(`Vaisseau allié non trouvé : ${shipName}`);
        }
        this.playerShip = new ShipAllied(shipData);
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

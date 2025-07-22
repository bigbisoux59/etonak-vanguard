import { Game } from './game.js';
import { EnemyLoader } from './enemyLoader.js';
import { AlliedLoader } from './alliedLoader.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log("Bienvenue dans Chaosphere Etonak Vanguard !");

    // 1. Charger les données des ennemis
    const enemyLoader = new EnemyLoader();
    await enemyLoader.loadEnemies();

    // 2. Charger les données des vaisseaux alliés
    const alliedLoader = new AlliedLoader();
    await alliedLoader.loadAlliedShips();

    // 3. Initialiser le jeu avec les données chargées
    const game = new Game(enemyLoader, alliedLoader);

    // Pour jouer en ligne de commande, vous pouvez utiliser la console du navigateur.
    // Par exemple, pour démarrer le jeu avec le vaisseau "Subsistance" :
    // await game.startGame('subsistance');

    // 4. Lancement automatique du jeu pour le test
    await game.startGame('subsistance');
});

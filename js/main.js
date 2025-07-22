document.addEventListener('DOMContentLoaded', async () => {
    console.log("Bienvenue dans Chaosphere Etonak Vanguard !");

    // 1. Charger les données des ennemis
    const enemyLoader = new EnemyLoader();
    await enemyLoader.loadEnemies();

    // 2. Initialiser le jeu avec les données chargées
    const game = new Game(enemyLoader);

    // Pour jouer en ligne de commande, vous pouvez utiliser la console du navigateur.
    // Par exemple, pour démarrer le jeu avec le vaisseau "Subsistance" :
    // await game.startGame('subsistance');

    // 3. Lancement automatique du jeu pour le test
    await game.startGame('subsistance');
});
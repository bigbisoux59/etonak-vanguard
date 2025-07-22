export class EnemyLoader {
    constructor() {
        this.enemies = [];
    }

    async loadEnemies() {
        try {
            const response = await fetch('data/enemy_ships.json');
            if (!response.ok) {
                throw new Error('Impossible de charger le fichier des ennemis.');
            }
            this.enemies = await response.json();
            console.log('Fichier des ennemis chargé.');
        } catch (error) {
            console.error('Erreur lors du chargement des ennemis:', error);
        }
    }

    getRandomEnemy() {
        if (this.enemies.length === 0) {
            console.error("La liste d'ennemis est vide.");
            return null;
        }
        const randomIndex = Math.floor(Math.random() * this.enemies.length);
        return this.enemies[randomIndex];
    }
}
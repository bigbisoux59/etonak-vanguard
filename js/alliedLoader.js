export class AlliedLoader {
    constructor() {
        this.alliedShips = [];
    }

    async loadAlliedShips() {
        try {
            const response = await fetch('data/allied_ships.json');
            if (!response.ok) {
                throw new Error('Impossible de charger le fichier des vaisseaux alliés.');
            }
            this.alliedShips = await response.json();
            console.log('Fichier des vaisseaux alliés chargé.');
        } catch (error) {
            console.error('Erreur lors du chargement des vaisseaux alliés:', error);
        }
    }

    getAlliedShipByName(name) {
        return this.alliedShips.find(ship => ship.name.toLowerCase() === name.toLowerCase());
    }

    getAlliedShipNames() {
        return this.alliedShips.map(ship => ship.name);
    }
}
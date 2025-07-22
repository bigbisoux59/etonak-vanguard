// Classe de base pour tous les vaisseaux
export class Ship {
    constructor(shipData) {
        this.name = shipData.name;
        this.type = shipData.type;

        // Propriétés de base
        this.structureHealth = shipData.structureHealth;
        this.assaultPower = shipData.assaultPower;
        this.initiative = shipData.initiative;
        this.shield = 0; // Commence à 0

        // Compartiments
        this.compartments = { ...shipData.compartments };
        this.initialCompartments = { ...shipData.compartments }; // Pour les réparations

        // Actions de combat
        this.combatActions = { ...shipData.combatActions };

        // Spécial
        this.specialSkill = shipData.specialSkill;
    }

    isAlive() {
        return this.structureHealth > 0 && this.compartments.engine > 0;
    }

    takeDamage(compartment, amount = 1) {
        if (this.compartments[compartment] !== undefined) {
            this.compartments[compartment] -= amount;
            if (this.compartments[compartment] < 0) {
                this.compartments[compartment] = 0;
            }
            this.structureHealth -= amount;
            if (this.structureHealth < 0) {
                this.structureHealth = 0;
            }
            console.log(`${this.name} a subi ${amount} dégât(s) au compartiment ${compartment}.`);
        } else {
            console.log(`Compartiment non valide : ${compartment}`);
        }
    }

    createShield(amount = 1) {
        if (this.compartments.shieldGenerator > 0) {
            this.shield += amount;
            console.log(`${this.name} génère ${amount} bouclier(s).`);
        } else {
            console.log("Le générateur de bouclier est détruit !");
        }
    }

    canFireLaser() {
        return this.compartments.energyBattery > 0;
    }

    canFireMissile() {
        return this.compartments.missileBattery > 0;
    }

    destroyShield(amount = 1) {
        this.shield -= amount;
        if (this.shield < 0) {
            this.shield = 0;
        }
    }

    displayStatus() {
        console.log(`--- État de ${this.name} ---`);
        console.log(`Type: ${this.type}`);
        console.log(`Structure: ${this.structureHealth}`);
        console.log(`Boucliers: ${this.shield}`);
        if (this.missile !== undefined) {
            console.log(`Missiles: ${this.missile}`);
        }
        if (this.engineeringPower !== undefined) {
            console.log(`Puissance d'ingénierie: ${this.engineeringPower}`);
        }
        console.log(`Puissance d'assaut: ${this.assaultPower}`);
        if (this.luck !== undefined) { // La chance n'existe que pour les alliés
            console.log(`Chance: ${this.luck}`);
        }
        if (this.fusionCell !== undefined) { // Les piles à fusion n'existent que pour les alliés
            console.log(`Piles à fusion: ${this.fusionCell}`);
        }
        if (this.reward !== undefined) { // La récompense n'existe que pour les ennemis
            console.log(`Récompense:`, this.reward);
        }
        console.log('Compartiments:', this.compartments);
        console.log('--------------------------');
    }
}

// Classe pour les vaisseaux alliés
export class ShipAllied extends Ship {
    constructor(shipData) {
        super(shipData); // Appelle le constructeur de la classe parente (Ship)
        this.engineeringPower = shipData.engineeringPower;
        this.missile = shipData.missile;
        this.luck = shipData.luck;
        this.fusionCell = 0; // Les alliés commencent avec 0 pile à fusion
    }

    repairCompartments() {
        this.compartments = { ...this.initialCompartments };
        console.log(`${this.name} a réparé tous ses compartiments.`);
    }

    fireMissile(amount = 1) {
        if (this.canFireMissile()) {
            this.missile -= amount;
            if (this.missile < 0) {
                this.missile = 0;
            }
        } else {
            console.log("La batterie de missiles est détruite ou le stock est vide !");
        }
    }

    // ... futures méthodes spécifiques aux alliés
}

// Classe pour les vaisseaux ennemis
export class ShipEnemy extends Ship {
    constructor(shipData) {
        super(shipData); // Appelle le constructeur de la classe parente (Ship)
        this.reward = shipData.reward; // Ajout de la propriété reward
    }

    // ... futures méthodes spécifiques aux ennemis
}
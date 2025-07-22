# Classes JavaScript

Ce document détaille les classes JavaScript utilisées dans le projet `Chaosphere Etonak Vanguard`,
leurs rôles, propriétés et méthodes.

---

## Classe `Ship`

La classe `Ship` est la classe de base pour tous les types de vaisseaux (alliés et ennemis). Elle contient les propriétés et méthodes communes à tous les vaisseaux.

### Propriétés

*   `name` (string): Nom du vaisseau.
*   `type` (string): Type du vaisseau ("allied" ou "enemy").
*   `structureHealth` (number): Points de structure actuels du vaisseau. Si 0, le vaisseau est détruit.
*   `assaultPower` (number): Points de puissance d'assaut du vaisseau.
*   `initiative` (number): Valeur d'initiative du vaisseau en combat.
*   `shield` (number): Nombre de boucliers actifs du vaisseau.
*   `compartments` (object): État actuel des compartiments du vaisseau (ex: `shieldGenerator`, `energyBattery`, `missileBattery`, `soldierGarnison`, `engine`). La valeur représente les points de vie restants du compartiment.
*   `initialCompartments` (object): État initial des compartiments, utilisé pour les réparations.
*   `combatActions` (object): Actions de combat du vaisseau par phase (ex: `phase1: ["fire", "shield"]`).
*   `specialSkill` (string/null): Compétence spéciale unique du vaisseau.

### Méthodes

*   `constructor(shipData)`: Initialise un nouveau vaisseau avec les données fournies.
*   `isAlive()`: Retourne `true` si le vaisseau est en vie (structure > 0 et moteur > 0), `false` sinon.
*   `takeDamage(compartment, amount = 1)`: Réduit les points de vie d'un compartiment et la structure globale du vaisseau.
*   `createShield(amount = 1)`: Ajoute des boucliers au vaisseau si le générateur de bouclier est fonctionnel.
*   `canFireLaser()`: Retourne `true` si la batterie énergétique est fonctionnelle, `false` sinon.
*   `canFireMissile()`: Retourne `true` si la batterie de missiles est fonctionnelle, `false` sinon.
*   `destroyShield(amount = 1)`: Réduit le nombre de boucliers actifs.
*   `displayStatus()`: Affiche l'état actuel du vaisseau dans la console.

---

## Classe `ShipAllied`

La classe `ShipAllied` hérite de `Ship` et représente les vaisseaux contrôlés par le joueur. Elle inclut des propriétés et méthodes spécifiques aux vaisseaux alliés.

### Propriétés

*   `engineeringPower` (number): Points de puissance d'ingénierie, utilisés lors des expéditions.
*   `missile` (number): Nombre de missiles restants.
*   `luck` (number): Points de chance, utilisés pour annuler des échecs.
*   `fusionCell` (number): Piles à fusion (monnaie du jeu).

### Méthodes

*   `constructor(shipData)`: Initialise un nouveau vaisseau allié, appelant le constructeur de `Ship` et initialisant ses propres propriétés.
*   `repairCompartments()`: Rétablit l'état initial de tous les compartiments du vaisseau.
*   `fireMissile(amount = 1)`: Décrémente le stock de missiles si le tir est possible et le stock n'est pas vide.

---

## Classe `ShipEnemy`

La classe `ShipEnemy` hérite de `Ship` et représente les vaisseaux ennemis. Elle inclut des propriétés spécifiques aux ennemis.

### Propriétés

*   `reward` (object): Objet décrivant les récompenses obtenues après la destruction du vaisseau (ex: `fusionCells`, `lootCards`).

### Méthodes

*   `constructor(shipData)`: Initialise un nouveau vaisseau ennemi, appelant le constructeur de `Ship` et initialisant sa propriété `reward`.

---

## Classe `Deck`

La classe `Deck` gère la logique des paquets de cartes, permettant de construire, mélanger et piocher des cartes.

### Propriétés

*   `cards` (array): Tableau des cartes actuellement dans le paquet.
*   `discardPile` (array): Tableau des cartes défaussées.

### Méthodes

*   `constructor(cardsConfig)`: Initialise un nouveau paquet de cartes basé sur une configuration (ex: `ATTEMPT_CARDS_CONFIG`).
*   `build(cardsConfig)`: Construit le paquet de cartes à partir de la configuration.
*   `shuffle()`: Mélange le paquet de cartes en utilisant l'algorithme de Fisher-Yates.
*   `draw()`: Pioche une carte du paquet. Si le paquet est vide, il remélange la défausse.

---

## Classe `EnemyLoader`

La classe `EnemyLoader` est responsable du chargement asynchrone des données de tous les vaisseaux ennemis et de la fourniture d'ennemis aléatoires.

### Propriétés

*   `enemies` (array): Tableau des objets de données des vaisseaux ennemis chargés.

### Méthodes

*   `constructor()`: Initialise le chargeur d'ennemis.
*   `loadEnemies()`: Charge le fichier `data/enemy_ships.json` de manière asynchrone.
*   `getRandomEnemy()`: Retourne un objet de données de vaisseau ennemi aléatoire parmi ceux chargés.

---

## Classe `AlliedLoader`

La classe `AlliedLoader` est responsable du chargement asynchrone des données de tous les vaisseaux alliés et de la fourniture de données de vaisseau par nom.

### Propriétés

*   `alliedShips` (array): Tableau des objets de données des vaisseaux alliés chargés.

### Méthodes

*   `constructor()`: Initialise le chargeur de vaisseaux alliés.
*   `loadAlliedShips()`: Charge le fichier `data/allied_ships.json` de manière asynchrone.
*   `getAlliedShipByName(name)`: Retourne l'objet de données du vaisseau allié correspondant au nom donné.
*   `getAlliedShipNames()`: Retourne un tableau des noms de tous les vaisseaux alliés chargés.

---

## Classe `Game`

La classe `Game` est le moteur principal du jeu. Elle orchestre le déroulement du jeu, gère les états et les interactions entre les différents composants.

### Propriétés

*   `playerShip` (ShipAllied/null): L'instance du vaisseau du joueur.
*   `enemyLoader` (EnemyLoader): Instance du chargeur d'ennemis.
*   `alliedLoader` (AlliedLoader): Instance du chargeur de vaisseaux alliés.
*   `attemptDeck` (Deck): Instance du paquet de cartes "Tentatives".
*   `currentSector` (number): Le secteur actuel dans lequel le joueur se trouve.

### Méthodes

*   `constructor(enemyLoader, alliedLoader)`: Initialise le jeu avec les chargeurs de données.
*   `startGame(shipName)`: Lance une nouvelle partie avec le vaisseau allié spécifié.
*   `exploreSector()`: Gère la logique d'exploration d'un secteur.
*   `handleExplorationCard()`: Simule la pioche et la gestion d'une carte d'exploration.
*   `startBattle()`: Démarre une bataille contre un vaisseau ennemi.

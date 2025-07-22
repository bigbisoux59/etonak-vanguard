# Structure du Projet

Ce document décrit l'organisation des fichiers et des dossiers du projet `Chaosphere Etonak Vanguard`.

```
.
├── README.md               # Description générale du projet et instructions de démarrage.
├── gemini.md               # Fichier de spécifications pour l'assistant Gemini.
├── index.html              # Point d'entrée de l'application web (pour le futur GUI).
├── css/
│   └── style.css           # Styles CSS de base pour l'application.
├── js/
│   ├── constants.js        # Fichier pour les constantes globales du jeu (ex: configuration des cartes).
│   ├── deck.js             # Gère la logique des paquets de cartes (mélange, pioche).
│   ├── enemyLoader.js      # Charge et gère les données des vaisseaux ennemis.
│   ├── alliedLoader.js     # Charge et gère les données des vaisseaux alliés.
│   ├── game.js             # Contient la logique principale du jeu (boucle de jeu, gestion des tours).
│   ├── main.js             # Point d'entrée JavaScript, initialise et lance le jeu.
│   └── ship.js             # Définit les classes de vaisseaux (Ship, ShipAllied, ShipEnemy).
├── data/
│   ├── allied_ships.json   # Données de tous les vaisseaux alliés.
│   └── enemy_ships.json    # Données de tous les vaisseaux ennemis.
└── docs/
    └── SUMMARY.md          # Sommaire de la documentation.
    └── project-structure.md # Ce document.
    └── javascript-classes.md # Documentation des classes JavaScript.
```

## Description des Dossiers et Fichiers Clés

*   **`/` (Racine du Projet)**
    *   `README.md`: Le fichier que vous lisez sur GitHub, fournissant un aperçu rapide du projet.
    *   `gemini.md`: Fichier de spécifications détaillé utilisé pour guider le développement par l'assistant IA.
    *   `index.html`: Le fichier HTML principal qui chargera tous les scripts et styles du jeu.

*   **`css/`**
    *   `style.css`: Contient les règles de style CSS pour l'interface utilisateur du jeu.

*   **`js/`**
    *   `constants.js`: Centralise les valeurs constantes et les configurations qui ne changent pas pendant l'exécution du jeu.
    *   `deck.js`: Implémente la logique pour créer, mélanger et piocher des cartes à partir de différents paquets.
    *   `enemyLoader.js`: Gère le chargement asynchrone des données des vaisseaux ennemis depuis les fichiers JSON.
    *   `alliedLoader.js`: Gère le chargement asynchrone des données des vaisseaux alliés depuis les fichiers JSON.
    *   `game.js`: La classe `Game` qui orchestre le déroulement du jeu, gère les états et les interactions entre les différents composants.
    *   `main.js`: Le script principal qui est exécuté au chargement de `index.html`. Il initialise le jeu et lance la séquence de démarrage.
    *   `ship.js`: Contient la hiérarchie des classes de vaisseaux (`Ship`, `ShipAllied`, `ShipEnemy`), définissant leurs propriétés et comportements.

*   **`data/`**
    *   Contient tous les fichiers de données au format JSON pour les entités du jeu (vaisseaux, cartes, etc.). Cette séparation permet de modifier facilement les données du jeu sans toucher au code JavaScript.
    *   `allied_ships.json`: Contient les données de tous les vaisseaux alliés.
    *   `enemy_ships.json`: Contient les données de tous les vaisseaux ennemis.

*   **`docs/`**
    *   Contient la documentation détaillée du projet.
    *   `SUMMARY.md`: Le sommaire de la documentation, permettant une navigation facile.
    *   `project-structure.md`: Le document que vous lisez actuellement.
    *   `javascript-classes.md`: Documentation détaillée de toutes les classes JavaScript du projet.
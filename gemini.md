# Fiche de Conception de Jeu pour Gemini

Ce fichier sert de guide pour que Gemini puisse générer la structure de base et le code de départ de votre jeu en HTML, CSS et JavaScript. Veu

---

## 1. Informations Générales

*   **Titre du jeu :** Chaosphere etonak vanguard like
*   **Concept / Description brève :** adaptation informatique du jeu de plateau chaosphere etonak vanguard
*   **Genre :** jeu mélangeant un jeu de type stop ou encore et un jeu de type roguelike

---

## 2. Conception du Jeu (Gameplay)

*   **Mécaniques principales :** (Listez les actions principales que le joueur peut faire. ex: sauter, tirer, collecter des objets, résoudre des énigmes.)
    *   - parcourir 3 secteurs avec d'affronter le boss final
    *   - lors de l'exploration de chaque secteur, tirer une carte parmis les 23 cartes explorations. Un deck de 23 cartes d'exploration différent pour chaque secteur
    *   - en fonction de la carte explorations, réaliser les actions en fonction de la carte exploration
    *   - les cartes explorations du secteur sont soit une carte "expéditions", une carte "bataille", une carte "opportunité", une carte "collisions" ou une carte "événment de boss"
    *   - apres avoir réaliser les actions de la carte exploration, le joueur peut décider 
            - de continuer l'exploration du secteur en tirant une nouvelle carte exploration
            - arrêter l'exloration et rejoindre un spatioport
    *   - au spatioport, le joueur peut réparer son vaisseau et procéder à des achats pour améliorer son vaisseau
    *   - il quitte le spatioport pour rejoindre la nouveau secteur d'exploration
    *   - après avoir exploirer les 3 secteurs, il affronte le vaisseau du boss final
*   **Objets du jeu :** (Listez les entités principales du jeu.)
    *   **Joueur :** (Description du personnage ou de l'entité contrôlée par le joueur.)
        Le joueur choisit un vaisseau parmi les 4 disponibles
    *   **Ennemis :** (S'il y en a, décrivez-les brièvement.)
    Les ennemis sont principalement des vaisseaux qui sont tirés parmis les cartes explorations.
    *   **Objets à collecter :** (ex: pièces, points, clés, power-ups.)
    le joueur peut collecter des "piles à fusion" qui représentent la monnaie du jeu lors qu'il détruit un vaisseau ennemi.
    *   **Obstacles :** (ex: murs, pièges, etc.)
    à définir plus tard

---

## 3. Conception Visuelle

*   **Style visuel :** (ex: Pixel art, Minimaliste, Cartoon, Réaliste, Sombre, Coloré.)
le jeu sera représenté en pixel art dans un premier temps puis avec des images au format svg.
*   **Éléments de l'interface utilisateur (UI) :** (Listez les informations à afficher à l'écran.)
    *   - Score
    *   - Vies restantes
    *   - Écran de démarrage (Titre + bouton "Commencer")
    Titre : Chaosphere etonak vanguard like
    Bontons : nouvelle expédition, continuer l'expédition, mission spaceCorsair , mission tutorial, paramètres, quitter
    *   - Écran de Game Over (Score final + bouton "Rejouer")
    *   - Écran de pause
    *   - Écran paramètres (activer/désactiver les sfx, activer/désactiver la musique d'ambiance, diminuer/augmenter le son)

---

## 4. Structure Technique

*   **Structure des fichiers souhaitée :**
    ```
    /
    |-- index.html
    |-- css/
    |   |-- style.css
    |-- js/
    |   |-- main.js
    |-- assets/
        |-- images
        |-- sons
    ```
*   **Bibliothèques / Frameworks :** 
    - Pour ce projet, nous utilisons uniquement du JavaScript pur (vanilla), HTML et CSS comme demandé.
    - Eventuellement, il pourra être porté sur le moteur de jeu GODOT par la suite

---

## 5. Instructions pour Gemini

Ce projet a pour but d'apprendre et me perfectionner dans le développement web et la programmation. Il se veut être didactique et commenté dans un langage clair pour être compris par un débutant en programmation

## 6. descriptif du jeu

Objectif :
Développer un jeu informatique en utilisant les techonologies HTML, CSS et JAVASCRIPT d'un jeu de plateau en solitaire au tour par tour. Il s'agit du jeu "Chaosphere etonak vanguard".

1ere phase du développemnt :
Créer les objets en javascript avec les propriétés et les méthodes.
Créer le moteur du jeu pour pouvoir jouer en ligne de commande (pour permettre de vérifier le développement correct des objets)
2eme phase du développement :
Créer le moteur GUI et l'application web pour pouvoir jouer sur un navigateur internet.
Créer les assets graphiques et audio.
3eme phaqe du développement :
Créer la partie en co-op pour permettre à deux joueurs de réaliser la mission ensemble.

Pour l'instant, ne faire que la phase de développement 1.


************************************************************************************************************
Matériels du jeu de plateau
************************************************************************************************************

4 vaisseaux alliés etonak vanguard chaucun ayant ses propres caractèristiques (les vaisseaus ont les mêmes proriétés mais avec des valeurs différentes)
- subsistance
- redemption
- ascension
- radiance

24 vaisseaux ennemies

cartes :
23 cartes explorations du secteur 16
23 cartes explorations du secteur 17
23 cartes explorations du secteur 19
12 cartes tentatives
25 cartes butins
20 cartes technologies
4 cartes scénarios
18 cartes armes
9 renforcements
4 indices
13 cartes mercenaires
30 cartes handicaps (mode hardcore)

************************************************************************************************************
ordre de mission
***********************************************************************************************************

Transmission SécurisÉe — Priorité absolue
De : Général Xel’Talya, Haut Commandement d’Etonak
À : Escouade Vanguard – Opération Black Hole
Canal : Crypté – Niveau 5

<< Capitaine,
Nous avons reçu la confirmation : les communications interceptées sont authentiques.
Le Vaisseau d’Inferno, celui-là même déployé sous couvert de «secours» dans le Secteur 15, transporte un artefact d’une puissance inconnue.
Nos analystes estiment qu’il est à l’origine du trou noir qui a englouti le Secteur 15. Cette catastrophe… était programmée.

Actuellement, le Vaisseau prend la direction du Secteur 19, territoire d’Inferno.
S’il atteint Alpha-2 avec l’Artefact à bord, le sort de la Chaosphère est scellé.

Etonak ne peut le permettre.
Vous êtes les plus proches. Vous êtes les seuls à pouvoir les intercepter.

La mission :
Poursuivre le Vaisseau ennemi à travers les secteurs 16 et 17, jusqu’au secteur 19 si nécessaire.
Neutraliser la cible.
Récupérer l’Artefact.
Coûte que coûte.
Les secteurs traversés sont hostiles : factions rivales, atonaros… et tout ce qui peut émerger du chaos.
Votre Vaisseau n’est pas taillé pour l’affrontement direct.
Vous devrez improviser.
Récupérez des ressources. Armez-vous. Recrutez si besoin.
Chaque détour est un risque. Chaque décision peut vous sauver ou vous condamner.
Si votre Vaisseau tombe, la mission est perdue. Si vous échouez, Etonak tombe à son tour.
Je ne vous promets ni renfort, ni extraction.
Mais si vous réussissez, vous serez des légendes.
Vous faites partie de l’Etonak Vanguard.
Vous êtes notre dernier espoir.
Général Xel’Talya — Fin de transmission >>

************************************************************************************************************
La mission
************************************************************************************************************
Le joueur et son vaisseau sont chargés d’une mission cruciale : retrouver et abattre un Vaisseau ennemi transportant un artefact d’une puissance inconnue.
Avant de l’affronter, le joueur doit traverser trois Secteurs hostiles, chacun plus dangereux que le précédent.
Chaque Secteur est jonché d’événements imprévus : Batailles, Expéditions risquées, Opportunités à saisir… ou situations désespérées.
Ces événements sont représentés par un paquet de cartes de 23 Explorations propres à chaque Secteur.
Avant de révéler une carte Exploration, le joueur peut toujours choisir de se replier et de rejoindre un Spatioport.
Réparer votre Vaisseau, récupérer des ressources, recruter des mercenaires ou améliorer l'arsenal du vaisseau : voilà ce que proposent les spatioports. Mais se replier et quitter un Secteur pour réparer son vaisseau signifie abandonner le secteur définitivement. Une fois sorti, le joeur ne peut plus revenir dans ce secteur.
Lorsque le joueur a traversé les trois Secteurs et visité trois spatioports, l’heure du combat final sonnera.
Le joueur doit se préparer au combat final contre le Boss : le Vaisseau ennemi ne se laissera pas abattre facilement. Seuls les joueurs ayant su optimiser leur équipements durant l'exploration des 3 secteurs auront une chance de le vaincre !
Attention : si à tout moment le Vaisseau allié est détruit… la mission est un échec.

Déploiement initial :
Avant de démarrer l’opération, procédez aux préparatifs suivants :
	- Sélection du Vaisseau : Choisir un Vaisseau parmi les 4 disponibles de l’Etonak Vanguard.
	- PrÉparation du Cockpit :

En fonction des caractéristiques de votre Vaisseau, placez les marqueurs sur les jauges suivantes :
	- points de structure
	- point de puissance d'ingénierie
	- Points de puissance d'assaut
	- Nombre de missiles
	- Points de chance

************************************************************************************************************
Le Vaisseau
************************************************************************************************************
Le Vaisseau est le seul véritable allié dans cette mission. Le joueur doit comprendre comment exploiter son plein potentiel.
Chaque Vaisseau de l’Etonak Vanguard possède ses spécificités. Ils se distinguent par leur compétence unique, leurs ressources initiales et leurs performances au combat.

Voici ce qui différencie les vaisseaux :

0 - Type :
	- allié ou ennemi

1 - Ressources de départ
	- Points de Puissance d'Ingénierie : déterminer par la configuration initiale propre à chaque vaisseau
	-¨Points de Puissannce d'Assaut : déterminer par la configuration initiale propre à chaque vaisseau
	- Nombre de Missiles : déterminer par la configuration initiale propre à chaque vaisseau
 Propriétés de départ :
	- Point de struture : déterminer par la configuration initiale propre à chaque vaisseau
	- Points d'initiative : déterminer par la configuration initiale propre à chaque vaisseau
	- Points de chance : déterminer par la configuration initiale propre à chaque vaisseau

Exmeple pour le vaisseau SUBSISTANCE
Ressources de départ
	- Points de Puissance d'Ingénierie : 3
	-¨Points de Puissannce d'Assaut : 2
	- Nombre de Missiles : 4
 Propriétés de départ :
	- Point de struture : 4 
	- Points d'initiative : 1 
	- Points de chance : 2


2 - Propriétés du vaisseau :
	- Points de structure : nombre de points de struture que peut encaisser le vasseau avant sa destruction. Représentant l'état global du vaisseau, si la structure tombe à zéro, le vaisseau est détruit (fin de mission).
	- Points de puisance d'ingénierie : uliser lors des expéditions. Plus vous en avez, plus vos chances de succès augmentent.
	- Points de puissance d'assaut : Utiliser lors des expéditions et indispensable lors des abordaes. Elle peut faire la différence entre la victoire et la perte du vaisseau. Veiller à en avoir en toute occasion !
	- Nombre de missiles : Ressource précieuse pour les batailles. Les missiles ignorent es boucliers adverses mais leur stock est limité. A gérer avec soin.
	- Piles à fusion : Utiliser comme monnaie d'échange pour améliorer le vaisseau et acheter l'équipement ou recurter des mrercenaires dans les spatioports.
	- Point d'Initiative : détermine qiu agit en premier lors des batailles
	- Points de chance : quantité de Chance que possède l'équipage. Permettent d'annuler un échec lors du tirage d'une tentative ou de réparer un compartiment endommagé pendant une bataille. Les points de chance permettent d'annuler un échec lors d'un tirage d'une tentative de tir énergétique ou de réparer un compartiment endommagé pendant une bataille.
	- Technologies : Jusqu'à 3 technologies peuvent être installées simultanément sur le vaisseau. Les emplacements coûtent 1 Pile à fusion supplémentaire au moment de l'achat (si obtenue par un achat). Une fois en place, elles ne peuvent plus être retirées.
	- Boucliers : nombre de bouclier actif protégeant le vaisseau des tirs énergétiques
	- Les compartiments (voir ci-après)
	- Actions de combats (voir ci-après)

3 - Actions de combart
	Chaque vaisseau (allié, ennemi ou Boss) possède sa propre panopile d'actions composée de :
	- Boucliers énergétiques
	- Tirs énergétiques
	- Tirs de missiles

Exmeple Actions de combat pour le vaisseau SUBSISTANCE
	- phase 1 : missile
	- phase 2 : bouclier / bouclier
	- phase 3 : energie / energie
	- phase 4 : missile
	- phase 5 : boulcier
	- phase 6 : energie / energie

4 - Compartiments :
	Chaque compartiment assure une fonction précise. Lorsqu'un compartimnt est détruit par les tirs ennemis, il devient inutilisable jusqu'à la fin de la batalle.
Chaque Vaisseau possède des compartiments ayant des fonctions différentes. S'ils sont détruits, le joeur perd leur utilité ou pire.
	- le générateur de bouclier : Permet de générer des boucliers qui arrêtent les tirs énergétiques. Si le générateur de bouclier est détruit, plus de nouveaux boucliers possibles et les boucliers déjà générés disparaissent.
	- la batterie d'assaut énergétique : Permet d'effecteur des tirs énergétiques. Si elle est détruite, plus de tirs énergétiqes !
	- la batterie de missiles : Permet de titer des Missiles. Si elle est détruite, plus de missiles !
	- La garnison : Permet les abordages en fin de bataille. Si elle est détruite, le vaisseau est considérée comme ayant une puissance d'assaut de 0 lors de l'abordage.
	- Le moteur : Le coeur du vaisseau. Si le compartiment moteur est détruit, le vaissau est également détruit (fin de mission)

5 - Compétence spéciale	:
	Unique à chaque vaisseau. Utiliser la compétence dès que nécessaire, en respectant les règles.

6 - Améliorations
	Tous les vaisseaux peuvent être améliorés dans un Spatioport, en échange de "Piles à fusion". Une fois le vaisseau amélioré, les améliorations offrent de meilleurs statistiques, actions et résistances, ainsi qu'un bonus à appliquer immédiatement.

************************************************************************************************************
Comment jouer
************************************************************************************************************

------------------------------------------------------------------------------------------------------------
Les tentatives

Tout au long du périple, nous devons tester l'action du joueur en piochant dans le paquet de cartes tentatives. Ces cartes déterminent si le choix du joueur est correct ou si le joueur doit en subir les conséquences.
Le paquet de carte tentatives contient 12 cartes :
	- 6 cartes réussites simples
	- 2 cartes réussites critiques
	- 4 cartes échecs
Lorsque le paquet est épuisé, mélanger le et replacer le face cachées.
Connaître combien il reste de Réussite ou d'échecs dans le paquet des cartes tentatives est une compétence utile !

------------------------------------------------------------------------------------------------------------
L'exploration des secteurs :

Traverser un Secteur consiste à piocher une série de carte d'Explorations dans le secteur en cours, et les résoudre à chaque fois. La mission commence toujours par l'exploration du secteur 16, puis le sectuer 17 et enfin le secteur 19.
Lorsque le joueur dévoile une carte Exploration, il peut faire face à 5 types de situations :
	- Les expéditions
	- Les batailles
	- Les opportunités
	- Les collisions
	- Les évèvements de boss
Une fos la carte exploration révélée, le joeur doit la résoudre, sauf si une capacité spéciale lui permet de l'éviter.
Voici après les détails de chaque carte exploration possible.

------------------------------------------------------------------------------------------------------------
	1 - Les cartes expéditions :

Survivre aux combats et piller vos adversaires ne suffira pas au joueur à le préparer pour l'affrontement final. Le joueur doit prendre toujrous plus de risques et mener des expéditions... en sacrifiant des ressources pour les réussir.
Lorsqu'une carte expédition est révélée, elle vous indique les ressources qu'il est possible de sacrifier pour tenter votre chance, les conséquences d'un échec et surtout les récompenses possibles.
	1a - Les sacrifiables
En haut des cartes expédition, une succession d'icônes indique au joueur qu'elles resssouces peuvent être sacrifiées, et dans quel ordre ! 
Pour chaque ressource sacrifiée, le joueur peut piocher 1 carte tentavice de réussite. Mais attention, vous devez respecter l'ordre des sacrifices indiqué, et décider en ene seule fois combien de sacrifices vous vouler faire. Une fois cela décidé, le joueur se sépare des ressources nécessaires et tire autant de cartes tentatives.
Le joueur peut aussi ne rien sacrifier lors d'une expédition, elle sera alors considérée comme un échec.

	1b - Les résultats :
Selon les tentatives :
	- si le joueur a au moins une réussite critique, il obtient la récompense correspondant à la réussite critique
	- si le joueur a au moins une réussite simple, et aucune réussite critique, le joueur obtient la récompense correspondant au nombre de réussites simples obtenues.
	- si le joueur n'a aucune réussite, ou qu'il a choisit de ne sacrifier aucune ressource, il subit les conséquences d'un échec.
Le joueur applique toujours le meilleur résultat possible, et ne peut pas cumuler plusieurs récompenses.
En cas d'échec, si le joueur n'a pas de quoi perdre les ressources indiques à la ligne de l'échec, il perd 1 point de struture pour chaque ressource indisponible.
Le joueur peut dépenser 1 point de chance pour transformer un échec en réussite simple.

Exemple de carte :
 - sacrifiables : 1 Puissance d'ingénierie, 1 Puissance d'assaut, 1 Missile, 1 Puissance d'ingiénierie, 1 Missible
(par expemple ici, la Puissance d'ingénierie doit être sacrifiée en premier, puis la puissance d'assaut, puis un Missilet et ainsi de suite)


------------------------------------------------------------------------------------------------------------
	2 - Les batailles

Lorsqu'une carte exploration inidque une bataille, le joueur pioche un vaisseau ennemi correspondant au secteur en cours.
Objectif : détruire le vaisseau de l'adversaire
Toirs façons de faire opur détruire le vaisseau adverse :
	- Tirer sur les compartiments du vaissau jusquà faire tomber ses points de structures à 0
	- détruire un compartiement clé : le compartiment des moteurs
	- passer à l'abordage

	Déroulement d'une bataille :
	
	2a - L'initiative

Avant tout, vérifier l'initiative présente sur tous les vaisseaux.
C'est l'initiative qui détermine l'ordre d'action lors des phases de Bataille. Le vaisseau avec la meilleure initiative agit toujours en premeir, à chaque phase de la bataille. Il n'est jamais possible d'être à égalité avec un adversaire.

	2b - Les phases de bataille

Les phases de bataille se résolvent l'une après l'autre de 1 à 6.
A chaque phase :
Les deux vaisseaux agissement dans l'ordre d'initiative
Leurs actions de combat dépendent des icônes affichées sur la phase en cours.

	2c - Les actions de combat

Lorsqu'un vaissau joue une phase contenant au moins une action, trois types d'actions sont possibles :
	- Boucliers : Prendre un jeton bouclier et le placer près du vaissau concerné. Un bouclier peut bloquer un tir énergétique (et un seul !) avant d'être détruit. Il est possible de cumuler les boucliers au cours d'une même bataille, mais ils sont perdus en fin de bataille.
	- Tirs énergétiques : Le joeur peut choisir de réaliser un tir énergétique ou non. Ils ne coûtent aucune munitions, mais peuvent être bloqués par les boucliers. Si le joeur décide d'effecteur un tir énergiétique, il pioce une carte tentative pour découvrir le résultat du tir : une réussite simple ou une réussite critique a le même résultat, le compartiment visé est touché et prend 1 dégât.
	- Tirs de Missiles : le joueur peut choisir de réaliser un tir de missile ou non. Tirer un missile demande de dépenser une de vous ressources "missile", peu importe le résultat du tir. Ce type de tir ne peut pas être bloqué par les boucliers. Si le joeur décide d'effectuer un tir de missile, piochez une carte tentative pour découvrir le résultat du tir : une réussite simple ou une réussite critique a le même résultat, le compartiment visé est touché et prend 1 dégât.
De base, une résussite critique n'a pas plus d'effets qu'une réussite simple en bataille, mais les mercenaires ou des technologies peuvent changer la donne !

Attention, lorsque le joueur tire sur son adversaire, le joueur doit toujours choisir un compartiment à attaquer avant de tirer une carte tentative pour vérifier si le tir touche ou non. Si il y a plusieurs actions au cours de la même pahes, résoudre chaque action une par une.
Un vaisseau ennemi réussit toujours ses tentatives de tir. Il vise le compartiment inidqué au bas de sa phase. Les seules moyens de ne pas subir de dégât sont de détruire en amont la capacité à tirer de l'adversaire ou de posséder un bouclier si le joueur est la cible d'un tir énéergétique.

Suite à un tir réussi, quel que soit le compartiment touché, retirer 1 Point de structure du vaisseau atteint et placer le point de dégât sur le compartiment touché.
Un compartiment est détruit dès qu'il reçoit un nombre de dégâts équivalent au chiffre sous son icône.

Les points de struture permettent donc de suivre l'état global des vaisseaux (sur la carte vaisseau pour les ennemis, sur le coclpit pour le joueur) et d'indiquer les compartiments touchés et détruits.

	2d - L'abordage

Si aucun vaisseau n'est détruit après la résolution des 6 phases d'actions, la bataille se résout lors d'un abordage.
Comparer alors les puissances d'assaut des vaisseaux qui s'affrontent :
	- Le vaisseau avec la valeur la plus élevée remporte la bataille
	- En cas de victoire, vous perdez atant de puissance d'assaut que l'adversaire en avait.
	- En cas d'égalité, le joeur l'emporte toujours, même si les deux puissance d'assaut sont de 0 contre 0.
	- Si la garnison d'un vaisseau est détruite au moment de l'abordage, sa puissance d'assaut est considérée comme étant de 0.

	2e - Victoire ou défaire

En cas de victoire, le joueur obtient des récompenses et le vaisseau du joueur récupère l'usage de ses compartiments. Maia en cas de défaire, l'aventure s'arrête ici. Le joueur échoue, Etonak, et même la Chaosphere, vivent désormais sous la menace absolu de l'entreprise Inferno et son artefact capable de créer des trous noirs...

Récompenses : Le joueur fait un pas de plus vers la victoire, ou sa mort... Si le joueur survit à une bataille, il récupére immédiatement les récompenses indiquées sur la cate du vaisseau ennemi.
Les récompenses possibles sont :
	- Piles à fusion : Prendre le nombre indiqué.
	- Butins : Piochez une carte butin et récupérer les ressources indiquées.
	- Mercenaires : Piocher un mercenaire. Il rejoint gratuitement l'équipage du vaisseau.
	- Chance : Prendre le nombre inidqué.
Réparations automatiques  : Lorsque le joueur remporte une bataille :
	- tous les compartiments touchés ou détruits de votre vaisseau sont automatiquement réparés.
	- Les points de structure perdus par contre ne sont pas récupérés. Pour les regagner, le joueur doit atteindre un Spatioport ou bénéficier de situaions spéciales.
Les règles de victoire sont différentes quand le joeur affronte un Boss.


------------------------------------------------------------------------------------------------------------
	3 - Les opportunités

La Chaospère ne faits pas de cadeaux... mais parfois, on peut s'aranger ! Lorsque vous tombez sur une carte Opportunité, le joeur peut :
- En profiter immédiatement, en payant les ressources demandées.
- L'ignorer et passeer à la prochaine carte exploration.

Les cartes opportunités :
	- Le ship shop
Le vaisseau ambulant du marchand Cosco, un trafiquant bien connu de cette zone de la Chaospère. Rescapé de justesse du Secteur 15 avant son effondrement, il cherche à reconstituer ses stocks perdus...
Le joueur peut vendre une fois un de vos missiles pour obtenir 1 Pile à fusin
	- Le garage clandestin
Ici les réparatios ne sont pas de première qualité, mais elles tiendront le temps d'atteindre un spatioport !
Le joeur peut payer une fois 1 Pile à fusion pour que son vaisseau récupère 2 points de strutre perdus.
	- Recrutement discret
Grâce à ces bornes bien cachées dans la Chaosphère, il est possible d'avoir accès aux mercenaires de la zone sans avoir à payer les taxes des spatioports !
Le joueur pioche et révèle une carte Mercenaire, il peut recruter pour 1 Pile à fusion de moins que son coût normal. 


------------------------------------------------------------------------------------------------------------
	4 - Les collisions

Dans la Chaosphère, même les débris ont un plan pour tuer le joueur. A lui de réagir ou d'encaisser !
Le vaisseau pert 1 point de struture, à moins de sacrifier 1 missile pour détruire le danger.

------------------------------------------------------------------------------------------------------------
	5 - Les événements de boss

Les Boss que le joueur traque dans la Chaosphère laissent leur marque bien avant l’affrontement final.
Chacun est accompagné d’un Scénario, qui définit son identité et les événements spéciaux qui jalonneront la mission du joueur.

Lors de la traversée des Secteurs, le joueur peut révéler une carte Événement de Boss A, B ou C. À chaque fois, se référer au Scénario du Boss et appliquer l’effet indiqué.
Ces effets peuvent prendre toutes les formes : un avantage temporaire, un renfort ennemi, ou une condition particulière indispensable à votre réussite.


************************************************************************************************************
Stop ou encore
************************************************************************************************************

Après avoir résolu une Exploration de Secteur, il est possible que le vaisseau allié soit en mauvais état ou que les ressources soient dangereusement diminuées.

AVANT de dévoiler une nouvelle Exploration de Secteur, le joueur doit prendre la décision critique de quitter le Secteur en cours, et de rejoindre un Spatioport.

Un Spatioport permet de :
	• Réparer le Vaisseau (sans coût)
	• Récupérer des ressources (missiles etc...)
	• Améliorer votre équipement

Voir les Spatioports.

C’est au seul joueur de juger si il pense pouvoir poursuivre votre Exploration, ou s’il est plus sage d’en rester là et de vous mettre à l’abri.
Mais quitter un Secteur signifie l’abandonner définitivement… et renoncer à ses richesses potentielles.

- LA CHANCE
Aucune victoire ne s’arrache sans une part de Chance ! Chaque équipage en possède un peu… et parfois, c’est tout ce qui fait la différence face au pire.
Vous pouvez dépenser des Points de Chance de deux façons :
	- En bataille : lorsqu’un compartiment de votre Vaisseau est détruit, dépensez 1 Point de Chance pour retirer 1 dégât du compartiment et ainsi en retrouver l’usage. Attention : cela ne restaure pas les Points de Structure du Vaisseau !
	- Lors d’une Tentative : en Bataille ou en Expédition, dépenser 1 Point de Chance pour transformer un Échec en Réussite simple

La Chance est puissante… mais rare. 


************************************************************************************************************
Les spatioports
************************************************************************************************************
TODO

************************************************************************************************************
Les batailles ocntre un boss
************************************************************************************************************
Les Boss de la compagnie Inferno sont les ennemis ultimes. Leur puissance est dévastatrice et le joueur n'a aucune chance de les vaincre, à moins d’avoir pris assez de risques en explorant les Secteurs sur le chemin.
De base, il en existe 4 différents Boss, chacun ayant une version Normale et une version Hardcore, pour un total de 8 affrontements finaux possibles.
Plus la valeur de Challenge au dos d’un Scénario de Boss est élevée, plus l'aventure et l’affrontement final seront difficiles.

TODO :

- quand affronter le boss ?
Lorsque le joueur a traversé 3 Secteurs et visité 3 Spatioports, le joueur a enfin rattrapé le Boss poursuivi et peut l’affronter !
Certains Scénarios spéciaux peuvent modifier ces conditions.

- Préparer la bataille
Les combats de Boss suivent presque les mêmes règles que les batailles classiques, avec quelques différences :
	- Avant de débuter une bataille contre un Boss, commencez par lire la capacité du Boss (si existante), qui se trouve sur son Scénario, sous les évènements A, B et C, et appliquez ses effets si possible.
	- Un Boss est toujours constitué d’au moins 2 parties. Chaque partie est une bataille à mener, et à moins qu’une carte Scénario ne l’impose, le joueur peut choisir quelle partie affronter en premier tant qu’elle est sur la rangée la plus proche de vous.

Puisqu’un Boss est une succession de plusieurs Batailles, on peut donc utiliser à chaque Bataille les capacités du Vaisseau, des Mercenaires et des Technologies qui ne s’utilisent qu’une fois par Bataille. En revanche, les réparations automatiques des compartiments après une Bataille ne sont ici pas appliquées !

- Victoire
Si le joueur parvient à vaincre toutes les parties du Boss, bravo ! Le joueur a permis d'empêcher la compagnie Inferno de mettre la main sur l’Artefact mystérieux… Sa vengeance sera sans doute terrible, mais ce sera le combat d’une autre fois.

************************************************************************************************************
New Game Plus
************************************************************************************************************
TODO :
- Le mode hardcore
- les handicaps

************************************************************************************************************
mode CO-OP
************************************************************************************************************
TODO :
- mise en place
- résolutions des explorations
- les batailles
- les échanges entre les deux joueurs


************************************************************************************************************
Phase de développement 1 - Proposition de départ - version 0.0.0
************************************************************************************************************
But de cette phase :
- Créer les objets du jeu en javascript avec les propriétés et les méthodes.
- Créer le moteur du jeu pour pouvoir jouer en ligne de commande (pour permettre de vérifier le développement correct des objets)




Class Vaisseau

Propriétés :

spaceshipType : undefined // string "allied"|"enemy" - Type de vaisseau spatial allié ou ennemi
structureHealth : undefined // integer	- Points de vie de la structure du vaisseau spatial
engineeringPower : undefined // integer - Points de puisance d'ingénierie
assaultPower : undefined  // integer - Points de puissance d'assaut
missile : undefined // integer - Nombre de missiles 
fusionCell : undefined // integer - Piles à fusion (monnaie du jeu)
initiative : undefined // integer - Point d'Initiative
Luck : undefined // integer - Points de chance
tech : [{},{}, {}] // array of {} - Technologies 
shield : undefined // integer - nombre de Boucliers actifs

compartmentsList : ["shieldGenerator", "energyBattery", "energyBattery", "missileBattery", "engine"] 

compartments : {
shieldGenerator : 1 	// integer - le générateur de bouclier
energyBattery : 1 	// integer - la batterie d'assaut énergétique
missileBattery : 1 	// integer - la batterie de missiles
soldierGarnison : 1 	// integer - La garnison 
engine : 2 		// integer - Le moteur
} // object - Les compartiments 

combatActions : {
phase1 : [], // exemple vaisseau allié ASCENSION phase 1 : ["shield","shield"]
phase2 : [], // exemple vaisseau allié ASCENSION phase 2 : ["fire"]
phase3 : [], // exemple vaisseau allié ASCENSION phase 3 : ["missile"]
phase4 : [], // exemple vaisseau allié ASCENSION phase 4 : ["fire","fire"]
phase5 : [], // exemple vaisseau allié ASCENSION phase 5 : ["missile"]
phase6 : []  // exemple vaisseau allié ASCENSION phase 6 : ["fire"]
compartementObjectif : [] // type compartments - compartiment qui est l'objectif du tir exemple allié ["engine"] ennemi ["", "engine", "missileBattery", "shieldGenerator", "", ""]
} // object - Actions de combats 

attemptCardsList = {
	failure = 4;
	success = 6;
	criticalSucces = 2;
	};
attemptCards = [];

Méthodes :

construtor ( spaceshipType, {config} ) {
// todo
}

isAlive() {
	if (this.structureHealth) <= 0 return false;
	if (this.compartements.engine) <= 0 return false;
	return true;
}

SetTakeDamage(compartment) {
	if (compartment && this.compartments.includes(compartment) {
		this.compartments[compartment] -= 1
		if (this.compartments[compartment] < 0) this.compartments[compartment] = 0
	}
}
createShield() {
	if (this.compartments.shieldGenerator > 0) {
		this.shield += 1;
	}
}

destroyShield (amount = 1){
	this.shield -= amount;
	if (this.shield < 0) this.shield = 0;
}

fireMissile(amount = 1) {
	this.missile -= 1;
	if (this.missile < 0) this.missile = 0;
}

initAttemptCards() {
	this.attemptCards = [];
	for (let card in this.attempCardsList) {
		const amountCard = this.attempsCards[card];
		for (let i = 0; i < amountCard; i++) {
			this.attemptCards.push(card);
		}
	}
}
drawAttemptCard() {
  if (this attemptCards.length === 0) {
    console.log("Le deck est vide !");
    return null; 
  }
  const randomIndex = Math.floor(Math.random() * attemptCards.length);
  const drawnCard = attemptCards[randomIndex];
  attemptCards.splice(randomIndex, 1); // Remove the drawn card from the array
  return drawnCard;
}


---
layout: layouts/post.njk
title: Une bibliothèque de jeux vidéos dans Notion
socialImage: /images/notion-personal-games-library.png
date: 2023-06-19T10:13:07.229Z
tags:
  - blog
  - notion
---
Dernièrement, j'ai voulu me créer un système pour tenir à jour ma bibliothèque de jeux vidéos, comme je le faisais il y a quelques années sous Trello. J'ai décidé de faire ça dans Notion que j'utilise de plus en plus.

## Ce que je voulais pour ma bibliothèque de jeux

* pouvoir afficher les jeux en cours,
* avoir une liste complète de mes jeux, avec quelques infos d'affichées : plateforme, l'état (fini, en stock, en cours, etc), un rating, etc.
* filtrer cette liste par console, par état, etc. 
* ajouter facilement un jeu ou une console,
* avoir des statistiques par console.

Une fois tout cela en tête, j'ai pu chercher comment réaliser cela dans Notion.

## Deux bases de données pour tous les gouverner

J'ai créer deux bases de données dans Notion : Une pour les consoles, l'autre pour les jeux avec l'idée de pouvoir utiliser les propriétés de liens entre base de données de Notion.

La structure de la base console :

| name | Games list                                 | nombre de jeux | pourcentage de jeux finis | pourcentage de jeux platinés |
| ---- | ------------------------------------------ | -------------- | ------------------------- | ---------------------------- |
|      | rempli automatiquement depuis la base jeux | calculé        | calculé                   | calculé                      |

Et celle de la base jeux :

| name | status                | platiné  | rating                | Avis | Plateforme                        |
| ---- | --------------------- | -------- | --------------------- | ---- | --------------------------------- |
|      | select dans une liste | checkbox | select dans une liste |      | selectionné  dans la base console |

## Un même jeu de données, tant d'affichages possibles

Un des gros avantages de Notion est le nombre de vues possibles pour l'affichage des données : 

![](/images/notion-data-views.png)

J'ai choisi d'utiliser la "Gallery view" dans ce projet car c'est celle qui me semble la plus adaptée visuellement pour une bibliothèque. 

Cette vue est dupliquée plusieurs fois et les nouvelles vues sont filtrées pour pouvoir afficher les jeux par plateforme, ceux terminés, etc.

## Un bouton magique pour ajouter un jeu ou une console

Une des dernières mises à jour de Notion a introduit les boutons.
Ce nouveau bloc avancé permet d'exécuter une automatisation d'actions dans Notion. 

J'ai créé deux boutons dans la page principale : un pour ajouter un jeu, l'autre pour ajouter une console. 

![](/images/notion-add-a-game.png)

Les deux fonctionnent de la même manière : au clic, il ajoute une entrée dans la base de données concernée en s'appuyant sur le modèle de page par défaut de celle-ci, puis ouvre la page créée pour remplir les informations du jeu ou de la console. 

Cela permet d'ajouter des données directement depuis la page principale sans avoir à aller dans la table de données. 

## Envie de l'essayer ?

Si vous souhaiter l'essayer, le template est disponible gratuitement sur Gumroad : [\[Notion] Personal Games Library](https://nbirckel.gumroad.com/l/kowtl)
Je suis preneur de vos retours et idées d'amélioration sur Mastodon : <https://mastodon.social/@nbirckel>
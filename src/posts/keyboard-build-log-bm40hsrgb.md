---
layout: layouts/post.njk
title: "Keyboard build log : BM40hsrgb"
date: 2022-05-17T12:05:04.191Z
---
## Specs :

**PCB :** BM40hsrgb de KP Republic, Usb C, compatible QMK : <https://fr.aliexpress.com/item/4001147779116.html?spm=a2g0s.9042311.0.0.3da26c37IW0Aev>**Plate** : Plaque en fibre de carbone pour JJ40 BM40 <https://fr.aliexpress.com/item/1005001627320105.html?spm=a2g0s.9042311.0.0.3da26c37IW0Aev>**Switches :** Gateron red 5pin (inclus dans le kit PCB)
**Stabilisateurs :**  (inclus dans le kit PCB)
**Case :** Boîtier plat en Aluminium anodisé, 40% mini, noir <https://fr.aliexpress.com/item/1005001390320865.html?spm=a2g0s.9042311.0.0.3da26c37IW0Aev>
**Keycaps :** YMDK – capuchons de touches de clavier, 1.4mm, PBT DSA <https://fr.aliexpress.com/item/33045676174.html?spm=a2g0s.9042311.0.0.3da26c37IW0Aev>

**Prix total : 107,14 euros**

## Build Log

Un peu moins de 3 semaines après la commande, réception du colis Ali Express contenant le PCB, les switches, la plate et le boitier.

J'avais reçu les keycaps une semaine avant, en provenance d'une autre boutique Ali Express.

![Le colis d'anniversaire tant attendu !](/images/310b3642-b87e-4c7d-adec-525ad2158254.jpeg)

Le colis d'anniversaire tant attendu !

Quelques Switches sont arrivés avec des pattes tordues, mais un petit coup de pince les a vite redressées.

![Des switches Gateron Red en vrac](/images/8bb3a2b4-efca-4324-903d-216d733c9da4.jpeg)

Des switches Gateron Red en vrac

Bien que le PCB soit hotswappable et que j'ai bien eu des switches 5 pin dans ma commande, j'avais commandé une plate pour ce premier build.

Elle offre un effet plus ''fini'' au clavier et protège un peu mieux le PCB de la poussière et autre, ce clavier se promenant tout les jours dans mon sac, entre chez moi et le bureau.

La plate est de bonne facture et plutôt jolie, mais l'installation des switches dessus fut fastidieuse : il a fallut forcer à certains moments, au risque de plier voir casser la plate.

![Commencer par l'extérieur fut une bonne idée](/images/e20249a3-ae59-4f8a-a7c0-1019289d2057.jpeg)

Commencer par l'extérieur fut une bonne idée

Une fois tout les switches en place, il n'y a plus qu'à enficher le tout sur le PCB et d'installer l'ensemble dans le boitier :

![Avant l'installation des keycaps](/images/b5c8af77-3cdd-4ee3-b754-cc95a0838ea8.jpeg)

Avant l'installation des keycaps

Un test rapide de chaque switches sur le testeur de clavier de QMK (<https://config.qmk.fm/#/test>) pour vérifier que tout marche avant de visser l'ensemble plate+PCB au boitier et il ne reste plus qu'à installer les keycaps.

Ne travaillant pas avec VIM, j'ai choisi d'inverser les touches Esc et Tab. La configuration des layouts est aisée sur QMK, le PCB étant reconnu, et les instructions claires pour flasher le clavier. Ça prend littéralement 5 minutes à faire.

![Up and running](Planck-like%20BM40hsrgb%207f1438e0cdbc4db1a74e74d184253a98/F1B9A1FE-3BBB-4C44-988A-04908F1C7E58.jpeg)

Up and running

Cela va faire un mois que je suis passé sur ce clavier 40%, qui semble tellement minuscule par rapport à mon ancien clavier Razer !

![Une différence de taille flagrante](Planck-like%20BM40hsrgb%207f1438e0cdbc4db1a74e74d184253a98/56FD7171-BF45-433B-B74F-64F5AA2EF1C7.jpeg)

Une différence de taille flagrante

La transition d'un full en Azerty vers un 40% en qwerty est relativement facile. Je me suis imprimé lors de la configuration sur QMK les fiches des 3 layouts de mon clavier, mais une semaine après je ne les utilisais déjà plus. Et un mois après je suis revenu à une vitesse de frappe quasi similaire à celle que j'avais en Azerty.

Le plus compliqué a été de trouver comment faire en sorte que les accents fonctionnent : c'est le clavier *'' ENG États-Unis International ''* qui a réglé ce soucis, tant sur Mac que sur Windows.

## Modding Log

Ou comment améliorer le bruit de la frappe du clavier.

### Ajout de mousse dans le boitier

L'espace entre le PCB et le boitier peut faire ''résonance'' lors de la frappe et produire un bruit un peu trop métallique.

Pour atténuer celui-ci il est possible de mettre une couche de mousse entre le PCB et le boitier, pour assourdir le son.

![démontage des keycaps pour accéder aux pas de vis](Planck-like%20BM40hsrgb%207f1438e0cdbc4db1a74e74d184253a98/5854F8BE-4920-4AFA-9994-90141E45C714.jpeg)

démontage des keycaps pour accéder aux pas de vis

Une fois le fond du boitier accessible, il suffit de découper la mousse à la forme du boitier, en prévoyant les trous pour les vis et pour le port USB.

N'ayant pas acheté de mousse exprès pour, j'ai fait avec des chutes de mousse d'emballage que j'avais à disposition.

![le clavier sorti du boitier](Planck-like%20BM40hsrgb%207f1438e0cdbc4db1a74e74d184253a98/B5B6FB82-B174-4854-BC26-7A1F469EA2F1.jpeg)

le clavier sorti du boitier

La mousse noir visible sur les précédentes photos étant trop épaisse et m'empêchant de refermer le clavier, Je me suis rabattu sur une mousse plus fine et moins dense que j'ai trouvé dans mon matériel d'arts plastiques.

![La mousse mise en place au fond du boitier](Planck-like%20BM40hsrgb%207f1438e0cdbc4db1a74e74d184253a98/719DA5EC-7135-490A-915F-C6444F74E17D.jpeg)

La mousse mise en place au fond du boitier

Une fois la mousse en place, il ne reste plus qu'à remettre en place le clavier, le revisser et réinstaller les keycaps.

En utilisant cette mousse de récupération, je n'ai pas constaté d'amélioration flagrante. Je retesterai avec une mousse faite pour lorsque j'aurais une commande à passer sur un site spécialisé.

### Ajout de O-Rings

Des petits anneaux en silicium qui amortissent le bruit des touches à la frappe, j'ai acheté les miens sur Amazon pour moins de 8 centimes l'unité  : <https://amzn.to/3gHsHz7>.

![Installation des O- rings](Planck-like%20BM40hsrgb%207f1438e0cdbc4db1a74e74d184253a98/15338224-517F-42E2-B54E-8B2620E183D9.jpeg)

Installation des O- rings

La mise en place est extrêmement facile, il suffit de retirer la keycap avec l'outil fait pour, de mettre le O-Ring sur le tube de la fiche MX et de remettre la keycap en place sur le switch.

On peut bien sur en mettre plus d'un pour un atténuement plus important. C'est à tester pour voir si cela ne modifie pas trop la sensation à la frappe.

L'opération prend à peine 10 minutes, pour une vrai amélioration du son produit lors de la frappe sur le clavier.

Contrairement à la mousse, j'ai vraiment une différence flagrante sur le son de mon clavier.

### Sparadrap et stabilisateurs

*à venir*

### Lubrification des switches

*En cours de rédaction et de 'realisation*

**Le matos :**

Krytox Lubrifiant pour interrupteur GPL 205 grade 0, commandé sur Amazon : <https://amzn.to/35vEmfc>

un kit composé d'un switch opener, des pinceaux et un outil à pinces pour manipuler les stem, toujours chez Amazon : <https://amzn.to/3q6Oep5>

Le lubrifiant est un peu plus cher chez Amazon, mais en stock et livré tout aussi rapidement que si je l'avais commandé sur un site spécialisé.

**Démontage des switches**

*à venir*

**Lubrification**

*à venir*

**Remontage**

*à venir*

### Qui suis-je ?

**Nicolas Birckel**

Parfois photographe, souvent designer.

### Me suivre

twitter : <https://twitter.com/nbirckel>

instagram : <https://www.instagram.com/birckeln/>

### Ailleurs sur le web

<https://www.nicolas-birckel.fr/>

<https://nbirckel.fr/>
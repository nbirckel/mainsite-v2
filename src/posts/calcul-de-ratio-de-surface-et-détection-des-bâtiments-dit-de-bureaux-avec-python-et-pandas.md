---
layout: layouts/post.njk
title: Calcul de ratio de surface et détection des bâtiments dit de bureaux avec
  Python et Pandas
socialImage: /images/capture_ecran-code-python-pandas.png
date: 2023-04-04T09:29:59.027Z
tags:
  - Python
  - Pandas
  - Data
---
À l'université , je gère le jeu de données alphanumériques de 258 bâtiments de l'Enseignement Supérieur et de la Recherche dans un outil de Gestion Technique Patrimonial (GTP) qui permet de gérer les plans de nos bâtiments et d'y liés les données relatives. 

C﻿ette GTP permet d'interroger via un requêteur les attributs liés à des composants (bâtiments, local, équipements,...) et des tables métiers (Surfaces légales ou Affectataires par exemple) mais ne me permet pas actuellement de faire de l'analytique ou de calculer des ratios pour ensuite mettre à jour des attributs.

D﻿ans le cadre de l'amélioration continue de mon jeu de données, j'ai voulu calculer certains ratios dont mes collègues ont besoins pour leurs opérations :

* u﻿n ratio Surface Utile Brut (SUB)/ Surface Utile Nette (SUN) qui nous sert à identifier les bâtiments à dominante "bureau" au sein de notre patrimoine universitaire,
* u﻿n ratio SUN/ poste de travail qui permet d'apprécier la rationalisation des surfaces de bureaux (avec un objectif de 12m2 par poste de travail.)

et  les ajouter dans des attributs de mes bâtiments afin que tout le monde puisse y avoir accès depuis la GTP.

### L﻿e jeu de données de base

J﻿'ai créé une requête dans la GTP pour extraire les données de l'attribut 'nombre de poste de travail'  de chaque bâtiment ainsi que les codes surface et surface calculée depuis la table métier correspondante.

C﻿ela ressort un fichier Excel structuré comme cela :

| ﻿Bâtiment    | Nombre de poste de travail | Code surface | Surface calculée |
| ------------ | -------------------------- | ------------ | ---------------- |
| ﻿ Bâtiment A | 78                         | SDP          | 2 890,57         |
| ﻿ Bâtiment A | 78                         | SHOB         | 3917,27          |
| ﻿ Bâtiment A | 78                         | SHON         | 3272,12          |
| ﻿ Bâtiment A | 78                         | SUB          | 2713,04          |
| ﻿ Bâtiment A | 78                         | SUN          | 696,41           |
| ﻿ Bâtiment B | 60                         | SDP          | 1344,85          |

1﻿291 lignes, avec pas mal d'informations en doublon et une structure qui ne permet pas de faire facilement mes calculs de ratio.

### l﻿e script python, décortiqué

```
import pandas as pd
```

O﻿n importe la lib Pandas, qui va nous permettre de manipuler, nettoyer et structurer nos données.

```
df= pd.read_excel('export_GTP.xls')
```

O﻿n crée un dataFrame avec les données lu depuis le fichier Excel exporté depuis la GTP.

```
df2= df.pivot(index='Bâtiment', columns='Code surface', values='Surface calculée')
df2= df2.reset_index()
```

O﻿n pivote le dataFrame pour avoir les bâtiments en index et les valeurs de Code surface en colonnes et on le duplique dans un second dataFrame.

```
df.drop(['Code surface', 'Surface calculée'], axis=1, inplace=True)
df.drop_duplicates(inplace=True)
```

O﻿n supprime les données de Code surface et Surface calculée dans le premier dataFrame puis en élimine tout les doublons de Bâtiment et de Nombre de poste de travail.

```
df2= df2.set_index('Bâtiment').join(df.set_index('Bâtiment'))
df2.rename(columns={"Nombre de postes de travail":'pdt'}, inplace=True)
df2.drop(['SHOB', 'SHON'], axis=1, inplace=True)
```

O﻿n joint les deux dataFrames en utilisant la colonne Bâtiment comme index de jointure, on renomme Nombre de poste de travail pour se simplifier la vie et on retire deux colonnes de surfaces qui ne sont pas utiles.

```
df2= df2.assign(sun_sub= lambda x: x.SUN / x.SUB)
df2= df2.assign(sun_pdt= lambda x: x.SUN / x.pdt )
df2.rename(columns={"sun_pdt":'SUN/pdt', "sun_sub":'SUN/SUB'}, inplace=True)
```

O﻿n crée deux nouvelles colonnes dans notre dataFrame que l'on peuple avec les ratios calculés d'après les valeurs des colonnes SUN, SUB et pdt, suivi d'un renommage des libellés de colonnes.  

```
df2= df2.reset_index()
df2= df2.assign(bat_de_bureau='')
for i in range(len(df2)):
    if df2.loc[i,'SUN/SUB'] >= .5:
        df2.loc[i,'bat_de_bureau'] = 'oui'
```

O﻿n crée une nouvelle colonne bat_de_bureau peuplé de vide dans le dataFrame, puis on parcourt celui-ci avec une boucle en testant si le ratio SUN/SUB est supérieur ou égal à 0.5. Lorsque c'est le cas, on inscrit oui dans la colonne bat_de_bureau. 

```python
df2.to_excel('ratio_par_bat.xlsx', index = None, header=True)
```

P﻿our finir, on exporte au format Excel le dataFrame, pour import dans la GTP.

### L﻿e tableau en sortie

L﻿e fichier de sortie est structuré sans doublon, avec une donnée par colonne sur les 259 lignes et peut-être importer en l'état dans la GTP !

| Bâtiment   | SDP     | SUB     | SUN     | pdt | SUN/SUB     | SUN/pdt     | bat_de_bureau |
| ---------- | ------- | ------- | ------- | --- | ----------- | ----------- | ------------- |
| Bâtiment A | 8725,78 | 8229,78 | 1731,87 | 74  | 0,210439404 | 23,40364865 |               |
| Bâtiment B | 5794,95 | 5373,75 | 690,71  | 47  | 0,128534078 | 14,69595745 |               |
| Bâtiment C | 2055,09 | 1881,79 | 1365,47 | 71  | 0,725622944 | 19,23197183 | oui           |
| Bâtiment D | 5170,24 | 4661,86 | 930,09  | 169 | 0,199510496 | 5,503491124 |               |
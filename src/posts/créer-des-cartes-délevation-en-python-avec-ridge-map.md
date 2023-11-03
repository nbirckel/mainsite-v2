---
layout: layouts/post.njk
title: Créer des cartes d'élevation en python avec ridge-map
socialImage: /images/20231102_1702_corsica_greys_r.png
date: 2023-11-03T09:21:46.722Z
tags:
  - python
  - map
---
En faisant ma veille technique je suis tombé sur la librairie [ridge-map](https://pypi.org/project/ridge-map/) qui permet de tracer en python des cartes d’élévation en récupérant les données [SRTM](https://fr.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission) d'une zone donnée. Merci à [Lisa Hornung](https://fosstodon.org/@LisaHornung) pour la découverte !

Je suis plutôt fan du rendu artistique obtenu sur les quelques tests que j'ai pu faire. 

## Quelques exemples de rendus :

![Chaîne des Puys](/images/20231103_1044_chaîne-des-puys_greys_r_l50_e100_v30_w8_h12.png "Chaîne des Puys")

![La région de Beaufort](/images/20231103_0924_beaufort_greys_r_l50_e202_v30_w8_h12.png "La région de Beaufort")

![Le Mont Fuji](/images/20231102_1548_mont-fuji_greys_r.png "Le Mont Fuji")

## Le script python pour générer les cartes

les imports : ridge_map bien sûr, matplotlib et datetime

```python
import matplotlib.pyplot as plt
from ridge_map import RidgeMap
from matplotlib import rcParams
from datetime import datetime
```

la déclaration de variables utilisées avec matplotlib : couleur de texte, de fond, police, titre de la carte,  l’échelle de couleur pour l’élévation et les dimensions de la figure.

Je crée également une variable date qui sera utilisée pour la sauvegarde du rendu.

Et surtout les variables pour ridge-map : nombre de lignes à tracer, nombre de points d'élévation, l'exagération de l'élévation et bien sur les coordonnées de la zone à tracer. Celle-ci sont récupérable via le site <http://bboxfinder.com>

```python
now = datetime.now() # current date and time
date = now.strftime("%Y%m%d_%H%M")
cmaps ="Greys_r"
textcolor= '#FAFAFA'
bgcolor = '#1c1c1c'
rcParams['font.family'] = 'Consolas'
title = "Chaîne des Puys"
width=8
height=12
coords =(2.900391,45.623643,3.004761,45.917721) # récupérées via http://bboxfinder.com/
nlines = 50 #le nombre de lignes tracées
elpts =100 #le nombre de points d'élevation à utiliser par ligne
vratio = 30 # l'exagération de l'élévation. Plus c'est élevé plus c'est éxagéré
```

Le tracé avec ridge-map :

```python
rm = RidgeMap(coords, font="Consolas")
values = rm.get_elevation_data(num_lines=nlines, elevation_pts=elpts)
fig,ax = plt.subplots(figsize=(width, height))
fig.set_facecolor(bgcolor)
ridges = rm.plot_map(
    values=rm.preprocess(values=values, vertical_ratio=vratio, water_ntile=1,lake_flatness=1),
    ax=ax, kind='elevation', label=None,
    linewidth=1.2,
    line_color = plt.get_cmap(cmap),
    background_color = bgcolor
    )
```

On rajoute le titre, les coordonnées de la zone et quelques informations avec matplotlib :

```python
plt.figtext(0.5, 0.06 , title, fontsize=28, fontweight='bold', ha='center', color=textcolor)
plt.figtext(0.5, 0.04 , coords, fontsize=8, fontweight='light', ha='center', color=textcolor)
plt.figtext(0.5, 0.03 , 'Data: NASA via ridge-map.py | Code & Design by Nicolas Birckel ', fontsize=8, fontweight='regular', ha='center', color=textcolor)
```

et pour finir on sauvegarde l'image, toujours avec matplotlib. J'ai choisi d'utiliser un nom de fichier plutôt verbeux intégrant les différentes variables pour pouvoir retrouver des réglages au besoin.

```python
filename = date+"_"+title+"_"+cmap+"_l"+str(nlines)+"_e"+str(elpts)+"_v"+str(vratio)+"_w"+str(width)+"_h"+str(height)+".png"
plt.savefig(filename, dpi=120, bbox_inches='tight',pad_inches=0.2, facecolor=bgcolor)
```

## D'autre ressources pour jouer avec des cartes sur le web ou en python :

* City roads, un site qui permet de tracer toutes les routes d'une ville : <https://anvaka.github.io/city-roads/>
* Du même développeur, Peak map qui permet de tracer des élévations <https://anvaka.github.io/peak-map/#7.68/47.727/-122.574>
* Le [30 day map challenge](< https://github.com/search?q=30%20day%20map%20challenge&type=repositories>) sur github
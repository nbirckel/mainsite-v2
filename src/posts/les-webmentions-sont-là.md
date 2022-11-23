---
layout: layouts/post.njk
title: Les Webmentions sont là !
date: 2022-11-23T07:56:57.914Z
tags:
  - blog
  - update
---
A﻿près quelques péripéties pour trouver comment modifier mon site [Eleventy](https://www.11ty.dev/) dans un environnement de dev potable sur Ipad, je suis content d'avoir enfin réussi à intégrer les webmentions sur celui-ci !

### W﻿ebmentions ? Kezako ?

[D﻿'après Wikipedia](https://fr.wikipedia.org/wiki/Webmention),

> **Webmention** est une recommandation du [W3C](https://fr.wikipedia.org/wiki/W3C "W3C") (organisme international chargé de la normalisation du web) décrivant un protocole simple de notification d'une URL lorsqu'elle est mentionnée par un site externe, et permettant à une page web de demander une notification lorsque quelqu'un ajoute un lien vers celle-ci. Webmention est à l'origine développé par la communauté de l'IndieWebCamp et publié comme un brouillon de travail du W3C le 12 janvier 2016. Il devient une recommandation du W3C le 12 janvier 2017. Webmention permet aux auteurs de vérifier et conserver qui génère un lien, une référence ou un commentaire vers leurs articles. En incorporant ce type de commentaires depuis un autre site, ils fournissent la fonction de commentaire fédéré.

D﻿ans mon cas, cela me permet d'afficher en pied d'article, les différents repost, like et réponses faites liés à l'article.

### L﻿a mise en place de Webmentions sous Eleventy 

J﻿e ne vais pas vous mentir, n'étant pas developpeur j'en ai bavé 😅

J'avais déjà essayé lorsque je suis passé de Jekyll à Eleventy, mais ce fut un échec cuisant. 

J'ai donc fouillé internet et je suis tombé sur ce How-to très bien documenté : <https://sia.codes/posts/webmentions-eleventy-in-depth/>
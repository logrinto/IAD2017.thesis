---
title: Der Fortschritt von kontaktlosem Bezahlen im Pferdesport
author: "Stephanie Fuchs"
date: "2022-11-11"
layout: post
draft: false
hideInMenu: false
path: "/posts/2020/steffi/"
tags:
  - "TagOne"
  - "TagTwo"
description: "123"
---

import Margin from 'gatsby-theme-signalwerk/src/components/Margin';
import Grid from 'gatsby-theme-signalwerk/src/components/Grid';
import Column from 'gatsby-theme-signalwerk/src/components/Column';
import Box from 'gatsby-theme-signalwerk/src/components/Box';

## Intro
Grundsätzlich verhält sich das Template wie normaler Markdown-Text. Es gibt aber einige erweiterte Funktionen. Für weitere Infos siehe [Github](https://github.com/signalwerk/gatsby-theme-signalwerk).

## Inhaltsverzeichnis
```toc
exclude: Inhaltsverzeichnis
from-heading: 2
to-heading: 6
```

## Inhaltsverzeichnis (Element)
Das Inhaltsverzeichnis kann über ein `toc` (Table of Contents) Code-Block gesteuert werden.
* `exclude` – welcher Titel soll nicht im Inhaltsverzeichnis erscheinen
* `from-heading` – erste Stufe, die ausgegeben werden soll. `2` = `h2`
* `to-heading` – letzte Stufe, die ausgegeben werden soll. `6` = `h6`

### Eingabe

````md
```toc
exclude: Inhaltsverzeichnis
from-heading: 2
to-heading: 6
```
````

### Darstellung
siehe oben
<!--
```toc
exclude: Inhaltsverzeichnis
from-heading: 2
to-heading: 6
``` -->



## Text
<Margin>

### Marginalie

Text Marginalie · Randspalten mit `<Margin></Margin>`-Tags umschliessen.

</Margin>

Text · Normaler Text kann wie in Markdown üblich verfasst werden.


## Listen
### Eingabe

````md
* Item A
* Item B
* Item C
````

### Darstellung
* Item A
* Item B
* Item C

## Nummerierte Listen

### Eingabe

````md
1. Item 1
2. Item 2
3. Item 3
````

### Darstellung

1. Item 1
2. Item 2
3. Item 3

##  Code

Code kann entweder als Block oder Inline eingegeben werden.


### Eingabe
````md
Inline `code`

```js
var kk = "kk";
```
````
### Darstellung

Inline `code`

```js
var kk = "kk";
```

## Fussnoten

Text mit Fussnoten kann wie in Markdown üblich entweder mit Referenzen gemacht werden:

### Eingabe
```md
_«Zitat A»_[^quote-one]

[^quote-one]: ...
```

oder inline
```md
_«Zitat B»_[^hier der Text]
```

### Darstellung
_«Zitat A»_[^quote-one]
_«Zitat B»_[^hier der Text]


## Abbildungsverzeichnis

Möchte man die Abbildungen (oder weitere Verzeichnisse) ausserhalb der Fussnoten pflegen, kann man die Fussnoten mit einem Gruppen-Prefix (`:gruppe:`) markieren:

### Eingabe
```md
_Bild A_[^:fig:one]

[^:fig:one]: ...
```

oder inline
```md
_Bild B_[^:fig:hier der Text]
```
### Darstellung

_Bild A_[^:fig:one]
_Bild B_[^:fig:hier der Text]



## Zitate
Absätze mit Zitaten können speziell markiert werden.

### Eingabe
```md
> Absatz als Zitat.[^quote-one]

```

### Darstellung
> Absatz als Zitat.[^quote-one]


## Bilder
Wenn unter einem Bild direkt im Anschluss ein ausgezeichneter Text (`*text*`) steht, erhält dieser Text die Formatierung für Bildunterschriften.

### Eingabe
```md
![Cat](./img/header.jpg)
*Wow so miau. Much cute.[^:fig:pic-source]*
```

### Darstellung
![Cat](./img/header.jpg)
*Wow so miau. Much cute.[^:fig:pic-source]*


## Video
Videos sollten in eine responsive `Box` gepackt werden. Als Ratio kann 16:9, 4:3 oder 3:2 gangegeben werden.

### Eingabe
```md
<Box ratio="16:9">

<iframe src="https://player.vimeo.com/video/169809377" frameborder="0"></iframe>

</Box>
```

### Darstellung

<Box ratio="16-9">

<iframe src="https://player.vimeo.com/video/169809377" frameborder="0"></iframe>

</Box>



## Grid – volle Breite
### Eingabe

```md
<Grid>

![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Grid>
```

### Darstellung

<Grid>

![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Grid>

## Grid – volle Breite mit Hintergrund

### Eingabe

```html
<Grid background>

![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Grid>
```

### Darstellung


<Grid background>

![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Grid>


## Grid – mit Spalten

### Eingabe
```md
<Grid>
<Column start="1" end="7">

### Cat Column A
...

</Column>
<Column start="7" end="13">

### Cat Column B
...

</Column>
</Grid>
```

### Darstellung

<Grid>
<Column start="1" end="7">

### Cat Column A
![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Column>
<Column start="7" end="13">

### Cat Column B
![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

</Column>
</Grid>



<!-- references text-->

<!--
Vorname Nachname, [Titel der Seite](https://www.google.com/) (Abrufdatum: dd. mm. yyyy).
Vorname Nachname, Buchtitel, Auflage, Verlag, Erscheinungsort Jahr, erste Seite – letzte Seite.
-->

[^quote-one]: Beispiel für Fussnote

<!-- references figures-->
[^:fig:one]: Beispiel für Abbildungsverzeichnis.
[^:fig:pic-source]: Abbildung von [lorempixel.com](http://lorempixel.com/800/600/cats/1)



## Einzelnachweise
```references
```

## Abbildungsverzeichnis
(Kann auch bei Einzelnachweis gepflegt werden)

```references
# gets repalced with footnotes
group-include: fig

inline-link-prefix: 'Fig. '

reference-link-prefix: '↑ Fig. '
reference-link-suffix: ''

reference-text-suffix: ' – '
```

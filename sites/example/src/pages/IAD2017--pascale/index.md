---
title: Machine Learning im Designprozess
author: "Pascale Anderegg"
date: "2020-11-11"
layout: post
draft: false
hideInMenu: false
path: "/posts/2020/pascale/"
tags:
  - "TagOne"
  - "TagTwo"
description: Wie sich Prozesse digitaler Gestalter*innen mit Einbezug von Machine Learning verändern
---

import Margin from 'gatsby-theme-signalwerk/src/components/Margin';
import Grid from 'gatsby-theme-signalwerk/src/components/Grid';
import Column from 'gatsby-theme-signalwerk/src/components/Column';
import Box from 'gatsby-theme-signalwerk/src/components/Box';

## Einleitung – die Fragestellung
Seit dem Aufkommen von Computern träumen wir von Maschinen, die wie wir sprechen und denken. Nach den Ausführungen von Winkler (2019), machten sich Menschen bereits im Jahre 1960 Gedanken über die Symbiose des Menschen mit der Maschine. Heutige Computer sind noch weit entfernt von Beispielen, wie Samantha, dem intelligenten Sprachassistenten aus dem Science Fiction Film «Her». Dennoch wird Machine Learning bereits in diversen Bereichen, wie zum Beispiel in der Medizin zur Analyse von Bilddaten bei Krankheitsdiagnosen, eingesetzt und stellt ebenso Designer*innen neue Werkzeuge im Gestaltungsprozess zur Verfügung (vgl. Hebron, 2016).

Die vorliegende Arbeit setzt sich mit der Frage auseinander, auf welche Weise sich Prozesse eines digitalen Gestalters mit Machine Learning verändern. Um dieser Fragestellung nachzugehen, werde ich einen digitalen Gestaltungsprozess analysieren sowie den Begriff Machine Learning erläutern. Ich vermute, dass mit Einbezug von Machine Learning im Gestaltungsprozess ein breiteres, innovativeres Lösungsspektrum erreicht werden kann und dadurch der Prozess als variantenreicher wahrgenommen werden kann. Das Ziel der Arbeit ist, mögliche Einsatzbereiche von ML im digitalen Designprozess verständlich aufzuzeigen und dabei die Veränderungen zu beleuchten. Neben einem konkreten Fallbeispiel wird die Rolle von Machine Learning im Gestaltungsprozess untersucht. Auf Basis dieser Grundlagen wird ein möglicher Gestaltungsprozess mit Machine Learning ausgelegt um in einer anschliessenden Diskussion die folgende Frage bewerten zu können: Wie wandelt sich ein Gestaltungsprozess mit ML in Hinsicht auf eine zunehmende Dynamik?

Mich interessiert, wo und wie Machine Learning im digitalen Designprozess eingebunden werden kann, da dieses Thema eine hohe Relevanz bezogen auf meinen Beruf aufweist. Designer*innen verfügen mit ihren Tätigkeiten, wie zum Beispiel User Research, Prototyping und Usability Tests, über die Kompetenz künstliche Intelligenz (nachfolgend KI) menschlich zu machen, indem sie herausfinden, wie Menschen auf KI gestützte Anwendungen reagieren. Deshalb sehe ich es als zwingend notwendig, dass sich Gestalter im Tätigkeitsfeld der KI auskennen und dieses mitgestalten. Diese Arbeit soll einen Beitrag dazu leisten.


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

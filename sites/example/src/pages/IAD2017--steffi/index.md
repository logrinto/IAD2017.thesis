---
title: Kontaktloses Bezahlen – Der Pferdesport auf dem Weg zu modernen Technologien
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

## Einleitung
Handel ist seit jeher ein wichtiger Bestandteil unserer Zivilisation. Der ursprüngliche Tauschhandel mit realen Objekten wurde im Laufe der Jahrhunderte mehr und mehr durch symbolische Werte abgelöst. Über erste Münzen, denen ein symbolischer Wert zugewiesen wurde, zu Papiergeld, welches in verschiedenen Währungen und Werten erhältlich ist, bis hin zu Kreditkarten und Smartphone-Applikationen, welche Zahlungen ohne physischen Kontakt ermöglichen, hat sich der Handel mit Waren und Dienstleistungen stetig weiterentwickelt und scheint sich auch weiter dynamisch zu verändern. Die Zahlungskarten-Anbieterin Visa ermöglichte 2007 als erstes Unternehmen das kontaktlose Bezahlen, indem sie einen NFC-Chip in ihre Kreditkarten integrierte. Nachdem diese Bezahlvariante während den darauffolgenden zehn Jahren eher wenig Beachtung fand, kommt sie seit einigen Jahren immer mehr zum Einsatz, auch wenn viele Schweizerinnen und Schweizer eine eher hohe Hemmschwelle haben, diesen Dienst zu nutzen. Nachdem digitale Transaktions-Technologien wie Bluetooth Low Energy (BLE), Near Field Communication (NFC) und Quick Response (QR) Code zunehmend perfektioniert wurden, verbreiten sich diese nun auch in Bereichen, in denen diesbezüglich über längere Zeit eine Stagnierung festzustellen war. So ist beispielsweise im Pferdesport in den letzten Jahren das Bedürfnis aufgekommen, mit der Zeit zu gehen und kontaktloses Bezahlen mit einer Applikation und einem Wearable an Veranstaltungen zu ermöglichen. 

## Inhaltsverzeichnis
```toc
exclude: Inhaltsverzeichnis
from-heading: 2
to-heading: 6
```

### Problemstellung
### Fragestellung
### Methode und Aufbau

## Kontaktloses Bezahlen
### Funktionsweise des kontaktlosen Bezahlens
Unter kontaktlosem Bezahlen versteht man einen Zahlvorgang, der ohne physischen Kontakt abgeschlossen wird. Dabei werden einerseits Debit- oder Kreditkarten verwendet, welche mittels NFC-Technologie ohne physischen Kontakt zu einem Terminal den offenen Betrag abbuchen, oder es werden Smartphone-Applikationen wie zum Beispiel TWINT, Apple Pay oder Samsung Pay eingesetzt, wobei die Bezahlung nebst NFC auch durch das Erfassen eines QR-Codes oder mittels BLE-Technologie erfolgen kann. Im Folgenden wird näher auf diese drei Technologien eingegangen.
#### Near Field Communication
Die gängigste Methode für kontaktloses Bezahlen ist die Near Field Communication (NFC). Dieser Übertragungsstandard ermöglicht einen Datenaustausch innerhalb weniger Zentimeter ohne physischen Kontakt und wird international von den grössten Kartenorganisationen sowie Smartphone-Herstellern verwendet. Das sogenannte Tappen mittels NLC ist in der Schweiz für Beträge bis CHF 40.– ohne Eingabe eines PIN-Codes möglich. Ist der Betrag höher, fordert das Terminal die Eingabe des PIN-Codes. NFC-Chips entsprechen der Norm ISO/IEC 14443-3:2011.

Während Debit- und Kreditkarten ausschliesslich mit einem NFC-Chip auskommen, werden bei Smartphone-Applikationen für kontaktloses Bezahlen neben NFC oft zusätzliche Sicherheitsmechanismen wie Secure Element oder HCE eingesetzt. Während Smartphone-Hersteller wie Samsung und Huawei die NFC für Android-Applikationen frei zur Verfügung stellen, limitiert Apple bei die Nutzung von NFC bei iPhones bislang auf Apple Pay, womit andere Applikationen nicht auf diese Technologie zugreifen können. Dadurch verhindert Apple aktuell eine gesamtheitliche Lösung für kontaktloses Bezahlen. Ob Apple in Zukunft die NFC-Schnittstelle von iPhones für weitere Applikationen freigeben wird, ist unklar.
#### Quick Response Code
Der Quick Response Code, kurz QR-Code, ist eine grafische Darstellung von Datenelementen, welche von Geräten mit einer Kamera und entsprechenden Software gescannt und entschlüsselt werden können. Im Zusammenhang mit kontaktlosem Bezahlen handelt es sich dabei beispielsweise um Rechnungsinformationen, welche dadurch an ein Gerät übermittelt werden, womit das manuelle Erfassen entfällt. Ein Beispiel eines QR-Codes ist in Abbildung 1 dargestellt.

![Quick Response Code](./img/QRCodeWikipedia.png)
*Quick Response Code[^:fig:pic-source]*

Im Gegensatz zur NFC-Technologie ist nahezu jedes Smartphone mit einer entsprechenden App in der Lage, einen QR-Code zu erfassen und zu entschlüsseln, was eine leichte und breit gestreute Nutzung ermöglicht. Ein weiterer Vorteil besteht darin, dass QR-Codes auch analog zur Verfügung gestellt werden können. Gegenwärtig befinden sich auf fast allen Electronic-Cash-(EC)-Terminals ein kleines Display, welches während dem Bezahlvorgang neben dem zu zahlenden Betrag auch einen QR-Code anzeigt, welcher kontaktloses Bezahlen ermöglicht.
#### Bluetooth Low Energy
Beim kontaktlosen Bezahlen mittels Bluetooth Low Energy (BLE) werden Daten ähnlich wie beim Tappen mittels NFC-Technologie von einem Sender- an ein Empfangsgerät geschickt. Dabei schickt das Smartphone der bezahlenden Person als Sender die für die Transaktion nötigen Daten an einen sogenannten Beacon als Empfänger. In der Schweiz wird diese Variante z. B. von Twint angeboten. So ermöglicht die Supermarktkette Coop mittels entsprechendem Beacon an jeder Coop-Kasse das kontaktlose Bezahlen mittels Twint-Applikation. 

Der Vorteil dieser Technologie ist die Herstellerunabhängigkeit und folge dessen ihre grosse Reichweite. Aktuelle Smartphones können ohne Limitierungen über die BLE-Technologie verfügen. Es ist jedoch notwendig, dass Kassensysteme zusätzlich mit einer Bluetooth-Schnittstelle ausgestattet werden.
 
### Nutzung von kontaktlosem Bezahlen in der Schweiz
Laut dem Bericht Swiss Payment Monitor 2019 ist das kontaktlose Bezahlen aktuell mit einem Bekanntheitsgrad von 90 % in der Bevölkerung auf dem Vormarsch. Bezüglich der Sicherheit bestehen seitens der Nutzenden allerdings noch immer Bedenken, welche wesentlich grösser sind als bei Barzahlungen und Kartenzahlungen mit physischem Kontakt. Trotzdem gewinnt das kontaktlose Bezahlen an Sympathie und Akzeptanz. Das System beginnt sich langsam aber sicher durchzusetzen, vor allem dank den Debitkarten mit NFC-Chip, welche hauptsächlich bei jüngeren Benutzenden hoch im Kurs stehen. So können sich drei von fünf im Rahmen des Swiss Payment Monitor 2019 befragten Personen vorstellen, in den nächsten Jahren vermehrt kontaktlos zu bezahlen. In Abbildung 2 findet sich ein Vergleich der Bekanntheit von neueren Zahlungsmitteln zwischen 2018 und 2019:
![Bekanntheit neuerer Zahlungsinstrumente](./img/SPM19-S10.png)
*Bekanntheit neuerer Zahlungsinstrumente[^:fig:pic-source]*
Generell kann festgestellt werden, dass alle Technologien an Bekanntheit gewonnen haben. Mit 99 % am häufigsten verwendet und somit mit einer niedrigen Hemmschwelle verbunden sind Online-Zahlungen mittels Kreditkarte. Im direkten Vergleich sind das jedoch nur drei Prozent mehr als das kontaktlose Bezahlen mittels Kreditkarte, welches mit 96 % an zweiter Stelle folgt. An dritter Stelle liegt mit 94 % das kontaktlose Bezahlen mit Debitkarte. Verglichen mit physischen Zahlungsmethoden punktet kontaktloses Bezahlen bei den Befragten des Swiss Payment Monitor 2019 hauptsächlich mit der Debit- und Kreditkarte erstens in Bezug auf die einfache Nutzung, zweitens den geringen Zeitaufwand und drittens die zukunftsorientierte Technologie, wie Abbildung 3 darstellt: 
![Wahrnehmung der Zahlungsmittel](./img/SPM19-S11.png)
*Wahrnehmung der Zahlungsmittel[^:fig:pic-source]*

### Rolle von Benutzerführung und Interface
Die aktuell meistverwendeten Zahlungsmittel in der Schweiz sind Bargeld und Kredit-oder Debitkarten. Beide verfügen über kein Interface und die Einfachheit der Zahlungsmittel wirkt sich positiv auf deren Verwendung aus. Es ist keine Schulung erforderlich. Der Umgang damit wird erlernt, indem die Benutzenden sich entweder darüber informieren oder bei anderen Personen sehen, wie es funktioniert. Anders ist dies bei den verschiedenen Smartphone-Applikationen, welche kontaktloses Bezahlen ermöglichen. Bei diesen nimmt die Gestaltung der Benutzeroberfläche, des Interface, welches an eine gut strukturierte Benutzerführung gebunden sein muss, einen wesentlichen Einfluss auf die Nutzung der Applikation. Dabei spielt eine einfache Benutzeroberfläche bei dem virtuellen Point of Sale (dem Zahlungsabschluss) eine noch wichtigere Rolle als die Benutzeroberfläche in der Applikation selbst. Sind grafische Elemente bei einem nicht relevanten Schritt in der Anwendung beispielsweise zu klein oder schwer lesbar, hindert das die Benutzenden nicht an deren Nutzung. Während des Zahlungsprozesses führt ein schlechtes Interface laut einer Studie von VocaLink jedoch bei 23 % aller befragten Personen, welche unter 35 Jahren alt sind und bereits per Applikation auf dem Smartphone bezahlt haben, zu einem Abbruch der Saldierung. Es ist also massgebend, mit welchem Design die Applikation auftritt und wie der Zahlungsabschluss eingebunden ist. Daraus resultieren drei wesentliche Schlussfolgerungen zur Implementation von Zahlverfahren für Mobile Payments:

1. Das Interface muss auf das mobile Endgerät ausgerichtet werden. Jeder Button und jedes Icon muss den Benutzenden die genaue Absicht in entsprechender Grösse und Verhältnis signalisieren.

2. Das Frontend muss über ein State of the Art Backend verfügen, respektive eine aktuelle Technologie, die weit verbreitet ist und stetig weiterentwickelt wird. So genügen wenig Anpassungen seitens Frontend, um die Applikation auf dem neuesten Stand zu halten.

3. Das Interface muss bequem zu bedienen sein (Convenience) und Sicherheit vermitteln. Wie bereits erwähnt, spielt die Einfachheit und die Sicherheit eine zentrale Rolle.

Folgt ein Hersteller diesen drei Grundbausteinen, ist die Applikation in der Benutzerführung optimal aufgebaut und somit die Benutzerfreundlichkeit gegeben.
### Beispiele für kontaktloses Bezahlen
#### Debit- und Kreditkarten
#### Twint 
#### EventClearing

## Bezahlstruktur im Pferdesport
### Historische Entwicklung der Bezahlstruktur
### Ist-Zustand des Geldflusses
### Pilotversuche mit EventClearing

## Umfrage
### Methodische Vorgehensweise
### Ergebnisse

## Fazit
[Kapiteleinleitung, kurz zusammenfassen, was in diesem Kapitel passiert, 1-2 Sätze]
### Diskussion der Ergebnisse
### Beantwortung der Fragestellung
### Ausblick

<!-- references text-->

<!--
Vorname Nachname, [Titel der Seite](https://www.google.com/) (Abrufdatum: dd. mm. yyyy).
Vorname Nachname, Buchtitel, Auflage, Verlag, Erscheinungsort Jahr, erste Seite – letzte Seite.
-->

[^quote-one]: 

<!-- references figures-->
[^:fig:one]: Beispiel für Abbildungsverzeichnis.
[^:fig:pic-source]: Abbildung von [https://de.wikipedia.org/wiki/QR-Code](https://upload.wikimedia.org/wikipedia/commons/c/cb/QRCodeWikipedia.png)



## Einzelnachweise


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

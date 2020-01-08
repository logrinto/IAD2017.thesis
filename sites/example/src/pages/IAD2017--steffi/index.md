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

## Funktionsweise des kontaktlosen Bezahlens
Unter kontaktlosem Bezahlen versteht man einen Zahlvorgang, der ohne physischen Kontakt abgeschlossen wird. Dabei werden einerseits Debit- oder Kreditkarten verwendet, welche mittels NFC-Technologie ohne physischen Kontakt zu einem Terminal den offenen Betrag abbuchen, oder es werden Smartphone-Applikationen wie zum Beispiel TWINT, Apple Pay oder Samsung Pay eingesetzt, wobei die Bezahlung nebst NFC auch durch das Erfassen eines QR-Codes oder mittels BLE-Technologie erfolgen kann. Im Folgenden wird näher auf diese drei Technologien eingegangen.
### Near Field Communication
Die gängigste Methode für kontaktloses Bezahlen ist die Near Field Communication (NFC). Dieser Übertragungsstandard ermöglicht einen Datenaustausch innerhalb weniger Zentimeter ohne physischen Kontakt und wird international von den grössten Kartenorganisationen sowie Smartphone-Herstellern verwendet. Das sogenannte Tappen mittels NLC ist in der Schweiz für Beträge bis CHF 40.– ohne Eingabe eines PIN-Codes möglich. Ist der Betrag höher, fordert das Terminal die Eingabe des PIN-Codes. NFC-Chips entsprechen der Norm ISO/IEC 14443-3:2011.

Während Debit- und Kreditkarten ausschliesslich mit einem NFC-Chip auskommen, werden bei Smartphone-Applikationen für kontaktloses Bezahlen neben NFC oft zusätzliche Sicherheitsmechanismen wie Secure Element oder HCE eingesetzt. Während Smartphone-Hersteller wie Samsung und Huawei die NFC für Android-Applikationen frei zur Verfügung stellen, limitiert Apple bei die Nutzung von NFC bei iPhones bislang auf Apple Pay, womit andere Applikationen nicht auf diese Technologie zugreifen können. Dadurch verhindert Apple aktuell eine gesamtheitliche Lösung für kontaktloses Bezahlen. Ob Apple in Zukunft die NFC-Schnittstelle von iPhones für weitere Applikationen freigeben wird, ist unklar.
### Quick Response Code
Der Quick Response Code, kurz QR-Code, ist eine grafische Darstellung von Datenelementen, welche von Geräten mit einer Kamera und entsprechenden Software gescannt und entschlüsselt werden können. Im Zusammenhang mit kontaktlosem Bezahlen handelt es sich dabei beispielsweise um Rechnungsinformationen, welche dadurch an ein Gerät übermittelt werden, womit das manuelle Erfassen entfällt. Ein Beispiel eines QR-Codes ist in Abbildung 1 dargestellt.

Im Gegensatz zur NFC-Technologie ist nahezu jedes Smartphone mit einer entsprechenden App in der Lage, einen QR-Code zu erfassen und zu entschlüsseln, was eine leichte und breit gestreute Nutzung ermöglicht. Ein weiterer Vorteil besteht darin, dass QR-Codes auch analog zur Verfügung gestellt werden können. Gegenwärtig befinden sich auf fast allen Electronic-Cash-(EC)-Terminals ein kleines Display, welches während dem Bezahlvorgang neben dem zu zahlenden Betrag auch einen QR-Code anzeigt, welcher kontaktloses Bezahlen ermöglicht.
### Bluetooth Low Energy
Beim kontaktlosen Bezahlen mittels Bluetooth Low Energy (BLE) werden Daten ähnlich wie beim Tappen mittels NFC-Technologie von einem Sender- an ein Empfangsgerät geschickt. Dabei schickt das Smartphone der bezahlenden Person als Sender die für die Transaktion nötigen Daten an einen sogenannten Beacon als Empfänger. In der Schweiz wird diese Variante z. B. von Twint angeboten. So ermöglicht die Supermarktkette Coop mittels entsprechendem Beacon an jeder Coop-Kasse das kontaktlose Bezahlen mittels Twint-Applikation. 

Der Vorteil dieser Technologie ist die Herstellerunabhängigkeit und folge dessen ihre grosse Reichweite. Aktuelle Smartphones können ohne Limitierungen über die BLE-Technologie verfügen. Es ist jedoch notwendig, dass Kassensysteme zusätzlich mit einer Bluetooth-Schnittstelle ausgestattet werden.
 

<!-- references text-->

<!--
Vorname Nachname, [Titel der Seite](https://www.google.com/) (Abrufdatum: dd. mm. yyyy).
Vorname Nachname, Buchtitel, Auflage, Verlag, Erscheinungsort Jahr, erste Seite – letzte Seite.
-->

[^quote-one]: 

<!-- references figures-->
[^:fig:one]: Beispiel für Abbildungsverzeichnis.
[^:fig:pic-source]: Abbildung von [lorempixel.com](http://lorempixel.com/800/600/cats/1)



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

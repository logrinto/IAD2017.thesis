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
Die Möglichkeiten von kontaktlosem Bezahlen in der Schweiz sind vielfältig und nehmen stetig zu. Im folgenden Abschnitt werden die verschiedenen Angebote in Bezug auf Benutzerführung und Benutzeroberfläche untersucht. Seit Beginn der Digitalisierung kann man feststellen, dass der Gestaltung der Benutzeroberfläche immer grössere Bedeutung zukommt. Je einfacher und schneller Benutzende an das Ziel gelangen, desto höher ist die Wahrscheinlichkeit, dass die Applikation nicht nur genutzt sondern auch weiterempfohlen wird und sich so auch durchsetzen kann.
#### Debit- und Kreditkarten – ohne Interface
Am meisten verbreitet ist die Verwendung von kontaktlosem Bezahlen mittels Debit- oder Kreditkarte. Die grössten KartenanbieterInnen und auch die Schweizer Banken haben zwischen 2014 und 2016 auf Debit-/Kreditkarten mit der Funktion zum kontaktlosen Bezahlen (NFC-Chip) umgerüstet. Die Karten von Kundinnen und Kunden der jeweiligen Unternehmen sind fortlaufend durch Neue ersetzt worden. Gefragt wurden sie nicht. Das System wurde sozusagen autoritär eingeführt. 71% der Debitkarten und 95% der Kreditkarten verfügen per Ende 2018 über den NFC-Chip, Tendenz steigend. 
#### Twint – mit Interface
Das Unternehmen Twint AG stellte mit ihrer gleichnamigen Software als erstes Schweizer Unternehmen eine Applikation zur Verfügung, mit der kontaktlos via Smartphone bezahlt und kassiert werden kann. Die Applikation wird an die eigene Telefonnummer gekoppelt und per Debit- oder Kreditkarte aufgeladen oder direkt mit einem Konto verbunden.

![Cat](./img/header.jpg)
*Wow so miau. Much cute.[^:fig:pic-source]*

Die Benutzeroberfläche von Twint ist sehr einfach. Die Benutzerführung ist sauber, strukturiert und klar verständlich dargestellt. Benutzende wählen nach dem Öffnen der Applikation direkt aus, ob sie Geld senden oder anfordern möchten. Die Empfängerin oder der Empfänger wird anhand der Telefonnummer kontaktiert. Kontaktlos bezahlt werden kann an allen Kassen, welche über ein Terminal verfügen, das QR-Codes anzeigen kann. In allen Coop Filialen sind zudem Beacons installiert, welche das Bezahlen via BLE-Technologie ermöglichen. Die Benutzenden wählen auf dem Interface lediglich, wie sie bezahlen möchten.

Twint ermöglicht auch das Senden und Empfangen von Geldbeträgen zwischen Freundinnen, Freunden und Bekannten. Dabei wird der gewünschte Kontakt ausgewählt, die Summe eingegeben, wenn gewünscht eine Nachricht hinterlegt und zum Auslösen der Transaktion der Slider Senden nach rechts gezogen. Häufig kommt Twint auch beim Parkieren zum Einsatz. Bei Parkuhren, an welchen ein Twint-Aufkleber mit QR-Code angebracht ist, können Autofahrerinnen und Autofahrer diesen mit der Twint-App scannen, ihr Kontrollschild in der App hinterlegen und über ein Einstellrad in der Applikation die gewünschte Parkzeit einstellen. Zusammengefasst basiert der Erfolg dieser Applikation auf folgenden Mehrwerten:
- Unkomplizierte Installation und Registrierung
- Sehr einfache und intuitive Bedienung
- Hohe Sicherheit als Schweizer Produkt 
- Bereits an über 30’000 Bezahlstellen akzeptiert, Tendenz steigend
- Geld kann zwischen Benutzenden gesendet und angefordert werden (Peer-to-Peer-Funktion)

#### EventClearing – mit/ohne Interface
xxxx

## Bezahlstruktur im Pferdesport
Pferdesport-Veranstaltungen werden zunehmend grösser und komplexer, das Feld der Teilnehmenden breiter, die Wechsel von Reiterinnen und Reitern sowie Pferden immer häufiger und kurzfristiger. Diese Dynamik verlangt nach zeitgemässen Strukturen und Technologien, welche in der Schweiz in den vergangenen Jahren nach und nach eingeführt wurden. In diesem Kapitel soll auf die historische Entwicklung und den Ist-Zustand der Bezahlstruktur im Pferdesport eingegangen werden und anhand einer Betrachtung der ersten Pilotversuche mit EventClearing einen Ausblick auf die mögliche Zukunft erfolgen.
### Historische Entwicklung der Bezahlstruktur
Noch bis vor 20 Jahren wurde für die Teilnahme an einem Pferdesportanlass eine analoge Nennkarte mit den entsprechenden Informationen über Reiter, Reiterin und Pferd zur eindeutigen Identifikation ausgefüllt und den Veranstaltenden überreicht oder per Post zugestellt, während das zu bezahlende Nenngeld bar vor Ort beglichen werden konnte. Der entsprechende Betrag musste von der Reiterin, dem Reiter oder einer Mittelsperson vor Prüfungsbeginn im Sekretariat bezahlt werden. Nach Abschluss der einzelnen Prüfungen wurden die Preisgelder an der Rangverkündigung bar in einem vorab abgefüllten Umschlag ausgehändigt. Immer häufiger wurde jedoch eine Bezahlung der Nenngelder via Banküberweisung verlangt, was mit der Einführung des Online-Bankings im Zuge der Digitalisierung deutlich vereinfacht wurde. Das Bezahl-Prozedere blieb jedoch für die Veranstaltenden mit einen beträchtlichen Aufwand verbunden, da die Einzahlungen weiterhin manuell kontrolliert wurden und die Auszahlungen wie gehabt in bar erfolgten. Lediglich die Einzahlung der Nenngelder konnte durch Online-Banking getätigt werden.

manuell kontrolliert wurden und die Auszahlungen wie gehabt in bar erfolgten. Lediglich die Einzahlung der Nenngelder konnte durch Online-Banking getätigt werden. 
Im Jahr 2017 schaltete der Schweizerische Verband für Pferdesport auf seiner Website eine Plattform auf, welche digitale Nennungen ermöglichte und die analoge Nennkarte nach und nach zum Verschwinden brachte. Um eine Nennung zu tätigen, mussten die Benutzenden nun auf der Plattform einen Account eröffnen und die Nenngelder direkt auf der Plattform mittels Kreditkarte oder einem Postfinance-Konto begleichen. Andere Bezahlungsarten waren nicht mehr möglich. Das neue System wurde schweizweit eingeführt. Bei der Auszahlung der Preisgelder änderte sich vorerst nichts. Diese wurden weiterhin bar in ein Couvert abgefüllt und an der Preisverteilung überreicht. 

Seit 2019 wird schliesslich mit EventClearing ein System im Schweizer Pferdesport eingeführt, welches ein bargeldloses Ein- und Auszahlen von Nenn- und Preisgeldern ermöglicht.
### Ist-Zustand des Geldflusses
Bis anhin müssen alle Reiterinnen und Reiter, die an Turnieren teilnehmen, einen Account auf der Plattform des Schweizerischen Verbandes für Pferdesport (SVPS) my.fnch.ch erstellen. Dieser Account beinhaltet ein Konto, welches vom SVPS verwaltet wird, und auf das vorab Geld überwiesen werden muss, um eine Nennung an einem Turnier zu tätigen. Ohne genügenden Saldo ist eine Nennung nicht möglich. Erst wenn das Guthaben via Überweisung aufgestockt ist, kann die Anmeldung für eine Prüfung regulär erfolgen. Sind die einzelnen Prüfungen gemeldet, überweist der SVPS das Geld an die Veranstalter. 

Am Turnier erhalten Reiterinnen und Reiter, welche sich in einer Prüfung klassiert haben (min. 30% der gestarteten Paare), Preise in Form von Bargeld, Gutscheinen oder Naturalien mit vorgegebenen Mindestwerten. Die Mindestwerte des SVPS werden in Abbildung 4 dargestellt:

![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

Die Reiterinnen und Reiter nehmen die Preise analog entgegen und entscheiden individuell, wie sie diese verwenden. Während sowohl Nenn- wie Preisgeld bei Amateuren in der Regel privat bezahlt und kassiert wird, werden die Nenngelder von professionellen Reiterinnen und Reitern hauptsächlich von ihren Arbeitgebenden oder Sponsoren übernommen. Je nach Vertrag geht entsprechend auch das Preisgeld ganz oder teilweise an die Arbeitgebenden oder Sponsoren, was den Geldfluss tendenziell verkompliziert. Die meisten Gelder werden früher oder später erneut für Nennungen benötigt, was es unumgänglich macht, dass diese erneut auf ein Bankkonto einbezahlt werden müssen.

Für eventuelle Übernachtungen des Pferdes an der Veranstaltung müssen die Kosten für Stallungen, Einstreu, Futter, etc. vor der Abreise bar im Sekretariat beglichen werden. Da die Teilnehmenden bei mehrtägigen Turnieren in einer kurzen Zeitspanne abreisen, führt dies oft zu langen Wartezeiten vor dem Sekretariat. 

Im Bereich der Gastronomie und der Aussteller wird der Geldfluss sehr individuell gehandhabt. Üblich ist, dass die Verpflegung an Turnieren zum grössten Teil vom Veranstalter konzipiert und organisiert wird. Dabei wird auch an grösseren Turnieren wie zum Beispiel den jährlichen Pferdesporttagen in Uster welche vom Reitverein Uster durchgeführt werden, die Kasse immer noch in bar betrieben. Kartenzahlungen sowie kontaktlose Bezahlmöglichkeiten werden nicht akzeptiert. Externe Gastronomen und Aussteller bieten individuelle Zahlungslösungen an.

Bei Pferdesportturnieren ist somit bis anhin immer viel Bargeld im Umlauf. Auf der einen Seite müssen die Veranstaltenden die Gewinngelder für die Preisverteilungen bereithalten, welche für jede Prüfung in Umschläge abgefüllt, sortiert, gelagert und den Klassierten übergeben werden. Auf der anderen Seite tragen die Teilnehmenden und ihre Grooms, sowie die Besucherinnen und Besucher Bargeld für die Konsumation auf sich oder lagern dies in ihren Fahrzeugen. Dies führt zu einem erhöhten Diebstahlrisiko. Sowohl das Sekretariat als auch die Transporter und Lastwagen der Teilnehmenden sind in der Vergangenheit immer wieder Ziel von Diebstählen geworden.

### Pilotversuche mit EventClearing
Mit den Pferdesporttagen Galgenen, dem Summer Masters Maienfeld und der Schweizer Meisterschaft CH-J-YR-2019 haben sich 2019 drei Veranstaltende für die Nutzung von EventClearing entschieden. Verglichen mit den herkömmlichen Ausschreibungen fällt bei der Ausschreibung dieser Events auf der Webseite des SVPS als erstes ein prominent platzierter Text auf, welcher auf die Nutzung von EventClearing hinweist und den Teilnehmenden mitteilt, dass sie bei einer Nennung dieser Veranstaltung die AGB’s von EventClearing akzeptieren. Bei der Ausschreibung zum Hallenturnier Würenlos 2020 lautet dieser Text folgendermassen:

*«Das Preisgeld wird nur über EventClearing per Banktransfer ausgezahlt. Um das Gewinngeld direkt im Anschluss an das Turnier zu erhalten, hinterlegen Sie bei app.eventclearing.lu bitte Ihre Bankverbindung, sofern Sie noch nicht mit EventClearing zusammengearbeitet haben. EventClearing (Matthias Lienhop 076 334 76 08 / matthias@eventclearing.lu) wird für Sie eine Turnierabrechnung inkl. gezahlter Nenn- und gewonnener Preisgelder pro Pferd erstellen. Diese Abrechnung wird Ihnen unaufgefordert an die E-Mail-Adresse zugestellt, welche Sie bei my.fnch.ch und in Ihrem persönlichen Profil bei app.eventclearing.lu hinterlegt. Mit der Nennung akzeptieren die Reiter diese Vorgehensweise zur Auszahlung der Preisgelder.»*

Das gewonnene Preisgeld wird somit von EventClearing direkt auf das SVPS-Konto der hinterlegten Person auf my.fnch.ch vergütet. Dabei besteht die Möglichkeit, die Gelder gegebenenfalls auch direkt an die Arbeitgebenden oder Sponsoren auszahlen zu lassen. Die Preisgelder können somit auch unmittelbar wieder als Nenngelder verwendet werden, wie der Kreislauf des bargeldlosen Zahlungsverkehrs im Pferdesport mit EventClearing in Abbildung 5 aufzeigt: 

![Cat](./img/header.jpg)
*Hello Cat[^:fig:pic-source]*

Im Bereich der Gastronomie und der Aussteller besteht für Teilnehmende mit SVPS-Account die Möglichkeit, mit der EventClearing-App kontaktlos zu bezahlen. Externe Gastronomen oder Aussteller können sich durch EventClearing lizenzieren lassen und erhalten ein eigenes Konto, welches Überweisungen mittels EventClearing ermöglicht. Weiter wird durch EventClearing ein Wearable-Armband für kontaktloses Bezahlen angeboten. Dieses kann auch von Besucherinnen und Besuchern ohne SVPS-Account an den Kassen mit Bargeld sowie Debit- oder Kreditkarte aufgeladen werden, womit auch diese innerhalb der Veranstaltung kontaktlos bezahlen können. 

Laut Philipp Züger, OK-Präsident der Pferdesporttage Galgenen, welche eine Pilot-Veranstaltung war, bringt EventClearing auch für die Veranstalterinnen und Veranstalter sehr viele Vorteile.

*«Auf nationaler Ebene sehe ich vor allem für die Organisatoren grosse Vorteile mit ‘EventClearing’», erklärt Züger. Gut zwei Dutzend Prüfungen – von Jungpferdeprüfungen bis N 155 – werden in Galgenen ausgetragen. Bisher habe er jeweils anhand einer Exceltabelle für jede einzelne Prüfung mühsam ermittelt, wie viele Banknoten er für sämtliche Platzierten benötigte, das Geld entsprechend bei der Bank bestellt, abgeholt und bis zur Verwendung sicher verwahrt: «Zum Glück haben wir dafür einen Firmentresor, denn wir sprechen von einem Preisgeld in der Höhe von 70 000 bis 80 000 Franken, das wir auszahlen.»*

## Umfrage
### Methodische Vorgehensweise
### Ergebnisse

## Fazit
[Kapiteleinleitung, kurz zusammenfassen, was in diesem Kapitel passiert, 1-2 Sätze]
### Diskussion der Ergebnisse
### Beantwortung der Fragestellung
Im Folgenden sollen die beiden einleitend gestellten Forschungsfragen basierend auf den Ergebnissen dieser Arbeit beantwortet werden.

*Welche Hemmschwellen verhindern die Nutzung von kontaktlosen Bezahlmöglichkeiten?*

Die Hemmschwelle bei der Nutzung von kontaktlosem Bezahlen wird einerseits durch individuelle Faktoren wie Alter, spezifische Lebensumstände, soziales Bezugsnetz und berufliche Einbettung bestimmt. Andererseits wird sowohl aus der Literatur als auch aus der Umfrage aber ersichtlich, dass die Argumente Sicherheit, Vertrauen und Convenience über alle sozialen Schichten hinweg bei der Entscheidung für oder gegen kontaktloses Bezahlen an erster Stelle stehen. Technologien ohne Interface sind bereits stark verbreitet und bekannt. Die Skepsis, diese zu nutzen, ist daher in den vergangenen Jahren beachtlich gesunken. 

Smartphone-Applikationen mit Interface haben hingegen tendenziell noch eine geringere Akzeptanz. Die Benutzerfreundlichkeit der Benutzeroberflächen wird dabei individuell sehr unterschiedlich wahrgenommen. Da Applikationen mit Interface weder obligatorisch noch autoritär eingeführt werden können, bleibt eine Auseinandersetzung der Benutzenden mit der Materie fakultativ und eine Nichtverwendung möglich.

*Unter welchen Erfolgsfaktoren kann sich EventClearing im Pferdesport etablieren?*

Die Untersuchung zeigt, dass sich die Bezahlstruktur in der Gesellschaft generell sowie auch im Pferdesport in Richtung moderner kontaktloser Zahlungsmittel entwickelt. Um EventClearing und ähnliche Technologien erfolgreich zu etablieren, braucht es jedoch ein gut durchdachtes Konzept. Dabei ist es sinnvoll, auf Systeme und Technologien aufzubauen, welche den Benutzenden bereits bekannt sind, und dieses zu optimieren. Wie die Einführung des kontaktlosen Bezahlens mit Debit- und Kreditkarten können so auch andere Bezahlsysteme autoritär eingeführt werden, ohne dass ein allzu grosses Risiko besteht, dass sie nicht verstanden würden. Das bereits bekannte Verfahren mit seinen einfachen und praktischen Funktionen wirkt vertraut, vermittelt Sicherheit und wird dadurch als angenehm empfunden.

Ein weiterer wichtiger Faktor ist die Reichweite des Systems. Die Smartphone-Applikation Twint und NFC-Karten werden schweizweit an sehr vielen Bezahlstellen akzeptiert. Nahezu jedes EC-Terminal verfügt über eine Kontaktlos-Schnittstelle (auch VPay genannt) und über ein kleines Interface, das den Benutzenden neben dem zu zahlenden Preis einen QR-Code anzeigt, der eine Zahlung über Twint ermöglicht. Der Erfolg von Twint liegt mitunter auch in der simplen Gestaltung der Benutzeroberfläche. Die Benutzenden benötigen wenig Onboarding, um die Applikation verstehen und anwenden zu können. In der durchgeführten Umfrage gaben die Reiterinnen und Reiter zwar mehrheitlich an, Bezahl-Applikationen auch zu verwenden, wenn sie schwierig zu bedienen sind, falls keine andere Bezahlmöglichkeit besteht. Jedoch wird die Geschwindigkeit einer erfolgreichen Verbreitung dadurch deutlich reduziert, da weniger Empfehlungen ausgesprochen werden. Damit sich EventClearing in der Szene etablieren kann, ist ein sauberes Interface daher ein zentraler Erfolgsfaktor. Das kontaktlose Bezahlen über die App oder das Wearable sollte reibungslos und schnell funktionieren sowie innerhalb einer Veranstaltung überall akzeptiert werden, damit sich EventClearing längerfristig durchsetzen und eine breite Anwendung finden kann.
### Ausblick
Technischen Entwicklungen sind in unserer Zeit kaum mehr Grenzen gesetzt, und die Geschwindigkeit der Entwicklung nimmt stetig zu. Die neuere Geschichte des Zahlungsverkehrs ist durch eine stetige Veränderung und Entwicklung geprägt. Man kann auch sagen, dass es eine Geschichte von Versuch und Irrtum ist. Möglichkeiten werden eruiert und ausprobiert. Verfahren, die nicht funktionieren, werden früher oder später von neuen Konzepten abgelöst. Erfolgreiche Methoden werden stets weiterentwickelt. Rückschläge sind ein Bestandteil der Entwicklung und verbessern die jeweiligen Prozesse. Mittels Testing und Usability Walkthroughs kann diesen entgegengewirkt werden und so bleibt zu hoffen, dass Fehlfunktionen oder Unverständlichkeiten in einem frühen Stadium erkannt und behoben werden können. So gesehen scheint es folgerichtig, dass die Zukunft bezüglich einer Weiterentwicklung offen ist und dynamisch verlaufen wird. 

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

---
title: Machine Learning im Designprozess
author: "Pascale Anderegg"
date: "2020-01-10"
layout: post
draft: false
hideInMenu: false
path: "/posts/2020/pascale/"
tags:
  - "TagOne"
  - "TagTwo"
description: Wie sich Prozesse digitaler GestalterInnen mit Einbezug von Machine Learning verändern.
---

import Margin from 'gatsby-theme-signalwerk/src/components/Margin';
import Grid from 'gatsby-theme-signalwerk/src/components/Grid';
import Column from 'gatsby-theme-signalwerk/src/components/Column';
import Box from 'gatsby-theme-signalwerk/src/components/Box';



## Inhaltsverzeichnis
```toc
exclude: Inhaltsverzeichnis
from-heading: 2
to-heading: 3
```

## 1.0 Einleitung
Seit dem Aufkommen von Computern denken wir über intelligente Systeme nach, die unserem eigenen Handeln näher kommen. Nach den Ausführungen von Winkler _(2019, 1).[^:lit:one]_ machten sich Menschen bereits im Jahre 1960 Gedanken über die Verbindung des Menschen mit der Maschine. Heutige Computer sind noch weit entfernt von Beispielen, wie Samantha, dem intelligenten Sprachassistenten aus dem Science Fiction Film [«Her»](https://web.archive.org/web/20200221094744/https://de.wikipedia.org/wiki/Her_(2013)). Dennoch wird Machine Learning bereits in diversen Bereichen, wie zum Beispiel in der Medizin zur Analyse von Bilddaten bei Krankheitsdiagnosen, eingesetzt und stellt ebenso DesignerInnen neue Werkzeuge im Gestaltungsprozess zur Verfügung _(vgl. Hebron, 2016, 1).[^:lit:two]_

Die vorliegende Arbeit setzt sich mit der Frage auseinander, auf welche Weise sich Prozesse digitaler GestalterInnen mit Machine Learning verändern. Um dieser Fragestellung nachzugehen, werde ich einen digitalen Gestaltungsprozess analysieren sowie den Begriff Machine Learning erläutern. Ich vermute, dass mit Einbezug von Machine Learning im Gestaltungsprozess ein innovativeres Lösungsspektrum erreicht und der Prozess als variantenreicher wahrgenommen werden kann. Das Ziel der Arbeit ist, mögliche Einsatzbereiche von ML im digitalen Designprozess verständlich aufzuzeigen und dabei die Veränderungen zu beleuchten. Neben einem konkreten Fallbeispiel wird die Rolle von Machine Learning im Gestaltungsprozess untersucht. Auf Basis dieser Grundlagen wird ein möglicher Gestaltungsprozess mit Machine Learning ausgelegt, um in einer anschliessenden Diskussion die Frage bewerten zu können, wie sich ein Gestaltungsprozess mit ML in Hinsicht auf eine zunehmende Dynamik wandeln könnte.

Da dieses Thema eine hohe Relevanz, bezogen auf meinen Beruf aufweist, interessiert es mich, wo und wie Machine Learning im digitalen Designprozess eingebunden werden kann. DesignerInnen verfügen mit ihren Tätigkeiten, wie zum Beispiel User Research, Prototyping und Usability Tests, über die Kompetenz, künstliche Intelligenz (nachfolgend KI) menschlich zu machen, indem sie herausfinden, wie Menschen auf KI gestützte Anwendungen reagieren. Deshalb sehe ich es als zwingend notwendig, dass sich GestalterInnen im Tätigkeitsfeld der KI auskennen und dieses mitgestalten. Diese Arbeit soll einen Beitrag dazu leisten.


## 2.0 Einstieg in die Theorie
In diesem Kapitel werden die wichtigsten Begriffe erklärt, um ein Gesamtverständnis für die weiteren Kapitel zu schaffen. Dies geschieht mittels Definition eines digitalen Gestaltungsprozesses und der Verdeutlichung des Begriffs Machine Learning, um so, zu einem späteren Zeitpunkt zu ermitteln, welche Arbeitsschritte kreativer Arbeit von einer Maschine übernommen werden können.

### 2.1 Analyse eines digitalen Gestaltungsprozesses

Für die Definition eines digitalen Gestaltungsprozesses ist es im Vorfeld wichtig, ein Verständnis für das Endprodukt zu schaffen _(vgl. Winkler, 2019, 5–19).[^:lit:one]_. Die digitale Produktentwicklung konzentriert sich auf die Konzeption und Umsetzung rein digitaler sowie hybrider Produkte. Zur ersten Form gehören Softwareanwendungen oder Applikationen und die zweite Kategorie klassifiziert physische Produkte, welche digitale Informationen enthalten, wie zum Beispiel ein Smartphone.

Es wird von einem Gestaltungsprozess gesprochen, wenn der Ablauf von Design-Aktivitäten beschrieben wird  Designprozesse sind dynamisch und können nicht immer nach einer starren Abfolge abgearbeitet werden. Der Grund dafür sind unvorhersehbare Ereignisse, so etwa neue Probleme, welche in einem Gestaltungsprozess jederzeit entstehen können und die weiteren Schritte verändern und erschweren. Ein Beispiel ist ein ungeahnter Richtungswechsel eines Kunden oder wenn während dem Ausarbeiten mehrere spannende Lösungsansätze entstehen, die parallel weiterentwickelt werden sollen. Nach den Ausführungen von Zerweck _(2010, 70–71).[^:lit:three]_, wird eine gute Idee auch nicht abgewiesen, nur weil sie nicht zum richtigen Zeitpunkt entstanden ist. Designprozesse haben das Ziel, einen Leitfaden für unser Handeln zu geben und sind nützlich, um die Realität besser zu verstehen. Es existieren die verschiedensten Vorgehensmodelle von Gestaltungsabläufen, die aufzeigen, wie von einem «Problem» ausgehend, eine «Lösung» erarbeitet werden kann. Aus Zeit- und Kostengründen wird heutzutage oft eine agile Arbeitsweise angewendet, bei der Projekte in kleinen aber gegliederten Aufgaben durchgeführt werden. Bevorzugt wird dabei ein iteratives Vorgehen, welches einen Prozess in sich repetiert, bis das definierte Ziel erreicht wird.

Ein möglicher Gestaltungsprozess wird anhand dem Modell von Rian van der Merwe _(2013).[^:qu:one]_ beschrieben, welches auf praktischen Agentur-Erfahrungen basiert. Das Modell wird in drei Phasen, nämlich die Entdeckungs-, Planungs- und Skizzenphase, unterteilt und danach in einen iterativen Prozess übergeleitet. Dort werden die Arbeitsschritte Prototyping, grafisches Konzept und Programmierung wiederholt ausgeführt, bis das gewünschte Endprodukt erreicht ist. Die Programmierung ist dabei nicht Teil des Aufgabenbereichs der DesignerInnen, sondern eine wichtige Schnittstelle. Sie wurde jedoch berücksichtigt, da es ein wichtiger Teil einer agilen Arbeitsweise ausmacht. Während in anderen Arbeitsprozessen, wie zum Beispiel der Wasserfall-Methode, jede Phase aus einem Teilgebiet besteht und diese der Reihe nach abgearbeitet werden, sind in einem iterativen Vorgehen die Schritte strukuriert in kleine Pakete aufgeteilt und werden wiederholend ausgeführt. Dabei können Probleme während dem Prozess angegangen sowie behoben werden, da schon sehr früh eine Vorstellung des Endproduktes besteht.

<Grid>

![Der Designprozess von van der Merwe](./img/Gestaltungsprozess_Merwe.svg)
*Der Designprozess von digitalen Produkten nach Rian van der Merwe_.[^:abb:one]_*

</Grid>


#### 2.1.1 Entdeckungsphase
Das Problem wird definiert und mittels einer Recherche in den Themenbereich eingestiegen. Darauf werden die Bedürfnisse der EndkonsumentInnen analysiert, indem zum Beispiel Interviews oder Umfragen mit realen BenutzerInnen des Produktes durchgeführt werden. Aus den Erkenntnissen der Bedürfnisse werden Personas entwickelt. Eine Persona steht für eine zukünftige Personengruppe, die das Produkt in Zukunft nutzen wird. Darin wird eine fiktive Person, ihre Vorlieben und Verhalten beschrieben, um daraus im nächsten Schritt die Inhalte und Funktionen des Produktes festzulegen.

#### 2.1.2 	Planungsphase
Mit Hilfe des Materials, welches in der Entdeckungsphase erarbeitet wurde, werden mögliche Funktionen des Produktes definiert. Aus den Bedürfnissen der Personas wird der Inhalt aufbereitet und im Anschluss die Informationsarchitektur konzipiert. Das heisst, es wird der Aufbau der Navigation festgelegt und welche Seitentypen, wie zum Beispiel die Startseite, Produktübersicht und deren Detailseiten, zur Anwendung kommen.

#### 2.1.3 	Skizzenphase
Nachdem die Inhalte und deren Architektur erarbeitet wurden, geht es in die Skizzenphase. Dort werden mit Hilfe von einer oder mehreren Kreativitätsmethoden verschiedene Lösungen in Form eines Storyboards skizziert. Diese entstandenen Lösungen werden entweder auf Papier oder bereits digital als Wireframe (schematische Darstellung), umgesetzt. Darin werden die einzelnen Seiten mit den wesentlichen Elementen dargestellt. Der Fokus liegt dabei nicht auf Designdetails wie Grössenverhältnisse und der Schriftwahl, sondern es sollen lediglich die einzelnen Bestandteile des Konzeptes abgebildet werden.

#### 2.1.4	Iterativer Prozess
Sobald die Lösung für die Herausforderung skizziert wurde, geht es in einen iterativen Prozess, wo Teilstücke, wie zum Beispiel das Benutzerprofil einer Website, bearbeitet werden. Das bedeutet, dass sich die darin enthaltenen Arbeitsschritte wiederholen werden, bis das definierte Ziel erreicht wird. Wichtig ist dabei, dass diese Teilstücke so schlank wie möglich gehalten werden, um bei Problemen umgehend reagieren zu können.

Zunächst wird aus den bisher erarbeiteten Elementen ein vereinfachtes Modell, einem sogenannten Prototypen, erarbeitet, der mittels Umfragen oder Nutzungstests mit echten BenutzerInnen geprüft wird. Dabei kann ein Testing entweder vor Ort oder per Online-Umfrage durchgeführt werden (Prototyping). Durch die gewonnenen Erkenntnisse wird der Prototyp überarbeitet und danach das visuelle Erscheinungsbild angegangen (grafisches Konzept). Dort werden zum Beispiel Komponenten wie Typografie, Proportionen sowie Farben definiert. Danach wird das Design durch einen/eine ProgrammiererIn umgesetzt und die Entwicklung der erarbeiteten Komponente gestartet (Programmierung). Darauf beginnt dieser Prozess mit dem nächsten Teilstück von vorne.

### 2.2 Technische Einführung und Fokuslegung
In diesem Abschnitt wird der Begriff Machine Learning erklärt sowie eingegrenzt, um diesen zu einem späteren Zeitpunkt auf seine mögliche Einbindung in den Gestaltungsprozess zu prüfen. Die Künstliche Intelligenz, kurz KI, ist ein Überbegriff für jegliche Technologien, die für die Bereitstellung von Intelligenzleistungen verwendet werden. Das heisst, mittels KI können Computer eine Intelligenz für eine bestimmte Aufgabe entwickeln und Vorhersagen dazu machen. Dabei wird zwischen schwacher und starker KI unterschieden. Schwache KI kann einzelne Tätigkeiten wie etwa Bilderkennung übernehmen. Starke KI meistert dagegen mehrere unterschiedliche Aufgaben gleichzeitig, wie zum Beispiel die Bild- Sprach- und Texterkennung, und ist im Grunde der menschlichen Intelligenz ähnlich.
Zunächst soll das Feld der starken Künstlichen Intelligenz auf das Teilgebiet Machine Learning (ML) eingeschränkt werden. Um ein Grundverständnis für Machine Learning zu bekommen wird zu Beginn das Denken des Menschen mit dem des Computers verglichen. Weiter soll der Begriff Algorithmus erläutert und das Prinzip von Machine Learning dargelegt werden.

### 2.3 Unsere Denkweise und die des Computers
Der Computer kennt nur die Zahlen 0 und 1, die er in Höchstgeschwindigkeit zu einem Programm transformiert. Nach Lenzen _(2002, 78–95).[^:lit:four]_ verfügt der Computer über einen zentralen Prozessor, von wo aus alle Operationen der Reihe nach abgearbeitet werden. Unser Gehirn hingegen arbeitet gleichzeitig von verschiedenen Verarbeitungsbereichen aus, welche miteinander verknüpft sind. Es können dabei Teilbereiche ausfallen, was die Funktionalität des Gehirns nicht beeinträchtigt. Dies zeigt sich zum Beispiel, wenn nach einem Fachbegriff gesucht wird und dieser nicht gefunden werden kann, worauf er in anderen Worten umschrieben wird.

Der Computer kennt nur die Struktur jedoch nicht den Inhalt seiner Daten. Er wurde so entwickelt, dass er mit logischen Ausdrücken, wie richtig oder falsch arbeitet, die ohne das Wissen von externen Faktoren bewertet werden können. Wie Hebron _(2016, 2–4).[^:lit:two]_ feststellte, ist unsere Denkweise wesentlich komplexer und wir kommunizieren mit unscharfen Informationen. Wir sprechen beispielsweise von einem «grossen Haus». Ohne ein Grundverständnis für Häuser ist diese Grössenangabe nicht verständlich. Es wird ein Kontextwissen, also ein Set an Möglichkeiten des entsprechenden Bereiches vorausgesetzt, um den Sinn zu verstehen.

### 2.4 Funktionalität ML
ML enthält Anweisungen, die auf grosse Datensätze angesetzt werden, um darin Muster zu erkennen. Basierend auf diesen Mustern werden Handlungsanleitungen abgeleitet und somit mit den Daten gelernt. Eine solche Handlungsanleitung oder auch Algorithmus genannt, enthält Anweisungen, wie ein Ziel Schritt für Schritt erreicht werden kann _(vgl. Matthias Spielkamp, 2019).[^:qu:two]_. Anstatt ein vordefiniertes Regelset zu verwenden, um das mögliche Verhalten eines Programms zu beschreiben, sucht sich ein maschinelles Lernsystem Muster innerhalb von Datensätzen, und produziert die Regeln selbständig _(vgl. Hebron, 2016, 6–11).[^:lit:two]_. Ein Modell wird zum Beispiel an einem Bilderset von Häusern trainiert, wobei es sich Kategorien, wie etwa moderne, kleine, englische oder chinesische Häuser anlegt. Dieses Modell wird zuerst anhand von vielen Bildern mit Häusern trainiert und kann nur diese spezifische Tätigkeit ausführen, da diese in den Daten zu finden ist. Wenn es also darum geht, Häuser zu erkennen, kann das Programm nun unterscheiden, um welche für Häuser es sich handelt. Es weiss jedoch nicht, dass auf den Fotos Pflanzen zu sehen sind. ML ist also im Stande mit unscharfer Information umzugehen, erkennt aber zugleich nur Dinge, mit welchen es trainiert wurde _(vgl. Lenzen, 2002, 107–111).[^:lit:four]_.

![Englische Häuserkette](./img/englische_haeuserkette.jpg)
*Mittels gelerntem Datenset von Häusern, ist das ML-System im Stande zu erkennen, dass auf diesem Foto eine englische Häuserkette abgebildet wird_.[^:abb:two]_*

## 3.0 ML im Gestaltungsprozess
### 3.1 Welche Rolle kann ML im Designprozess übernehmen?
Um diese Frage beantworten zu können, sollen zunächst drei verschiedene Formen erläutert werden, wie die Interaktion zwischen dem/der GestalterIn und dem ML-System stattfinden kann. Winkler _(2019, 26–33).[^:lit:one]_ klassifizierte ML in ihrer Studie als Nachmacher, als Unterstützer und als eigenständiger Gestalter. Diese drei Felder werden zuerst beleuchtet und es soll ein Anwendungsbeispiel aus der Praxis beschrieben werden. Anschliessend wird ein Fazit daraus gezogen, um zu beantworten, wo ML im Gestaltungsprozess überall eingesetzt werden kann.

### 3.2 ML als Nachmacher
In der ersten Kategorie der Interaktion zwischen dem/der DesignerIn und dem ML-System wird ein bereits bestehendes Objekt wie zum Beispiel eine Fotografie mit Hilfe von ML in einer neuen, veränderten Form dargestellt. Dabei wird die Fotografie mit einem bestehenden Datenset verglichen. Wenn innerhalb des Sets ein Objekt erkannt wird, abstrahiert der Computer die Fotografie in einem bestimmten Stil, zum Beispiel, eines berühmten Malers. Das ML System imitiert demzufolge bereits existierende Gestaltungsanwendungen in Stilen, welche es anhand des Datensets gelernt hat und diese somit anwendet. Während andere Fotobearbeitungs-Programme, wie Instagram lediglich einen Filter über die Bilder legt, generieren ML gestützte Anwendungen mit Hilfe von erkannten Mustern das ganze Bild neu. Dieser Prozess hat einen modifizierenden Charakter, da Originale immer noch erkennbar sind, jedoch mittels einem Datenset verändert werden und sich daraus eine neue Ästhetik bildet. Diese Form von ML kann dem/der GestalterIn neue Sichtweisen auf ein bereits bestehendes Objekt veranschaulichen, bringt dem Gestaltungsprozess sowie der Zusammenarbeit aber keinen direkten Mehrwert.

![Imitation «der grossen Welle vor Kanagawa» mit ML](./img/welle.jpg)
*Eine bestehende Fotografie kann mit Hilfe von ML zum Beispiel den Stil vom japanischen Künstler Katsushika Hokusai («Die grosse Welle vor Kanagawa») imitieren und das Bild in eine neue Ästhetik umwandeln_.[^:abb:three]_*

### 3.3 ML als Unterstützer
In der unterstützenden Form kann ML bei repetitiven, quantitativen Tätigkeiten, wie Formatanpassungen oder Recherchearbeiten, assistieren sowie Kreativschaffende inspirieren und den Prozess in produktiven Tätigkeiten partizipativ vorwärtstreiben. Der/die DesignerIn legt ein Set von Daten an, auf welches das ML-System trainiert wird. ML kann aus diesen Daten Erkenntnisse ziehen, welche DesignerInnen nutzen können. Dadurch findet ein Wissensaustausch von beiden Seiten statt. Im folgenden Fallbeispiel Fontmap, wird das ML-System zur Inspirationsquelle und erleichtert GestalterInnen die Entscheidung, welche Schrift verwendet werden soll.

#### 3.3.1 Fontmap
Wie Ho _(2017).[^:qu:three]_, der Ersteller von [Fontmap](https://web.archive.org/web/20200221094617/http://fontmap.ideo.com/), feststellte, ist die Wahl der Schrift eine der häufigsten Entscheidungen, die DesignerInnen in Gestaltungsprozessen treffen müssen. Nicht selten wird auf Favoriten oder Standardschriften zurückgegriffen, welche in bisherigen Anwendungen gut funktioniert hatten. Eine andere Variante wäre die Recherche nach einem geeigneten Font per Google Suche oder in bestehenden Werken abzufragen, wobei nach Charakter wie serif, serifenlos oder grotesk gesucht werden kann. Auch wenn dies ein guter Startpunkt ist, gibt es in diesen Kategorien viele Details, worin sich die Schriften unterscheiden und es ist oft der Fall, dass die erste Schrift nicht passt und viel Zeit für die Recherche benötigt wird.

Das Projekt Fontmap, welches von [IDEO](https://web.archive.org/web/20200221094531/http://www.ideo.com/eu), einer internationalen Design- und Innovationsberatung entwickelt wurde, basiert auf ML und möchte dem/der GestalterIn ein Werkzeug bieten, dass bei der Wahl der Schrift unterstützt. Das Tool stellt mehr als 750 Google Fonts auf einer Map dar, um die Schriftsuche intuitiver und einfacher zu gestalten. Es wird ein Werkzeug geboten, dass ähnliche Schriften aufgrund von ihrem Charakter wie Strichstärke, Laufweite oder Versalhöhe in der Nähe zueinander anordnet. Mit dieser Anwendung werden Muster und Beziehungen von Schriften verständlich dargestellt. Es ergibt sich eine zweidimensionale Vergleichbarkeit der Schriftsätze, wobei die Schriftarten innerhalb von zwei Achsen sortiert und geordnet werden. Der Algorithmus sortiert Schriften anhand ihrer visuellen Merkmale und zeigt dem/der DesignerIn alternative Schriften auf einer bekannten 2D Karten- sowie Listenansicht zur Auswahl an. Der Algorithmus ordnet Schriften, welche sich von anderen stark unterscheiden, auf der Map separiert, also mit einem grösseren Abstand zu anderen Schriften, an.

![Fontmap](./img/fontmap_IDEO2.png)
*Fontmap ordnet mittels ML mehr als 750 Schriftarten auf einer 2D Kartenansicht an_.[^:abb:four]_*

Mit Fontmap ist ein Werkzeug entstanden, dass GestalterInnen im Designprozess bei der Schriftwahl unterstützt, indem es eine Übersicht von ähnlichen Schriften anzeigt und dazu inspiriert, sich für weniger konventionelle Schriften zu entscheiden. Dies führt zu mehr Abwechslung im Gestaltungsprozess, da ein grosses Spektrum an Schriften geboten wird. Gleichzeitig ist die Anwendung auf andere Bereiche erweiterbar und kann zum Beispiel auch mit der Definierung von Farbwelten funktionieren, indem es ebenso zur Inspiration sowie als Wegweiser im Designprozess dienen kann. Dieses Tool zeigt also, wie effektiv mit ML Daten strukturiert, geordnet und visualisiert werden können und wie mit täglichen Hürden von DesignerInnen umgangen werden kann. Das Projekt ist auf 1000 Schriften erweiterbar und der Ersteller denkt darüber nach, seine Anwendung mit Schriftkombinationen zu erweitern. Vor allem aber wird Kreativschaffenden ein Werkzeug geboten, welches motiviert, die Wahl der Schrift zu variieren und somit Abwechslung in die eigene Arbeit zu bringen.

### 3.4 ML als eigenständiger Gestalter
Wenn ML als eigenständiger Gestalter handelt, also selbständig Entscheidungen fällt, kommt unmittelbar die Frage auf, wie gut das Resultat dabei ist und ob der/die DesignerIn dadurch ersetzt werden kann. Nach Winkler _(2019, 32–33).[^:lit:one]_ soll das Computersystem selbstständig Gestaltungsentscheidungen treffen können, um als eigenständiger Gestalter wahrgenommen zu werden. Ein digitales Tool, welches diese Anforderung erfüllt, wurde noch nicht gefunden. Jedoch existiert ein Kunstprojekt, in dem IT-StudentInnen einem System 15&#x202F;000 Portraits gefüttert haben und es auf dieser Basis selbst Portraits malen gelassen haben. Der erste Algorithmus trifft dabei die Entscheidung. Danach wird ein zweiter eingesetzt und prüft, ob es sich genug vom Datenset unterscheidet und somit als eigenständige Variation gelten kann. Es entwickelt sich ein eigenständiges System, welches nur vom Algorithmus gestaltet wird. Im digitalen Gestaltungsprozess existiert zum aktuellen Zeitpunkt noch kein solches System und es ist unsicher, ob es je eines geben wird, da ein algorithmisches System bisher keine Entscheidungen basierend auf den Bedürfnissen des Menschen treffen kann.

### 3.5 Fazit der Rolle von ML im Gestaltungsprozess
Heute existieren zwei Arten der Kooperation zwischen einem Menschen und einem Algorithmus. Zum einen wäre das ML als Nachmacher und andererseits ML in seiner unterstützenden Form _(vgl. Osterrieter, 2017).[^:qu:four]_. Dabei ist die Führung durch DesignerInnen im Gestaltungsprozess unerlässlich, da ein System mit ML eine Basis braucht, mit denen es lernen und sich stetig verbessern kann.
Bezugnehmend auf die bisherigen Erkenntnisse wird ersichtlich, dass ML in Kooperation mit dem/der GestalterIn erfolgreich eingesetzt werden kann, wenn es den Gestaltungsprozess unterstützt und dem/der DesignerIn als Inspirationsquelle, wie im Fallbeispiel Fontmap, dienen kann. Anwendungen mit ML benötigen klare Strukturen und Vorgehensweisen und solche Systeme können keine eigenen ästhetischen Entscheidungen für den Menschen treffen. Unter dieser Betrachtungsweise wird im nächsten Kapitel detaillierter auf die unterstützende Form von ML eingegangen und wo diese im digitalen Gestaltungsprozess eingesetzt werden kann.

### 3.6 Auslegung Designprozess mit ML
In diesem Kapitel wird ML in der assistierenden Funktion auf Basis des Designprozesses nach van der Merwe analysiert. Dabei stellt sich vor allem die Frage, welche Arbeiten von einer Maschine übernommen werden können und welche Aufgabenbereiche nur der/die DesignerIn ausführen kann.

#### 3.6.1 Entdeckungsphase
Nach Holbrook _(2017).[^:qu:five]_ starten viele Firmen direkt mit ML als Lösung um herauszufinden, welche Probleme sie als nächstes angehen müssen, anstatt zuerst die wichtigsten Probleme zu identifizieren und in einem nächsten Schritt zu verstehen. Der Einbezug von ML kann in der Entdeckungsphase für explorative Untersuchungen durchaus spannend sein, um die Möglichkeiten der Technologie auszuloten. Um aber Probleme zu identifizieren und anzugehen, die echte Nutzerbedürfnisse abdecken, kann mit ML kein zufriedenstellendes Resultat erwartet werden, da die Maschine Bedürfnisse nicht selbstständig ermitteln kann. Das Eruieren des Nutzen für den Kunden, kann demnach nicht mit ML unterstützt werden und Tätigkeiten wie das Durchführen von Umfragen oder das Erstellen von Personas werden durch  DesignerInnen bearbeitet. Eine Maschine könnte jedoch bei einer Themenrecherche in die Breite unterstützen, indem sie mit Details und weiteren Quellen angereichert wird. Es braucht jedoch eine strenge Kontrolle durch die DesignerInnen, die Inhalte kuratieren und einschränken.

![Entscheidungsfindungsprozess](./img/Problemloesung_ML_Holbrook.jpeg)
*Das Finden der Lösung, welche reale Nutzerbedürfnisse berücksichtigt, kann nicht von einem ML gestützten System automatisiert werden, da der Weg dorthin keinem linearen Entscheidungsfindungsprozess folgt_.[^:abb:five]_*


#### 3.6.2 Planungsphase
In dieser Phase kann ML die GestalterInnen nicht unterstützen. Hier werden der Inhalt und der Aufbau aus den Erkenntnissen der Nutzungsbedürfnisse erarbeitet. In dieser Tätigkeit müssen Verbindungen erkannt, Inhalte strukturiert und Entscheidungen getroffen werden. Diese Aufgaben setzen einen eigenständigen Lösungsweg voraus, welcher von einer Maschine nicht gemeistert werden kann.


#### 3.6.3 Skizzenphase
Bei Beginn der Skizzenphase werden Kreativitätsmethoden, wie etwa Brainstorming und Mind Mapping, angewendet und Lösungen zu komplexen Problemen gesucht, welche nicht mit ML unterstützt werden können. In dieser Phase wird oftmals analog auf Papier gearbeitet. Die Arbeit zeichnet sich ebenso durch unkonventionelles Vorgehen, wie zum Beispiel der Problembetrachtung abseits vom Themenbereich aus, um auf originelle, nicht offensichtliche Ansätze zu gelangen. Diese Aufgaben setzen Spontanität und Flexibilität voraus, so dass eine Idee weiterentwickelt, aber ebenso jederzeit verworfen werden kann.

#### 3.6.4 Iterativer Prozess
Im Prototyping kann ML beim Aufbereiten des Testings nicht unterstützen, da genau geprüft werden muss, mit welchen Fragen und Aufgaben die besten Erkenntnisse erwartet werden können. Ein ML-System könnte jedoch bei der Auswertung der Testings unterstützen, indem es Voraussagen aufgrund von vergangenen Testings trifft, wie der Prototyp überarbeitet werden muss. Zum Beispiel könnten zu kleine Bedienflächen erkannt werden und dazu Empfehlungen abgegeben werden. Diese Voraussagen sollten von DesignerInnen natürlich genau überprüft werden.

In der grafischen Konzeption kann ein ML gestütztes System GestalterInnen, wie anhand des Beispiels Fontmap beschrieben wurde, bei der Schriftwahl unterstützen. Zudem kann ein grösseres Variationsspektrum an Möglichkeiten angeboten werden. Dies zum Beispiel in der Bildrecherche, wo das System eine mögliche Sammlung an Bildern vorschlagen kann, indem es zum Beispiel nach Häusern sucht und dem/der DesignerIn die Auswahl präsentiert. Gerade im Bereich der Ästhetik gibt es, sich immer verändernde Trends, die der Kreativschaffende in das grafische Konzept einbaut. Eine Maschine kann alleine nicht abschätzen, was als ästhetisch gilt oder als modern angesehen wird und kann in der Suche nach aktuellen Stilen und Stilmitteln nicht eingesetzt werden _(vgl. Osterrieter, 2017).[^:qu:four]_.

Sobald das grafische Konzept ausgearbeitet wurde, kann die Programmierung gestartet werden. Mit Hilfe von ML können fertige Designs auf verschiedene Ausgabegrössen und Sprachen angepasst werden, was die Produktionsphase verkürzt. Zudem kann ML verschiedene Designvarianten personalisiert an Zielgruppen ausgeben. Zum Beispiel kann ML voraussagen, wann und wie Elemente eines Designs für eine Zielgruppe, wie Personen mit einer Sehschwäche, angepasst werden sollen. Dies funktioniert mit Hilfe eines im Vorfeld definierten Datensets. Die ML-Anwendung lernt einerseits, dass ein Design mit einem höheren Kontrastverhältnis für Menschen mit einer Sehschwäche einfacher zu bedienen ist und andererseits, wann das System das angepasste Layout anzeigen muss _(vgl. Spradlin, 2016).[^:qu:six]_.

<Grid>

![Personalisierung für Seheingeschränkte](./img/contrast_both.jpg)
*Ein ML gestütztes System kann dabei unterstützen, sehbehinderten Menschen automatisch das Layout mit grösserem Kontrastverhältnis zu zeigen (im Bild wären dies die beiden Screens rechts)_.[^:abb:six]_*

</Grid>



## 4.0 Wandlung des Gestaltungsprozesses mit ML

Untersuchungen des Gestaltungsprozesses mit ML, haben nach Winkler _(2019, 37–39).[^:lit:one]_) aufgezeigt, dass der/die GestalterIn in der Zusammenarbeit mit ML die Rolle des/der EntscheiderIn einnimmt. In der folgenden Diskussion soll aufgezeigt werden, wie sich der Gestaltungsablauf mit ML hinsichtlich einer zunehmenden Dynamik auswirkt und welche Gegenargumente dazu bestehen.

### 4.1 Zunehmende Dynamik im Gestaltungsprozess mit ML
In der Konstruktion des Designprozesses mit ML wurde deutlich, dass in der Entdeckungsphase bei Recherchearbeiten durch den Einsatz eines ML-Systems Detailinformationen zu einem bestimmten Thema angereichert werden können. Die GestalterInnen können jederzeit darauf reagieren indem sie eine Auswahl treffen und damit die Richtung bestimmen. Durch diese Entlastung und Vielfalt der Informationen können Kreativschaffende spontaner auf neue Ideen oder auftretende Probleme reagieren, da der ganze Prozess transparenter wird.

Das ML-System wird im iterativen Prozess zum Beispiel bei Format- oder Sprachanpassungen unterstützend eingesetzt. DesignerInnen treffen die Entscheidungen, was in das Konzept gehört und was nicht. Durch diese Teilung der produktiven und konzeptionellen Tätigkeiten bekommen Kreativschaffende mehr Spielraum für das Ausschöpfen und Vertiefen von Konzepten und Ideen. Dank dieser Fokussierung können vielfältigere und originellere Lösungsansätze verfolgt werden.
Die Kollaboration in produktiven Tätigkeiten erfolgt durch einen Informationsaustausch, zwischen den DesignerInnen, die dem Algorithmus ein Datenset übergeben, welches dieser verarbeitet und zugleich lernt, dieses anzuwenden und in den Prozess einzubinden. Ein ML-System fördert die Inspiration, indem dieses eine breite Recherche präsentiert oder mögliche passende Schriften oder Bilder vorschlägt, was die Qualität der Arbeit durch Variationsreichtum erhöht.

Dank dem wiederholten Einsatz eines ML Systems in produktiven Tätigkeiten wie Formatanpassungen, können die Entwicklungszeit verkürzt, die Kosten reduziert sowie die Fehlerquoten verringert werden, weil durch die Arbeitsteilung mehr Konzentration auf gewisse Bereiche gelegt werden kann. Die Rolle der DesignerInnen verändert sich, da diese nicht mehr nur Produkte oder Oberflächen designen, sondern ihre eigenen Prozesse koordinieren. Der Kreativschaffende wird dabei zum Entscheider und soll jeden Schritt den ML-Systems beobachten und abnehmen, da alle Facetten von ML durch das menschliche Urteil unterstützt und vermittelt werden. Der/die GestalterIn gewinnt dadurch an Eigenverantwortung, was sich positiv auf seine/ihre Aufgaben, wie dem Fällen von Entscheidungen, dem Eruieren der Kundenbedürfnisse und dem Fokus auf die Problem- sowie Lösungsfindung, bemerkbar macht. Beim wiederholten Einsatz eines ML-Systems in einer gestalterischen Tätigkeit, wie zum Beispiel dem Finden einer passenden Schrift, werden sich die Resultate kontinuierlich verbessern, da eine Anwendung mit ML nicht statisch ist, sondern sich ständig verändert, indem es aus Daten lernt und beliebig erweiterbar ist.

### 4.2 Doch was könnte die Dynamik hemmen?
Wenn Detailinformationen in einer Recherche durch ML angereichert werden, kann das resultierende Material unübersichtlicher werden, da eine grosse Menge von Informationen präsentiert wird. Wenn DesignerInnen diese Datenmengen nicht kontrollieren, nimmt die Transparenz ab. Um qualitative Entscheidungen, wie die Problemlösung, anzugehen, wird ein breites Wissen sowie ein Verständnis des Kontexts im spezifischen Bereich vorausgesetzt. ML kann nur Aufgaben erledigen, auf die es im Datenset trainiert wurde. Infolgedessen wird erkennbar, dass der Einsatzbereich von ML im Designprozess begrenzt, die Entlastung und somit spontane Reaktion für DesignerInnen nicht befriedigend ist. In Hinsicht auf gestalterische Entscheidungen behalten Kreativarbeitende die Oberhand, da ein ML-System noch nicht fähig ist, selbstständig ermitteln zu können, was als ästhetisch gilt und in das vorgegebene Konzept passt. Die Ästhetik ist an eine bestimmte Zeit und Kultur gebunden und um diese Parameter umfassend zu verstehen und ein Gesamtverständnis dafür zu entwickeln, ist ML nicht geeignet. Wenn es trotzdem ohne Kontrolle durch GestalterInnen eingesetzt wird, können veraltete Gestaltungsvorlagen hervorgebracht oder gleiche Muster wiederholt werden.

Die entstandene Aufgabenverteilung von konzeptionellen und produktiven Tätigkeiten erfordert eine Umstellung und eine Einarbeitungszeit für die GestalterInnen. Sobald das ML-System in einen Gestaltungsprozess eingegliedert wird, entsteht für die DesignerInnen durch die Betreuung und Kontrolle des ML-Systems ein zusätzlicher Mehraufwand, da Kreativschaffende die Schritte kontrollieren und abnehmen müssen. Dies könnte DesignerInnen daran hindern, sich auf konzeptionelle Tätigkeiten zu fokussieren. Die Resultate in einem ML-System können sich nur verbessern, wenn diese regelmässig von einem Menschen betreut werden. ML stützt sich auf die vorhandenen Daten. Im Beispiel von Fontmap ist es nur imstande die bestehenden Schriften im Datenset vorzuschlagen, kann das Set aber nicht selbstständig erweitern.

## 5.0 Fazit
Die Analyse der Rollen, die ML im Gestaltungsprozess einnehmen kann, hat gezeigt, dass ML als Nachmacher in einer gestalterischen Tätigkeit nichts Neues erschafft, sondern sich an bereits Bestehendem orientiert und sich in dieser Kategorie keine besonderen Vorteile bemerkbar machen, da keine Form der Zusammenarbeit mit dem/der GestalterIn entsteht. Wenn ML als eigenständiger Gestalter fungiert, kommt die Frage auf, wer dieses System kontrolliert und wie gut die Resultate sind. Eine Anwendung mit ML braucht klare Grundlagen, auf denen es aufbauen sowie Lernen kann und deshalb ist es nicht ratsam, dass es anspruchsvolle Lösungen vorschlägt. Damit ML in Kooperation mit dem/der DesignerIn erfolgreich eingesetzt werden kann, soll das ML-System den Gestaltungsprozess unterstützen, wie in Bezug auf das Fallbeispiel Fontmap beschrieben wurde. ML kann im Designprozess nur eingebunden werden, wenn eine enge Zusammenarbeit zwischen ML-System und dem/der GestalterIn entsteht. Denn ML-Systeme benötigen Vorwissen über den Sachverhalt. Sie können nicht ohne ein bestehendes Datenset arbeiten und sind nur so gut, wie die Daten, mit denen das System lernt.

Die zu Beginn gestellte Frage wie sich Prozesse eines digitalen Gestalters in Einbezug von ML verändern, lässt sich somit zusammenfassend wie folgt beantworten: Das Aufkommen von Systemen, welche auf ML basieren, verändern den Gestaltungsprozess in Bezug auf die Arbeitsaufteilung massgebend. Wenn solche Systeme eingesetzt werden, indem sie GestalterInnen in ihrer Arbeit unterstützen, können sich digitale GestalterInnen auf konzeptionelle Bereiche fokussieren und übernehmen in produktiven Tätigkeiten die Entscheiderrolle. Dadurch kann ein breiteres und innovativeres Lösungsspektrum verfolgt werden. Hinsichtlich in welchen Arbeitsschritten ein ML gestütztes System eingesetzt werden kann, bin ich zum Schluss gekommen, dass ML-Anwendungen ausführende, quantitative Tätigkeiten übernehmen können, die in der Entdeckungsphase und im iterativen Prozess stattfinden. Der/die DesignerIn konzentriert sich dabei auf konzeptionelle Arbeiten und wird zum qualitativen Entscheidunger im Gestaltungsprozess. Die Ergebnisse von ML im Designprozess werden sich bei repetiertem Einsatz fortlaufend verbessern, da ein ML-System nicht statisch ist, sondern sich immerzu verändert, indem es aus seinen Daten lernt und beliebig erweiterbar ist. Jedoch stehen Entscheidungen  immer in einem Verhältnis zu anderen Entscheidungen, denn sie sind relativ. ML kann keine qualitativen Entscheidungen, die im Zusammenhang mit anderen Argumenten stehen, übernehmen.

Abschliessen möchte ich die Arbeit mit der Betonung, dass DesignerInnen sich ihrer Wurzeln erinnern sollen, nämlich für den Menschen zu gestalten und dabei echte menschliche Bedürfnisse zu finden und zu adressieren.
> The role of AI shouldn’t be to find the needle in the haystack for us, but to show us how much hay it can clear so we can better see the needle ourselves _(Lovejoy, 2018).[^:qu:seven]_.

<Grid>

---

</Grid>

<!-- references text-->

<!--
Vorname Nachname, [Titel der Seite](https://www.google.com/) (Abrufdatum: dd. mm. yyyy).
Vorname Nachname, Buchtitel, Auflage, Verlag, Erscheinungsort Jahr, erste Seite – letzte Seite.
-->



<!-- references figures-->
[^:abb:one]: Abbildung erstellt von Pascale Anderegg, Grundlage der Grafik von [Rian Van der Merwe, elezea Blog](https://web.archive.org/web/20200221094332/https://elezea.com/2013/09/responsive-design-agency-workflow/).

[^:abb:two]: Abbildung von Annie Spratt [Unsplash](https://web.archive.org/web/20200221094311/https://unsplash.com/photos/0XM10BkiuXU).

[^:abb:three]: Abbildung von Michael Zhang [Petapixel](https://web.archive.org/web/20200221094240/https://petapixel.com/2016/07/12/prisma-gives-photos-look-famous-paintings/).

[^:abb:four]: Abbildung von Kevin Ho [medium.com](https://web.archive.org/web/20200221094215/https://medium.com/ideo-stories/organizing-the-world-of-fonts-with-ai-7d9e49ff2b25?).

[^:abb:five]: Abbildung von Jess Holbrook [medium.com](https://web.archive.org/web/20200221094125/https://medium.com/google-design/human-centered-machine-learning-a770d10562cd).

[^:abb:six]: Abbildung von Liam Spradlin [medium.com](https://web.archive.org/web/20200221093958/https://medium.com/project-phoebe/mutate-more-digging-deeper-into-ui-that-evolves-with-the-user-fc0e0d94b402).




[^quote-one]: Beispiel für Fussnote
[^:lit:one]: Veronika Winkler, Künstliche Intelligenz als neue Dimension in der Gestaltung, GRIN Verlag, Deutschland 2019.
[^:lit:two]: Patrick Hebron, Machine Learning for Designers, Sebastopol, USA 2016.
[^:lit:three]: Philip Zerweck, Hans Hugentobler, Claudia Mareis, Franziska Nyffenegger, Dr. Ulrike Reichhardt, Designwissenschaft und Designforschung: Ein einführender Überblick, Hochschule Luzern, Schweiz 2010.
[^:lit:four]: Manuela Lenzen, Natürliche und künstliche Intelligenz, Campus Verlag GmbH, Deutschland 2002.

## Abbildungsverzeichnis
```references
# gets repalced with footnotes
group-include: abb

inline-link-prefix: 'Abb.&#x202F;'

reference-link-prefix: '↑ Abb. '
reference-link-suffix: ''

reference-text-suffix: ' – '
```



## Literaturverzeichnis
```references
# gets repalced with footnotes
group-include: lit

inline-link-prefix: 'Lit.&#x202F;'

reference-link-prefix: '↑ Lit. '
reference-link-suffix: ''

reference-text-suffix: ' – '
```

[^:qu:one]: Rian Van der Merwe, [eleza.com](https://web.archive.org/web/20200221093122/https://elezea.com/2013/09/responsive-design-agency-workflow/) (Abrufdatum: 13.&#x202F;11.&#x202F;2019)
[^:qu:two]: Matthias Spielkamp, [zeit.de](https://web.archive.org/web/20200221093322/https://www.zeit.de/digital/2019-08/matthias-spielkamp-algorithmen-diskriminierung-algorithmwatch-wird-das-was-digitalpodcast) (Abrufdatum: 24.&#x202F;11.&#x202F;2019)
[^:qu:three]: Kevin Ho, [medium.com](https://web.archive.org/web/20200221093459/https://medium.com/ideo-stories/organizing-the-world-of-fonts-with-ai-7d9e49ff2b25?) (Abrufdatum: 24.&#x202F;11.&#x202F;2019)
[^:qu:four]: Johanna Osterrieter, [medium.com](https://web.archive.org/web/20200221093527/https://medium.com/@johanna.osterrieter/k%C3%BCnstliche-intelligenz-im-design-23f7a3d7f3db) (Abrufdatum: 24.&#x202F;11.&#x202F;2019)
[^:qu:five]: Jess Holbrook, [medium.com](https://web.archive.org/web/20200221093732/https://medium.com/google-design/human-centered-machine-learning-a770d10562cd) (Abrufdatum: 12.&#x202F;11.&#x202F;2019)
[^:qu:six]: Liam Spradlin, [medium.com](https://web.archive.org/web/20200221093811/https://medium.com/project-phoebe/mutate-more-digging-deeper-into-ui-that-evolves-with-the-user-fc0e0d94b402) (Abrufdatum: 24.&#x202F;12.&#x202F;2019)
[^:qu:seven]: Josh Lovejoy, [Google Design](https://web.archive.org/web/20200221093856/https://design.google/library/ux-ai/) (Abrufdatum: 24.&#x202F;12.&#x202F;2019)


## Quellenverzeichnis
```references
# gets repalced with footnotes
group-include: qu

inline-link-prefix: 'Qu.&nbsp;'

reference-link-prefix: '↑ Qu. '
reference-link-suffix: ''

reference-text-suffix: ' – '
```

<Grid>

---

<Column start="1" end="5">

#### Mentoring durch
Ulrike Felsing <br/>
HFIAD 2017 <br/>
Schule für Gestaltung Zürich <br/>
[ulrike.felsing@sfgz.ch](mailto:ulrike.felsing@sfgz.ch)

</Column>

<Column start="5" end="13">

#### Vorgelegt von
Pascale Anderegg<br/>
Dietzingerstrasse 12<br/>
8003 Zürich<br/>
[pascale.anderegg@gmail.com](mailto:pascale.anderegg@gmail.com)
</Column>

</Grid>

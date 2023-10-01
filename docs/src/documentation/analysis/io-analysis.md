# Input / Output-Analyse

Mit dieser Analysemethode habe ich nun 6 Hauptelemente, die Teil des aktuellen Workflows (und damit Bestandsplanes) sind, untersucht, um deren Wechselwirkungen in Bezug auf die anderen Elemente herauszuarbeiten. Dies ist in diesem Projekt u. a. ein Marker der Nachhaltigkeit und zeigt auch, wie und wo die Vernetzung dieser Elemente gefördert werden muss. Im Weiteren kann man hierdurch fehlende Effekte oder Elemente aufspüren. Die Ergebnisse werden im folgenden kurz vorgestellt.

## 1. [Workflow – geplant](https://cloud.nadineprigann.de/index.php/s/33QWArpDMyERj4L)

Dieser braucht einen zentralen Ort, an dem er für alle Akteure jederzeit zugänglich ist. Der Workflow sollte nach jedem abgeschlossenen Schritt aktualisiert werden und ca. 1x pro Woche komplett überprüft werden. Wichtig ist auch die Möglichkeit, Abhängigkeiten wie «auf Feedback warten» visualisieren zu können. Generell sollten alle Intervalle / Reviews an einem zentralen Ort, im besten Fall hier im Workflow, als Reminder eingerichtet werden, um regelmässig den Stand der Tools zu überprüfen und aktuell zu halten.

**Nutzen**

Vorteil ist die sehr einfachte Kommunikation und der Überblick, der allen Beteiligten geschaffen wird. Hierbei kann auch direkt evaluiert werden, ob der Flow für dieses Projekt angepasst werden muss. Daher zwingend vorab durchsprechen! Hilft Gestaltenden und mir, eine klare Struktur zu bewahren und Wartungsintervalle gesammelt an einem Ort zu verwalten. [Der aktuelle Workflow auf Trello](https://trello.com/w/userworkspaceaa1c57b2e62ef5488e9680dea9d99fce) kann hier eingesehen werden.

##  2. [Modulares Codesystem – bestehend](https://cloud.nadineprigann.de/index.php/s/9wKE26KQEHonm2F)

Dies ist bereits in Verwendung, sollte aber erweitert werden durch ausführlichere Kommentare und mit zukunftsfähigem Codingmethoden, die Support sicherstellen, wie bspw. [Progressive Enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement) / [Graceful Degradation](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation). Diese sowie der Styleguide (Gestaltungs- und Umsetzungsrichtlinien) sollten in regelmässigen Intervallen überprüft werden. Wichtig ist, dass die Komponenten (Bausteine, aus denen Code zusammengestellt wird) so neutral wie möglich gehalten werden, also keinen spezifischen Code enthalten. Dieser folgt erst in der konkreten Umsetzung. Als Schritt davor wird aktiv eine Strukturanalyse vorgenommen: anhand des Designs wird die Seite in kleine Bausteine zerlegt. Diese werden hierarchisch notiert und daraus dann die Struktur abgeleitet.

**Nutzen**

Helfen der Codebase und demnach auch mir, effizienter zu arbeiten und Ressourcen und Kosten zu reduzieren. Weniger Fehler und Probleme treten auf und durch die regelmässige Wartung bleibt der Code resilient und aktuell.

## 3. [Codebase – geplant](https://cloud.nadineprigann.de/index.php/s/mrozQKSnsWBk68m)

Es gibt bereits eine Boilerplate (Vorlage, Dummyprojekt) auf [GitHub](https://github.com/), welches den Startpunkt für jedes Projekt darstellt. Hierin gibt es bereits einige Komponenten, die häufig gebraucht werden wie Text und Seitenkopf. Von hier wird individuell umgesetzt. Innerhalb dieses Projektes braucht es also diese Codebase, in der alle Komponenten liegen, die verwendet werden sollen / können, praktisch die komplette Bandbreite. In dieser liegen logisch sortiert die Komponenten, mit denen baukastensystemartig die Anwendung zusammengestellt wird. Diese sollen einen separaten Ort erhalten, um die Struktur nicht zu verkomplizieren und beim build-process (finales Komplilieren und "Rendern" der Seite durch die Entwicklungsumgebung) und Launching (Hochladen und Onlineschalten der Site) systematisch ausgeschlossen werden zu können *> verringert Seitengrösse.* Weiter soll in einem bestimmten Intervall überprüft werden, ob die Struktur noch dem Styleguide entspricht und die [Progressive Enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)- und [Graceful Degradation](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation)-Deklarationen angepasst werden können / müssen. Hierzu können Reminder innerhalb des Workflows benutzt werden. Diese Grundlage wird also als Repository (Ordner auf GitHub, in dem das Projekt abgelegt wird) Teil einer umfassenden Boilerplate (Vorlage), die zur Sicherheit auf GitHub, in der Cloud und lokal gesichert und regelmässig gebackupped wird. Der Backend-Code wird durch die remote-Funktion aktuell gehalten: so wird das Ursprungsrepo meines Chefs, auf welches meines aufbaut, immer als source of truth (alles, was hier geändert wird, hat Vorrang und soll upgedated werden) behandelt > Updates dieses Codes werden direkt angewandt.

<c-text-block text="Zusätzlich soll es eine Liste geben, die beschreibt, wie bestimmte Funktionen umgesetzt werden, bspw. multiplanguage support, launching, etc. Wichtig: wie kann man Dinge wie ein 'ScrollTo' oder 'ScrollTrigger' als Vorlage einbinden? Gists?" label="feature" class="label-feature"/>

**Nutzen**

Vorteile sind der zentrale Punkt aller codetechnisch aktuellen Komponenten, die nicht mehr aus andereren Projekten zusammengesucht werden müssen. Hierbei droht die Gefahr, bereits überholte Strukturen zu benutzen, obsoleten Code weiter zu verwenden und Updates nicht zu berücksichtigen. Ausserdem vermeidet es den Zeitaufwand dieses Suchens. Er gliedert sich in die bereits bestehende Struktur (Boilerplate, Initiales Bereitstellen der Daten) ein und ist jederzeitz erweiter- und anpassbar. Dadurch hilft sie mir, meine Arbeit an einem Projekt und dadurch Ressourcen und Kosten zu reduzieren.

##  4. [Auftraggebende Person – bestehend](https://cloud.nadineprigann.de/index.php/s/jrFxTLFxMjLZqcX)

Die Auftraggebenden brauchen zwingend eine klare Kommunikation, was genau gemacht wird und in welchem zeitlichen Umfang das stattfinden wird. Hier bietet sich eine Art Zeitstrahl an. Dieser kann durch den oben beschriebenen zugänglichen Workflow erzielt werden. Wichtig ist hierbei, die Kommunikation technischer Natur verständlich zu halten und Rückfragemöglichkeiten zu etablieren. Vorab ist es ausserdem sehr wichtig, eine Art Beratungsbogen *(> dieser muss noch erstellt werden)* ausfüllen zu lassen, aus dem Ziel, Motivation und gewünschtes Produkt hervorgeht > «Maximalplanung» / Vision des Auftraggebenden herausfinden. Hierin muss klar beschrieben werden, dass vorab eine Beratung / Zielfindung stattfindet, damit die beste Lösung gefunden werden kann. Dies dauert und der Auftraggebende muss bereit sein, Zeit und Finanzen zu investieren. Weiter muss dieser vor Beginn der Umsetzung Content bereitstellen / aufarbeiten / erstellen. Falls dieser keine geeigneten Mittel hierzu hat, wird mein Netzwerk aktiv *> Liste mit Kollaborierenden erstellen: Netzwerk Uni, Ex-Kollegen, LinkedIn*

**Nutzen**

Kann hier im besten Fall wieder zum Netzwerk werden und generiert Projekte, die ich wiederum als Werbung für weitere Autraggebende + Kollaborationspartner nutzen kann. Ausserdem steigt hierdurch mein Erfahrungslevel und Workflow und Codebase können so immer weiter wachsen und so resilienter werden. Auftraggebende können mich auch weitervermitteln. Durch Arbeit mit nachhaltigen Auftraggebenden bleibe ich motiviert und psychisch stabil. ;)

## 5. [Gestaltende – teilweise bestehend](https://cloud.nadineprigann.de/index.php/s/q3PbX7m5fpbFqSz)

Diese Rolle braucht klare Vorstellungen, ein Ziel und echte Daten, mit denen ein Projekt gestaltet werden kann; ausserdem genug Zeit, um ein gutes und resilientes Design zu erstellen. Weiter ein zugängliches Medium, welches von Programmierenden benutzt werden kann *> checken: Pastel, InVision, Figma selbst, auch XD geht als Feedback-Tool, allerdings nicht 100% ethisch, da Adobe* Hierin findet für den Review via Kommentare auch direkt zentrales Feedback von Auftraggebenden und Programmierenden statt. Ausserdem muss eine klare und finale Abnahme des Designs stattfinden, welches die Basis für das Back- und Frontend bildet (nachträgliche Änderungen sind sehr zeit- und ressourcenraubend). Wichtige Outputs des Design sollen sein:

- simples und klares Design
- Beachtung der [Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) (a11y)-Guidelines, auch Kontraste
- mobile- und desktop-Design
- energiesparendes Design (dunkle Farben)
- setzt Video / Foto / externe Ressourcen sinnvoll ein
- bedenkt Daten und deren lifecycle im Projekt: was passiert, wenn bspw. Events in der Vergangenheit liegen oder Content obsolet wird?

**Nutzen**

Vorteile sind eine klare zugängliche Designplattform für einfaches und schnelles Feedback für alle Beteiligten. Wenn extern, kann wieder zum Netzwerk werden und durch Gestaltung viele der ethischen Punkte umsetzen. Ausserdem kann durch die Gestaltung vieler use cases die Kommunikation + Feedbackrunden vereinfacht und reduziert werden.

## 6. [Ich – bestehend](https://cloud.nadineprigann.de/index.php/s/2winkpM5TmHLfRf)

Sehr wichtig ist mir für mich die Achtung meiner Zone 0.0 und die Einteilung meiner Kräfte. Ausserdem die stressfreie Arbeitsweise und genügend Möglichkeiten, mich emotional und physisch wieder aufzuladen. Weiter ein gutes Netzwerk, welches noch ausgebaut werden muss *> freelancer-Plattformen + LinkedIn nutzen*. Wichtig ist auch die Abklärung vorab, was die Auftraggebenden brauchen. Perspektivisch könnte ich auch durch die Spezialisierung auf digitalen permakulturellen Workflow als Sustainable Project Manager oder Moderatorin arbeiten. Nachhaltig meint in diesem Kontext: ressourcen-, daten-, [a11y](https://developer.mozilla.org/en-US/docs/Web/Accessibility) und inhaltsbezogen arbeiten. Diese Werte + Ethik des Workflows sind in einem Manifest / einer policy festgehalten und auf meiner Website veröffentlicht.

**Nutzen**

Durch diese Outputs kann ich mich resilienter positionieren und werde dadurch weniger anfällig für Schwankungen in der Auftragslage.

## **Fazit**

Generell wird klar, dass der wichtigste Input aller Elemente / Rollen die klare Kommunikation sowie ein zugänglicher Workflow ist, da es sich meistens um mehrere Akteure handelt. Vorab wird in der Beratung gebrieft, wie der Prozess läuft. Es muss allen Akteuren immer möglich sein, den aktuellen Stand des Projektes einzusehen und Fragen zu stellen. Hierzu braucht es ein zentrales Tool, auf das jeder Zugriff hat (ohne Account, Login, etc.), das mit bekannten bzw. leicht verständlichen Projektmanagementsystemen arbeitet. Hierdurch kann unnötige und intransparente Kommunikation vermieden werden. Weiter sollte es im besten Fall ein Tool sein, welches bereits in Benutzung ist. Feedbackrunden sollen für das Design (evtl. auch für Programmierung) in einem Dokument stattfinden, das allen zugänglich ist. Bevor etwas umgesetzt wird, muss dringend eruiert werden, was genau gebraucht wird, welche Ressourcen schon da sind und das Erstgespräch muss darauf vorbereiten, dass dies ein Miteinander und ein Prozess ist, der ggf. länger dauern kann als «konventionelle» Planungsprozesse im digitalen Bereich. Auch der Workflow muss durchgesprochen werden. Dieser Beratungsprozess kann auch separat als Leistung angeboten werden. Es muss auch festgehalten werden, dass viel schon da ist und «nur» angepasst  / erweitert werden muss.

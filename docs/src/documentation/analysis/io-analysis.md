# Input / Output-Analyse

Mit dieser Analyse habe ich 6 Hauptelemente untersucht, um deren Wechselwirkungen in Bezug auf die anderen Elemente herauszuarbeiten. Hierdurch kann man auch fehlende Effekte oder Elemente aufzuspüren. Die Ergebnisse werden im folgenden kurz vorgestellt. Konkrete Analogie? in Klammern kurz ein gebräuchlicheres Wort?

1. <c-external-link url="https://cloud.nadineprigann.de/index.php/s/ZjdKmRqptRWp4FS" label="Workflow – geplant"/>

Dieser braucht einen zentralen Ort, an dem er für alle Akteure jederzeit zugänglich ist. Der Workflow sollte nach jedem abgeschlossenen Schritt aktualisiert werden und ca. 1x pro Woche komplett überprüft werden. Wichtig ist auch die Möglichkeit, Abhängigkeiten wie «auf Feedback warten» visualisieren zu können. Generell sollten alle Intervalle / Reviews an einem zentralen Ort, im besten Fall hier im Workflow, als Reminder eingerichtet werden, um regelmässig den Stand der Tools zu überprüfen und aktuell zu halten. Als Tool ist GitHub ein guter Kandidat, da hier der Workflow als Kanban-Flow erfasst werden kann. Weiter könnte er Teil der Boilerplate sein, die die Grundlage eines jeden Projektes bildet. Dies, sowie Accessibility muss noch überprüft werden, auch wo und wie GitHub seine Server hostet > renewable energy. Ggf. eine nachhaltige Alternative finden. Dies ist ein sehr aufwendiger Prozess, der viel Zeit in Anspruch nehmen kann. Deshalb darf er nicht zu feingliedrig gestaltet werden.

**Relation zu Elementen**
Vorteil ist die sehr einfachte Kommunikation und der Überblick, der allen Beteiligten geschaffen wird. Hierbei kann auch direkt evaluiert werden, ob der Flow für dieses Projekt angepasst werden muss. Daher zwingend vorab durchsprechen!

Hilft Gestaltenden und mir, eine klare Struktur zu bewahren und Wartungsintervalle gesammelt an einem Ort zu verwalten.

[Workflow auf Trello](https://trello.com/w/userworkspaceaa1c57b2e62ef5488e9680dea9d99fce)

2. <c-external-link url="https://cloud.nadineprigann.de/index.php/s/emodm6Tg6cbtZYY" label="Modulares Codesystem – bestehend"/>

Dies ist bereits in Verwendung, sollte aber erweitert werden durch ausführlichere Kommentare und progressive enhancement / graceful degradation. Diese sowie der Styleguide sollten in regelmässigen Intervallen überprüft werden. Wichtig ist, dass die Komponenten so neutral wie möglich gehalten werden, also keinen spezifischen Code enthalten. Dieser folgt erst in der konkreten Umsetzung. Als Schritt davor wird aktiv eine Strukturanalyse vorgenommen: anhand des Designs wird die Seite in kleine Bausteine zerlegt. Diese werden hierarchisch notiert und daraus dann die Struktur abgeleitet.

**Relation zu Elementen**
Helfen der Codebase und demnach auch mir, effizienter zu arbeiten und Ressourcen und Kosten zu reduzieren. Weniger Fehler und Probleme treten auf und durch die regelmässige Wartung bleibt der Code resilient und aktuell.

3. <c-external-link url="https://cloud.nadineprigann.de/index.php/s/aZ8BMwGFyk8RkDs" label="Codebase – geplant"/>

Es gibt bereits eine Boilerplate (Vorlage, Dummyprojekt) auf GitHub, welches den Startpunkt für jedes Projekt darstellt. Hierin gibt es bereits einige Komponenten, die häufig gebraucht werde wie Text und Seitenkopf. Von hier wird individuell umgesetzt. Innerhalb dieses Projekten braucht es also diese Codebase, in der alle Komponenten liegen, die verwendet werden sollen / können, praktisch die komplette Bandbreite. In dieser liegen logisch sortiert die Komponenten, mit denen baukastensystemartig die Anwendung zusammengestellt wird. Diese sollen einen separaten Ort erhalten, um die Struktur nicht zu verkomplizieren und beim build-process und launching systematisch ausgeschlossen werden zu können > verringert Seitengrösse. Weiter soll in einem bestimmten Intervall überprüft werden, ob die Struktur noch dem Styleguide entspricht und die Progressive Enhancement- und Graceful Degradation-Deklarationen angepasst werden können / müssen. Hierzu können Reminder innerhalb des Kanban-Workflows benutzt werden. Diese Base wird also als Repository Teil einer umfassenden Boilerplate, die zur Sicherheit auf GitHub, in der Cloud und lokal gesichert und regelmässig gebackupped wird. Der Backend-Code wird durch die remote-Funktion aktuell gehalten: so wird das Ursprungsrepo meines Chefs, auf welches meines aufbaut, immer als source of truth behandelt > Updates dieses Codes werden direkt angewandt.

<c-text-block text="Zusätzlich soll es eine Liste geben, die beschreibt, wie bestimmte Funktionen umgesetzt werden, bspw. multiplanguage support, launching, etc. Wichtig: wie kann man Dinge wie ein *ScrollTo* oder *ScrollTrigger* als Vorlage einbinden? Gists?" label="feature" class="label-feature"/>

Relation zu Elementen
Vorteile sind der zentrale Punkt aller codetechnisch aktuellen Komponenten, die nicht mehr aus andereren Projekten zusammengesucht werden müssen. Hierbei droht die Gefahr, bereits überholte Strukturen zu benutzen, obsoleten Code weiter zu verwenden und Updates nicht zu berücksichtigen. Ausserdem vermeidet es den Zeitaufwand dieses Suchens. Er gliedert sich in die bereits bestehende Struktur (Boilerplate, Initiales Bereitstellen der Daten) ein und ist jederzeitz erweiter- und anpassbar. Dadurch hilft sie mir, meine Arbeit an einem Projekt und dadurch Ressourcen und Kosten zu reduzieren.

4. <c-external-link url="https://cloud.nadineprigann.de/index.php/s/wPj5pN2XE8ZXPsA" label="Auftraggebende Person – bestehend"/>

Die Auftraggebenden brauchen zwingend eine klare Kommunikation, was genau gemacht wird und in welchem zeitlichen Umfang das stattfinden wird. Hier bietet sich eine Art Zeitstrahl an. Dieser kann durch den oben beschriebenen zugänglichen Workflow erzielt werden. Wichtig ist hierbei, die Kommunikation technischer Natur verständlich zu halten und Rückfragemöglichkeiten zu etablieren. Vorab ist es ausserdem sehr wichtig, eine Art Beratungsbogen *(> dieser muss noch erstellt werden)* ausfüllen zu lassen, aus dem Ziel, Motivation und gewünschtes Produkt hervorgeht > «Maximalplanung» / Vision des Auftraggebenden herausfinden. Hierin muss klar beschrieben werden, dass vorab eine Beratung / Zielfindung stattfindet, damit die beste Lösung gefunden werden kann. Dies dauert und der Auftraggebende muss bereit sein, Zeit und Finanzen zu investieren. Weiter muss dieser vor Beginn der Umsetzung Content bereitstellen / aufarbeiten / erstellen. Falls dieser keine geeigneten Mittel hierzu hat, wird mein Netzwerk aktiv *> Liste mit Kollaborierenden erstellen: Netzwerk Uni, Ex-Kollegen, LinkedIn*

Relation zu Elementen
Kann hier im besten Fall wieder zum Netzwerk werden und generiert Projekte, die ich wiederum als Werbung für weitere Autraggebende + Kollaborationspartner nutzen kann. Ausserdem steigt hierdurch mein Erfahrungslevel und Workflow und Codebase können so immer weiter wachsen und so resilienter werden. Auftraggebende können mich auch weitervermitteln. Durch Arbeit mit nachhaltigen Auftraggebenden bleibe ich motiviert und psychisch stabil. ;)

5. <c-external-link url="https://cloud.nadineprigann.de/index.php/s/RZy3tWsbjnM27De" label="Gestaltende – teilweise bestehend"/>

Diese Rolle braucht klare Vorstellungen, ein Ziel und echte Daten, mit denen ein Projekt gestaltet werden kann; ausserdem genug Zeit, um ein gutes und resilientes Design zu erstellen. Weiter ein zugängliches Medium, welches von Programmierenden benutzt werden kann *> checken: Pastel, InVision, Figma selbst, auch XD geht als Feedback-Tool, allerdings nicht 100% ethisch, da Adobe* Hierin findet für den Review via Kommentare auch direkt zentrales Feedback von Auftraggebenden und Programmierenden statt. Ausserdem muss eine klare und finale Abnahme des Designs stattfinden, welches die Basis für das Back- und Frontend bildet (nachträgliche Änderungen sind sehr zeit- und ressourcenraubend). Wichtige Outputs des Design sollen sein:

- simples und klares Design
- Beachtung der Accessibility (a11y)-Guidelines, auch Kontraste
- mobile- und desktop-Design
- energiesparendes Design (dunkle Farben)
- setzt Video / Foto / externe Ressourcen sinnvoll ein
- bedenkt Daten und deren lifecycle im Projekt: was passiert, wenn bspw. Events in der Vergangenheit liegen oder Content obsolet wird?

Relation zu Elementen
Vorteile sind eine klare zugängliche Designplattform für einfaches und schnelles Feedback für alle Beteiligten. Wenn extern, kann wieder zum Netzwerk werden und durch Gestaltung viele der ethischen Punkte umsetzen. Ausserdem kann durch die Gestaltung vieler use cases die Kommunikation + Feedbackrunden vereinfacht und reduziert werden.

6. <c-external-link url="https://cloud.nadineprigann.de/index.php/s/DtRzEoJyPBZXekP" label="Ich – bestehend"/>

Sehr wichtig ist mir für mich die Achtung meiner Zone 0.0 und die Einteilung meiner Kräfte. Ausserdem die stressfreie Arbeitsweise und genügend Möglichkeiten, mich emotional und physisch wieder aufzuladen. Weiter ein gutes Netzwerk, welches noch ausgebaut werden muss *> freelancer-Plattformen + LinkedIn nutzen*. Wichtig ist auch die Abklärung vorab, was die Auftraggebenden brauchen. Durch die Spezialisierung auf digitalen permakulturellen Workflow kann ich auch als Sustainable Project Manager oder Moderatorin arbeiten. nachhaltig meint: energywise, datawise, a11ywise, contentwise. Diese Werte + Ethik des Workflows sind in einem Manifest / einer policy festgehalten und auf meiner Website veröffentlicht.

Relation zu Elementen
Durch diese Outputs kann ich mich resilienter positionieren und werde dadurch weniger anfällig für Schwankungen in der Auftragslage.

**Fazit**
Generell wird klar, dass der wichtigste Input aller Elemente / Rollen die klare Kommunikation sowie ein zugänglicher Workflow ist, da es sich meistens um mehrere Akteure handelt. Vorab wird gebrieft in Beratung, wie der Prozess läuft. Es muss alles Akteuren immer möglich sein, den aktuellen Stand des Projektes einzusehen und Fragen zu stellen. Hierzu braucht es ein zentrales Tool, auf das jeder Zugriff hat (ohne Account, Login, etc.), das mit bekannten bzw. leicht verständlichen Projektmanagementsystemen arbeitet. Hierdurch kann unnötige und intransparente Kommunikation vermieden werden. Weiter sollte es im besten Fall ein Tool sein, welches bereits in Benutzung ist. Feedbackrunden sollen für das Design (evtl. auch für Programmierung) in einem Dokument stattfinden, das allen zugänglich ist. Bevor etwas umgesetzt wird, muss dringend eruiert werden, was genau gebraucht wird, welche Ressourcen schon da sind und das Erstgespräch muss darauf vorbereiten, dass dies ein Miteinander und ein Prozess ist, der ggf. länger dauern kann als «konventionelle» Planungsprozesse im digitalen Bereich. Auch der Workflow muss durchgesprochen werden. Dieser Beratungsprozess kann auch separat als Leistung angeboten werden. Es muss auch festgehalten werden, dass viel schon da ist und «nur" angepasst  / erweitert werden muss.

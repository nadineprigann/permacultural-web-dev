# Frontend

Für das Frontend wird das JavaScript-Framework [Vue.js](https://vuejs.org/) verwendet, welches die neuesten JavaScript-Technologien verwendet, [um Webprojekte so effizient und resilient wie möglich](https://vuejs.org/guide/introduction.html#single-file-components) umzusetzen. Ein grundlegendes Konzept dieses Frameworks ist das Konzept der [Singe File Components](https://vuejs.org/guide/scaling-up/sfc.html), die einen modularen Aufbau des Projektes erlauben. Dies spiegelt sich auch im Code wider, welcher hierdurch als einzelne, möglichst neutrale Komponenten umgesetzt und je nach Bedarf wie Lego zusammengesetzt und über Projekte hinweg wiederverwendet werden kann.

##  Initial Interview

Beim Erstgespräch werden vor Allem technische Details besprochen wie bspw. bestehende Hostingverträge und deren Übernahme, Austausch von Zugangsdaten und / oder der Abschluss eines neuen Hostings.

Es gibt einige Kriterien, die erfüllt sein müssen, damit der Hoster als nachhaltig eingestuft werden kann. Eine umfassende Sammlung dieser Kriterien findet sich im [Ratgeber für grünes Webhosting](https://utopia.de/ratgeber/gruenes-webhosting-oekostrom/) von Utopia. Basierend auf dieser Liste waren für mich in der engeren Auswahl [BioHost](https://www.biohost.de/) und [GreenSta](https://ssl.greensta.de/). Eine weitere gute Option scheint  [Infomaniak](https://www.infomaniak.com/de/hosting/web-und-mail/webhosting) zu sein.

Diese Liste wird von Zeit zu Zeit aktualisiert. Wenn du weitere Optionen kennst, [lass es mich wissen](mailto:news@nadineprigann.de)!

##  Strukturelle Analyse

Auf Grundlage des Designs und Backends wird erst eine Skizze der Komponentenstruktur erstellt. Hier wird evaluiert, welche Komponenten wie abufgebaut werden müssen, damit sie an so vielen Orten wie möglich wiederverwendet werden können. Wichtig ist hierbei der Blick auf die funktionelle Umsetzung. Wenn diese ähnlich oder gleich funktioniert, ist es wahrscheinlich, dass eine Komponente erstellt werdne kann, die an zwei unterschiedlichen Stellen im Code benutzt werden kann. Gestalterische Unterschiede können meistens via `props` gelöst werden. Sollten die Unterschiede aber einen gewissen Komplexitätsgrad aufweisen, sind separate Komponenten empfehlenswert. Getrennte Komponenten sind auf jeden Fall zu verwenden bei:

- unterschiedlicher Funktion
- grundverschiedenes Design
- komplexe Transitions

##  Datenabruf

Diese Struktur wird nun mit den Codekomponenten erstellt. Hierfür werden diese aus der Codebase eingesetzt oder komplett neu erstellt. Bereits bestehender Code aus vorherigen Projekten kann und soll wiederverwendet werden. Ziel dieses Schrittes ist es, alle Daten, die im Backend abgefüllt werden können, im Frontend sichtbar zu machen und somit ihre Funktionalität zu etablieren. Die Designvorgaben und hierdurch das Layout sollten hier bereits berücksichtigt werden, da dies oft bereits in der HTML-Struktur berücksichtigt werden muss.

##  Layout

Nun folgt die Erstellung eines groben Layouts mithilfe von [CSS (Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS). In diesem Schritt werden responsive Layoutkonzepte erstellt und ggf. die HTML-Struktur der Komponenten bei Bedarf überarbeitet.

##  Navigation

Zusammen mit dem Layout gehört die Navigation zu den wichtigsten Elementen des Projektes, da sie die intuitive Bedienung der Seite ermöglicht. Hierbei ist es besonders wichtig, die Seitenstruktur des Projektes vom Inhalt abzuleiten und diesen klar zu strukturieren. Die Darstellung sollte eine möglichst einfach verständliche und an den best practices des Webdesigns orientierte Gestaltung zur Grundlage haben und dieselben Funktionsprinzipen über alle Bildschirmgrössen hinweg aufweisen. Ein wichtiges zu beachtendes Konzept ist hier das [mobile first principle](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first).

## Funktionalität

In diesem Schritt werden die Funktionen der Seite umgesetzt. Hierzu zählen zum Beispiel sich öffnende und schliessende Overlays und Sektionen ([Akkordeons](https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html)), Filter- und Sortierungsfunktionen, Formulare, etc. Diese werden rein funktionell nach Vorgaben u.a. der [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/) und des [WAI-ARIA-Guides](https://www.w3.org/TR/wai-aria-1.2/) umgesetzt, um bestmögliche accessiblity zu ermöglichen. Hilfe zu dieser Umsetzung findet sich im [Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) der [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/).

##  Typografie

Die Schriftdatei oder der Link zur Schrift wird eingebunden und die im Design definierten Schriftgrössen und Gestaltungsparameter festgelegt. Ausgangspunkt hierfür ist die Lauftextschrift auf mobile devices, auf Grundlage derer alle folgenden Schriftgrössen deklariert werden (em-basiert). Auch Schriftschnitt und -gewicht wird explizit als Variable definiert, um diese so flexibel wie möglich einzusetzen.

##  Horizontale Abstände

Nachdem die Schriftgrössen definiert sind, folgen die horizontalen Abstände. Zu beachten ist hier, dass diese Definition nicht auf dem Element, welches eine Schriftgrössendefinition zugewiesen bekommen hat, stattfindet, sondern auf einem Wrapper-Element, um konsistente Abstände über verschiedene Schriftgrössen hinweg zu realisieren.

##  Vertikale Abstände

Im Anschluss folgen die vertikalen Abstände, die nach dem gleichen Prinzip realisiert werden. Hierzu zählen auch `max-width`s, Tabellenweiten und deren maximale Breiten.

##  Icons

Generell sollten textliche Linkinhalte verwendet werden um eine möglichst gute accessibility zu garantieren, denn screen readers lesen in diesem Fall den Text vor, der bei wohlüberlegter Formulierung aussagekräftiger ist als ein Icon. Sollten dennoch Icons verwendet werden, sollten Unicode-Zeichen oder bei einer neu erstellten Schrift die Zeichen in die Schrift als Glyphen eingebunden werden. So kann sichergestellt werden, dass keine weitere externe Ressource geladen werden muss.

Wenn das nicht möglich ist, dann sollten [SVG's](https://developer.mozilla.org/en-US/docs/Web/SVG) so sparsam wie möglich eingesetzt werden. Beispielsweise kann für die Navigationspfeile von Slideshows dassselbe Icon verwendet werden; es muss nur eines via CSS gedreht werden.

Sollten verschiedene Farbvarianten des selben Icons notwendig sein, kann dies ebenfalls mit CSS und diesem [CSS Filter Generator](https://codepen.io/sosuke/pen/Pjoqqp)
realisiert werden.
 Wichtig ist ausserdem grundsätzlich, die SVG's zu komprimieren und zu optimieren. Hierbei werden, beispielsweise mit [SVG OMG](https://jakearchibald.github.io/svgomg/), unnötige Metadaten entfernt und so signifikant Dateigrösse eingespart.

##  Links, focus, Farben

Abschliessend werden die Farben gemäss Design eingebettet und Links, Buttons etc. sowie deren verschiedene Stati definiert. Es muss zwingend auf eine gute accessibility geachtet werden. Leitfäden sind zum Beispiel die [:focus-Sektion von MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) und der [WCAG Contrast Checker](https://contrastchecker.com/).

## Zwischenevaluation

Wenn diese Punkte, sowie extensives [Cross-Browser-Testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing), umgesetzt wurden, ist die erste Umsetzungsphase abgeschlossen und das Projekt ist nun zu ca. 80% fertig. In diesem Schritt kann nun eine erste Version veröffentlicht werden, mit derer die Auftraggebenden ihren abgefüllten Inhalt mit dem finalen Design beurteilen können. Häufig werden in diesem Schritt nochmal etwaige Bugs oder unsauber funktionierende edge cases sichtbar, die im Folgeschritt angepasst werden können.

Um eine Live-Beurteilung zu ermöglichen, wird das Projekt auf einer Subdomain, bspw. `dev.domain.com`, gehostet. Später, wenn das Feedback eingebunden ist, kann auf die eigentliche Domain umgelenkt werden.

## Optimierung

Die Ergebnisse der Evaluation des Zwischenstandes werden in diesem Schritt umgesetzt. Auch Optimierungen der eingebundenen Medien, bspw. das [`sizes`-Atrribut](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes), zählen hierzu sowie, falls nötig, eine grundlegende [SEO-Optimierung](https://medium.com/startup-grind/seo-is-not-hard-a-step-by-step-seo-tutorial-for-beginners-that-will-get-you-ranked-every-single-1b903b3ab6bb).

## Finale Abnahme

Wenn alle Schritte von allen Beteiligten abgenommen sind, kann die Seite final auf ihre Zieldomain geschalten werden.

## Bugfixing

Die ersten zwei Wochen nach dem Launch sind eine leicht vulnerable Zeit, in der immer wieder unerwartete Fehler auftreten oder Anpassungen notwendig werden, die vorher noch nicht ersichtlich waren. Dies können zum Beispiel Dinge wie Umbrüche bei langen Texten, unerwartet lange Ladezeiten bei viel Inhalt, Datumsformatierung etc. sein. Deshalb ist es wichtig, dies bei der Projektplanung der Anschlussprojekte im Hinterkopf zu behalten und etwas Puffer für diese Phase einzubauen.

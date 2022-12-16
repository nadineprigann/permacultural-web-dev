# Frontend

Vue.js, modulare Komponenten, ...

##  Strukturelle Analyse

Auf Grundlage des Designs und Backends wird erst eine Skizze der Komponentenstruktur erstellt. Hier wird evaluiert, welche Komponenten wie abufgebaut werden müssen, damit sie an so vielen Orten wie möglich wiederverwendet werden können. Wichtig ist hierbei der Blick auf die funktionelle Umsetzung. Wenn diese ähnlich oder gleich funktioniert, ist es wahrscheinlich, dass eine Komponente erstellt werdne kann, die an zwei unterschiedlichen Stellen im Code benutzt werden kann. Gestalterische Unterschiede können meistens via props gelöst werden. Sollten die Unterschiede aber einen gewissen Komplexitätsgrad aufweisen, sind separate Komponenten empfehlenswert. Getrennte Komponenten sind auf jeden Fall zu verwenden bei:

- unterschiedlicher Funktion
- grundverschiedenes Design
- komplexe Transitions

##  Datenabruf

Diese Struktur wird nun mit den Codekomponenten erstellt. Hierfür werden diese aus der Codebase eingesetzt oder komplett neu erstellt. Bereits bestehender Code aus vorherigen Projekten kann und soll wiederverwendet werden. Ziel dieses Schrittes ist es, alle Daten, die im Backend abgefüllt werden können, im Frontend sichtbar zu machen und somit ihre Funktionalität zu etablieren. Die Designvorgaben und hierdurch das Layout sollten hier bereits berücksichtigt werden, da dies oft bereits in der HTML-Struktur berücksichtigt werden muss.

##  Layout

Nun folgt die Erstellung eines groben Layouts mithilfe von CSS. In diesem Schritt werden responsive Layoutmuster erstellt und ggf. die HTML-Struktur der Komponenten bei Bedarf überarbeitet.

##  Navigation

## Funktionalität

##  Typografie

##  Horizontale Abstände

##  Vertikale Abstände

##  Icons

always use unicode or symbols within font (-> ask designer) for icons

if not possbile, use SVG's as less as possible: use one SVG for slider arrows and rotate the other via CSS

optimize and compress them to remove redundant information -> [SVG OMG](https://jakearchibald.github.io/svgomg/)

for coloring SVG's use the fill-property or CSS filters -> [CSS Filter Generator](https://codepen.io/sosuke/pen/Pjoqqp)

##  Links, focus, Farben

## Zwischenevaluation

When frontend to 60 to 95% done, publish to dev subdomain to enable the client to see changes + fill content

Research for sustainable web hosters in Germany

Most of the time, there will already be a webspace in use but most likely not a sustainable one. There are some criteria that have to be met in order for the hoster to be classified as sustainable. I found the ones from [Utopia](https://utopia.de/ratgeber/gruenes-webhosting-oekostrom/) to be the most comprehensive collection of these. Based on their list and criteria, my finalists were [BioHost](https://www.biohost.de/) and [GreenSta](https://ssl.greensta.de/). Another good option is [Infomaniak](https://www.infomaniak.com/de/hosting/web-und-mail/webhosting).

This list will be updated from time to time. If you know another one that might fit, please let me know!

## Optimierung

## Finale Abnahme

Check all parameters, functionalities and spacings. When all done, then launch project as described here.
Rule that says as soon as this card is moved to done, set due date of launching on board backend to 3 days

## Bugfixing

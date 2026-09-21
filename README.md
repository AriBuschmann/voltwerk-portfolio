# VOLTWERK

VOLTWERK ist eine vollständig fiktive Konzeptwebsite für ein regionales Unternehmen im Bereich Photovoltaik und Energielösungen. Das Projekt wurde als Portfolioarbeit entwickelt und ist **kein reales Kundenprojekt**. Alle dargestellten Personen, Projekte, Bewertungen, Kennzahlen, Adressen und Geschäftsdaten sind erfunden.

## Projektziel

Die Website zeigt, wie sich conversion-orientiertes Webdesign, redaktionelle Gestaltung und eine robuste Frontend-Architektur für einen deutschen mittelständischen Betrieb verbinden lassen. Im Mittelpunkt stehen klare Informationswege, eine vertrauenswürdige visuelle Sprache und eine bewusst gestaltete mobile Nutzung.

## Designansatz

Die Gestaltung verbindet dunkles Graphit, warmes Weiß und ein kontrolliert eingesetztes Energiegrün. Großzügige Typografie, asymmetrische Bildaufteilungen, redaktionelle Projektlayouts und reduzierte Linienraster erzeugen Rhythmus, ohne in typische SaaS- oder KI-Landingpage-Muster zu fallen. Zehn reale, lizenzsicher nutzbare Unsplash-Fotografien prägen die Bildwelt; Herkunft und Lizenzhinweise sind in [IMAGE_SOURCES.md](./IMAGE_SOURCES.md) dokumentiert. Für die Website liegen die Motive lokal als optimierte WebP-Dateien in mehreren responsiven Größen vor.

## Technologie

- Next.js App Router
- React und TypeScript
- Tailwind CSS als Basis, ergänzt durch projektspezifische Design-Tokens und CSS
- Lucide Icons
- Radix-basierte UI-Primitiven für Accordion und Checkbox
- Vinext/Vite-Build für die Cloudflare-kompatible Sites-Laufzeit

## Architektur

Die Anwendung trennt wiederverwendbare globale Bausteine, interaktive Client-Komponenten und serverseitig gerenderte Seiten. Inhalte wie Projekte, Leistungen und FAQs liegen in strukturierten Datenmodellen. Nur Navigation, Filter, Rechner, Accordion und Formular benötigen clientseitigen Zustand.

## Zentrale Funktionen

- Responsive Navigation mit tastaturbedienbarem Mobilmenü
- Sechs eigenständige Routen sowie 404-, Impressums- und Datenschutzseite
- Filterbare Projektübersicht
- Interaktiver Solarrechner mit transparenten Annahmen
- Barrierearmes FAQ-Accordion
- Kontaktformular mit Inline-Validierung und lokal simulierter Erfolgsmeldung
- Seitenbezogene Metadaten, Sitemap, Robots-Konfiguration und individuelles Favicon

## Responsive Design

Die Layouts sind gezielt für Mobilgeräte, Tablets und große Desktop-Ansichten ausgearbeitet. Hero, Statistikleiste, redaktionelle Bild-Text-Flächen, Projektkarten, Rechner, Formulare und Footer wechseln an ihren jeweiligen Breakpoints in eigenständige Kompositionen statt nur untereinander gestapelt zu werden.

## Barrierefreiheit

Semantische Landmarken, eine konsistente Überschriftenhierarchie, sichtbare Fokuszustände, ausreichend große Touch-Ziele, aussagekräftige Alternativtexte und zugängliche Formularmeldungen sind Bestandteil der Umsetzung. Bewegungen werden bei aktivierter Systemeinstellung `prefers-reduced-motion` reduziert.

## Leistung und SEO

Die Website nutzt Server Components, wo kein Browserzustand benötigt wird. Lokale WebP-Dateien mit responsiven `srcset`-Varianten vermeiden unnötig große Bildübertragungen. JavaScript bleibt auf die notwendigen Interaktionen begrenzt. Alle Hauptseiten besitzen deutsche Titel, Beschreibungen, kanonische URLs und seitenbezogene Social-Metadaten; Sitemap, Robots-Regeln und strukturierte interne Verlinkungen ergänzen die SEO-Basis.

## Lokale Installation

Voraussetzung ist Node.js ab Version 22.13.

```bash
npm install
npm run dev
```

Anschließend ist die lokale Adresse aus der Terminalausgabe im Browser erreichbar.

## Produktionsbuild

```bash
npm run lint
npm run build
```

## KI-gestützter Workflow

KI wurde transparent für Ideenfindung, Bildkonzeption und Implementierungsunterstützung eingesetzt. Informationsarchitektur, visuelle Richtung, Komponentenaufteilung, Texte, Interaktionsdetails und responsive Entscheidungen wurden anschließend als zusammenhängendes Frontend-Projekt geprüft, verfeinert und qualitätsgesichert. Die Arbeit soll zeigen, wie KI Entwicklung beschleunigen kann, ohne gestalterische und technische Verantwortung zu ersetzen.

## Rechtlicher Hinweis

Dieses Repository dient ausschließlich der Portfolio-Demonstration. VOLTWERK ist kein existierendes Unternehmen und bietet keine realen Leistungen an.

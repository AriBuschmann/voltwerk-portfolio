export type ProjectCategory = "Photovoltaik" | "Speicher" | "Wallbox";
export type Project = { title: string; location: string; category: ProjectCategory; size: string; storage?: string; description: string; image: string };

export const projects: Project[] = [
  { title: "Satteldach mit Südausrichtung", location: "Gütersloh", category: "Photovoltaik", size: "11,2 kWp", storage: "10 kWh Speicher", description: "Ruhige, dachparallele Belegung für ein saniertes Einfamilienhaus mit hohem Eigenverbrauch.", image: "/images/hero-home.png" },
  { title: "Energie für Haus und E-Auto", location: "Paderborn", category: "Wallbox", size: "13,8 kWp", storage: "11 kWh Speicher", description: "Abgestimmtes System aus Photovoltaik, Speicher und dynamisch gesteuerter Wallbox.", image: "/images/energy-system.png" },
  { title: "Klare Fläche, starke Leistung", location: "Bielefeld", category: "Photovoltaik", size: "9,6 kWp", description: "Schwarz gerahmte Module, exakt auf die Dachgeometrie und den Strombedarf abgestimmt.", image: "/images/solar-installation.png" },
  { title: "Mehr Eigenverbrauch im Alltag", location: "Münster", category: "Speicher", size: "8,4 kWp", storage: "8 kWh Speicher", description: "Kompakte Speicherlösung für Abendverbrauch, Wärmepumpe und verlässliche Energiereserven.", image: "/images/energy-system.png" },
  { title: "Solaranlage für den Familienbetrieb", location: "Soest", category: "Photovoltaik", size: "24,5 kWp", description: "Leistungsorientierte Dachplanung für einen kleinen Handwerksbetrieb mit Tageslastprofil.", image: "/images/solar-installation.png" },
  { title: "Sonnenstrom für zwei Fahrzeuge", location: "Detmold", category: "Wallbox", size: "15,1 kWp", storage: "13 kWh Speicher", description: "Lastmanagement und zwei Ladepunkte für planbare Mobilität aus eigener Erzeugung.", image: "/images/hero-home.png" },
];

export const faqs = [
  { question: "Lohnt sich Photovoltaik noch?", answer: "Für viele Eigenheime ja. Entscheidend sind Dachfläche, Stromverbrauch, Investitionskosten und der Anteil des Solarstroms, den Sie selbst nutzen. Wir betrachten diese Faktoren gemeinsam und rechnen realistisch statt pauschal." },
  { question: "Wie groß sollte meine Anlage sein?", answer: "Die sinnvolle Größe richtet sich nicht nur nach dem aktuellen Verbrauch. Dachpotenzial, Wärmepumpe, E-Mobilität und künftige Veränderungen gehören ebenfalls in die Planung." },
  { question: "Wie lange dauert die Installation?", answer: "Die Montage eines typischen Einfamilienhauses ist häufig in wenigen Arbeitstagen abgeschlossen. Netzbetreiber, Zählertausch und individuelle bauliche Anforderungen können den Gesamtzeitraum beeinflussen." },
  { question: "Brauche ich einen Batteriespeicher?", answer: "Nicht zwingend. Ein Speicher kann den Eigenverbrauch deutlich erhöhen, sollte aber passend dimensioniert sein. Wir vergleichen Varianten mit und ohne Speicher transparent für Ihr Nutzungsprofil." },
  { question: "Kann ich eine Wallbox integrieren?", answer: "Ja. Besonders sinnvoll ist eine Wallbox, die Überschüsse der Photovoltaikanlage nutzt und ihre Ladeleistung mit dem Hausverbrauch abstimmt." },
  { question: "Wie läuft die Beratung ab?", answer: "Nach einem kurzen Erstgespräch erfassen wir Verbrauch, Dach und Ziele. Darauf folgen Vorplanung, Vor-Ort-Termin und ein nachvollziehbares Angebot." },
];

export const services = [
  { title: "Photovoltaikanlagen", href: "/leistungen/photovoltaik", description: "Dachgenau geplant, hochwertig ausgeführt und auf Ihren Verbrauch abgestimmt." },
  { title: "Batteriespeicher", href: "/leistungen#speicher", description: "Mehr eigener Solarstrom am Abend und eine verlässlich geplante Reserve." },
  { title: "Wallboxen", href: "/leistungen#wallbox", description: "Sicher laden, Überschüsse nutzen und die Hausanschlussleistung im Blick behalten." },
  { title: "Energiemanagement", href: "/leistungen#energiemanagement", description: "Erzeugung, Verbrauch, Wärme und Mobilität intelligent zusammendenken." },
];

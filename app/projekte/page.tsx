import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ProjectFilter } from "@/components/project-filter";
export const metadata: Metadata = { title: "Projekte", description: "Fiktive Referenzprojekte für Photovoltaik, Speicher und Wallboxen in Nordrhein-Westfalen." };
export default function ProjectsPage() { return <main id="inhalt"><PageHero eyebrow="Referenzen" title="Projekte, die Energie erzeugen." copy="Sechs fiktive Beispiele zeigen, wie unterschiedlich Dach, Nutzung und technische Lösung zusammenspielen können." label="Fiktive Projektbeispiele aus NRW" /><section className="section"><div className="shell"><p className="eyebrow">Projektauswahl</p><h2 className="headline">Vom Einfamilienhaus bis zum regionalen Betrieb.</h2><ProjectFilter /></div></section><CtaSection /></main>; }

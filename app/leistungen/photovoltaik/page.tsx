import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Compass, PanelsTopLeft, PlugZap, SunMedium } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photovoltaik",
  description: "Individuell geplante Photovoltaikanlagen für Eigenheime und kleine Betriebe in Nordrhein-Westfalen.",
};

const steps = [
  ["01", "Dach verstehen", "Ausrichtung, Fläche, Statik und Verschattung erfassen."],
  ["02", "Bedarf einordnen", "Verbrauch, Wärmepumpe und E-Mobilität berücksichtigen."],
  ["03", "System auslegen", "Module, Wechselrichter und optionale Speicher abstimmen."],
  ["04", "Umsetzung planen", "Montage, Elektrik, Anmeldung und Einweisung koordinieren."],
];

const components = [
  { Icon: PanelsTopLeft, title: "Module", copy: "Leistungsstark, belastbar und passend zur sichtbaren Dachfläche." },
  { Icon: PlugZap, title: "Wechselrichter", copy: "Effiziente Umwandlung und verlässliche Systemüberwachung." },
  { Icon: SunMedium, title: "Montagesystem", copy: "Auf Dachdeckung, Windlast und langfristige Dichtigkeit abgestimmt." },
  { Icon: Compass, title: "Monitoring", copy: "Erzeugung und Verbrauch verständlich im Blick behalten." },
];

export default function PhotovoltaicPage() {
  return (
    <main id="inhalt">
      <PageHero eyebrow="Photovoltaik" title="Ihr Dach kann mehr." copy="Wir übersetzen Dachfläche und Verbrauch in eine langlebige Anlage – sorgfältig dimensioniert, sauber gestaltet und auf künftige Anforderungen vorbereitet." label="Von der Dachanalyse bis zur Inbetriebnahme" />
      <section className="section">
        <div className="shell editorial-section">
          <div className="image-frame editorial-image"><Image src="/images/hero-home.png" alt="Einfamilienhaus mit flächenbündig geplanter Photovoltaikanlage" fill priority sizes="(max-width: 640px) 100vw, 50vw" /></div>
          <div>
            <p className="eyebrow">Mehr als Module</p>
            <h2 className="headline">Eine Anlage, die zu Haus und Alltag passt.</h2>
            <p className="lead">Die beste Belegung nutzt das Dachpotenzial, berücksichtigt aber ebenso Netzanschluss, Verschattung, Verbrauch und Architektur. Diese Zusammenhänge machen wir sichtbar, bevor entschieden wird.</p>
            <ul className="benefit-list">
              <li><Check aria-hidden="true" />Mehr Unabhängigkeit von Strompreisen</li>
              <li><Check aria-hidden="true" />Planbare Erzeugung über viele Jahre</li>
              <li><Check aria-hidden="true" />Vorbereitung für Speicher, Wärme und Mobilität</li>
              <li><Check aria-hidden="true" />Wertige Integration in die Dachfläche</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="shell"><SectionHeading eyebrow="Planungsprozess" title="Präzision vor dem ersten Montagetermin." /><div className="timeline">{steps.map(([number, title, copy]) => <div className="timeline-step" key={number}><span className="num">{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div>
      </section>
      <section className="section-sm section-white">
        <div className="shell"><SectionHeading eyebrow="Systemkomponenten" title="Technik, die zusammenarbeitet." /><div className="values-grid">{components.map(({ Icon, title, copy }) => <article className="value" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>
      <section className="section">
        <div className="shell editorial-section reverse">
          <div className="image-frame editorial-image"><Image src="/images/solar-installation.png" alt="Photovoltaikmodule während der fachgerechten Montage" fill sizes="(max-width: 640px) 100vw, 50vw" /></div>
          <div className="editorial-copy"><p className="eyebrow">Praxis</p><h2 className="headline">Was ein gutes Angebot erkennbar macht.</h2><p className="lead">Vergleichen Sie nicht nur kWp und Preis. Entscheidend sind belegte Annahmen, eine passende Komponentenwahl, klare Zuständigkeiten und die Frage, wie das System später erweitert werden kann.</p><div className="button-row"><Link className="text-link" href="/projekte">Passende Projekte ansehen <ArrowRight aria-hidden="true" /></Link></div></div>
        </div>
      </section>
      <section className="section-sm section-white"><div className="shell faq-wrap"><SectionHeading eyebrow="Fragen zur Photovoltaik" title="Gut informiert entscheiden." /><FaqAccordion items={faqs.slice(0, 5)} /></div></section>
      <CtaSection />
    </main>
  );
}

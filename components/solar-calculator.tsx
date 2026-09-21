"use client";
import { useMemo, useState } from "react";

export function SolarCalculator() {
  const [consumption, setConsumption] = useState(4500); const [area, setArea] = useState(55); const [price, setPrice] = useState(0.34);
  const result = useMemo(() => {
    const systemSize = Math.min(area / 5, Math.max(4, consumption / 800));
    const generation = systemSize * 950;
    const selfUse = Math.min(generation * .55, consumption * .72);
    const feedIn = Math.max(0, generation - selfUse);
    return { size: systemSize, generation, benefit: selfUse * price + feedIn * .08 };
  }, [area, consumption, price]);
  const number = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });
  return <div className="calculator"><div className="calculator-form"><p className="eyebrow">Solarpotenzial</p><h2 className="subhead">Was könnte Ihr Dach leisten?</h2><p className="body-muted">Drei Angaben genügen für eine erste, illustrative Einschätzung.</p><div className="field"><label htmlFor="consumption">Jährlicher Stromverbrauch in kWh</label><input className="input" id="consumption" type="number" min="1000" max="30000" step="100" value={consumption} onChange={(event) => setConsumption(Number(event.target.value))} /></div><div className="field"><label htmlFor="area">Verfügbare Dachfläche in m²</label><input className="input" id="area" type="number" min="15" max="300" step="1" value={area} onChange={(event) => setArea(Number(event.target.value))} /></div><div className="field"><label htmlFor="price">Strompreis in €/kWh</label><input className="input" id="price" type="number" min="0.1" max="1" step="0.01" value={price} onChange={(event) => setPrice(Number(event.target.value))} /></div></div><output className="calculator-result" aria-live="polite"><p className="eyebrow">Unverbindliche Beispielrechnung</p><h3 className="subhead">Ihr mögliches Energiesystem</h3><div className="result-list"><div className="result-row"><span>Mögliche Anlagengröße</span><strong>{result.size.toFixed(1).replace(".", ",")} kWp</strong></div><div className="result-row"><span>Jährlicher Solarertrag</span><strong>ca. {number.format(result.generation)} kWh</strong></div><div className="result-row"><span>Finanzieller Vorteil pro Jahr</span><strong>ca. {number.format(result.benefit)} €</strong></div></div><p className="fine-print">Annahmen: rund 950 kWh Ertrag je kWp, 55 % unmittelbarer Eigenverbrauch und 0,08 € Einspeisevergütung je kWh. Reale Ergebnisse hängen unter anderem von Ausrichtung, Verschattung, Standort, Anlagenkonfiguration, Tarif, Finanzierung und Verbrauchsverhalten ab.</p></output></div>;
}

"use client";

import { useMemo, useState, type KeyboardEvent } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type CalculatorField = "consumption" | "area" | "price";

type CalculatorValues = Record<CalculatorField, string>;
type ValidCalculatorValues = Record<CalculatorField, number>;

const initialValues: CalculatorValues = {
  consumption: "4500",
  area: "55",
  price: "0,34",
};

const initialValidValues: ValidCalculatorValues = {
  consumption: 4500,
  area: 55,
  price: 0.34,
};

function getValidationError(field: CalculatorField, value: string) {
  if (field === "consumption") {
    const parsedValue = Number(value);
    if (!/^\d+$/.test(value) || parsedValue < 1000 || parsedValue > 30000) {
      return "Bitte geben Sie eine ganze Zahl zwischen 1.000 und 30.000 kWh ein.";
    }
  }

  if (field === "area") {
    const parsedValue = Number(value);
    if (!/^\d+$/.test(value) || parsedValue < 15 || parsedValue > 300) {
      return "Bitte geben Sie eine ganze Zahl zwischen 15 und 300 m² ein.";
    }
  }

  if (field === "price") {
    const parsedValue = Number(value.replace(",", "."));
    if (!/^\d+(?:,\d{1,2})?$/.test(value) || parsedValue < 0.1 || parsedValue > 1) {
      return "Bitte geben Sie einen Wert zwischen 0,10 und 1,00 €/kWh mit höchstens zwei Nachkommastellen ein.";
    }
  }

  return "";
}

export function SolarCalculator() {
  const [values, setValues] = useState<CalculatorValues>(initialValues);
  const [validValues, setValidValues] = useState<ValidCalculatorValues>(initialValidValues);
  const [manualErrors, setManualErrors] = useState<Partial<CalculatorValues>>({});

  const errors = {
    consumption: manualErrors.consumption ?? getValidationError("consumption", values.consumption),
    area: manualErrors.area ?? getValidationError("area", values.area),
    price: manualErrors.price ?? getValidationError("price", values.price),
  };

  const updateValue = (field: CalculatorField, value: string) => {
    const normalizedValue = field === "price" ? value.replace(".", ",") : value;
    setManualErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
    setValues((currentValues) => ({ ...currentValues, [field]: normalizedValue }));
    if (!getValidationError(field, normalizedValue)) {
      const numericValue = Number(normalizedValue.replace(",", "."));
      setValidValues((currentValues) => ({ ...currentValues, [field]: numericValue }));
    }
  };

  const preventInvalidCharacter = (field: CalculatorField, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;

    const allowedCharacter = field === "price" ? /^[0-9,]$/ : /^[0-9]$/;
    if (!allowedCharacter.test(event.key)) {
      event.preventDefault();
      setManualErrors((currentErrors) => ({
        ...currentErrors,
        [field]: getValidationError(field, ""),
      }));
    }
  };

  const adjustPrice = (change: number) => {
    const currentPrice = Number(values.price.replace(",", "."));
    const nextPrice = Math.min(1, Math.max(0.1, (Number.isFinite(currentPrice) ? currentPrice : validValues.price) + change));
    updateValue("price", nextPrice.toFixed(2).replace(".", ","));
  };

  const handlePriceKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      adjustPrice(event.key === "ArrowUp" ? 0.01 : -0.01);
      return;
    }
    preventInvalidCharacter("price", event);
  };

  const result = useMemo(() => {
    const systemSize = Math.min(
      validValues.area / 5,
      Math.max(4, validValues.consumption / 800),
    );
    const generation = systemSize * 950;
    const selfUse = Math.min(generation * 0.55, validValues.consumption * 0.72);
    const feedIn = Math.max(0, generation - selfUse);

    return {
      size: systemSize,
      generation,
      benefit: selfUse * validValues.price + feedIn * 0.08,
    };
  }, [validValues]);

  const number = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });

  return (
    <div className="calculator">
      <div className="calculator-form">
        <p className="eyebrow">Solarpotenzial</p>
        <h2 className="subhead">Was könnte Ihr Dach leisten?</h2>
        <p className="body-muted">Drei Angaben genügen für eine erste, illustrative Einschätzung.</p>

        <div className="field">
          <label htmlFor="consumption">Jährlicher Stromverbrauch in kWh</label>
          <input
            aria-describedby={errors.consumption ? "consumption-error" : undefined}
            aria-invalid={Boolean(errors.consumption)}
            className={`input${errors.consumption ? " input-error" : ""}`}
            id="consumption"
            max="30000"
            min="1000"
            onChange={(event) => updateValue("consumption", event.target.value)}
            onKeyDown={(event) => preventInvalidCharacter("consumption", event)}
            step="100"
            type="number"
            value={values.consumption}
          />
          {errors.consumption && <p className="error-text" id="consumption-error">{errors.consumption}</p>}
        </div>

        <div className="field">
          <label htmlFor="area">Verfügbare Dachfläche in m²</label>
          <input
            aria-describedby={errors.area ? "area-error" : undefined}
            aria-invalid={Boolean(errors.area)}
            className={`input${errors.area ? " input-error" : ""}`}
            id="area"
            max="300"
            min="15"
            onChange={(event) => updateValue("area", event.target.value)}
            onKeyDown={(event) => preventInvalidCharacter("area", event)}
            step="1"
            type="number"
            value={values.area}
          />
          {errors.area && <p className="error-text" id="area-error">{errors.area}</p>}
        </div>

        <div className="field">
          <label htmlFor="price">Strompreis in €/kWh</label>
          <div className="decimal-input">
            <input
              aria-describedby={errors.price ? "price-error" : undefined}
              aria-invalid={Boolean(errors.price)}
              aria-valuemax={1}
              aria-valuemin={0.1}
              aria-valuenow={Number(values.price.replace(",", ".")) || undefined}
              className={`input${errors.price ? " input-error" : ""}`}
              id="price"
              inputMode="decimal"
              onChange={(event) => updateValue("price", event.target.value)}
              onKeyDown={handlePriceKeyDown}
              role="spinbutton"
              type="text"
              value={values.price}
            />
            <span className="decimal-controls" aria-hidden="false">
              <button aria-label="Strompreis erhöhen" onClick={() => adjustPrice(0.01)} type="button"><ChevronUp aria-hidden="true" /></button>
              <button aria-label="Strompreis verringern" onClick={() => adjustPrice(-0.01)} type="button"><ChevronDown aria-hidden="true" /></button>
            </span>
          </div>
          {errors.price && <p className="error-text" id="price-error">{errors.price}</p>}
        </div>
      </div>

      <output className="calculator-result" aria-live="polite">
        <p className="eyebrow">Unverbindliche Beispielrechnung</p>
        <h3 className="subhead">Ihr mögliches Energiesystem</h3>
        <div className="result-list">
          <div className="result-row"><span>Mögliche Anlagengröße</span><strong>{result.size.toFixed(1).replace(".", ",")} kWp</strong></div>
          <div className="result-row"><span>Jährlicher Solarertrag</span><strong>ca. {number.format(result.generation)} kWh</strong></div>
          <div className="result-row"><span>Finanzieller Vorteil pro Jahr</span><strong>ca. {number.format(result.benefit)} €</strong></div>
        </div>
        <p className="fine-print">Annahmen: rund 950 kWh Ertrag je kWp, 55 % unmittelbarer Eigenverbrauch und 0,08 € Einspeisevergütung je kWh. Reale Ergebnisse hängen unter anderem von Ausrichtung, Verschattung, Standort, Anlagenkonfiguration, Tarif, Finanzierung und Verbrauchsverhalten ab.</p>
      </output>
    </div>
  );
}

"use client";

import { FormEvent, useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

type Values = { firstName: string; lastName: string; email: string; phone: string; projectType: string; postalCode: string; message: string };
const initialValues: Values = { firstName: "", lastName: "", email: "", phone: "", projectType: "", postalCode: "", message: "" };

function RequiredLabel({ children }: { children: React.ReactNode }) {
  return <>{children}<span className="required-mark" aria-hidden="true"> *</span><span className="sr-only"> (Pflichtfeld)</span></>;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState(initialValues);
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const update = (key: keyof Values, value: string) => setValues((current) => ({ ...current, [key]: value }));

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!values.firstName.trim()) next.firstName = "Bitte geben Sie Ihren Vornamen ein.";
    if (!values.lastName.trim()) next.lastName = "Bitte geben Sie Ihren Nachnamen ein.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!values.phone.trim()) next.phone = "Bitte geben Sie Ihre Telefonnummer ein.";
    if (!values.projectType) next.projectType = "Bitte wählen Sie eine Projektart aus.";
    if (!/^\d{5}$/.test(values.postalCode)) next.postalCode = "Bitte geben Sie eine fünfstellige Postleitzahl ein.";
    if (values.message.trim().length < 10) next.message = "Bitte beschreiben Sie Ihr Vorhaben in mindestens zehn Zeichen.";
    if (!privacy) next.privacy = "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      return;
    }
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
  };

  if (submitted) return <div className="success-box" role="status"><h2 className="subhead">Vielen Dank für Ihre Anfrage.</h2><p>Die Übermittlung wurde in dieser Demo lokal simuliert. Es wurden keine persönlichen Daten versendet.</p><button className="button button-dark" type="button" onClick={() => { setSubmitted(false); setValues(initialValues); setPrivacy(false); }}>Weitere Anfrage erfassen</button></div>;

  const field = (id: keyof Values, label: string, type = "text", required = true) => {
    const errorId = `${id}-error`;
    return <div className="field"><label htmlFor={id}>{required ? <RequiredLabel>{label}</RequiredLabel> : label}</label><input className={`input ${errors[id] ? "input-error" : ""}`} id={id} name={id} type={type} value={values[id]} required={required} aria-required={required} aria-invalid={Boolean(errors[id])} aria-describedby={errors[id] ? errorId : undefined} onChange={(event) => update(id, event.target.value)} />{errors[id] && <p className="error-text" id={errorId} role="alert">{errors[id]}</p>}</div>;
  };

  return <form ref={formRef} noValidate onSubmit={submit}><div className="form-grid">
    {field("firstName", "Vorname")}{field("lastName", "Nachname")}{field("email", "E-Mail", "email")}{field("phone", "Telefon", "tel")}
    <div className="field"><label htmlFor="projectType"><RequiredLabel>Projektart</RequiredLabel></label><select className={`select-native ${errors.projectType ? "input-error" : ""}`} id="projectType" name="projectType" value={values.projectType} required aria-required="true" aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "projectType-error" : undefined} onChange={(event) => update("projectType", event.target.value)}><option value="">Bitte auswählen</option><option>Photovoltaik</option><option>Photovoltaik + Speicher</option><option>Wallbox</option><option>Energiemanagement</option><option>Sonstiges</option></select>{errors.projectType && <p className="error-text" id="projectType-error" role="alert">{errors.projectType}</p>}</div>
    {field("postalCode", "Postleitzahl")}
    <div className="field field-full"><label htmlFor="message"><RequiredLabel>Nachricht</RequiredLabel></label><textarea className={`textarea ${errors.message ? "input-error" : ""}`} id="message" name="message" value={values.message} required aria-required="true" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} onChange={(event) => update("message", event.target.value)} />{errors.message && <p className="error-text" id="message-error" role="alert">{errors.message}</p>}</div>
    <div className="field field-full"><div className="check-row"><Checkbox id="privacy" name="privacy" checked={privacy} required aria-required="true" aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-error" : undefined} onCheckedChange={(value) => setPrivacy(value === true)} /><label htmlFor="privacy">Ich stimme zu, dass meine Angaben zur Bearbeitung dieser Demo-Anfrage lokal verarbeitet werden. Es findet keine externe Übermittlung statt.<span className="required-mark" aria-hidden="true"> *</span><span className="sr-only"> (Pflichtfeld)</span></label></div>{errors.privacy && <p className="error-text" id="privacy-error" role="alert">{errors.privacy}</p>}</div>
    <div className="field-full"><button className="button button-dark" type="submit">Anfrage unverbindlich absenden</button></div>
  </div></form>;
}

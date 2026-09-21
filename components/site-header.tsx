"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";

const links = [["Start", "/"], ["Leistungen", "/leistungen"], ["Projekte", "/projekte"], ["Über uns", "/ueber-uns"], ["Kontakt", "/kontakt"]];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false); window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);
  return <><header className="site-header"><div className="shell nav-shell"><Link href="/" aria-label="VOLTWERK Startseite"><Brand /></Link><nav className="desktop-nav" aria-label="Hauptnavigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link className="button button-dark" href="/kontakt">Kostenlose Beratung</Link></nav><button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Menü schließen" : "Menü öffnen"} onClick={() => setOpen((value) => !value)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></div></header>{open && <div className="mobile-panel" id="mobile-navigation"><nav className="shell" aria-label="Mobile Navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="button button-dark" href="/kontakt" onClick={() => setOpen(false)}>Kostenlose Beratung</Link></nav></div>}</>;
}

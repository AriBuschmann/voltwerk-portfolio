import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://voltwerk-energie.ari-buschmann.chatgpt.site"),
  title: { default: "VOLTWERK | Photovoltaik & Energielösungen", template: "%s | VOLTWERK" },
  description: "Photovoltaik, Speicher, Wallboxen und intelligentes Energiemanagement für Eigenheime und kleine Betriebe in Nordrhein-Westfalen.",
  applicationName: "VOLTWERK",
  keywords: ["Photovoltaik", "Solaranlage", "Batteriespeicher", "Wallbox", "Nordrhein-Westfalen"],
  openGraph: { title: "VOLTWERK | Photovoltaik & Energielösungen", description: "Individuell geplante Energielösungen für Nordrhein-Westfalen.", locale: "de_DE", type: "website" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body><a className="skip-link" href="#inhalt">Zum Inhalt springen</a><SiteHeader />{children}<Footer /></body></html>;
}

import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "VOLTWERK | Photovoltaik & Energielösungen", template: "%s | VOLTWERK" },
  description: "Photovoltaik, Speicher, Wallboxen und intelligentes Energiemanagement für Eigenheime und kleine Betriebe in Nordrhein-Westfalen.",
  applicationName: "VOLTWERK",
  keywords: ["Photovoltaik", "Solaranlage", "Batteriespeicher", "Wallbox", "Nordrhein-Westfalen"],
  openGraph: { title: "VOLTWERK | Photovoltaik & Energielösungen", description: "Individuell geplante Energielösungen für Nordrhein-Westfalen.", siteName: "VOLTWERK", locale: "de_DE", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "VOLTWERK – Photovoltaik und Energielösungen" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body><a className="skip-link" href="#inhalt">Zum Inhalt springen</a><SiteHeader />{children}<Footer /></body></html>;
}

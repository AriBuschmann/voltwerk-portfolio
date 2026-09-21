import type { Metadata } from "next";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = productionHost
  ? `https://${productionHost}`
  : "https://voltwerk-energie.ari-buschmann.chatgpt.site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  const socialTitle = `${title} | VOLTWERK`;

  return {
    title: path === "/" ? { absolute: socialTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: "VOLTWERK",
      locale: "de_DE",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "VOLTWERK – Photovoltaik und Energielösungen" }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/og.png"],
    },
  };
}

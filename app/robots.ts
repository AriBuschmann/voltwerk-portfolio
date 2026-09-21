import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://voltwerk-energie.ari-buschmann.chatgpt.site/sitemap.xml" }; }

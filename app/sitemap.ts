import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/leistungen", "/leistungen/photovoltaik", "/projekte", "/ueber-uns", "/kontakt", "/impressum", "/datenschutz"].map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : .7 })); }

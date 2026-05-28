import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://biodiversity.ae";
const LANGS = ["ar", "en"] as const;
const LAST_MODIFIED = new Date("2026-05-29");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.5 },
  ];
  for (const lang of LANGS) {
    entries.push({
      url: `${BASE}/${lang}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: lang === "ar" ? 1.0 : 0.9,
    });
  }
  return entries;
}

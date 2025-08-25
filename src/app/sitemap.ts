// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.panielix.com";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/es`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    // add other important slugs if/when you add pages (e.g., /portfolio, /privacy, /terms)
  ];
}

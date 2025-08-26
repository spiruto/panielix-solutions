// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.panielix.com";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    // { url: `${base}/es`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/terms-and-conditions`, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/do-not-sell-or-share`, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    // add other important slugs if/when you add pages (e.g., /portfolio, /privacy, /terms)
  ];
}

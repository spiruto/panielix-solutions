// lib/seo-ld.ts
export const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Conversion-Focused Web Design & Development",
  provider: { "@type": "Organization", name: "Panielix Solutions", url: "https://www.panielix.com" },
  areaServed: ["US", "CA", "GB"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    description: "Custom quotes based on scope. Contact for pricing.",
  },
};

export function packagesAsProductLd(packages: { title: string; description: string }[]) {
  return packages.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    description: p.description,
    brand: { "@type": "Brand", name: "Panielix Solutions" },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://www.panielix.com/#packages",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        // If you have a real from-price, place it here; otherwise leave as zero/contact
        minPrice: 0,
      },
    },
  }));
}

export function faqPageLd(faqs: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

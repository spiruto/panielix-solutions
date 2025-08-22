export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Panielix LLC",
  url: "https://www.panielix.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.panielix.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Panielix LLC",
  url: "https://www.panielix.com/",
  logo: "https://www.panielix.com/og-image.jpg",
  sameAs: [],
};

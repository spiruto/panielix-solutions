// app/(site)/components/FAQ.tsx
import Script from "next/script";
import { faqPageLd } from "@/lib/seo-ld";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations('FAQ');
  const g = useTranslations('FAQ.groups');


  const categories: {
    title: string;
    items: [string, string][];
  }[] = [
      {
        title: g("pricing.title"),
        items: [
          [
            g("pricing.q1"),
            g("pricing.a1")
          ],
          [
            g("pricing.q2"),
            g("pricing.a2")],
          [
            g("pricing.q3"),
            g("pricing.a3")],
          [
            g("pricing.q4"),
            g("pricing.a4")]
        ]
      },
      {
        title: g("timeline.title"),
        items: [
          [
            g("timeline.q1"),
            g("timeline.a1")
          ],
          [
            g("timeline.q2"),
            g("timeline.a2")],
          [
            g("timeline.q3"),
            g("timeline.a3")],
          [
            g("timeline.q4"),
            g("timeline.a4")]
        ]
      },
      {
        title: g("seo.title"),
        items: [
          [
            g("seo.q1"),
            g("seo.a1")
          ],
          [
            g("seo.q2"),
            g("seo.a2")],
          [
            g("seo.q3"),
            g("seo.a3")],
          [
            g("seo.q4"),
            g("seo.a4")]
        ]
      },
      {
        title: g("features.title"),
        items: [
          [
            g("features.q1"),
            g("features.a1")
          ],
          [
            g("features.q2"),
            g("features.a2")],
          [
            g("features.q3"),
            g("features.a3")],
     
        ]
      },
      {
        title: g("support.title"),
        items: [
          [
            g("support.q1"),
            g("support.a1")
          ],
          [
            g("support.q2"),
            g("support.a2")],
          [
            g("support.q3"),
            g("support.a3")],

        ]
      },
      {
        title: g("tech.title"),
        items: [
          [
            g("tech.q1"),
            g("tech.a1")
          ],
          [
            g("tech.q2"),
            g("tech.a2")],
          [
            g("tech.q3"),
            g("tech.a3")],

        ]
      },
      {
        title: g("contentBranding.title"),
        items: [
          [
            g("contentBranding.q1"),
            g("contentBranding.a1")
          ],
          [
            g("contentBranding.q2"),
            g("contentBranding.a2")]
        ]
      },
      {
        title: g("legal.title"),
        items: [
          [
            g("legal.q1"),
            g("legal.a1")
          ]
        ]
      }
    ];

  // Flatten for structured data
  const flatFaqs: [string, string][] = categories.flatMap((c) => c.items);

  return (
    <section id="faq" className="bg-[var(--slate-900)] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 text-lg text-[var(--slate-400)]">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {categories.map(({ title, items }) => (
            <details key={title} className="group rounded-lg bg-[var(--slate-800)] p-6">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-white">
                <span>{title}</span>
                <span className="material-icons transform transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </summary>

              <div className="mt-6 space-y-4">
                {items.map(([q, a]) => (
                  <details key={q} className="group rounded-md bg-[var(--slate-800)]/60 p-4">
                    <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-white">
                      <span>{q}</span>
                      <span className="material-icons text-sm transform transition-transform duration-300 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <p className="mt-3 text-[var(--slate-400)]">{a}</p>
                  </details>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* JSON-LD (use flattened Q&A list) */}
      <Script id="ld-faq" type="application/ld+json">
        {JSON.stringify(faqPageLd(flatFaqs))}
      </Script>
    </section>
  );
}

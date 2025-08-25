// app/(site)/components/FAQ.tsx
import Script from "next/script";
import { faqPageLd } from "@/lib/seo-ld";

export default function FAQ() {
  const categories: {
    title: string;
    items: [string, string][];
  }[] = [
      {
        title: "Pricing & Payments",
        items: [
          [
            "How much will it cost?",
            "Pricing depends on scope. Landing pages are the most affordable, while multi-page business websites and advanced projects vary by requirements. After a quick discovery call, we’ll provide a clear, fixed quote with deliverables."
          ],
          [
            "What’s your payment schedule?",
            "Typically 50% upfront and 50% at launch. For larger builds we can split into milestones. We accept major credit cards and bank transfers."
          ],
          [
            "What’s included in the price?",
            "All packages include design, development, responsive layout, performance optimization, SEO-friendly setup, 1 year of hosting, 1 year of domain registration, and 1 year of professional email."
          ],
          [
            "What happens if I cancel?",
            "You keep ownership of all work completed and paid for. Any finished assets or code will be delivered to you at the point of cancellation."
          ]
        ]
      },
      {
        title: "Timeline & Process",
        items: [
          [
            "How long does a typical project take?",
            "Most landing pages launch in 2–3 weeks. Business websites (multi-page) usually take 4–6 weeks depending on scope, content readiness, and feedback. Custom projects can extend longer."
          ],
          [
            "How many revisions do I get?",
            "We include structured feedback rounds during design and pre-launch. Small changes are expected; major scope changes may adjust cost or timeline, but we’ll always confirm with you first."
          ],
          [
            "Can you work with tight deadlines?",
            "Yes. If capacity allows, we can prioritize urgent projects and deliver faster timelines."
          ],
          [
            "Do I own the website once it’s complete?",
            "Yes. Once the final payment is made, you receive full ownership of your website, code, and assets."
          ]
        ]
      },
      {
        title: "SEO & Analytics",
        items: [
          [
            "Will my site be optimized for search engines?",
            "Yes. Every website includes on-page SEO best practices: clean structure, metadata, mobile optimization, performance tuning, and sitemaps."
          ],
          [
            "Will my site load fast?",
            "Yes. We optimize images, code, and caching for speed, aiming for excellent Core Web Vitals and sub-second perceived load times."
          ],
          [
            "Do you add analytics?",
            "Yes. We include Google Analytics setup (and can add other basic tracking if requested) so you can monitor visitors and conversions."
          ],
          [
            "Can you migrate my old site and preserve SEO?",
            "Yes. We can move existing content, set up redirects, and retain as much SEO value as possible."
          ]
        ]
      },
      {
        title: "E-commerce & Features",
        items: [
          [
            "Do you build e-commerce sites?",
            "Yes. We can set up product catalogs, checkout, shipping, and payment integrations depending on your business needs."
          ],
          [
            "Can you integrate bookings, payments, or tools I already use?",
            "Yes. We regularly integrate booking systems, CRMs, payment gateways, newsletters, and other business tools."
          ],
          [
            "Will I be able to update my site myself?",
            "Yes. We can set up a content management system (CMS) so you can edit text, images, and blog posts without technical skills."
          ]
        ]
      },
      {
        title: "Support, Hosting & Security",
        items: [
          [
            "Do I need to buy hosting, a domain, or email?",
            "No. Every package already includes 1 year of hosting, 1 year of domain registration, and 1 year of professional email. After the first year, you can renew with us or manage these on your own."
          ],
          [
            "How secure will my website be?",
            "Security best practices are built-in: HTTPS (SSL), regular updates, and basic hardening. We also configure automatic backups for peace of mind."
          ],
          [
            "Do you offer support after launch?",
            "Yes. We remain available for technical support, updates, or improvements. We can also help you extend hosting, email, and domain services after the first year."
          ]
        ]
      },
      {
        title: "Tech & Setup",
        items: [
          [
            "What technology do you use?",
            "We use modern, proven technologies like Next.js, React, TypeScript, TailwindCSS, and cloud hosting providers such as AWS or Vercel."
          ],
          [
            "Is the website accessible?",
            "We follow accessibility best practices (semantic HTML, alt text, contrast, mobile support) to make your website usable for everyone."
          ],
          [
            "Do you work with clients in the US, Canada, and the UK?",
            "Yes. We regularly work remotely with businesses across North America and the UK, handling communication, support, and billing seamlessly."
          ]
        ]
      },
      {
        title: "Content & Branding",
        items: [
          [
            "Who provides the content and images?",
            "You can supply your own, or we can guide you on what’s needed. If you don’t have everything ready, we’ll help structure the content during the project."
          ],
          [
            "Can you help with branding?",
            "Yes. If you already have a logo and colors, we’ll build around them. If not, we can design a simple, professional identity for your website."
          ]
        ]
      },
      {
        title: "Legal & Policies",
        items: [
          [
            "Do you add privacy and legal pages?",
            "Yes. We provide basic Privacy, Terms of Service, and Cookie pages as part of every project. For full compliance (e.g., GDPR/CCPA), we recommend having your lawyer review them."
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-[var(--slate-400)]">
            Clear, practical answers to help you understand how we work.
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

export default function Packages() {
  const phone = "50660481005";

  const cards = [
    {
      icon: "launch",
      title: "Landing Page",
      desc: "Perfect for validating an idea or driving conversions for a single, focused campaign.",
      bullets: ["Single Page Layout", "Conversion-Focused Design", "Lead Capture Form"],
      whatsappMessage:
        "Hi Panielix Solutions, I am interested in the Landing Page package. I would like to schedule a free meeting to tell you about my project. I need a high-converting single-page site to capture leads quickly.",
    },
    {
      icon: "web",
      title: "Mini Site",
      desc: "Establish a strong online presence and showcase your core services effectively.",
      bullets: ["Up to 5 Pages", "SEO Optimized", "Mobile-First Design"],
      whatsappMessage:
        "Hi Panielix Solutions, I am interested in the Mini Site package. I would like to schedule a free meeting to explain my project. I need a professional site with multiple pages to showcase my services.",
    },
    {
      icon: "article",
      title: "Blog Starter",
      desc: "Become an authority in your niche and attract organic traffic with a content-driven platform.",
      bullets: ["Full Blog Functionality", "Content Management System", "Advanced SEO Features"],
      whatsappMessage:
        "Hi Panielix Solutions, I am interested in the Blog Starter package. I would like to schedule a free meeting to discuss my idea. I need a content-driven site with blogging features to attract organic traffic.",
    },
    {
      icon: "build_circle",
      title: "Flexible Package",
      desc: "For unique projects requiring e-commerce, custom features, or specific integrations.",
      bullets: ["Custom Scope & Features", "E-commerce / API Integrations", "Dedicated Support"],
      whatsappMessage:
        "Hi Panielix Solutions, I am interested in the Flexible Package. I would like to schedule a free meeting to explain my project. I need a custom solution with features like e-commerce or integrations.",
    },
  ];

  return (
    <section id="packages" className="bg-[var(--slate-900)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Solutions Tailored for Growth</h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[var(--slate-400)]">
            We don&apos;t sell packages; we provide value-driven solutions. Find the perfect fit to achieve your business goals.
          </p>
        </div>

        {/* Ensure equal heights and stretched items */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {cards.map((c) => {
            const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(c.whatsappMessage)}`;
            return (
              <div
                key={c.title}
                className="group flex h-full flex-col rounded-lg border border-[var(--slate-700)] bg-[var(--slate-800)] p-8 shadow-lg transition-transform hover:-translate-y-2"
              >
                {/* CONTENT */}
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center gap-4">
                    <span className="material-icons text-4xl text-[var(--primary-400)]">{c.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{c.title}</h3>
                  </div>

                  <p className="mt-4 text-sm text-[var(--slate-400)]">{c.desc}</p>

                  <ul className="mt-6 space-y-3 text-sm text-[var(--slate-400)]">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                          <span className="material-icons text-sm">check</span>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Spacer to guarantee gap above the button even on short cards */}
                  <div className="mt-6" />
                </div>

                {/* CTA */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg bg-[var(--primary-500)] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-600)]"
                >
                  Get Your Quote
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

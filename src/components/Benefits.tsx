export default function Benefits() {
  const items = [
    { icon: "visibility", title: "Attract More Customers", desc: "Our SEO-optimized websites are designed to rank higher on Google, bringing more qualified leads directly to you." },
    { icon: "monetization_on", title: "Convert Visitors into Sales", desc: "We use proven conversion design principles to turn your website visitors into paying customers and boost your revenue." },
    { icon: "shield", title: "Build Unshakeable Trust", desc: "A polished, modern website establishes your authority and builds the credibility needed to win over discerning customers." },
  ];
  return (
    <section id="benefits" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Website is Your #1 Sales Tool. We&apos;ll Make it a Winner.</h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg text-[var(--slate-400)]">
            Stop settling for an underperforming website. A professional online presence is crucial for attracting customers, building credibility, and driving growth in today&apos;s digital-first world.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-500)] text-white">
                <span className="material-icons text-4xl">{it.icon}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{it.title}</h3>
              <p className="mt-2 text-[var(--slate-400)]">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--primary-500)] px-8 py-3 text-base font-bold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[var(--primary-600)]"
          >
            Get Your Free Proposal
          </a>
        </div>
      </div>
    </section>
  );
}

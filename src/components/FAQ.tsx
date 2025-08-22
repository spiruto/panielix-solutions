const faqs = [
  [
    "What do I need to provide for hosting, domain, and email?",
    "You are responsible for purchasing your domain name (e.g., yourcompany.com) and any professional email services (e.g., Google Workspace). You can choose to host the website yourself, and we'll provide all the necessary files and support for a smooth handover. We also offer hassle-free managed hosting as an optional service if you prefer us to handle it.",
  ],
  [
    "Do I own the website once it's complete?",
    "Absolutely. Upon final payment, you receive 100% ownership of the website code and all related assets. It's your property to do with as you please. We believe in empowering our clients, not locking them in.",
  ],
  [
    "Is my project a good fit for Panielix?",
    "We specialize in building high-value websites for service-based small and medium businesses in North America. If you're looking to generate leads, build brand authority, and get a real return on your investment, we're the perfect partner for you.",
  ],
  [
    "Can you implement custom features or e-commerce?",
    "Yes. Our Flexible Package is designed for just that. We can integrate e-commerce functionality, third-party APIs, booking systems, and other custom features tailored to your specific business needs. Let's discuss your requirements.",
  ],
  [
    "What if my budget doesn't fit your packages?",
    "We focus on delivering value, not just a price tag. Let's talk about your goals and budget. We can often create a custom solution or a phased approach that delivers the most critical features first, helping you grow into a more comprehensive site over time.",
  ],
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[var(--slate-900)] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-[var(--slate-400)]">
            Got questions? We&apos;ve got answers. Here are some of the most common inquiries we receive.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-lg bg-[var(--slate-800)] p-6">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-white">
                <span>{q}</span>
                <span className="material-icons transform transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-4 text-[var(--slate-400)]">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Powerhouse() {
  const bullets = [
    ["Lead Generation Machine:", "Capture high-quality leads directly through optimized forms and clear calls-to-action."],
    ["Enhanced Brand Authority:", "A professional site builds trust and positions you as a leader in your industry."],
    ["Data-Driven Insights:", "Integrated analytics allow you to understand your customers and make smarter business decisions."],
  ];

  return (
    <section className="bg-[var(--slate-900)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Copy unchanged */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            More Than a Website: A Marketing Powerhouse
          </h2>
          <p className="mt-4 text-lg text-[var(--slate-400)]">
            A great website is the foundation of your digital marketing. It works 24/7 to attract, engage, and convert customers, acting as your most efficient
            salesperson. We build websites that are not just beautiful, but are engineered to be high-performance marketing engines for your business.
          </p>
          <ul className="mt-6 space-y-4 text-[var(--slate-400)]">
            {bullets.map(([strong, rest]) => (
              <li key={strong} className="flex items-start gap-3">
                <span className="material-icons mt-1 text-[var(--primary-400)]">check_circle</span>
                <span>
                  <strong>{strong}</strong> {rest}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--primary-500)] px-8 py-3 text-base font-bold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[var(--primary-600)]"
            >
              Start Building Your Asset
            </a>
          </div>

        </div>

        {/* Image: give the parent an aspect ratio + relative */}
        <div className="mt-10 lg:mt-0 relative w-full aspect-[16/10]">
          <Image
            src="/marketing-powerhouse.jpg"  // must live in /public
            alt="Marketing Powerhouse"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}


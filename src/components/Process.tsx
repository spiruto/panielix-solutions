export default function Process() {
  const steps = [
    ["Strategy & Quote", "We define your goals and provide a clear, value-based quote."],
    ["Rapid Development", "Our team builds your high-speed, conversion-focused website using an agile, efficient workflow."],
    ["Collaborative Review", "We work with you to refine and perfect the site, ensuring it aligns perfectly with your vision."],
    ["Launch & Empower", "We deploy your site and provide the training and support you need to start generating leads immediately."],
  ];

  return (
    <section id="process" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Efficiency-Focused Process</h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[var(--slate-400)]">
            We&apos;ve streamlined our process to deliver maximum value and get your revenue-generating website live, faster.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 bg-[var(--slate-700)] md:block" />
          <div className="space-y-16">
            {steps.map(([title, desc], i) => (
              <div key={title} className="relative flex flex-col items-center md:flex-row">
                {i % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-8 text-center md:text-right">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-500)] text-white font-bold text-xl">
                        {i + 1}
                      </div>
                      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
                      <p className="mt-2 text-[var(--slate-400)]">{desc}</p>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8" />
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-8" />
                    <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8 text-center md:text-left">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-500)] text-white font-bold text-xl">
                        {i + 1}
                      </div>
                      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
                      <p className="mt-2 text-[var(--slate-400)]">{desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

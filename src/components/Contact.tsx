export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Grow Your Business?</h2>
          <p className="mt-4 text-lg text-[var(--slate-400)]">
            Let&apos;s build a website that gets you results. Fill out the form for a free, no-obligation proposal.
          </p>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" className="mt-12">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-transparent bg-[var(--slate-800)] px-4 py-3 text-white shadow-sm focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-transparent bg-[var(--slate-800)] px-4 py-3 text-white shadow-sm focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="company_website" className="block text-sm font-medium text-white">
                Company Website (Optional)
              </label>
              <div className="mt-1">
                <input
                  id="company_website"
                  name="company_website"
                  type="text"
                  placeholder="www.yourcompany.com"
                  className="block w-full rounded-md border-transparent bg-[var(--slate-800)] px-4 py-3 text-white shadow-sm focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Tell us about your project <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What are your business goals? Who is your target audience? Any existing websites you like?"
                  required
                  className="block w-full rounded-md border-transparent bg-[var(--slate-800)] px-4 py-3 text-white shadow-sm focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[var(--primary-500)] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[var(--primary-600)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-offset-2 focus:ring-offset-[var(--slate-950)]"
              >
                Send Information
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

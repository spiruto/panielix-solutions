import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — Panielix",
  description: "Rules for using Panielix.com, limitations of liability, and legal info.",
  robots: { index: true, follow: true },
};

export default function TermsAndConditions() {
  const updated = new Date().toLocaleDateString();

  const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <h2 id={id} className="text-xl md:text-2xl font-bold text-white scroll-mt-24">
      {children}
    </h2>
  );

  const Li = ({ children }: { children: React.ReactNode }) => (
    <li className="pl-3 marker:text-slate-500 text-slate-300">{children}</li>
  );

  return (
    <div className="mx-auto w-full max-w-5xl px-4 md:px-6 py-12 md:py-16">
      <header className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: {updated}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <aside className="md:col-span-4 md:order-2">
          <nav className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sticky top-20">
            <p className="text-sm font-semibold text-slate-200 mb-2">On this page</p>
            <ul className="space-y-2 text-sm">
              {[
                ["overview", "Overview"],
                ["use", "Use of the Service"],
                ["accounts", "Accounts & scheduling"],
                ["ip", "Intellectual Property"],
                ["third", "Third-Party Services"],
                ["disclaimers", "Disclaimers"],
                ["limits", "Limitation of Liability"],
                ["law", "Governing Law"],
                ["termination", "Termination"],
                ["changes", "Changes"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a className="text-teal-400 hover:text-teal-300" href={`#${id}`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="md:col-span-8 md:order-1">
          <section className="mb-10">
            <H2 id="overview">Overview</H2>
            <p className="mt-3 text-slate-300">
              These Terms govern your access to and use of Panielix.com (the “Service”), provided by
              Panielix LLC (“Panielix”, “we”, “us”). By using the Service, you agree to these Terms.
              If you do not agree, do not use the Service.
            </p>
          </section>

          <section className="mb-10">
            <H2 id="use">Use of the Service</H2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <Li>We grant you a limited, non-exclusive, non-transferable license to access and use the site.</Li>
              <Li>You agree not to misuse the Service, interfere with normal operation, or attempt unauthorized access.</Li>
              <Li>You will provide accurate information when contacting us or engaging via live chat.</Li>
            </ul>
          </section>

          <section className="mb-10">
            <H2 id="accounts">Accounts &amp; scheduling</H2>
            <p className="mt-3 text-slate-300">
              If we create a meeting or workspace for you, you are responsible for any credentials shared with you.
              Notify us promptly of any unauthorized use.
            </p>
          </section>

          <section className="mb-10">
            <H2 id="ip">Intellectual Property</H2>
            <p className="mt-3 text-slate-300">
              All content, trademarks, logos, and materials on the Service are owned by or licensed to Panielix and
              protected by applicable laws. No rights are granted except as expressly stated in these Terms.
            </p>
          </section>

          <section className="mb-10">
            <H2 id="third">Third-Party Services</H2>
            <p className="mt-3 text-slate-300">
              Our site integrates third-party tools such as Google Analytics 4, Google Tag Manager, Meta (Facebook) Pixel,
              and Crisp live chat. Those services operate under their own terms and privacy notices. We are not responsible
              for third-party sites or services. See our{" "}
              <Link href="/privacy-policy" className="text-teal-400 hover:text-teal-300">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </section>

          <section className="mb-10">
            <H2 id="disclaimers">Disclaimers</H2>
            <p className="mt-3 text-slate-300">
              The Service is provided “as is” and “as available” without warranties of any kind, express or implied,
              including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="mb-10">
            <H2 id="limits">Limitation of Liability</H2>
            <p className="mt-3 text-slate-300">
              To the maximum extent permitted by law, Panielix shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly,
              or any loss of data, use, goodwill, or other intangible losses, resulting from your use of (or inability to use)
              the Service or third-party content. Our total liability for any claims relating to the Service shall not exceed
              USD $100 or the amount you paid us in the 3 months preceding the claim, whichever is greater.
            </p>
          </section>

          <section className="mb-10">
            <H2 id="law">Governing Law</H2>
            <p className="mt-3 text-slate-300">
              These Terms are governed by the laws of the State of Wyoming, USA, without regard to conflict-of-law principles.
              Exclusive venue for any disputes shall be the state or federal courts located in Wyoming, and you consent to their jurisdiction.
            </p>
          </section>

          <section className="mb-10">
            <H2 id="termination">Termination</H2>
            <p className="mt-3 text-slate-300">
              We may suspend or terminate access to the Service at any time for any reason, including if you breach these Terms.
            </p>
          </section>

          <section className="mb-10">
            <H2 id="changes">Changes</H2>
            <p className="mt-3 text-slate-300">
              We may update these Terms from time to time. The “Last updated” date reflects the latest changes. Your continued
              use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-10">
            <H2 id="contact">Contact</H2>
            <p className="mt-3 text-slate-300">
              Questions? Email{" "}
              <a className="text-teal-400 hover:text-teal-300" href="mailto:hello@panielix.com">
                hello@panielix.com
              </a>.
            </p>
          </section>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/privacy-policy" className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-2 text-slate-200 hover:bg-slate-900">
              Privacy Policy
            </Link>
            <Link href="/" className="inline-flex items-center rounded-xl bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">
              Back to Home
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

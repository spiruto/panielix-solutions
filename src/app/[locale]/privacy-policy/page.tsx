import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Panielix",
  description:
    "How Panielix collects and uses information: Crisp live chat, contact form, Google Analytics 4, Meta (Facebook) Pixel, and Google Tag Manager.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const updated = new Date().toLocaleDateString();

  const Item = ({ children }: { children: React.ReactNode }) => (
    <li className="pl-3 marker:text-slate-500 text-slate-300">{children}</li>
  );

  return (
    <div className="mx-auto w-full max-w-5xl px-4 md:px-6 py-12 md:py-16">
      <header className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: {updated}</p>
      </header>

      {/* Layout: content + optional sidebar (anchors) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <aside className="md:col-span-4 md:order-2">
          <nav className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sticky top-20">
            <p className="text-sm font-semibold text-slate-200 mb-2">On this page</p>
            <ul className="space-y-2 text-sm">
              {[
                ["who", "Who we are"],
                ["what", "What we collect"],
                ["use", "How we use info"],
                ["legal", "Legal bases"],
                ["sharing", "Sharing"],
                ["retention", "Retention"],
                ["cookies", "Cookies & tracking"],
                ["rights", "Your rights"],
                ["transfers", "International transfers"],
                ["security", "Security"],
                ["children", "Children"],
                ["updates", "Updates"],
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
          <section className="mb-8">
            <p className="text-slate-300">
              This Privacy Policy explains how <span className="font-semibold text-white">Panielix.com</span> (“Panielix”, “we”, “us”)
              collects, uses, and shares information when you use our website and services.
              We keep things simple: we gather data only via our{" "}
              <span className="font-medium text-white">Crisp live chat</span> and our{" "}
              <span className="font-medium text-white">contact form</span>, and we use{" "}
              <span className="font-medium text-white">Google Analytics 4</span>,{" "}
              <span className="font-medium text-white">Meta (Facebook) Pixel</span>, and{" "}
              <span className="font-medium text-white">Google Tag Manager</span> to understand site usage and run ads.
            </p>
          </section>

          <section id="who" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Who we are & how to contact us</h2>
            <p className="mt-3 text-slate-300">
              Panielix LLC (Wyoming, USA). Email:{" "}
              <a className="text-teal-400 hover:text-teal-300" href="mailto:panielixllc@gmail.com">
                panielixllc@gmail.com
              </a>.
            </p>
          </section>

          <section id="what" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">What we collect</h2>
            <ul className="mt-3 list-disc space-y-3 pl-5">
              <Item>
                <span className="font-semibold text-white">Crisp Live Chat</span> — If you start a chat,
                we may request your full name and email to schedule a meeting or follow up. Crisp’s live monitoring
                may surface technical/usage data like IP address, rough location, browser/OS, and time online.
              </Item>
              <Item>
                <span className="font-semibold text-white">Contact Form</span> — Full name, email,{" "}
                <span className="whitespace-nowrap">domain (optional)</span>, and your message.
              </Item>
              <Item>
                <span className="font-semibold text-white">Analytics & Ads</span> — We use GA4 (aggregated stats),
                Meta (Facebook) Pixel (measurement/retargeting), and GTM (to deploy tags). GTM itself doesn’t
                collect personal data; it loads tags that might.
              </Item>
            </ul>
          </section>

          <section id="use" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">How we use information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              <Item>Respond to inquiries and provide support.</Item>
              <Item>Schedule discovery calls or meetings when requested.</Item>
              <Item>Measure site performance and improve content.</Item>
              <Item>Run and measure advertising (including retargeting where enabled).</Item>
              <Item>Protect against spam and abuse.</Item>
            </ul>
          </section>

          <section id="legal" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Legal bases (where applicable)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              <Item><span className="font-medium text-white">Consent</span> (e.g., analytics/ads cookies via the Consent Banner).</Item>
              <Item><span className="font-medium text-white">Legitimate interests</span> (basic analytics, site operation, security).</Item>
              <Item><span className="font-medium text-white">Contract</span> (communication about requested services).</Item>
              <Item><span className="font-medium text-white">Legal obligations</span> (eg, compliance/security requests).</Item>
            </ul>
          </section>

          <section id="sharing" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Sharing</h2>
            <p className="mt-3 text-slate-300">
              We share data with service providers strictly to run our site/services: Crisp (chat/support),
              Google (GA4, GTM), and Meta (advertising). These providers process data under their own terms
              and privacy notices.
            </p>
          </section>

          <section id="retention" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Retention</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              <Item><span className="font-medium text-white">Contact form</span>: up to 24 months after last interaction, unless required longer.</Item>
              <Item><span className="font-medium text-white">Chat transcripts</span>: as long as needed to support you (Crisp may retain certain logs per its policies).</Item>
              <Item><span className="font-medium text-white">Analytics</span>: GA4 retention per our settings (commonly 14 months) in aggregated form.</Item>
            </ul>
          </section>

          <section id="cookies" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Cookies & tracking</h2>
            <p className="mt-3 text-slate-300">
              We use cookies and similar technologies for essential site features, analytics, and advertising (retargeting).
              Manage preferences via your browser, our Consent Banner, and platform settings. If you’re in California,
              you can also use our{" "}
              <Link href="/do-not-sell-or-share" className="text-teal-400 hover:text-teal-300">
                Do Not Sell or Share
              </Link>{" "}
              link to opt out of “sharing” for cross-context behavioral advertising.
            </p>
          </section>

          <section id="rights" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Your rights</h2>
            <p className="mt-3 text-slate-300">
              Depending on your region, you may have rights to access, correct, delete, object, or restrict processing,
              and to withdraw consent. California residents may also opt out of “sharing” for cross-context behavioral
              advertising. To exercise rights, email{" "}
              <a className="text-teal-400 hover:text-teal-300" href="mailto:panielixllc@gmail.com">
                panielixllc@gmail.com
              </a>.
            </p>
          </section>

          <section id="transfers" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">International transfers</h2>
            <p className="mt-3 text-slate-300">
              We may process/store data in the U.S. and other countries. Where required, we use appropriate safeguards
              (e.g., DPAs or standard contractual clauses).
            </p>
          </section>

          <section id="security" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Security</h2>
            <p className="mt-3 text-slate-300">
              We use reasonable administrative, technical, and physical measures to protect information. No method is
              100% secure; please use caution online.
            </p>
          </section>

          <section id="children" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Children</h2>
            <p className="mt-3 text-slate-300">Our services are not directed to children under 13.</p>
          </section>

          <section id="updates" className="mb-10 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Updates</h2>
            <p className="mt-3 text-slate-300">
              We may update this Policy. We’ll update the date above and, if changes are material, we’ll provide
              additional notice.
            </p>
          </section>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/terms" className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-2 text-slate-200 hover:bg-slate-900">
              Terms &amp; Conditions
            </Link>
            <Link href="/" className="inline-flex items-center rounded-xl bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">
              Back to Home
            </Link>
          </div>

          <details className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <summary className="cursor-pointer text-slate-200 font-semibold">
              Third-party notices (quick references)
            </summary>
            <ul className="mt-3 list-disc pl-5 text-slate-300 space-y-2">
              <li>
                Crisp cookie/IP policy &amp; privacy:{" "}
                <a className="text-teal-400 hover:text-teal-300" target="_blank" rel="noreferrer" href="https://help.crisp.chat/en/article/crisp-chatbox-cookie-ip-policy-1147xor/">
                  Crisp Cookie/IP
                </a>{" "}
                &middot;{" "}
                <a className="text-teal-400 hover:text-teal-300" target="_blank" rel="noreferrer" href="https://crisp.chat/en/privacy/">
                  Crisp Privacy
                </a>
              </li>
              <li>
                Google Analytics 4 EU data & privacy:{" "}
                <a className="text-teal-400 hover:text-teal-300" target="_blank" rel="noreferrer" href="https://support.google.com/analytics/answer/12017362">
                  GA4 Privacy
                </a>
              </li>
              <li>
                Google Tag Manager privacy:{" "}
                <a className="text-teal-400 hover:text-teal-300" target="_blank" rel="noreferrer" href="https://support.google.com/tagmanager/answer/9323295">
                  GTM Privacy
                </a>
              </li>
              <li>
                Meta (Facebook) privacy:{" "}
                <a className="text-teal-400 hover:text-teal-300" target="_blank" rel="noreferrer" href="https://www.facebook.com/privacy/policy/">
                  Meta Privacy Policy
                </a>
              </li>
            </ul>
          </details>
        </article>
      </div>
    </div>
  );
}

'use client';

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  caResident: boolean;
};

export default function DoNotSellOrShareClient() {
  const [gpc, setGpc] = useState<boolean | null>(null);
  const [status, setStatus] = useState<string>("");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "Please process my California opt-out of sale/sharing.",
    caResident: true,
  });

  // Detect Global Privacy Control (GPC)
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const signal = typeof navigator !== "undefined" && !!navigator.globalPrivacyControl;
      setGpc(signal);
    } catch {
      setGpc(null);
    }
  }, []);

  // Deny ad-related consent via Google Consent Mode v2
  const denyAdsConsent = () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.gtag && window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.dataLayer && window.dataLayer.push({ event: "ccpa_opt_out_ads" });
      setStatus('Your ad-related sharing preferences have been set to “opt-out” on this browser.');
    } catch {
      setStatus("We could not update consent automatically. Please use the preferences button below.");
    }
  };

  // Open your ConsentBanner preferences (if you listen for this event)
  const openPreferences = () => {
    try {
      window.dispatchEvent(new CustomEvent("open-consent-preferences"));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.dataLayer && window.dataLayer.push({ event: "open_consent_preferences" });
    } catch { }
  };

  // Send an opt-out via Crisp chat
  const chatOptOut = () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.$crisp?.push(["do", "chat:open"]);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.$crisp?.push([
        "do",
        "message:send",
        ["text", "Hi, please process my California opt-out of sale/sharing. My email is " + (form.email || "(add your email)")]
      ]);
      setStatus("Chat opened. We’ll take it from there.");
    } catch {
      setStatus("Could not open chat. Please use the form below or email hello@panielix.com.");
    }
  };

  // Mailto fallback (swap with an API route if you prefer)
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("California Opt-Out of Sale/Sharing");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCalifornia Resident: ${form.caResident ? "Yes" : "No"}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hello@panielix.com?subject=${subject}&body=${body}`;
  };

  const updated = useMemo(() => new Date().toLocaleDateString(), []);
  const gpcBadge = useMemo(() => {
    if (gpc === null) return null;
    return gpc ? (
      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/20 px-3 py-1 text-emerald-300 ring-1 ring-emerald-700/40">
        <span className="material-icons text-base leading-none">verified</span>
        Opt-Out Preference Signal Honored (GPC)
      </span>
    ) : (
      <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-slate-300 ring-1 ring-slate-700/60">
        <span className="material-icons text-base leading-none">privacy_tip</span>
        GPC not detected on this browser
      </span>
    );
  }, [gpc]);

  const Input = (props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
    <label className="block">
      <span className="block text-sm text-slate-300 mb-1">{props.label}</span>
      <input
        {...props}
        className="w-full rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-600"
      />
    </label>
  );

  return (
    <div className="mx-auto w-full max-w-5xl px-4 md:px-6 py-12 md:py-16">
      <header className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Do Not Sell or Share My Personal Information
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Use this page to opt out of the <span className="font-semibold text-white">sale or sharing</span> of your
          personal information for cross-context behavioral advertising. We honor Global Privacy Control (GPC).
        </p>
        <p className="mt-1 text-xs text-slate-500">Last updated: {updated}</p>
        <div className="mt-4">{gpcBadge}</div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-4 md:order-2">
          <nav className="sticky top-20 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="mb-2 text-sm font-semibold text-slate-200">On this page</p>
            <ul className="space-y-2 text-sm">
              {[
                ["how", "How the opt-out works"],
                ["options", "Opt-out options"],
                ["form", "Request form (fallback)"],
                ["learn", "Learn more"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a className="text-teal-400 hover:text-teal-300" href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <article className="md:col-span-8 md:order-1 space-y-10">
          <section id="how" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">How the opt-out works</h2>
            <p className="mt-3 text-slate-300">
              When you opt out here, we stop using your information for cross-context behavioral advertising on this
              browser by turning off advertising signals via Google Consent Mode. If your browser sends a{" "}
              <span className="font-medium text-white">Global Privacy Control (GPC)</span> signal, we honor it automatically.
            </p>
          </section>

          <section id="options" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Opt-out options</h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <button
                onClick={denyAdsConsent}
                className="rounded-2xl bg-teal-600 px-4 py-3 text-left text-white hover:bg-teal-700 focus:outline-none"
              >
                <div className="flex items-start gap-3">
                  <span className="material-icons">block</span>
                  <div>
                    <div className="font-semibold">Opt out of sale/sharing (ads)</div>
                    <p className="text-sm text-teal-50/90">
                      Disables ad_storage, ad_user_data & ad_personalization on this browser.
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={openPreferences}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-left text-slate-200 hover:bg-slate-900 focus:outline-none"
              >
                <div className="flex items-start gap-3">
                  <span className="material-icons">tune</span>
                  <div>
                    <div className="font-semibold">Open cookie & consent preferences</div>
                    <p className="text-sm text-slate-400">
                      Adjust other categories (e.g., analytics) via the consent banner.
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={chatOptOut}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-left text-slate-200 hover:bg-slate-900 focus:outline-none"
              >
                <div className="flex items-start gap-3">
                  <span className="material-icons">chat</span>
                  <div>
                    <div className="font-semibold">Ask via live chat (Crisp)</div>
                    <p className="text-sm text-slate-400">
                      We’ll process your request and confirm in the chat transcript.
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {status && <p className="mt-4 text-sm text-emerald-300">{status}</p>}
          </section>

          <section id="form" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Request form (fallback)</h2>
            <p className="mt-3 text-slate-300">
              Prefer to submit a written request? Use this form. We’ll handle it by email if you don’t have an account.
            </p>

            <form onSubmit={onSubmit} className="mt-4 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <Input
                label="Full name"
                name="name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
                placeholder="Jane Doe"
                autoComplete="name"
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
                placeholder="you@example.com"
                autoComplete="email"
              />
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.caResident}
                  onChange={(e) => setForm((f) => ({ ...f, caResident: e.target.checked }))}
                  className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-teal-600 focus:ring-teal-600"
                />
                <span className="text-sm text-slate-300">
                  I am a California resident (or acting on behalf of one).
                </span>
              </label>
              <label className="block">
                <span className="block text-sm text-slate-300 mb-1">Message (optional)</span>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </label>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
                >
                  <span className="material-icons text-base">send</span>
                  Submit by email
                </button>

                <button
                  type="button"
                  onClick={chatOptOut}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-2 text-slate-200 hover:bg-slate-900"
                >
                  <span className="material-icons text-base">chat_bubble</span>
                  Submit in live chat
                </button>
              </div>
            </form>
          </section>

          <section id="learn" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold text-white">Learn more</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="text-slate-300">
                We honor browser opt-out preference signals such as{" "}
                <a className="text-teal-400 hover:text-teal-300" href="https://globalprivacycontrol.org/" target="_blank" rel="noreferrer">
                  Global Privacy Control (GPC)
                </a>.
              </li>
              <li className="text-slate-300">
                See our <Link className="text-teal-400 hover:text-teal-300" href="/privacy-policy">Privacy Policy</Link> for details on data we collect
                (Crisp chat, contact form) and technologies we use (GA4, Facebook Pixel, GTM).
              </li>
            </ul>
          </section>

          <div className="pt-2 flex flex-wrap gap-3">
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

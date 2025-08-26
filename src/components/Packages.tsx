'use client';

import Script from 'next/script';
import { packagesAsProductLd } from '@/lib/seo-ld';

const packages = [
  { title: 'High-Impact Landing Page', description: 'Single-page, conversion-optimized lead engine.' },
  { title: 'Business Website', description: 'Multi-page presence to showcase services and build trust.' },
  { title: 'Content-Driven Website', description: 'Blog-ready platform built for search traffic and authority.' },
  { title: 'Custom Build', description: 'Tailored features, integrations, and e-commerce if needed.' },
];

// ---- Crisp typings (minimal but strict enough) ----
type CrispCommand =
  | ['do', 'chat:open']
  | ['do', 'message:send', ['text', string]]
  | ['set', 'session:segments', [string[]]];

type CrispQueue = CrispCommand[];

declare global {
  interface Window {
    $crisp?: CrispQueue;
  }
}

export default function Packages() {
  const cards = [
    {
      icon: 'launch',
      title: 'Landing Page',
      desc: 'Perfect for validating an idea or driving conversions for a single, focused campaign.',
      bullets: ['Single Page Layout', 'Conversion-Focused Design', 'Lead Capture Form'],
      chatText:
        "Hi! I'm interested in the Landing Page package. Can you share price, timeline, and what’s included?",
    },
    {
      icon: 'web',
      title: 'Business Website',
      desc: 'Establish a strong online presence and showcase your core services effectively.',
      bullets: ['Up to 5 Pages', 'SEO Optimized', 'Mobile-First Design'],
      chatText:
        "Hello! I'd like details about the Business Website package (pricing, scope, and delivery time).",
    },
    {
      icon: 'article',
      title: 'Content-Driven Website',
      desc: 'Become an authority in your niche and attract organic traffic with a content-driven platform.',
      bullets: ['Full Blog Functionality', 'Content Management System', 'Advanced SEO Features'],
      chatText:
        "Hi there—I'm considering the Content-Driven Website package. What CMS do you use and what’s the cost/timeline?",
    },
    {
      icon: 'build_circle',
      title: 'Custom Build',
      desc: 'For unique projects requiring e-commerce, custom features, or specific integrations.',
      bullets: ['Custom Scope & Features', 'E-commerce / API Integrations', 'Dedicated Support'],
      chatText:
        'Hi! I need a Custom Build. Here are my goals—can we discuss features, budget, and next steps?',
    },
  ];

  const openCrispWith = (message: string, pkgTitle: string) => {
    try {
      const q = typeof window !== 'undefined' ? window.$crisp : undefined;

      if (q) {
        // use pkgTitle so it's not "unused" and to segment sessions in Crisp
        q.push(['set', 'session:segments', [[`package:${pkgTitle}`]]]);
        q.push(['do', 'chat:open']);
        q.push(['do', 'message:send', ['text', message]]);
        return;
      }

      // Fallback if Crisp isn't ready
      const hash = '#contact';
      const el = typeof document !== 'undefined' ? document.querySelector(hash) : null;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/contact';
      }
    } catch {
      // Hard fallback without an unused "e"
      window.location.href = '/contact';
    }
  };

  return (
    <section id="packages" className="bg-[var(--slate-900)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Solutions Tailored for Growth</h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[var(--slate-400)]">
            We don&apos;t sell packages; we provide value-driven solutions. Find the perfect fit to achieve your business goals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group flex h-full flex-col rounded-lg border border-[var(--slate-700)] bg-[var(--slate-800)] p-8 shadow-lg transition-transform hover:-translate-y-2"
            >
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

                <div className="mt-6" />
              </div>

              <button
                type="button"
                onClick={() => openCrispWith(c.chatText, c.title)}
                className="block w-full rounded-lg bg-[var(--primary-500)] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-600)]"
                aria-label={`Chat about ${c.title} on Crisp`}
              >
                Chat with Us
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Keep your Product structured data for SEO */}
      <Script id="ld-products" type="application/ld+json">
        {JSON.stringify(packagesAsProductLd(packages))}
      </Script>
    </section>
  );
}

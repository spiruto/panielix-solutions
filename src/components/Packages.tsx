'use client';

import Script from 'next/script';
import { packagesAsProductLd } from '@/lib/seo-ld';

// ----------------------
// Source-of-truth catalog
// ----------------------
const webPackages = [
  { title: 'High-Impact Landing Page', description: 'Single-page, conversion-optimized lead engine.' },
  { title: 'Business Website', description: 'Multi-page presence to showcase services and build trust.' },
  { title: 'Content-Driven Website', description: 'Blog-ready platform built for search traffic and authority.' },
  { title: 'Custom Build', description: 'Tailored features, integrations, and e-commerce if needed.' },
];

// Added the two you mentioned + your chosen four
const marketingPackages = [
  { title: 'Paid Advertising (PPC & Media Buying)', description: 'Google, Meta & TikTok Ads with retargeting and ROI tracking.' },
  { title: 'Email Marketing & Automation', description: 'Branded templates, contact forms & CRM hookup, newsletters, automated flows.' },
  { title: 'Analytics & Conversion Tracking', description: 'GA4, Meta/TikTok Pixels, events, goals, and monthly performance dashboards.' },
  { title: 'Reputation & Local SEO', description: 'Google Business Profile, reviews, listings, and geo-targeted visibility.' },
  { title: 'Social Media Management', description: 'Reels, Stories, and Posts with strategy, calendars, captions, and reporting.' },
  { title: 'SEO Content Enrichment', description: 'High-quality blogs/pages, keyword scaling, and on-page optimization.' },
];

const allPackages = [...webPackages, ...marketingPackages];

// ---- Crisp typings ----
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

type Card = {
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
  chatText: string;
};

// ----------------------
// Visual cards
// ----------------------
const webCards: Card[] = [
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

const marketingCards: Card[] = [
  {
    icon: "email",
    title: "Email Marketing Setup",
    desc: "Setup of email marketing infrastructure, branded templates, and foundational automations to launch your campaigns effectively.",
    bullets: ["Branded Templates", "Automated Flows", "Subscriber Capture Forms", "Performance Tracking Setup"],
    chatText: "Hello! I’d like help setting up email marketing—templates, automations, and tracking. Can you outline scope & pricing?"
  },
  {
    icon: 'insights',
    title: 'Analytics & Conversion Tracking',
    desc: 'GA4, Pixels, events and conversion dashboards so decisions are data-driven.',
    bullets: ['GA4 Setup', 'Meta/TikTok Pixels', 'Event/Goal Tracking', 'Monthly Dashboards'],
    chatText:
      "Hi! I want proper analytics and conversion tracking. What will you track and how will I see the results?",
  },
  {
    icon: 'stars',
    title: 'Reputation & Local SEO',
    desc: 'Win local searches and manage reviews across Google & key directories.',
    bullets: ['GBP Setup/Optimization', 'Review Strategy', 'Local Citations', 'Geo-SEO Basics'],
    chatText:
      "Hi! I want better local visibility and more reviews. Can you help optimize my Google profile and reputation?",
  },
  {
    icon: 'auto_awesome_motion',
    title: 'Social Media Management',
    desc: 'Reels, Stories, and Posts crafted for growth and consistency.',
    bullets: ['Reels/Stories/Posts', 'Content Calendar', 'Hashtags & Captions', 'Performance Reports'],
    chatText:
      "Hi! I’m interested in Social Media Management—can you propose a content calendar and monthly plan?",
  },
  {
    icon: 'edit_note',
    title: 'SEO Content Enrichment',
    desc: 'High-quality blogs and optimized pages built on solid keyword strategy.',
    bullets: ['Keyword Strategy', 'Editorial Calendar', 'On-Page Optimization', 'Internal Linking'],
    chatText:
      "Hi! I want SEO content (blogs/pages). Can you suggest topics, frequency, and expected growth?",
  },
];

// ----------------------
// Component
// ----------------------
export default function Packages() {
  const openCrispWith = (message: string, pkgTitle: string) => {
    try {
      const q = typeof window !== 'undefined' ? window.$crisp : undefined;
      if (q) {
        q.push(['set', 'session:segments', [[`package:${pkgTitle}`]]]);
        q.push(['do', 'chat:open']);
        q.push(['do', 'message:send', ['text', message]]);
        return;
      }
      // Fallback if Crisp isn't ready
      const el = typeof document !== 'undefined' ? document.querySelector('#contact') : null;
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = '/contact';
    } catch {
      window.location.href = '/contact';
    }
  };

  const Section = ({
    id,
    title,
    subtitle,
    cards,
  }: {
    id: string;
    title: string;
    subtitle: string;
    cards: Card[];
  }) => (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h3>
          <p className="mt-3 mx-auto max-w-2xl text-base text-[var(--slate-400)]">{subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`group flex h-full flex-col rounded-lg border border-[var(--slate-700)] bg-[var(--slate-800)] p-8 shadow-lg transition-transform hover:-translate-y-2 ${c.title === "Reputation & Local SEO" ? "sm:hidden" : ""}`}
            >
              <div className="flex flex-1 flex-col">
                <div className="flex items-center gap-4">
                  <span className="material-icons text-4xl text-[var(--primary-400)]">{c.icon}</span>
                  <h4 className="text-xl font-bold text-white">{c.title}</h4>
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
    </section>
  );

  return (
    <section id="packages" className="bg-[var(--slate-900)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Solutions Tailored for Growth</h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[var(--slate-400)]">
            Choose exactly what you need—build your web presence or accelerate growth with results-driven marketing.
          </p>
        </div>

        {/* Web Services */}
        <Section
          id="packages-web"
          title="Web Services"
          subtitle="High-performance websites engineered for speed, conversion, and trust."
          cards={webCards}
        />

        {/* Marketing */}
        <Section
          id="packages-marketing"
          title="Marketing"
          subtitle="Bring qualified traffic, capture leads, and measure what matters."
          cards={marketingCards}
        />
      </div>

      {/* Structured Data for all packages (Web + Marketing) */}
      <Script id="ld-products" type="application/ld+json">
        {JSON.stringify(packagesAsProductLd(allPackages))}
      </Script>
    </section>
  );
}

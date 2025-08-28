'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LocaleSwitcherFab() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // Use current pathname, but ensure it's LOCALE-FREE
  const pathFromHook = usePathname() || '/';
  const pathname = useMemo(() => {
    // If your i18n helper already returns locale-free paths, this is a no-op.
    // Otherwise, strip a leading /en or /es robustly.
    const raw =
      typeof window !== 'undefined' ? window.location.pathname : pathFromHook;
    const stripped = raw.replace(/^\/(en|es)(?=\/|$)/, '') || '/';
    return stripped;
  }, [pathFromHook]);

  // Keep the exact query string as an object (router object form needs an object)
  const searchParams = useSearchParams();
  const query = useMemo(
    () => Object.fromEntries(searchParams?.entries?.() ?? []),
    [searchParams]
  );

  // Track current hash (without the leading '#')
  const [hash, setHash] = useState<string>('');
  useEffect(() => {
    const read = () =>
      typeof window === 'undefined' ? '' : (window.location.hash || '').replace(/^#/, '');
    setHash(read());
    const onHash = () => setHash(read());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Close on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!open) return;
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    window.addEventListener('mousedown', onClickOutside);
    return () => window.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function switchLocale(nextLocale: 'en' | 'es') {
    setOpen(false);

    const currentHash = hash; // capture at click time

    // 👉 Push locale-free path; let router add the locale (prevents /en/es)
    router.push({ pathname, query }, { locale: nextLocale, scroll: false });

    // Re-apply hash & scroll after the new page renders
    if (currentHash) {
      const id = currentHash;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (window.location.hash !== `#${currentHash}`) {
            window.location.hash = `#${currentHash}`;
          }
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' as ScrollLogicalPosition });
        });
      });
    }
  }

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 left-4 z-[2147483000] flex flex-col items-start gap-2"
      aria-live="polite"
    >
      {/* Options popover */}
      <div
        role="menu"
        aria-label="Select language"
        className={`transition-all duration-200 origin-bottom-left ${open
            ? 'scale-100 opacity-100 translate-y-0'
            : 'pointer-events-none scale-95 opacity-0 translate-y-2'
          }`}
      >
        <div className="mb-2 rounded-2xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-black/5 p-2 flex flex-col gap-1">
          <LocaleItem onClick={() => switchLocale('en')} label="English" emoji="🇺🇸" code="EN" />
          <LocaleItem onClick={() => switchLocale('es')} label="Español" emoji="🇪🇸" code="ES" />
        </div>
      </div>

      {/* FAB */}
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Language switcher"
        onClick={() => setOpen(v => !v)}
        className="group inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-900 text-white shadow-lg ring-1 ring-black/10 hover:scale-105 active:scale-95 transition-transform"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20" />
        </svg>
        <span className="sr-only">Open language switcher</span>
      </button>
    </div>
  );
}

function LocaleItem({
  onClick,
  label,
  emoji,
  code,
}: {
  onClick: () => void;
  label: string;
  emoji: string;
  code: 'EN' | 'ES';
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-40 items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none text-left"
      role="menuitem"
    >
      <span className="text-xl leading-none" aria-hidden>
        {emoji}
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-900">{label}</span>
        <span className="text-xs text-slate-500">{code}</span>
      </div>
    </button>
  );
}

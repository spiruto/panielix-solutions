"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[var(--slate-800)] bg-[var(--slate-950)]/80 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-10">
      <Link href="#" className="flex items-center gap-3 text-white">
        <svg className="h-8 w-8 text-[var(--primary-500)]" fill="none" viewBox="0 0 48 48">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M47.2426 24L24 47.2426 0.757 24 24 .757 47.2426 24ZM12.243 21h23.515L24 9.243 12.243 21Z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-xl font-bold leading-tight tracking-tight">Panielix Solutions</h2>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {[
          ["Home", "#home"],
          ["Benefits", "#benefits"],
          ["Packages", "#packages"],
          ["Portfolio", "#portfolio"],
          ["Process", "#process"],
          ["FAQ", "#faq"],
        ].map(([label, href]) => (
          <a key={href} className="text-sm font-medium text-white transition-colors hover:text-[var(--primary-400)]" href={href}>
            {label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="flex min-w-[100px] items-center justify-center overflow-hidden rounded-lg bg-[var(--primary-500)] px-4 py-2 text-sm font-bold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[var(--primary-600)]"
        >
          <span className="truncate">Get Your Quote</span>
        </a>
        <button aria-label="Open menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-[var(--slate-800)] bg-[var(--slate-900)] p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {[
              ["Home", "#home"],
              ["Benefits", "#benefits"],
              ["Packages", "#packages"],
              ["Portfolio", "#portfolio"],
              ["Process", "#process"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="py-1 text-white hover:text-[var(--primary-400)]">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

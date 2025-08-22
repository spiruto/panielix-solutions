"use client";
import { useEffect, useState } from "react";

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("exitIntentShown");
    if (shown) return;

    function handle(e: MouseEvent) {
      if (e.clientY < 0) {
        setOpen(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    }
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-md rounded-lg bg-[var(--slate-900)] p-8 shadow-2xl text-center">
        <button className="absolute right-2 top-2 text-2xl text-white" onClick={() => setOpen(false)}>
          ×
        </button>
        <h3 className="text-2xl font-bold text-white">Wait! Before You Go...</h3>
        <p className="mt-4 text-[var(--slate-400)]">
          Get an exclusive <strong className="text-[var(--primary-400)]">10% discount</strong> on any package by booking a call today. Limited-time offer!
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block w-full rounded-lg bg-[var(--primary-500)] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-600)]"
          onClick={() => setOpen(false)}
        >
          Claim My 10% Discount
        </a>
      </div>
    </div>
  );
}

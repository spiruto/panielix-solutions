"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ConsentBanner() {
  const t = useTranslations('ConsentBanner');

  const [show, setShow] = useState(false);

  useEffect(() => {
    const ok = localStorage.getItem("consent-ok");
    if (!ok) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div id="consent-banner" className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--slate-900)] p-4 text-center text-white">
      <p className="text-sm">
        {t("desc")}
        <Link href="/privacy-policy" className="underline">
          {t("privacy")}
        </Link>.
        <button
          onClick={() => {
            localStorage.setItem("consent-ok", "1");
            setShow(false);
          }}
          className="ml-4 rounded-md bg-[var(--primary-500)] px-3 py-1 text-sm font-bold"
        >
          {t("cta")}
        </button>
      </p>
    </div>
  );
}

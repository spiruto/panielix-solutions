import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[var(--slate-900)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <svg className="h-8 w-8 text-[var(--primary-500)]" fill="none" viewBox="0 0 48 48">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M47.2426 24L24 47.2426 0.757 24 24 .757 47.2426 24ZM12.243 21h23.515L24 9.243 12.243 21Z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-xl font-bold">{t("brand")}</h2>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--slate-400)]">
            <Link className="hover:text-white" href="/#benefits">{t("nav.benefits")}</Link>
            <Link className="hover:text-white" href="/#packages">{t("nav.packages")}</Link>
            {/* <a className="hover:text-white" href="#portfolio">Portfolio</a> */}
            <Link className="hover:text-white" href="/#process">{t("nav.process")}</Link>
            <Link className="hover:text-white" href="/#faq">{t("nav.faq")}</Link>
            <Link className="hover:text-white" href="/#contact">{t("nav.contact")}</Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-[var(--slate-700)] pt-8 md:flex md:items-center md:justify-between">
          <p className="text-center text-base text-[var(--slate-400)]">{t("copyright", { "year": new Date().getFullYear() })}</p>
          <div className="mt-4 flex justify-center space-x-6 md:mt-0">
            <Link className="text-sm text-[var(--slate-400)] hover:text-white" href="/privacy-policy">{t("links.privacy")}</Link>
            <Link className="text-sm text-[var(--slate-400)] hover:text-white" href="/terms-and-conditions">{t("links.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

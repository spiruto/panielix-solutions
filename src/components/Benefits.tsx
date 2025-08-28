import { useTranslations } from "next-intl";

export default function Benefits() {
  const t = useTranslations('Benefits');
  const common = useTranslations('Common');

  const items = [
    { icon: "visibility", title: t("cards.attract.title"), desc: t("cards.attract.body") },
    { icon: "monetization_on", title: t("cards.convert.title"), desc: t("cards.convert.body") },
    { icon: "shield", title: t("cards.trust.title"), desc: t("cards.trust.body") },
  ];
  return (
    <section id="benefits" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg text-[var(--slate-400)]">
            {t("intro")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-500)] text-white">
                <span className="material-icons text-4xl">{it.icon}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{it.title}</h3>
              <p className="mt-2 text-[var(--slate-400)]">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--primary-500)] px-8 py-3 text-base font-bold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[var(--primary-600)]"
          >
            {common("cta.getFreeProposal")}
          </a>
        </div>
      </div>
    </section>
  );
}

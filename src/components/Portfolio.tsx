// import Image from "next/image";

import { useTranslations } from "next-intl";

// const items = [
//   {
//     title: "Tech Startup",
//     desc: "A sleek, modern website for a growing tech startup.",
//     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-wT8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Y8Z8Y8Z8Y8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Y8Z",
//     stats: [
//       { k: "+150%", v: "Traffic" },
//       { k: "+200%", v: "Leads" },
//     ],
//   },
//   {
//     title: "Artisan Boutique",
//     desc: "An e-commerce platform for a local artisan boutique.",
//     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-wT8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Z8Y8Z8Y8Z8Y8",
//     stats: [
//       { k: "+90%", v: "Online Sales" },
//       { k: "98", v: "PageSpeed" },
//     ],
//   },
//   {
//     title: "Consulting Firm",
//     desc: "A professional services site for a financial consulting firm.",
//     img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-wT8Z8Y8Y8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8Z8Y8",
//     stats: [
//       { k: "+300%", v: "Inquiries" },
//       { k: "+40%", v: "Credibility" },
//     ],
//   },
// ];

export default function Portfolio() {
    const t = useTranslations('Work');

  return (
    <section id="portfolio" className="bg-[var(--slate-900)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[var(--slate-400)]">{t("desc")}
          </p>
        </div>

        {/* <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-black/60 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
                <div className="mt-4 flex gap-4 text-sm font-bold">
                  {p.stats.map((s) => (
                    <div key={s.v} className="flex flex-col items-center">
                      <span className="text-2xl text-[var(--primary-400)]">{s.k}</span>
                      <span>{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

import { useTranslations } from "next-intl";
import Image from "next/image";



export default function Testimonials() {
  const t = useTranslations('Testimonials');
  const common = useTranslations('Common');
  const items = [

    {
      name: t("items.northshore.name"),
      quote:
        t("items.northshore.quote"),
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuNtfKDDs2i1DO6mQJmAAC-ohx7cvHA3N1-hQ5vyWncThIW_jQBFCw_dHjSSucRYHyyKl_w1fjLHAB9mlp9WIk8rNaxP7LqIHDnVR40djVggvDv1UgklFnyBBhbE4lYDzZ_vO6CaAL6aY9jid6EQO0J5XB2k-UY36RBjggunRNTYhagrHv4sLzy0Wqjq0FqOhReDOZ1H4NNmm7mkiH67cXEOPwg76eQFqAqIR7mqZm2g3yKk8QpCieSn4-YXp2hbzqH-rM2cTz0SQ",
    },
    {
      name: t("items.copperSpoon.name"),
      quote:
        t("items.copperSpoon.quote"),
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2wMnKtyw2Qe1KTTm7G9-t2FvkFqr8JHCn0vGBUyf81K4si9XucRZlvGjmBX_7tsMf_Tmq6njdCnKzQq_9kREtM2cL2pSL0_mlTG1Lm7nwshEpCoztMQrVLlD8qhVG9hkwMZWSMDGNFkPt2nQmkUQ7AZsMS7rxQ2k9l4RQhIavxLRqwgO32DPQUm_KpAxZZsU1iUqPo2C7MncL2RsZVIaLvr_ovhLUC4r0DxBRKY0uxOsTvLFiGYu9OAg4v9WHpKQVBRbbsqiuKFY",
    },
    {
      name: t("items.brightline.name"),
      quote:
        t("items.brightline.quote"),
         img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCucfARab-JpzGvIKrPAw2LgPtWwtvWYkIVGv2dMV-9F_ZSl7pFOZQ3PEgPZ2HV7dIoxCt2Ywwi4OotjhwS2fmOwmopWFjoN2EVCA0epxSdbPnEeX2jH2FVoOXTpaPUOelTdAz64D8mxHXuSc8CNRsaVZKmxbWb-66aDA86NwMp8yaippfqHo-DZkos-8KG_Wlp9TsmxJ2wqs5waOM0Vm9U55aOBtEPMUNXFlBIxAJwLFt2zDJGGwL57VH2uTy1rbRb6IxnpsPoYNA",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-[var(--slate-400)]">
          {t("desc", { brandName: common("brandName") })}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {items.map((t) => (
          <div
            key={t.name}
            className="rounded-lg bg-[var(--slate-900)] p-6 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <Image
                width={48}
                height={48}
                src={t.img}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold">{t.name}</p>
                <div className="flex items-center text-sm text-[var(--slate-400)]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-icons text-base text-[var(--primary-400)]"
                      aria-hidden="true"
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-[var(--slate-400)] leading-relaxed">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

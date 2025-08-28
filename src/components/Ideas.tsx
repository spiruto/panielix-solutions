import { useTranslations } from "next-intl";

export default function Ideas() {
  const t = useTranslations('Ideas');

  const ideas = [
    {
      icon: "restaurant",
      title: t("items.restaurants.title"),
      desc: t("items.restaurants.desc"),
    },
    {
      icon: "fitness_center",
      title: t("items.gyms.title"),
      desc: t("items.gyms.desc"),
    },
    {
      icon: "engineering",
      title: t("items.construction.title"),
      desc: t("items.construction.desc"),
    },
    {
      icon: "campaign",
      title: t("items.agencies.title"),
      desc: t("items.agencies.desc"),
    },
    {
      icon: "shopping_bag",
      title: t("items.shops.title"),
      desc: t("items.shops.desc"),
    },
    {
      icon: "medical_services",
      title: t("items.clinics.title"),
      desc: t("items.clinics.desc"),
    },
    {
      icon: "celebration",
      title: t("items.events.title"),
      desc: t("items.events.desc"),
    },
    {
      icon: "school",
      title: t("items.tutors.title"),
      desc: t("items.tutors.desc"),
    },
    {
      icon: "house",
      title: t("items.realEstate.title"),
      desc: t("items.realEstate.desc"),
    },
    {
      icon: "spa",
      title: t("items.spas.title"),
      desc: t("items.spas.desc"),
    },
    {
      icon: "local_taxi",
      title: t("items.transport.title"),
      desc: t("items.transport.desc"),
    },
    {
      icon: "volunteer_activism",
      title: t("items.nonprofits.title"),
      desc: t("items.nonprofits.desc"),
    },
    {
      icon: "pets",
      title: t("items.pets.title"),
      desc: t("items.pets.desc"),
    },
    {
      icon: "computer",
      title: t("items.it.title"),
      desc: t("items.it.desc"),
    },
    {
      icon: "travel_explore",
      title: t("items.travel.title"),
      desc: t("items.travel.desc"),
    },
  ];

  return (
    <section className="bg-[var(--slate-950)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[var(--slate-400)]">
            {t("intro")}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <div
              key={idea.title}
              className="flex flex-col rounded-xl border border-[var(--slate-800)] bg-[var(--slate-900)] p-8 shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4">
                <span className="material-icons text-4xl text-[var(--primary-400)]">
                  {idea.icon}
                </span>
                <h3 className="text-xl font-bold text-white">{idea.title}</h3>
              </div>
              <p className="mt-4 text-sm text-[var(--slate-400)]">{idea.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

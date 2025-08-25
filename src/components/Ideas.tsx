export default function Ideas() {
  const ideas = [
    {
      icon: "restaurant",
      title: "Restaurants & Cafés",
      desc: "Show your full menu online with photos and prices. Add a QR code on tables so customers can view instantly and call to order.",
    },
    {
      icon: "fitness_center",
      title: "Gyms & Fitness Centers",
      desc: "Highlight membership packages, schedules, and trainers. Add sign-up forms to convert visitors into paying members.",
    },
    {
      icon: "engineering",
      title: "Construction & Contractors",
      desc: "Showcase past projects, testimonials, and contact options. Build trust and attract clients for bigger jobs.",
    },
    {
      icon: "campaign",
      title: "Marketing Agencies",
      desc: "List services, packages, and case studies. A sharp site gives instant authority and helps close more deals.",
    },
    {
      icon: "shopping_bag",
      title: "Shops & Boutiques",
      desc: "Showcase products, brand story, and Google Maps location. Drive both online and in-person sales.",
    },
    {
      icon: "medical_services",
      title: "Clinics & Health Professionals",
      desc: "Share services, pricing, and contact info. Add booking forms so patients can easily schedule appointments.",
    },
    {
      icon: "celebration",
      title: "Event Planners & Venues",
      desc: "Promote packages, display past events, and use galleries. Make it easy for clients to book you fast.",
    },
    {
      icon: "school",
      title: "Tutors & Coaches",
      desc: "Showcase expertise, packages, and testimonials. Let students or parents schedule sessions online.",
    },
    {
      icon: "house",
      title: "Real Estate Agents",
      desc: "List available properties with photos, pricing, and contact options. Generate more qualified leads instantly.",
    },
    {
      icon: "spa",
      title: "Spas & Beauty Salons",
      desc: "Show treatments, prices, and before/after results. Add booking links to fill your calendar 24/7.",
    },
    {
      icon: "local_taxi",
      title: "Transportation Services",
      desc: "Promote airport transfers, limo services, or delivery. Customers can see prices and book directly online.",
    },
    {
      icon: "volunteer_activism",
      title: "Nonprofits & Charities",
      desc: "Share your mission, events, and donation options. A modern site builds trust and drives more support.",
    },
    {
      icon: "pets",
      title: "Pet Services",
      desc: "Promote grooming, walking, or boarding services. Add galleries and testimonials to attract more pet owners.",
    },
    {
      icon: "computer",
      title: "IT & Tech Services",
      desc: "Highlight your services, pricing, and success stories. Capture more B2B leads with professional credibility.",
    },
    {
      icon: "travel_explore",
      title: "Travel & Tourism",
      desc: "Show packages, destinations, and booking info. Inspire visitors to reach out and plan their next trip.",
    },
  ];

  return (
    <section className="bg-[var(--slate-950)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ideas to Inspire Your Website
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[var(--slate-400)]">
            Not sure what type of website you need? Here are{" "}
            <span className="text-white font-semibold">15 high-impact ideas </span>
            that can turn visitors into paying customers across different industries.
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

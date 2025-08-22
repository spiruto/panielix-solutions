export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center bg-cover bg-fixed bg-center py-20 text-center md:min-h-screen"
      style={{
        backgroundImage:
          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD910u7t478i5d-K-C8lXp4mQyQ-5U6b8t9kL7oJ5c6v7k8i9r0pX0l-A9bC1s2kQ-J1f4yG5r6h8w9n0tZ1r2i3aB4dE-S1o-C-G7i-H-P-L-T1wA0s-Y1x-V-U-W1z-X2y3z4")',
      }}
    >
      <div className="absolute inset-0 hero-gradient-overlay" />
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-black leading-tight tracking-tighter text-white sm:text-5xl md:text-7xl">
          Your Website Should Make You Money, Not Cost You Money.
        </h1>
        <p className="mt-4 text-lg font-normal text-gray-200 md:text-xl">
          We build high-value, lead-generating websites for small and medium businesses ready to grow. Stop losing customers and start converting them.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--primary-500)] px-8 py-3 text-base font-bold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[var(--primary-600)] sm:w-auto"
          >
            Start My Project
          </a>
          <a
            href="#packages"
            className="inline-flex w-full items-center justify-center rounded-lg border border-[var(--primary-400)] px-8 py-3 text-base font-bold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[var(--primary-400)] sm:w-auto"
          >
            Explore Our Solutions
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-[var(--slate-400)]">
          <span className="flex items-center gap-1">
            <span className="material-icons text-base text-green-400">verified</span> No Hidden Fees or Long Contracts
          </span>
          <span className="h-4 w-px bg-[var(--slate-700)]" />
          <span className="flex items-center gap-1">
            <span className="material-icons text-base text-green-400">verified</span> Fast Turnaround Guaranteed
          </span>
          <span className="h-4 w-px bg-[var(--slate-700)]" />
          <span className="flex items-center gap-1">
            <span className="material-icons text-base text-green-400">verified</span> Optimized to Generate Leads
          </span>
        </div>
      </div>
    </section>
  );
}

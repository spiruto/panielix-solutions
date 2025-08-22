export default function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--slate-800)]/90 p-4 backdrop-blur-sm md:hidden">
      <a
        href="#contact"
        className="flex w-full items-center justify-center rounded-lg bg-[var(--primary-500)] px-6 py-3 text-base font-bold text-white shadow-lg"
      >
        <span className="material-icons mr-2">email</span>
        <span>Get My Free Proposal</span>
      </a>
    </div>
  );
}

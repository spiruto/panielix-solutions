export default function Footer() {
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
            <h2 className="text-xl font-bold">Panielix Solutions</h2>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--slate-400)]">
            <a className="hover:text-white" href="#benefits">Benefits</a>
            <a className="hover:text-white" href="#packages">Packages</a>
            <a className="hover:text-white" href="#portfolio">Portfolio</a>
            <a className="hover:text-white" href="#process">Process</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>

        <div className="mt-8 border-t border-[var(--slate-700)] pt-8 md:flex md:items-center md:justify-between">
          <p className="text-center text-base text-[var(--slate-400)]">© {new Date().getFullYear()} - All Rights Reserved</p>
          <div className="mt-4 flex justify-center space-x-6 md:mt-0">
            <a className="text-sm text-[var(--slate-400)] hover:text-white" href="#">Privacy Policy</a>
            <a className="text-sm text-[var(--slate-400)] hover:text-white" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

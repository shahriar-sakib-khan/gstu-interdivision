import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/50 backdrop-blur-xl border-b border-gray-200 dark:border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" className="fill-white dark:fill-white" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 7L16 10V15L12 18L8 15V10L12 7Z" className="fill-gray-900 dark:fill-black" />
                <path d="M12 7V2M16 10L20.5 8M16 15L20.5 17M12 18V22M8 15L3.5 17M8 10L3.5 8" className="stroke-gray-900 dark:stroke-black" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">GSTU CSE</h1>
              <p className="text-xs font-medium text-gray-500 dark:text-blue-400/80 uppercase tracking-wider">Football Tournament</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

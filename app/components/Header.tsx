import ThemeToggle from './ThemeToggle';

// ── Sparkle component ─────────────────────────────────────────────────────────
const Sparkle = ({ delay = 0, style, className }: { delay?: number, style?: any, className?: string }) => (
  <div
    className={`absolute pointer-events-none opacity-0 ${className}`}
    style={{ ...style, animationDelay: `${delay}s` }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" fill="rgba(250,250,250,0.8)" />
    </svg>
  </div>
);

export default function Header() {
  return (
    <header className="glass-header border-b border-zinc-900/10 dark:border-zinc-100/10 sticky top-0 z-50">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-zinc-400 dark:via-zinc-600 to-transparent opacity-50" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between relative">
          
          <div className="flex items-center gap-4 relative">
            <div className="relative group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-zinc-900 dark:bg-zinc-100 shadow-md relative z-10 logo-entrance">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white dark:text-zinc-900"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="6" fill="none" />
                  <polygon points="50,18 63,30 58,48 42,48 37,30" fill="currentColor" />
                  <polygon points="63,30 80,35 78,54 67,61 58,48" fill="currentColor" opacity="0.6" />
                  <polygon points="37,30 42,48 33,61 22,54 20,35" fill="currentColor" opacity="0.6" />
                  <polygon points="58,48 67,61 62,77 38,77 33,61 42,48" fill="currentColor" opacity="0.4" />
                </svg>
              </div>

              {/* Sparkles */}
              <Sparkle className="w-3 h-3 sparkle-1" style={{ top: '-4px', left: '-4px' }} />
              <Sparkle className="w-4 h-4 sparkle-2" style={{ top: '-8px', right: '-8px' }} delay={0.4} />
              <Sparkle className="w-2.5 h-2.5 sparkle-3" style={{ bottom: '-2px', right: '-2px' }} delay={0.8} />
              <Sparkle className="w-3 h-3 sparkle-4" style={{ bottom: '-6px', left: '-6px' }} delay={1.2} />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="font-display font-black text-3xl sm:text-4xl tracking-wide leading-none text-zinc-900 dark:text-zinc-100">
                GSTU
              </h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[9px] opacity-70" aria-hidden="true">🏆</span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
                  Inter-Divisional Football Tournament 2026
                </span>
                <span className="text-[9px] opacity-70" aria-hidden="true">🏆</span>
              </div>
            </div>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

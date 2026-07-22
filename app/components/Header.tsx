'use client';

import ThemeToggle from './ThemeToggle';

// ── Sparkle component ─────────────────────────────────────────────────────────
const Sparkle = ({ delay = 0, style, className }: { delay?: number; style?: any; className?: string }) => (
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

export default function Header({ scrolled = false }: { scrolled?: boolean }) {
  return (
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        scrolled
          ? 'grid-rows-[0fr] opacity-0 pointer-events-none sm:grid-rows-[1fr] sm:opacity-100 sm:pointer-events-auto'
          : 'grid-rows-[1fr] opacity-100'
      }`}
    >
      <div className="overflow-hidden">
        <header className="w-full">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2.5 sm:py-3.5">
              {/* Logo & Title */}
              <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <div className="relative group shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-zinc-900 dark:bg-zinc-100 shadow-md relative z-10 logo-entrance">
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white dark:text-zinc-900"
                      aria-hidden="true"
                    >
                      <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="6" fill="none" />
                      <polygon points="50,18 63,30 58,48 42,48 37,30" fill="currentColor" />
                      <polygon points="63,30 80,35 78,54 67,61 58,48" fill="currentColor" opacity="0.6" />
                      <polygon points="37,30 42,48 33,61 22,54 20,35" fill="currentColor" opacity="0.6" />
                      <polygon points="58,48 67,61 62,77 38,77 33,61 42,48" fill="currentColor" opacity="0.4" />
                    </svg>
                  </div>

                  <Sparkle className="w-3 h-3 sparkle-1" style={{ top: '-4px', left: '-4px' }} />
                  <Sparkle className="w-4 h-4 sparkle-2" style={{ top: '-8px', right: '-8px' }} delay={0.4} />
                  <Sparkle className="w-2.5 h-2.5 sparkle-3" style={{ bottom: '-2px', right: '-2px' }} delay={0.8} />
                  <Sparkle className="w-3 h-3 sparkle-4" style={{ bottom: '-6px', left: '-6px' }} delay={1.2} />
                </div>

                <div className="flex flex-col justify-center min-w-0">
                  <h1 className="font-display font-black text-2xl sm:text-4xl tracking-wide leading-none text-zinc-900 dark:text-zinc-100">
                    GSTU
                  </h1>
                  <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
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
      </div>
    </div>
  );
}

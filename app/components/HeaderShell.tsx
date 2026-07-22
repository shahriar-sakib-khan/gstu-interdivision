'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import Navigation from './Navigation';

export default function HeaderShell() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let isScrolledState = false;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!isScrolledState && currentScroll > 30) {
        isScrolledState = true;
        setScrolled(true);
      } else if (isScrolledState && currentScroll < 10) {
        isScrolledState = false;
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-zinc-50 dark:bg-zinc-950 shadow-md'
          : 'bg-zinc-50/85 dark:bg-zinc-950/85 backdrop-blur-md shadow-xs'
      }`}
    >
      {/* ── Warning Banner ── */}
      <div className="w-full bg-red-600 dark:bg-red-700 text-white px-4 py-2 text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        <span>Due to unfavorable ground and weather conditions, upcoming matches are temporarily postponed.</span>
      </div>

      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-zinc-400 dark:via-zinc-600 to-transparent opacity-50" />
      <Header scrolled={scrolled} />
      <Navigation />
    </div>
  );
}

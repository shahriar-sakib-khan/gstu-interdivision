'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { name: 'Matches',      href: '/',           icon: '⚽' },
  { name: 'Points Table', href: '/standings',   icon: '📋' },
  { name: 'Stats',        href: '/stats',       icon: '🏅' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div
      className="glass-header border-b border-zinc-900/10 dark:border-zinc-100/10 sticky top-[66px] z-40
                 shadow-sm"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between w-full gap-1 sm:gap-2 py-2 sm:py-2.5 overflow-x-hidden scrollbar-none" aria-label="Main navigation">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`
                  flex-1 justify-center flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold
                  whitespace-nowrap transition-all duration-250 select-none border
                  ${isActive
                    ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                    : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }
                `}
              >
                <span aria-hidden="true" className="text-xs sm:text-[15px] opacity-90">{tab.icon}</span>
                <span>{tab.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

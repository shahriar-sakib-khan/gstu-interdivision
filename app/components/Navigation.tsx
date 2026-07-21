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
    <div className="w-full border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex justify-between w-full gap-1.5 sm:gap-2 py-1.5 sm:py-2 overflow-x-hidden scrollbar-none"
          aria-label="Main navigation"
        >
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`
                  flex-1 justify-center flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm
                  whitespace-nowrap transition-all duration-200 select-none border
                  ${isActive
                    ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 shadow-xs'
                    : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }
                `}
              >
                <span aria-hidden="true" className="text-xs sm:text-sm opacity-90">{tab.icon}</span>
                <span>{tab.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

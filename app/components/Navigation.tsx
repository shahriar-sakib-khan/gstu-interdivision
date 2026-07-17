'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Matches', href: '/' },
    { name: 'Points Table', href: '/standings' },
    { name: 'Stats', href: '/stats' },
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-950/50 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 sticky top-[73px] z-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-1 py-3 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${isActive 
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10'
                  }
                `}
              >
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

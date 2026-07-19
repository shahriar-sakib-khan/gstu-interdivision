import type { Metadata } from 'next';
import { Outfit, Bebas_Neue } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import FloatingObjects from './components/FloatingObjects';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './components/theme-provider';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-outfit' });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--font-bebas-neue' });

export const metadata: Metadata = {
  title: 'GSTU CSE Football Tournament 2026',
  description: 'CSE Department Inter-Division Football Tournament at Gopalganj Science and Technology University — Live scores, standings, and player statistics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${outfit.variable} ${bebasNeue.variable} font-sans min-h-screen pb-16 relative overflow-x-hidden`}>
        <ThemeProvider>
          {/* ── Floating decorative objects ── */}
          {/* <FloatingObjects /> */}

          {/* ── App shell ── */}
          <div className="relative z-10 flex flex-col min-h-[100dvh]">
            <Header />
            <Navigation />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow w-full">
              {children}
            </main>
            
            <footer className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full text-center border-t border-zinc-200/50 dark:border-zinc-800/50 mt-auto">
              <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-500 tracking-wide">
                Courtesy of GSTU CSE Department
              </p>
            </footer>
          </div>
          
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

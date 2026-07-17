import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { ThemeProvider } from './components/theme-provider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Football Tournament | GSTU CSE',
  description: 'CSE Department Football Tournament at Gopalganj Science and Technology University',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} min-h-screen pb-12`}>
        <ThemeProvider>
          <Header />
          <Navigation />
          <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

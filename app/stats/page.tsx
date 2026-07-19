import TopStats from '../components/TopStats';
import { PLAYER_STATS } from '../lib/data';

export default function StatsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-zinc-900 dark:text-zinc-100 text-lg" aria-hidden="true">🏅</span>
        <h1 className="font-display text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-100 tracking-wide">
          Tournament Statistics
        </h1>
        <div className="flex-1 h-px bg-gradient-to-r from-zinc-300 dark:from-zinc-700 to-transparent" aria-hidden="true" />
      </div>

      <TopStats stats={PLAYER_STATS} />
    </main>
  );
}

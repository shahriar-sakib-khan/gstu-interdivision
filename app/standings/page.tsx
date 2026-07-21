import StandingsTable from '../components/StandingsTable';
import { STANDINGS } from '../lib/data';

export default function StandingsPage() {
  const groupA = STANDINGS.filter((s) => s.group === 'A');
  const groupB = STANDINGS.filter((s) => s.group === 'B');

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-zinc-900 dark:text-zinc-100 text-lg" aria-hidden="true">🏆</span>
        <h1 className="font-display text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-100 tracking-wide">
          Group Stage Standings
        </h1>
        <div className="flex-1 h-px bg-linear-to-r from-zinc-300 dark:from-zinc-700 to-transparent" aria-hidden="true" />
      </div>

      <section aria-labelledby="group-a-heading">
        <h2 id="group-a-heading" className="font-display text-xl text-zinc-600 dark:text-zinc-400 mb-4 px-2 tracking-widest uppercase">
          Group A
        </h2>
        <StandingsTable standings={groupA} />
      </section>

      <section aria-labelledby="group-b-heading">
        <h2 id="group-b-heading" className="font-display text-xl text-zinc-600 dark:text-zinc-400 mb-4 px-2 tracking-widest uppercase">
          Group B
        </h2>
        <StandingsTable standings={groupB} />
      </section>
    </main>
  );
}

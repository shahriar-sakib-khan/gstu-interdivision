import MatchCard from './components/MatchCard';
import { MATCHES } from './lib/data';

// Helper to format date string to readable format
const formatDate = (dateStr: string) => {
  return dateStr.toUpperCase();
};

export default function Home() {
  const matchesByDate = MATCHES.reduce((acc, match) => {
    if (!acc[match.date]) acc[match.date] = [];
    acc[match.date].push(match);
    return acc;
  }, {} as Record<string, typeof MATCHES>);

  return (
    <main className="max-w-3xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-4 sm:space-y-8">
      {Object.entries(matchesByDate).map(([date, matches]) => (
        <section key={date} aria-labelledby={`date-heading-${date}`}>
          <div className="flex items-center gap-4 mb-3 sm:mb-6 sticky top-11.25 sm:top-13.25 z-30 bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-md py-1.5 sm:py-2 border-y border-zinc-200 dark:border-zinc-800">
            <h2
              id={`date-heading-${date}`}
              className="font-display text-xl sm:text-2xl text-zinc-800 dark:text-zinc-200 tracking-wide"
            >
              {formatDate(date)}
            </h2>
            <div className="flex-1 h-px bg-linear-to-r from-zinc-300 dark:from-zinc-700 to-transparent" aria-hidden="true" />
          </div>

          <div className="space-y-2.5 sm:space-y-4">
            {matches.map((match, index) => (
              <div key={match.id} className="flex gap-2 sm:gap-4">
                {/* Match number / timeline indicator */}
                <div className="hidden sm:flex flex-col items-center">
                  <div
                    className="font-display text-3xl text-zinc-300 dark:text-zinc-700 w-8 text-center shrink-0 pt-3 select-none"
                    aria-label={`Match ${match.id}`}
                  >
                    {match.id}
                  </div>
                  {index !== matches.length - 1 && (
                    <div className="w-px h-full bg-zinc-200 dark:bg-zinc-800 mt-4" aria-hidden="true" />
                  )}
                </div>

                {/* Match Card */}
                <div className="flex-1 min-w-0" style={{ animationDelay: `${index * 0.1}s` }}>
                  <MatchCard match={match} />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

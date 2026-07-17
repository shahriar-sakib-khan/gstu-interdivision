import MatchCard from './components/MatchCard';
import { MATCHES } from './lib/data';

export default function Home() {
  // Group matches by date
  const matchesByDate = MATCHES.reduce((acc, match) => {
    if (!acc[match.date]) {
      acc[match.date] = [];
    }
    acc[match.date].push(match);
    return acc;
  }, {} as Record<string, typeof MATCHES>);

  return (
    <div className="flex flex-col gap-6">
      {Object.entries(matchesByDate).map(([date, matches]) => (
        <div key={date} className="flex flex-col gap-3">
          <h3 className="text-gray-900 dark:text-[#e8eaed] font-semibold px-2">{date}</h3>
          <div className="flex flex-col gap-0">
            {matches.map((match) => (
              <div key={match.id} className="flex items-center gap-2 sm:gap-4 mb-4">
                <div className="text-2xl sm:text-3xl font-bold text-gray-300 dark:text-[#3c4043] w-6 sm:w-10 text-center shrink-0">
                  {match.id}
                </div>
                <div className="flex-1">
                  <MatchCard match={match} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

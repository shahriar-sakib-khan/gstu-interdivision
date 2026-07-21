import { PlayerStat } from '../lib/types';
import { getTeamTextColor } from '../lib/utils';

// Rank medal for top 3
const RankBadge = ({ rank }: { rank: number }) => {
  if (rank === 1) return <span className="text-lg" aria-label="1st place">🥇</span>;
  if (rank === 2) return <span className="text-lg" aria-label="2nd place">🥈</span>;
  if (rank === 3) return <span className="text-lg" aria-label="3rd place">🥉</span>;
  return <span className="font-display text-sm text-zinc-400 dark:text-zinc-500 w-5 text-center">{rank}</span>;
};

// Helper for dense ranking
function getDenseRanks<T>(items: T[], getScore: (item: T) => number): Map<T, number> {
  const rankMap = new Map<T, number>();
  let currentRank = 0;
  let currentScore = -1;

  items.forEach((item) => {
    const score = getScore(item);
    if (score !== currentScore) {
      currentRank++;
      currentScore = score;
    }
    rankMap.set(item, currentRank);
  });

  return rankMap;
}

export default function TopStats({ stats }: { stats: PlayerStat[] }) {
  const topScorers = [...stats]
    .filter((s) => s.goals > 0)
    .sort((a, b) => b.goals - a.goals);

  const topMotms = [...stats]
    .filter((s) => (s.motms || 0) > 0)
    .sort((a, b) => (b.motms || 0) - (a.motms || 0));

  const scorerRanks = getDenseRanks(topScorers, (s) => s.goals);
  const motmRanks = getDenseRanks(topMotms, (s) => s.motms || 0);

  return (
    <div className="flex flex-col gap-4">
      {/* ── Top Scorers ── */}
      <section
        className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 overflow-hidden shadow-sm glass-card"
        aria-labelledby="top-scorers-heading"
      >
        {/* Header */}
        <div className="px-3 py-2.5 border-b border-zinc-200 dark:border-zinc-800/80 flex items-center gap-2 bg-zinc-50/50 dark:bg-zinc-800/30">
          <span className="text-lg" aria-hidden="true">⚽</span>
          <h2 id="top-scorers-heading" className="font-display text-base text-zinc-800 dark:text-zinc-200 tracking-wide">
            Top Scorers
          </h2>
        </div>

        {/* Column labels */}
        <div className="px-3 py-1.5 border-b border-zinc-100 dark:border-zinc-800/40 flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          <span>Player</span>
          <span>Goals</span>
        </div>

        <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800/40">
          {topScorers.length === 0 ? (
            <div className="px-3 py-6 text-center text-xs text-zinc-400 dark:text-zinc-500">
              No goals scored yet
            </div>
          ) : (
            topScorers.map((player) => {
              const rank = scorerRanks.get(player)!;
              const isFirst = rank === 1;

              return (
                <div
                  key={`${player.name}-${player.team}-goal`}
                  className={`flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3.5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/40 ${isFirst ? 'bg-zinc-50 dark:bg-zinc-800/60' : ''}`}
                >
                  {/* Left: rank + player info */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-7">
                      <RankBadge rank={rank} />
                    </div>
                    <div>
                      <div className={`font-black text-[13px] sm:text-lg ${isFirst ? 'text-amber-600 dark:text-amber-500 shimmer-gold-text' : 'text-zinc-800 dark:text-zinc-200'}`}>
                        {player.name}
                      </div>
                      <div className={`text-[11px] sm:text-sm font-bold mt-0.5 ${getTeamTextColor(player.team)}`}>
                        {player.team}
                      </div>
                    </div>
                  </div>

                  {/* Right: goal count */}
                    <div
                      className={`
                        font-display text-xl sm:text-4xl leading-none min-w-8 text-right
                        ${isFirst ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-700 dark:text-zinc-300'}
                      `}
                    >
                    {player.goals}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* ── Man of the Match ── */}
      <section
        className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 overflow-hidden shadow-sm glass-card"
        aria-labelledby="motm-heading"
      >
        {/* Header */}
        <div className="px-3 py-2.5 border-b border-zinc-200 dark:border-zinc-800/80 flex items-center gap-2 bg-zinc-50/50 dark:bg-zinc-800/30">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-zinc-900 dark:fill-zinc-100 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <h2 id="motm-heading" className="font-display text-base text-zinc-800 dark:text-zinc-200 tracking-wide">
            Man of the Match
          </h2>
        </div>

        {/* Column labels */}
        <div className="px-3 py-1.5 border-b border-zinc-100 dark:border-zinc-800/40 flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          <span>Player</span>
          <span>Awards</span>
        </div>

        <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800/40">
          {topMotms.length === 0 ? (
            <div className="px-3 py-6 text-center text-xs text-zinc-400 dark:text-zinc-500">
              No awards yet
            </div>
          ) : (
            topMotms.map((player) => {
              const rank = motmRanks.get(player)!;
              const isFirst = rank === 1;

              return (
                <div
                  key={`${player.name}-${player.team}-motm`}
                  className={`flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3.5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/40 ${isFirst ? 'bg-zinc-50 dark:bg-zinc-800/60' : ''}`}
                >
                  {/* Left: rank + player info */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-7">
                      <RankBadge rank={rank} />
                    </div>
                    <div>
                      <div className={`font-black text-[13px] sm:text-lg ${isFirst ? 'text-amber-600 dark:text-amber-500 shimmer-gold-text' : 'text-zinc-800 dark:text-zinc-200'}`}>
                        {player.name}
                      </div>
                      <div className={`text-[11px] sm:text-sm font-bold mt-0.5 ${getTeamTextColor(player.team)}`}>
                        {player.team}
                      </div>
                    </div>
                  </div>

                  {/* Right: MOTM count */}
                    <div
                      className={`
                        font-display text-xl sm:text-4xl leading-none min-w-8 text-right
                        ${isFirst ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-700 dark:text-zinc-300'}
                      `}
                    >
                    {player.motms}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}

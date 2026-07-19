import { Standing } from '../lib/types';
import { getTeamTextColor } from '../lib/utils';

export default function StandingsTable({ standings }: { standings: Standing[] }) {
  const sortedStandings = [...standings].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    return b.goalsFor - a.goalsFor;
  });

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/80 overflow-hidden shadow-sm glass-card mb-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-100/80 dark:bg-zinc-800/50">
              {['#', 'Division', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts'].map((h) => (
                <th
                  key={h}
                  className={`px-1.5 sm:px-3 py-2 sm:py-3 font-display text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 tracking-widest uppercase
                    ${h === '#' ? 'pl-2 sm:pl-4' : ''}
                    ${!['#', 'Division'].includes(h) ? 'text-center' : ''}
                  `}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
            {sortedStandings.map((team, idx) => {
              const isFirst = idx === 0;
              const qualifies = idx < 2; // top 2 qualify

              // Row background tint
              const rowBg = qualifies
                ? 'bg-zinc-50/50 dark:bg-zinc-800/30'
                : '';

              return (
                <tr
                  key={team.team}
                  className={`transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50 ${rowBg}`}
                >
                  {/* Rank */}
                  <td className="px-1.5 sm:px-3 py-2 sm:py-3 whitespace-nowrap relative pl-4">
                    {/* Qualifying stripe */}
                    {qualifies && (
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full ${isFirst ? 'bg-zinc-900 dark:bg-zinc-100' : 'bg-zinc-400'}`}
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={`font-display text-base sm:text-lg pl-1 ${
                        isFirst
                          ? 'text-zinc-900 dark:text-zinc-100'
                          : 'text-zinc-400 dark:text-zinc-500'
                      }`}
                    >
                      {idx + 1}
                    </span>
                  </td>

                  {/* Team name */}
                  <td className="px-1 sm:px-3 py-2 sm:py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-[13px] sm:text-lg ${getTeamTextColor(team.team)}`}>
                        {team.team}
                      </span>
                    </div>
                  </td>

                  {/* Stats */}
                  {[team.played, team.won, team.drawn, team.lost, team.goalsFor, team.goalsAgainst].map(
                    (val, i) => (
                      <td key={i} className="px-1.5 sm:px-3 py-2 sm:py-3 whitespace-nowrap text-[13px] sm:text-base font-semibold text-zinc-700 dark:text-zinc-300 text-center">
                        {val}
                      </td>
                    )
                  )}

                  {/* GD */}
                  <td className="px-1.5 sm:px-3 py-2 sm:py-3 whitespace-nowrap text-[13px] sm:text-sm text-center">
                    <span
                      className={
                        `text-xs sm:text-base ${team.goalDifference > 0
                          ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                          : team.goalDifference < 0
                          ? 'text-red-500 dark:text-red-400 font-semibold'
                          : 'text-zinc-500 dark:text-zinc-400 font-semibold'}`
                      }
                    >
                      {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                    </span>
                  </td>

                  <td className="px-1.5 sm:px-3 py-2 sm:py-3 whitespace-nowrap text-center">
                    <span
                      className={`font-display text-base sm:text-xl ${
                        isFirst
                          ? 'text-zinc-900 dark:text-zinc-100'
                          : 'text-zinc-900 dark:text-zinc-100'
                      }`}
                    >
                      {team.points}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-2.5 border-t border-zinc-200 dark:border-zinc-800/60 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-50/80 dark:bg-zinc-900/30">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-zinc-400" aria-hidden="true" />
          <span>Qualifies for Semi-Finals</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-sm bg-zinc-900 dark:bg-zinc-100" aria-hidden="true" />
          <span>Group Leader</span>
        </div>
      </div>
    </div>
  );
}

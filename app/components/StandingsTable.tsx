import { Standing } from '../lib/types';
import { getTeamTextColor } from '../lib/utils';

export default function StandingsTable({ standings }: { standings: Standing[] }) {
  const sortedStandings = [...standings].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    return b.goalsFor - a.goalsFor;
  });

  return (
    <div className="bg-white dark:bg-[#303134] rounded-2xl border border-gray-200 dark:border-[#3c4043] overflow-hidden mb-6 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-[#202124] border-b border-gray-200 dark:border-[#3c4043]">
              <th className="px-4 py-3 font-medium text-xs text-gray-500 dark:text-[#9aa0a6] pl-5">#</th>
              <th className="px-4 py-3 font-medium text-xs text-gray-500 dark:text-[#9aa0a6]">Division</th>
              <th className="px-4 py-3 font-medium text-xs text-gray-500 dark:text-[#9aa0a6] text-center">MP</th>
              <th className="px-4 py-3 font-medium text-xs text-gray-500 dark:text-[#9aa0a6] text-center">W</th>
              <th className="px-4 py-3 font-medium text-xs text-gray-500 dark:text-[#9aa0a6] text-center">D</th>
              <th className="px-4 py-3 font-medium text-xs text-gray-500 dark:text-[#9aa0a6] text-center">L</th>
              <th className="px-4 py-3 font-medium text-xs text-gray-500 dark:text-[#9aa0a6] text-center">GF</th>
              <th className="px-4 py-3 font-medium text-xs text-gray-500 dark:text-[#9aa0a6] text-center">GA</th>
              <th className="px-4 py-3 font-medium text-xs text-gray-500 dark:text-[#9aa0a6] text-center">GD</th>
              <th className="px-4 py-3 font-medium text-xs text-gray-500 dark:text-[#9aa0a6] text-center">Pts</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-[#3c4043]">
            {sortedStandings.map((team, idx) => (
              <tr key={team.team} className="hover:bg-gray-50 dark:hover:bg-[#3c4043] transition-colors">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-[#9aa0a6] relative">
                  {idx < 2 && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                  )}
                  <span className="pl-1">{idx + 1}</span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <span className={`font-bold text-sm sm:text-base ${getTeamTextColor(team.team)}`}>{team.team}</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-[#e8eaed] text-center">{team.played}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-[#e8eaed] text-center">{team.won}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-[#e8eaed] text-center">{team.drawn}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-[#e8eaed] text-center">{team.lost}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-[#e8eaed] text-center">{team.goalsFor}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-[#e8eaed] text-center">{team.goalsAgainst}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-[#e8eaed] text-center">{team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-[#e8eaed] text-center">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 border-t border-gray-100 dark:border-[#3c4043] flex items-center gap-2 text-xs text-gray-500 dark:text-[#9aa0a6]">
        <div className="w-2 h-2 rounded-sm bg-emerald-500"></div>
        <span>Top 2 teams qualify for the Semi-Finals</span>
      </div>
    </div>
  );
}

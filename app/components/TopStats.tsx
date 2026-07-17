import { PlayerStat } from '../lib/types';
import { getTeamTextColor } from '../lib/utils';

export default function TopStats({ stats }: { stats: PlayerStat[] }) {
  const topScorers = [...stats]
    .filter(s => s.goals > 0)
    .sort((a, b) => b.goals - a.goals);

  const topMotms = [...stats]
    .filter(s => (s.motms || 0) > 0)
    .sort((a, b) => (b.motms || 0) - (a.motms || 0));

  return (
    <div className="flex flex-col gap-6">
      {/* Top Scorers */}
      <div className="bg-white dark:bg-[#303134] rounded-2xl border border-gray-200 dark:border-[#3c4043] overflow-hidden shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 dark:border-[#3c4043]">
          <h3 className="font-semibold text-gray-900 dark:text-[#e8eaed]">Top Scorers</h3>
        </div>
        
        <div className="px-4 py-2 border-b border-gray-100 dark:border-[#3c4043] flex justify-between text-xs text-gray-500 dark:text-[#9aa0a6]">
          <span>Player</span>
          <span>Goals</span>
        </div>

        <div className="flex flex-col divide-y divide-gray-100 dark:divide-[#3c4043]">
          {topScorers.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-gray-500">No goals scored yet</div>
          ) : (
            topScorers.map((player, idx) => (
              <div key={`${player.name}-${player.team}-goal`} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#3c4043] transition-colors">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 dark:text-[#9aa0a6] text-sm w-4">{idx + 1}</span>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-[#e8eaed] text-sm">{player.name}</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className={`text-xs font-medium ${getTeamTextColor(player.team)}`}>{player.team}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-8">
                  <div className="font-bold text-lg text-gray-900 dark:text-gray-200">{player.goals}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Most MOTMs */}
      <div className="bg-white dark:bg-[#303134] rounded-2xl border border-gray-200 dark:border-[#3c4043] overflow-hidden shadow-sm">
        <div className="px-4 py-3 border-b border-gray-100 dark:border-[#3c4043]">
          <h3 className="font-semibold text-gray-900 dark:text-[#e8eaed]">Most Man of the Matches</h3>
        </div>
        
        <div className="px-4 py-2 border-b border-gray-100 dark:border-[#3c4043] flex justify-between text-xs text-gray-500 dark:text-[#9aa0a6]">
          <span>Player</span>
          <span>MOTMs</span>
        </div>

        <div className="flex flex-col divide-y divide-gray-100 dark:divide-[#3c4043]">
          {topMotms.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-gray-500">No MOTMs awarded yet</div>
          ) : (
            topMotms.map((player, idx) => (
              <div key={`${player.name}-${player.team}-motm`} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#3c4043] transition-colors">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 dark:text-[#9aa0a6] text-sm w-4">{idx + 1}</span>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-[#e8eaed] text-sm">{player.name}</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className={`text-xs font-medium ${getTeamTextColor(player.team)}`}>{player.team}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-8">
                  <div className="font-bold text-lg text-gray-900 dark:text-gray-200">{player.motms}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

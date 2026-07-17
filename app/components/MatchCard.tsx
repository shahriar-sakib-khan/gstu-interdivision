import { Match } from '../lib/types';
import { getTeamTextColor } from '../lib/utils';

const FootballIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="12" cy="12" r="10" fill="white" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7L16 10V15L12 18L8 15V10L12 7Z" fill="currentColor" />
    <path d="M12 7V2M16 10L20.5 8M16 15L20.5 17M12 18V22M8 15L3.5 17M8 10L3.5 8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const renderFootballs = (count: number) => {
  return Array(count).fill(0).map((_, i) => <FootballIcon key={i} />);
};

export default function MatchCard({ match }: { match: Match }) {
  const isFullTime = match.status === 'FULL_TIME';

  return (
    <div className="bg-white dark:bg-[#303134] rounded-2xl border border-gray-200 dark:border-[#3c4043] overflow-hidden mb-4 hover:scale-[1.01] hover:shadow-md transition-all">
      {/* Top Header */}
      <div className="px-4 py-3 flex justify-between items-center text-xs text-gray-500 dark:text-[#9aa0a6] border-b border-gray-100 dark:border-[#3c4043]">
        <span>{match.time !== 'TBD' ? match.time : 'Time TBD'}</span>
        <span className="font-medium">
          {match.status === 'FULL_TIME' ? 'FT' : match.status === 'LIVE' ? <span className="text-red-500 dark:text-red-400">LIVE</span> : match.status}
        </span>
      </div>
      
      {/* Match Content */}
      <div className="px-4 pb-4 pt-4 flex items-center justify-between">
        
        {/* Home Team */}
        <div className="flex flex-col items-center gap-2 flex-1 justify-center text-center">
          <span className={`font-bold text-lg sm:text-xl ${getTeamTextColor(match.homeTeam)}`}>{match.homeTeam}</span>
        </div>

        {/* Center Score or Time */}
        <div className="flex flex-col items-center justify-center flex-1 shrink-0 px-2">
          {isFullTime ? (
            <div className="flex items-center gap-3 sm:gap-4 text-3xl font-medium text-gray-900 dark:text-[#e8eaed]">
              <span>{match.homeScore}</span>
              <span className="text-gray-300 dark:text-[#9aa0a6] text-xl">-</span>
              <span>{match.awayScore}</span>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-sm font-bold text-gray-400 dark:text-gray-500">VS</div>
            </div>
          )}
        </div>
        
        {/* Away Team */}
        <div className="flex flex-col items-center gap-2 flex-1 justify-center text-center">
          <span className={`font-bold text-lg sm:text-xl ${getTeamTextColor(match.awayTeam)}`}>{match.awayTeam}</span>
        </div>
      </div>
      
      {/* Goal Scorers */}
      {isFullTime && (match.homeGoals?.length || match.awayGoals?.length) && (
        <div className="px-4 pb-3 pt-1 flex justify-between">
          <div className="flex-1 flex flex-col gap-1.5 items-start">
            {match.homeGoals?.map((goal, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700 dark:text-[#e8eaed]">
                <span className="text-sm">{goal.playerName}</span>
                <div className="flex gap-0.5 text-gray-800 dark:text-[#202124]">{renderFootballs(goal.count || 1)}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-1.5 items-end">
            {match.awayGoals?.map((goal, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700 dark:text-[#e8eaed]">
                <span className="text-sm">{goal.playerName}</span>
                <div className="flex gap-0.5 text-gray-800 dark:text-[#202124]">{renderFootballs(goal.count || 1)}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MOTM */}
      {match.motm && (
        <div className="px-4 pb-4 pt-2 flex justify-center text-xs font-medium">
          <span className="flex items-center gap-1.5 bg-gray-50 dark:bg-[#202124] text-gray-800 dark:text-[#e8eaed] px-3 py-1.5 rounded-full border border-gray-200 dark:border-[#5f6368]">
            <svg className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-gray-500 dark:text-[#9aa0a6]">MOTM:</span> {match.motm}
          </span>
        </div>
      )}
    </div>
  );
}

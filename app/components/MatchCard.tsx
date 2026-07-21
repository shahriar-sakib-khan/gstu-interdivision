import { Match } from '../lib/types';
import { getTeamTextColor } from '../lib/utils';

// ── Football icon ─────────────────────────────────────────────────────────────
const FootballIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 inline-block ${className}`}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="5" fill="none" />
    <polygon points="50,18 63,30 58,48 42,48 37,30" fill="currentColor" opacity="0.85" />
    <polygon points="63,30 80,35 78,54 67,61 58,48" fill="currentColor" opacity="0.5" />
    <polygon points="37,30 42,48 33,61 22,54 20,35" fill="currentColor" opacity="0.5" />
    <polygon points="58,48 67,61 62,77 38,77 33,61 42,48" fill="currentColor" opacity="0.45" />
  </svg>
);

// Removed VsBall

const renderFootballs = (count: number) =>
  Array(count).fill(0).map((_, i) => (
    <FootballIcon key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400 dark:text-zinc-500 ml-0.5" />
  ));

// ── MatchCard ─────────────────────────────────────────────────────────────────
export default function MatchCard({ match }: { match: Match }) {
  const isFullTime = match.status === 'FULL_TIME';
  const isLive     = match.status === 'LIVE';
  const isKnockout = ['13', '14', '15'].includes(match.id);
  const isFinal    = match.id === '15';
  const knockoutLabel = isFinal ? '🏆 FINAL' : `Semi-Final ${match.id === '13' ? '1' : '2'}`;

  // UI styling distinctions for knockouts
  const cardBorder = isFinal
    ? 'border-amber-500/50 dark:border-amber-500/40'
    : isKnockout
    ? 'border-zinc-300 dark:border-zinc-600'
    : 'border-zinc-200 dark:border-zinc-800';

  const cardShadow = isFinal
    ? 'shadow-lg shadow-amber-500/20 dark:shadow-amber-500/10'
    : isKnockout
    ? 'shadow-md hover:shadow-lg'
    : 'shadow-sm hover:shadow-md hover:shadow-zinc-500/5';

  const cardBackground = isFinal
    ? 'bg-gradient-to-br from-amber-50/50 via-white to-white dark:from-amber-950/20 dark:via-zinc-950/80 dark:to-zinc-950/80'
    : isKnockout
    ? 'bg-gradient-to-br from-zinc-100 via-white to-white dark:from-zinc-900/40 dark:via-zinc-950/80 dark:to-zinc-950/80'
    : '';

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border ${cardBorder} ${cardShadow}
        glass-card transition-all duration-300 card-enter ${cardBackground}
      `}
    >
      {/* ── Knockout banner ── */}
      {isKnockout && (
        <div className={`text-center py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-bold ${isFinal ? 'bg-amber-500 text-amber-950 dark:bg-amber-500/20 dark:text-amber-200' : 'text-zinc-800 dark:text-zinc-200 bg-zinc-200/50 dark:bg-zinc-800/80'} uppercase tracking-[0.2em]`}>
          {knockoutLabel}
        </div>
      )}

      {/* ── Card header: time + status ── */}
      <div className={`px-2.5 sm:px-4 py-1.5 sm:py-2.5 flex justify-between items-center border-b border-zinc-200/60 dark:border-zinc-800/60 ${isKnockout ? 'bg-white/40 dark:bg-zinc-900/20' : ''}`}>
        <span className="text-xs sm:text-sm font-bold text-zinc-500 dark:text-zinc-400">
          Match {match.id} {match.status === 'POSTPONED' ? (
            <span className="text-[10px] sm:text-xs text-amber-500 dark:text-amber-400 ml-1">
              &bull; Postponed due to rain
            </span>
          ) : (
            <span>&bull; {match.time !== 'TBD' ? match.time : '⏰ TBD'}</span>
          )}
        </span>

        {isFullTime ? (
          <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 rounded-full text-xs sm:text-sm font-bold
            bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300
            border border-zinc-200 dark:border-zinc-700 uppercase tracking-widest">
            ✓ FT
          </span>
        ) : isLive ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full text-xs sm:text-sm font-bold
            bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400
            border border-red-200/50 dark:border-red-700/30 uppercase tracking-widest">
            <span className="live-dot" aria-hidden="true" />
            LIVE
          </span>
        ) : match.status === 'POSTPONED' ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full text-xs sm:text-sm font-bold
            bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500
            border border-amber-200/50 dark:border-amber-700/30 uppercase tracking-widest">
            Postponed
          </span>
        ) : (
          <span className="text-xs sm:text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            Upcoming
          </span>
        )}
      </div>

      {/* ── Main match section ── */}
      <div className="px-2 sm:px-4 py-2 sm:py-5 flex flex-row items-center justify-between gap-1 sm:gap-3">
        {/* Home team */}
        <div className="flex-1 flex flex-col items-start text-left min-w-0">
          <span className={`font-black text-base sm:text-3xl leading-tight wrap-break-word ${isKnockout ? 'sm:text-4xl' : ''} ${getTeamTextColor(match.homeTeam)}`}>
            {match.homeTeam}
          </span>
        </div>

        {/* Center: Score or VS */}
        <div className="flex flex-col items-center justify-center shrink-0 px-1 sm:px-3">
          {isFullTime ? (
            <div className="flex items-center gap-1 sm:gap-2 score-pop">
              <span className={`font-display text-3xl sm:text-5xl leading-none text-zinc-800 dark:text-zinc-100 ${isFinal ? 'sm:text-[72px]' : ''}`}>
                {match.homeScore}
              </span>
              <span className="font-display text-xl sm:text-3xl text-zinc-300 dark:text-zinc-700 leading-none">
                :
              </span>
              <span className={`font-display text-3xl sm:text-5xl leading-none text-zinc-800 dark:text-zinc-100 ${isFinal ? 'sm:text-[72px]' : ''}`}>
                {match.awayScore}
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-lg sm:text-2xl text-zinc-400 dark:text-zinc-500 tracking-widest mt-1">
                VS
              </span>
            </div>
          )}
        </div>

        {/* Away team */}
        <div className="flex-1 flex flex-col items-end text-right min-w-0">
          <span className={`font-black text-base sm:text-3xl leading-tight wrap-break-word ${isKnockout ? 'sm:text-4xl' : ''} ${getTeamTextColor(match.awayTeam)}`}>
            {match.awayTeam}
          </span>
        </div>
      </div>

      {/* ── Goal scorers ── */}
      {isFullTime && (match.homeGoals?.length || match.awayGoals?.length) && (
        <div className="px-2.5 sm:px-4 pb-2 pt-1.5 flex flex-row justify-between gap-2 sm:gap-4 border-t border-zinc-100 dark:border-zinc-800/60">
          <div className="flex-1 flex flex-col gap-1 sm:gap-1.5 items-start text-left">
            {match.homeGoals?.map((goal, idx) => (
              <div key={idx} className="flex items-center justify-start gap-1.5 text-zinc-600 dark:text-zinc-400">
                <span className="text-xs sm:text-sm font-bold">{goal.playerName}</span>
                <div className="flex gap-0.5">{renderFootballs(goal.count || 1)}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-1 sm:gap-1.5 items-end text-right">
            {match.awayGoals?.map((goal, idx) => (
              <div key={idx} className="flex items-center justify-end gap-1.5 text-zinc-600 dark:text-zinc-400">
                <div className="flex gap-0.5">{renderFootballs(goal.count || 1)}</div>
                <span className="text-xs sm:text-sm font-bold">{goal.playerName}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── MOTM ── */}
      {match.motm && (
        <div className="px-2.5 sm:px-4 pb-2.5 sm:pb-4 pt-1 flex justify-center">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm
            border border-zinc-200 dark:border-zinc-800
            bg-zinc-50 dark:bg-zinc-900">
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-zinc-900 dark:fill-zinc-100 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="font-semibold text-zinc-500 dark:text-zinc-400">MOTM:</span>
            <span className="shimmer-gold-text font-bold text-amber-600 dark:text-amber-400">{match.motm}</span>
          </span>
        </div>
      )}
    </div>
  );
}

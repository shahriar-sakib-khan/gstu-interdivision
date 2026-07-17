import TopStats from '../components/TopStats';
import { PLAYER_STATS } from '../lib/data';

export default function StatsPage() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold text-gray-900 dark:text-[#e8eaed] mb-2 px-1">Player Statistics</h2>
      <TopStats stats={PLAYER_STATS} />
    </div>
  );
}

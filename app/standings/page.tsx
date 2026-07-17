import StandingsTable from '../components/StandingsTable';
import { STANDINGS } from '../lib/data';

export default function StandingsPage() {
  const groupA = STANDINGS.filter(s => s.group === 'A');
  const groupB = STANDINGS.filter(s => s.group === 'B');

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-4 pl-2 border-l-2 border-gray-300">Group A</h2>
        <StandingsTable standings={groupA} />
      </div>
      
      <div>
        <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-4 pl-2 border-l-2 border-gray-300">Group B</h2>
        <StandingsTable standings={groupB} />
      </div>
    </div>
  );
}

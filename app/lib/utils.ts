export function getTeamColor(team: string) {
  if (team.includes('Rangpur')) return 'bg-green-600';
  if (team.includes('Sylhet')) return 'bg-cyan-500';
  if (team.includes('Khulna')) return 'bg-red-500';
  if (team.includes('Barishal')) return 'bg-yellow-500';
  if (team.includes('Dhaka')) return 'bg-purple-500';
  if (team.includes('Rajshahi')) return 'bg-blue-800';
  if (team.includes('Chattogram')) return 'bg-lime-400';
  if (team.includes('Mymensingh')) return 'bg-gray-500';
  return 'bg-gray-600';
}

export function getTeamGradient(team: string) {
  if (team.includes('Rangpur')) return 'from-green-500 to-green-700';
  if (team.includes('Sylhet')) return 'from-cyan-400 to-cyan-600';
  if (team.includes('Khulna')) return 'from-red-500 to-red-700';
  if (team.includes('Barishal')) return 'from-yellow-400 to-yellow-600';
  if (team.includes('Dhaka')) return 'from-purple-500 to-purple-700';
  if (team.includes('Rajshahi')) return 'from-blue-600 to-blue-900';
  if (team.includes('Chattogram')) return 'from-lime-400 to-lime-600';
  if (team.includes('Mymensingh')) return 'from-gray-400 to-gray-600';
  return 'from-gray-600 to-gray-800';
}

export function getTeamTextColor(team: string) {
  if (team.includes('Rangpur')) return 'text-green-600 dark:text-green-400';
  if (team.includes('Sylhet')) return 'text-cyan-600 dark:text-cyan-400';
  if (team.includes('Khulna')) return 'text-red-600 dark:text-red-400';
  if (team.includes('Barishal')) return 'text-yellow-600 dark:text-yellow-400';
  if (team.includes('Dhaka')) return 'text-purple-600 dark:text-purple-400';
  if (team.includes('Rajshahi')) return 'text-blue-800 dark:text-blue-400';
  if (team.includes('Chattogram')) return 'text-lime-600 dark:text-lime-400';
  if (team.includes('Mymensingh')) return 'text-gray-600 dark:text-gray-400';
  return 'text-gray-600 dark:text-gray-400';
}

export function renderFootballs(count?: number) {
  if (!count) return '';
  return Array(count).fill('⚽').join('');
}

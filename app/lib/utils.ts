export function getTeamColor(team: string) {
  if (team.includes('Rangpur')) return 'bg-purple-600';
  if (team.includes('Sylhet')) return 'bg-blue-600';
  if (team.includes('Khulna')) return 'bg-emerald-600';
  if (team.includes('Barishal')) return 'bg-orange-600';
  if (team.includes('Dhaka')) return 'bg-indigo-600';
  if (team.includes('Rajshahi')) return 'bg-yellow-500';
  if (team.includes('Chattogram')) return 'bg-teal-600';
  if (team.includes('Mymensingh')) return 'bg-rose-600';
  return 'bg-gray-600';
}

export function getTeamGradient(team: string) {
  if (team.includes('Rangpur')) return 'from-purple-600 to-purple-800';
  if (team.includes('Sylhet')) return 'from-blue-600 to-blue-800';
  if (team.includes('Khulna')) return 'from-emerald-600 to-emerald-800';
  if (team.includes('Barishal')) return 'from-orange-600 to-orange-800';
  if (team.includes('Dhaka')) return 'from-indigo-600 to-indigo-800';
  if (team.includes('Rajshahi')) return 'from-yellow-400 to-yellow-600';
  if (team.includes('Chattogram')) return 'from-teal-600 to-teal-800';
  if (team.includes('Mymensingh')) return 'from-rose-600 to-rose-800';
  return 'from-gray-600 to-gray-800';
}

export function getTeamTextColor(team: string) {
  if (team.includes('Rangpur')) return 'text-purple-600 dark:text-purple-400';
  if (team.includes('Sylhet')) return 'text-blue-600 dark:text-blue-400';
  if (team.includes('Khulna')) return 'text-emerald-600 dark:text-emerald-400';
  if (team.includes('Barishal')) return 'text-orange-600 dark:text-orange-400';
  if (team.includes('Dhaka')) return 'text-indigo-600 dark:text-indigo-400';
  if (team.includes('Rajshahi')) return 'text-yellow-600 dark:text-yellow-500';
  if (team.includes('Chattogram')) return 'text-teal-600 dark:text-teal-400';
  if (team.includes('Mymensingh')) return 'text-rose-600 dark:text-rose-400';
  return 'text-gray-600 dark:text-gray-400';
}

export function renderFootballs(count?: number) {
  if (!count) return '';
  return Array(count).fill('⚽').join('');
}


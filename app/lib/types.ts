export interface Goal {
  playerName: string;
  count?: number;
}

export interface Match {
  id: string;
  date: string; // e.g., 'Mon, 12 Aug'
  time: string; // e.g., '4:00 PM'
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: 'SCHEDULED' | 'LIVE' | 'FULL_TIME' | 'POSTPONED';
  homeGoals?: Goal[];
  awayGoals?: Goal[];
  motm?: string;
}

export interface Standing {
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  group?: string;
}

export interface PlayerStat {
  name: string;
  team: string;
  goals: number;
  motms?: number;
}

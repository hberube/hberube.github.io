export interface PoolTeam {
  pos: number;
  teamName: string;
  teamUserName: string;
  goals: number;
  passes: number;
  goaliesWins: number;
  goaliesShutOuts: number;
  points: number;
  goalsDiff: number;
  passesDiff: number;
  goaliesWinDiff: number;
  goaliesShutOutsDiff: number;
  pointsDiff: number;
  userLogo: string;
  bigLogo: string;
  smallLogo: string;
  playForCash: boolean;
  hasPaid: boolean;
  diffPosition: number;
}

export interface LeadersResponse {
  topTotalScore: number;
  lowTotalScore: number;
  topScoreYesterday: number;
  lowScoreYesterday: number;
  leaders: PoolTeam[];
  bestLast7Days: PoolTeam;
  bestLast28Days: PoolTeam;
  bestLast14Days: PoolTeam;
  bestYesterday: PoolTeam;
  bestTonight: PoolTeam;
  worstLast7Days: PoolTeam;
  worstLast28Days: PoolTeam;
  worstLast14Days: PoolTeam;
  worstYesterday: PoolTeam;
}

export interface Player {
  order: number;
  fullName: string;
  photoId: string;
  goals: number;
  passes: number;
  points: number;
  diffGoals: number;
  diffPasses: number;
  diffPoints: number;
  round: number;
  isBest: boolean;
  isWorst: boolean;
  isInjured: boolean;
  injuryDetails: any[];
  injuryDescriptions: string[];
}

export interface PlayersResponse {
  skaters: Player[];
}

export interface Goalie {
  fullName: string;
  photoId: string;
  wins: number;
  shutOuts: number;
  points: number;
  order: number;
  diffWins: number;
  diffShutOuts: number;
  diffPoints: number;
  isBest: boolean;
  isWorst: boolean;
  isInjured: boolean;
  injuryDetails: any[];
  injuryDescriptions: string[];
}

export interface Injury {
  playerId: number;
  playerName: string;
  team: string;
  injury: string;
  status: string;
  dateInjured: string;
}

export interface TeamStats {
  name: string;
  bigLogo: string;
  smallLogo: string;
  userLogo: string;
  poolerName: string;
  goals: number;
  passes: number;
  points: number;
  wins: number;
  shutOuts: number;
  diffGoals: number;
  diffPasses: number;
  diffPoints: number;
  diffWins: number;
  diffShutOuts: number;
  diffPosition: number;
  playForCash: boolean;
  hasPaid: boolean;
  forwards: Player[];
  defenses: Player[];
  goalies: Goalie[];
  pointsPerDay?: number[];
  gameday?: number[];
}

export interface TeamsResponse {
  topTotalScore: number;
  lowTotalScore: number;
  teams: TeamStats[];
}

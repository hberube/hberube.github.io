import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap, startWith, shareReplay, map } from 'rxjs/operators';
import { PoolTeam, Player, Goalie, Injury, TeamStats, LeadersResponse, PlayersResponse, TeamsResponse } from '../models/pool.model';

@Injectable({
  providedIn: 'root'
})
export class PoolDataService {
  private readonly dataPath = 'json';
  private readonly refreshInterval = 60000; // 60 seconds

  constructor(private http: HttpClient) {}

  getLeaders(): Observable<LeadersResponse> {
    return this.createAutoRefreshObservable<LeadersResponse>('leaders.json');
  }

  getLivePoolers(): Observable<PoolTeam[]> {
    return this.createAutoRefreshObservable<PoolTeam[]>('live.poolers.json');
  }

  getLiveSkaters(): Observable<Player[]> {
    return this.createAutoRefreshObservable<Player[]>('live.skaters.json');
  }

  getLiveGoalies(): Observable<Goalie[]> {
    return this.createAutoRefreshObservable<Goalie[]>('live.goalies.json');
  }

  getTeams(): Observable<TeamStats[]> {
    return this.createAutoRefreshObservable<TeamsResponse>('teams.json')
      .pipe(map(response => response.teams || []));
  }

  getAllTeamStats(): Observable<any[]> {
    return this.createAutoRefreshObservable<any[]>('all.team.stats.json');
  }

  getInjuries(): Observable<Injury[]> {
    return this.createAutoRefreshObservable<Injury[]>('injuries.json');
  }

  getBestDefenses(): Observable<Player[]> {
    return this.http.get<PlayersResponse>(`${this.dataPath}/best.defenses.json`)
      .pipe(map(response => response.skaters || []));
  }

  getBestForwards(): Observable<Player[]> {
    return this.http.get<PlayersResponse>(`${this.dataPath}/best.forwards.json`)
      .pipe(map(response => response.skaters || []));
  }

  getBestGoalies(): Observable<Goalie[]> {
    return this.http.get<any>(`${this.dataPath}/best.goalies.json`)
      .pipe(map(response => response.goalies || []));
  }

  private createAutoRefreshObservable<T>(filename: string): Observable<T> {
    return interval(this.refreshInterval).pipe(
      startWith(0),
      switchMap(() => this.http.get<T>(`${this.dataPath}/${filename}`)),
      shareReplay(1)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PoolDataService } from '../../core/services/pool-data.service';
import { PoolTeam, LeadersResponse, TeamStats, Player, Goalie } from '../../core/models/pool.model';

@Component({
  selector: 'app-leaders',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    MatTabsModule
  ],
  template: `
    <!-- Highlights Section -->
    @if (leaderData$ | async; as data) {
      <mat-expansion-panel class="highlights-panel">
        <mat-expansion-panel-header>
          <mat-panel-title>
            <div class="highlights-bar">
              <div class="highlight-item best-28days">
                <mat-icon class="trophy-icon">emoji_events</mat-icon>
                <div class="highlight-content">
                  <span class="highlight-label">28j:</span>
                  <img [src]="'assets/img/' + data.bestLast28Days.userLogo" [alt]="data.bestLast28Days.teamUserName" class="highlight-logo">
                  <span class="highlight-name">{{ data.bestLast28Days.teamUserName }}</span>
                  <span class="highlight-points">{{ data.bestLast28Days.pointsDiff }}pts</span>
                </div>
              </div>

              <div class="highlight-item best-14days">
                <mat-icon class="trophy-icon">emoji_events</mat-icon>
                <div class="highlight-content">
                  <span class="highlight-label">14j:</span>
                  <img [src]="'assets/img/' + data.bestLast14Days.userLogo" [alt]="data.bestLast14Days.teamUserName" class="highlight-logo">
                  <span class="highlight-name">{{ data.bestLast14Days.teamUserName }}</span>
                  <span class="highlight-points">{{ data.bestLast14Days.pointsDiff }}pts</span>
                </div>
              </div>

              <div class="highlight-item best-7days">
                <mat-icon class="trophy-icon">emoji_events</mat-icon>
                <div class="highlight-content">
                  <span class="highlight-label">7j:</span>
                  <img [src]="'assets/img/' + data.bestLast7Days.userLogo" [alt]="data.bestLast7Days.teamUserName" class="highlight-logo">
                  <span class="highlight-name">{{ data.bestLast7Days.teamUserName }}</span>
                  <span class="highlight-points">{{ data.bestLast7Days.pointsDiff }}pts</span>
                </div>
              </div>

              @if (data.bestYesterday.teamName) {
                <div class="highlight-item best-yesterday">
                  <mat-icon class="trophy-icon">star</mat-icon>
                  <div class="highlight-content">
                    <span class="highlight-label">Hier:</span>
                    <img [src]="'assets/img/' + data.bestYesterday.userLogo" [alt]="data.bestYesterday.teamUserName" class="highlight-logo">
                    <span class="highlight-name">{{ data.bestYesterday.teamUserName }}</span>
                    <span class="highlight-points">{{ data.bestYesterday.pointsDiff }}pts</span>
                  </div>
                </div>
              }
            </div>
          </mat-panel-title>
        </mat-expansion-panel-header>

        <!-- Expanded Content -->
        <div class="highlights-expanded">
          <div class="period-details">
            <div class="period-card">
              <h3>🏆 Meilleurs 28 jours</h3>
              <div class="period-winner">
                <img [src]="'assets/img/' + data.bestLast28Days.userLogo" [alt]="data.bestLast28Days.teamUserName" class="period-logo">
                <div class="period-info">
                  <div class="period-team">{{ data.bestLast28Days.teamUserName }}</div>
                  <div class="period-stats">{{ data.bestLast28Days.pointsDiff }} points</div>
                </div>
              </div>
            </div>

            <div class="period-card">
              <h3>🏆 Meilleurs 14 jours</h3>
              <div class="period-winner">
                <img [src]="'assets/img/' + data.bestLast14Days.userLogo" [alt]="data.bestLast14Days.teamUserName" class="period-logo">
                <div class="period-info">
                  <div class="period-team">{{ data.bestLast14Days.teamUserName }}</div>
                  <div class="period-stats">{{ data.bestLast14Days.pointsDiff }} points</div>
                </div>
              </div>
            </div>

            <div class="period-card">
              <h3>🏆 Meilleurs 7 jours</h3>
              <div class="period-winner">
                <img [src]="'assets/img/' + data.bestLast7Days.userLogo" [alt]="data.bestLast7Days.teamUserName" class="period-logo">
                <div class="period-info">
                  <div class="period-team">{{ data.bestLast7Days.teamUserName }}</div>
                  <div class="period-stats">{{ data.bestLast7Days.pointsDiff }} points</div>
                </div>
              </div>
            </div>

            @if (data.bestYesterday.teamName) {
              <div class="period-card">
                <h3>⭐ Hier</h3>
                <div class="period-winner">
                  <img [src]="'assets/img/' + data.bestYesterday.userLogo" [alt]="data.bestYesterday.teamUserName" class="period-logo">
                  <div class="period-info">
                    <div class="period-team">{{ data.bestYesterday.teamUserName }}</div>
                    <div class="period-stats">{{ data.bestYesterday.pointsDiff }} points</div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </mat-expansion-panel>
    }

    <div class="leaders-container">
      <!-- Stats Banner - Collapsible -->
      <mat-expansion-panel class="stats-banner">
        <mat-expansion-panel-header>
          <mat-panel-title>
            <mat-icon class="stats-icon">bar_chart</mat-icon>
            <span class="stats-title">Meneurs Joueurs LNH</span>
          </mat-panel-title>
        </mat-expansion-panel-header>
        
        <mat-tab-group>
          <mat-tab label="Attaquants">
            @if (bestForwards$ | async; as forwards) {
              <div class="stats-grid">
                @for (player of forwards.slice(0, 10); track player.fullName) {
                  <div class="stat-player-card">
                    <img [src]="player.photoId + '.jpg'" [alt]="player.fullName" class="stat-player-photo" (error)="onImageError($event)">
                    <div class="stat-player-info">
                      <div class="stat-player-name">{{ player.fullName }}</div>
                      <div class="stat-player-points">{{ player.points }} pts</div>
                    </div>
                  </div>
                }
              </div>
            }
          </mat-tab>
          <mat-tab label="Défenseurs">
            @if (bestDefenses$ | async; as defenses) {
              <div class="stats-grid">
                @for (player of defenses.slice(0, 10); track player.fullName) {
                  <div class="stat-player-card">
                    <img [src]="player.photoId + '.jpg'" [alt]="player.fullName" class="stat-player-photo" (error)="onImageError($event)">
                    <div class="stat-player-info">
                      <div class="stat-player-name">{{ player.fullName }}</div>
                      <div class="stat-player-points">{{ player.points }} pts</div>
                    </div>
                  </div>
                }
              </div>
            }
          </mat-tab>
          <mat-tab label="Gardiens">
            @if (bestGoalies$ | async; as goalies) {
              <div class="stats-grid">
                @for (goalie of goalies.slice(0, 10); track goalie.fullName) {
                  <div class="stat-player-card">
                    <img [src]="goalie.photoId + '.jpg'" [alt]="goalie.fullName" class="stat-player-photo" (error)="onImageError($event)">
                    <div class="stat-player-info">
                      <div class="stat-player-name">{{ goalie.fullName }}</div>
                      <div class="stat-player-points">{{ goalie.points }} pts</div>
                    </div>
                  </div>
                }
              </div>
            }
          </mat-tab>
        </mat-tab-group>
      </mat-expansion-panel>

      <h2 class="section-title">Classement</h2>
      @if (leaders$ | async; as leaders) {
        <div class="teams-grid">
          @for (team of leaders; track team.pos) {
            <mat-expansion-panel class="team-card" 
                 [class.first-place]="team.pos === 1"
                 [class.second-place]="team.pos === 2"
                 [class.third-place]="team.pos === 3"
                 [class.last-place]="team.pos === lastPlace">
              
              <mat-expansion-panel-header>
                <!-- Rank Badge -->
                <div class="rank-badge" [class.top-three]="team.pos <= 3">
                  @if (team.pos === 1) {
                    <span class="rank-icon">🥇</span>
                  } @else if (team.pos === 2) {
                    <span class="rank-icon">🥈</span>
                  } @else if (team.pos === 3) {
                    <span class="rank-icon">🥉</span>
                  } @else {
                    <span class="rank-number">{{ team.pos }}</span>
                  }
                </div>

                <mat-panel-title>
                  <!-- Card Grid Layout -->
                  <div class="card-grid">
                <!-- Column 1: Logos (spans 2 rows) -->
                <div class="logos-section">
                  <div class="logo-stack">
                    <div class="team-logo-wrapper">
                      <img [src]="'assets/img/teamLogo/' + team.userLogo" [alt]="team.teamName" class="team-logo">
                    </div>
                    <div class="user-logo-wrapper">
                      <img [src]="'assets/img/' + team.userLogo" [alt]="team.teamUserName" class="user-logo">
                    </div>
                  </div>
                </div>

                <!-- Column 2, Row 1: Team Info & Points -->
                <div class="top-info">
                  <div class="team-info">
                    <div class="team-name">{{ team.teamName }}</div>
                    <div class="owner-name">{{ team.teamUserName }}</div>
                  </div>
                  <div class="total-points">
                    <div class="points-value">{{ team.points }}</div>
                    <div class="points-label">POINTS</div>
                  </div>
                </div>

                <!-- Column 2, Row 2: Stats -->
                <div class="stats-row">
                  <div class="stat-item">
                    <span class="stat-value">{{ team.goals }}</span>
                    <span class="stat-label">B</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-value">{{ team.passes }}</span>
                    <span class="stat-label">P</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-value">{{ team.goaliesWins }}</span>
                    <span class="stat-label">V</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-value">{{ team.goaliesShutOuts }}</span>
                    <span class="stat-label">BL</span>
                  </div>
                  </div>
                </div>
              </mat-panel-title>
            </mat-expansion-panel-header>

            <!-- Expanded Content: Team Players -->
            @if (getTeamData(team.teamName) | async; as teamData) {
              @if (teamData) {
                <div class="team-players">
                  <h3>Joueurs</h3>
                  <div class="players-grid">
                    @for (player of teamData.forwards; track player.fullName) {
                      <div class="player-card">
                        <img [src]="player.photoId + '.jpg'" 
                             [alt]="player.fullName" 
                             class="player-photo-small"
                             (error)="onImageError($event)">
                        <div class="player-info-small">
                          <div class="player-name-small">{{ player.fullName }}</div>
                          <div class="player-stats-small">{{ player.points }} pts</div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              }
            }
          </mat-expansion-panel>
          }
        </div>
      } @else {
        <div class="loading">
          <div class="skeleton-card"></div>
          <div class="skeleton-card"></div>
          <div class="skeleton-card"></div>
        </div>
      }
    </div>
  `,
  styles: [`
    .highlights-panel {
      margin: 12px auto;
      max-width: 1200px;
      border-radius: 24px !important;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2) !important;
      background: transparent !important;
      animation: fadeIn 0.6s ease-out;
    }

    .highlights-panel mat-expansion-panel-header {
      padding: 8px 16px !important;
      min-height: auto !important;
      background: transparent !important;
      border-radius: 24px !important;
    }

    .highlights-panel mat-expansion-panel-header:hover {
      background: rgba(255,255,255,0.05) !important;
    }

    .highlights-panel mat-panel-title {
      width: 100%;
      margin: 0 !important;
    }

    .highlights-bar {
      display: flex;
      gap: 8px;
      padding: 0;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }

    .highlight-item {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      border-radius: 20px;
      color: white;
      white-space: nowrap;
      flex-shrink: 0;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }

    .highlight-item:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    .highlight-item:active {
      transform: translateY(0) scale(0.98);
    }

    .highlights-expanded {
      padding: 24px;
      background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
    }

    .period-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }

    .period-card {
      background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%);
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .period-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.25);
    }

    .period-card h3 {
      margin: 0 0 16px 0;
      font-size: 18px;
      font-weight: 700;
      color: #1a1a1a;
      text-align: center;
    }

    .period-winner {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .period-logo {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 3px solid #1976d2;
      object-fit: cover;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .period-info {
      flex: 1;
      min-width: 0;
    }

    .period-team {
      font-size: 18px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .period-stats {
      font-size: 16px;
      font-weight: 600;
      color: #1976d2;
    }

    .trophy-icon {
      color: #ffd700;
      font-size: 20px;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      animation: trophyBounce 2s ease-in-out infinite;
    }

    .highlight-content {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .highlight-label {
      font-size: 11px;
      font-weight: 600;
      opacity: 0.9;
    }

    .highlight-logo {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      border: 2px solid white;
      object-fit: cover;
    }

    .highlight-name {
      font-size: 12px;
      font-weight: 600;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .highlight-points {
      font-size: 13px;
      font-weight: 700;
      color: #ffd700;
    }

    .best-7days {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }

    .best-14days {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    }

    .best-28days {
      background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    }

    .best-yesterday {
      background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      animation: pulse 2s ease-in-out infinite;
    }

    .leaders-container {
      padding: 16px;
    }

    .page-title {
      text-align: center;
      font-size: 32px;
      font-weight: 700;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      margin-bottom: 24px;
    }

    .section-title {
      text-align: center;
      font-size: 24px;
      font-weight: 600;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      margin: 24px 0 16px 0;
    }

    .stats-banner {
      margin-bottom: 24px;
      border-radius: 16px !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
      background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%) !important;
    }

    .stats-banner mat-expansion-panel-header {
      padding: 16px 24px !important;
      min-height: 64px !important;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 16px 16px 0 0;
    }

    .stats-banner mat-expansion-panel-header:hover {
      background: linear-gradient(135deg, #7c8ef5 0%, #8a5bb5 100%) !important;
    }

    .stats-icon {
      margin-right: 12px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }

    .stats-title {
      font-size: 18px;
      font-weight: 600;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 12px;
      padding: 16px;
    }

    .stat-player-card {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      background: rgba(0,0,0,0.02);
      border-radius: 8px;
      border: 1px solid rgba(0,0,0,0.06);
    }

    .stat-player-photo {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #e0e0e0;
    }

    .stat-player-info {
      flex: 1;
      min-width: 0;
    }

    .stat-player-name {
      font-size: 13px;
      font-weight: 600;
      color: #1a1a1a;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .stat-player-points {
      font-size: 12px;
      color: #1976d2;
      font-weight: 700;
    }

    .teams-grid {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 800px;
      margin: 0 auto;
    }

    .team-card {
      background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%) !important;
      border-radius: 16px !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      border: 2px solid transparent !important;
      margin-bottom: 16px !important;
      animation: fadeIn 0.5s ease-out backwards;
    }

    .team-card:nth-child(1) { animation-delay: 0.05s; }
    .team-card:nth-child(2) { animation-delay: 0.1s; }
    .team-card:nth-child(3) { animation-delay: 0.15s; }
    .team-card:nth-child(4) { animation-delay: 0.2s; }
    .team-card:nth-child(5) { animation-delay: 0.25s; }

    .team-card:hover {
      box-shadow: 0 8px 24px rgba(0,0,0,0.2) !important;
      transform: translateY(-4px);
    }

    .team-card:active {
      transform: translateY(-2px);
    }

    mat-expansion-panel-header {
      padding: 20px !important;
      min-height: 180px !important;
      height: auto !important;
    }

    mat-panel-title {
      width: 100%;
      display: block !important;
      margin-right: 0 !important;
    }

    mat-expansion-panel-header.mat-expanded {
      min-height: 180px !important;
    }

    .team-card.first-place {
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%) !important;
      border-color: #ffa000 !important;
      box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4) !important;
      animation: fadeIn 0.5s ease-out, pulse 3s ease-in-out infinite;
    }

    .team-card.first-place:hover {
      box-shadow: 0 8px 28px rgba(255, 215, 0, 0.6) !important;
    }

    .team-card.second-place {
      background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%) !important;
      border-color: #9e9e9e !important;
      box-shadow: 0 6px 20px rgba(192, 192, 192, 0.4) !important;
    }

    .team-card.third-place {
      background: linear-gradient(135deg, #cd7f32 0%, #e6a57e 100%) !important;
      border-color: #a0522d !important;
      box-shadow: 0 6px 20px rgba(205, 127, 50, 0.4) !important;
    }

    .team-card.last-place {
      background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%) !important;
      border-color: #ef5350 !important;
    }

    .rank-badge {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
    }

    .rank-badge.top-three {
      background: transparent;
    }

    .rank-icon {
      font-size: 32px;
      animation: trophyBounce 2s ease-in-out infinite;
    }

    .rank-number {
      color: #666;
    }

    .card-grid {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      gap: 16px 24px;
    }

    .logos-section {
      grid-row: 1 / 3;
      grid-column: 1;
      display: flex;
      align-items: center;
    }

    .top-info {
      grid-row: 1;
      grid-column: 2;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .stats-row {
      grid-row: 2;
      grid-column: 2;
    }

    .logo-stack {
      position: relative;
      width: 140px;
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .team-logo-wrapper {
      position: relative;
      width: 140px;
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,240,0.9) 100%);
      border-radius: 20px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.5);
      border: 3px solid rgba(255,255,255,0.8);
    }

    .team-logo {
      width: 120px;
      height: 120px;
      border-radius: 16px;
      object-fit: cover;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
    }

    .user-logo-wrapper {
      position: absolute;
      bottom: -8px;
      right: -8px;
      width: 70px;
      height: 70px;
      background: white;
      border-radius: 50%;
      padding: 4px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.25);
      border: 4px solid #1976d2;
      z-index: 10;
    }

    .user-logo {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    .team-info {
      flex: 1;
      min-width: 0;
    }

    .team-name {
      font-size: 24px;
      font-weight: 800;
      color: #1a1a1a;
      margin-bottom: 6px;
      line-height: 1.2;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
    }

    .owner-name {
      font-size: 16px;
      color: #666;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .owner-name::before {
      content: "👤";
      font-size: 14px;
    }

    .total-points {
      text-align: center;
      background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
      color: white;
      border-radius: 16px;
      padding: 12px 20px;
      box-shadow: 0 4px 12px rgba(25, 118, 210, 0.4);
      position: relative;
      overflow: hidden;
    }

    .total-points::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
      transform: rotate(45deg);
    }

    .points-value {
      font-size: 42px;
      font-weight: 900;
      line-height: 1;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .points-label {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      opacity: 0.95;
      margin-top: 4px;
    }

    .stats-row {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 12px 16px;
      background: rgba(0,0,0,0.03);
      border-radius: 12px;
      border: 1px solid rgba(0,0,0,0.06);
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }

    .stat-value {
      font-size: 20px;
      font-weight: 700;
      color: #1a1a1a;
    }

    .stat-label {
      font-size: 11px;
      font-weight: 600;
      color: #666;
      letter-spacing: 0.5px;
    }

    .loading {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
      max-width: 800px;
      margin: 0 auto;
    }

    .skeleton-card {
      height: 180px;
      background: linear-gradient(
        90deg,
        rgba(255,255,255,0.9) 0%,
        rgba(255,255,255,0.95) 50%,
        rgba(255,255,255,0.9) 100%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s ease-in-out infinite;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .team-players {
      padding: 20px;
    }

    .team-players h3 {
      margin: 0 0 16px 0;
      color: #1976d2;
      font-size: 18px;
      font-weight: 700;
    }

    .players-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 12px;
    }

    .player-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: rgba(0,0,0,0.02);
      border-radius: 8px;
      border: 1px solid rgba(0,0,0,0.06);
    }

    .player-photo-small {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #e0e0e0;
      transition: transform 0.3s ease;
    }

    .player-photo-small:hover {
      transform: scale(1.15);
      border-color: #1976d2;
    }

    .player-info-small {
      flex: 1;
      min-width: 0;
    }

    .player-name-small {
      font-size: 14px;
      font-weight: 600;
      color: #1a1a1a;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .player-stats-small {
      font-size: 12px;
      color: #666;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .highlights-bar {
        padding: 0 8px;
        gap: 6px;
      }

      .highlight-item {
        padding: 6px 10px;
      }

      .highlight-item:hover {
        transform: none;
      }

      .highlight-item:active {
        transform: scale(0.95);
      }

      .highlight-logo {
        width: 24px;
        height: 24px;
      }

      .highlight-name {
        font-size: 12px;
      }

      .highlight-points {
        font-size: 13px;
      }

      .leaders-container {
        padding: 8px;
      }

      .team-card:hover {
        transform: none;
      }

      .team-card:active {
        transform: scale(0.98);
      }

      .player-photo-small:hover {
        transform: none;
      }

      .page-title {
        font-size: 22px;
        margin-bottom: 16px;
      }

      .teams-grid {
        gap: 12px;
        max-width: 100%;
      }

      .team-card {
        padding: 16px;
      }

      .card-grid {
        gap: 12px 16px;
      }

      .top-info {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
      }

      .logo-stack {
        width: 110px;
        height: 110px;
      }

      .team-logo-wrapper {
        width: 110px;
        height: 110px;
      }

      .team-logo {
        width: 95px;
        height: 95px;
      }

      .user-logo-wrapper {
        width: 55px;
        height: 55px;
        bottom: -6px;
        right: -6px;
      }

      .team-name {
        font-size: 20px;
      }

      .owner-name {
        font-size: 14px;
      }

      .points-value {
        font-size: 36px;
      }

      .stat-value {
        font-size: 18px;
      }
    }

    @media (max-width: 480px) {
      .logo-stack {
        width: 100px;
        height: 100px;
      }

      .team-logo-wrapper {
        width: 100px;
        height: 100px;
      }

      .team-logo {
        width: 85px;
        height: 85px;
      }

      .user-logo-wrapper {
        width: 50px;
        height: 50px;
      }

      .team-name {
        font-size: 18px;
      }

      .points-value {
        font-size: 32px;
      }

      .stat-value {
        font-size: 16px;
      }

      .rank-badge {
        width: 35px;
        height: 35px;
      }

      .rank-icon {
        font-size: 28px;
      }
    }
  `]
})
export class LeadersComponent implements OnInit {
  leaders$!: Observable<PoolTeam[]>;
  leaderData$!: Observable<LeadersResponse>;
  teams$!: Observable<TeamStats[]>;
  expandedTeam: string | null = null;
  lastPlace = 0;

  constructor(private poolDataService: PoolDataService) {}

  bestForwards$!: Observable<Player[]>;
  bestDefenses$!: Observable<Player[]>;
  bestGoalies$!: Observable<Goalie[]>;

  ngOnInit(): void {
    this.leaderData$ = this.poolDataService.getLeaders();
    this.teams$ = this.poolDataService.getTeams();
    this.bestForwards$ = this.poolDataService.getBestForwards();
    this.bestDefenses$ = this.poolDataService.getBestDefenses();
    this.bestGoalies$ = this.poolDataService.getBestGoalies();
    
    this.leaders$ = this.leaderData$.pipe(
      map(response => {
        if (response.leaders && response.leaders.length > 0) {
          this.lastPlace = Math.max(...response.leaders.map(t => t.pos));
        }
        return response.leaders || [];
      })
    );
  }

  toggleTeam(teamName: string): void {
    this.expandedTeam = this.expandedTeam === teamName ? null : teamName;
  }

  getTeamData(teamName: string): Observable<TeamStats | undefined> {
    return this.teams$.pipe(
      map(teams => teams.find(t => t.name === teamName))
    );
  }

  onImageError(event: any): void {
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0iI2UwZTBlMCIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjAiIHI9IjgiIGZpbGw9IiM5ZTllOWUiLz48cGF0aCBkPSJNMTAgNDBjMC04IDctMTIgMTUtMTJzMTUgNCAxNSAxMiIgZmlsbD0iIzllOWU5ZSIvPjwvc3ZnPg==';
  }
}

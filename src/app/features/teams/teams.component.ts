import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { PoolDataService } from '../../core/services/pool-data.service';
import { TeamStats } from '../../core/models/pool.model';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule
  ],
  template: `
    <div class="teams-container">
      <h2 class="page-title">Équipes du Pool</h2>
      @if (teams$ | async; as teams) {
        <div class="teams-list">
          <mat-accordion>
            @for (team of teams; track team.name) {
              <mat-expansion-panel>
                <mat-expansion-panel-header class="enhanced-header">
                  <mat-panel-title>
                    <div class="team-card-header">
                      <div class="logos-section">
                        <div class="logo-stack">
                          <div class="team-logo-wrapper">
                            <img [src]="'assets/img/teamLogo/' + team.userLogo" [alt]="team.name" class="team-logo">
                          </div>
                          <div class="user-logo-wrapper">
                            <img [src]="'assets/img/' + team.userLogo" [alt]="team.poolerName" class="user-logo">
                          </div>
                        </div>
                      </div>
                      <div class="info-section">
                        <div class="team-info">
                          <div class="team-name">{{ team.name }}</div>
                          <div class="owner-name">{{ team.poolerName }}</div>
                        </div>
                      </div>
                    </div>
                  </mat-panel-title>
                </mat-expansion-panel-header>

                <h3>Attaquants</h3>
                <table mat-table [dataSource]="team.forwards" class="team-table">
                  <ng-container matColumnDef="photo">
                    <th mat-header-cell *matHeaderCellDef></th>
                    <td mat-cell *matCellDef="let player">
                      <img [src]="player.photoId + '.jpg'" 
                           [alt]="player.fullName" 
                           class="player-photo"
                           (error)="onImageError($event)">
                    </td>
                  </ng-container>
                  <ng-container matColumnDef="name">
                    <th mat-header-cell *matHeaderCellDef>Nom</th>
                    <td mat-cell *matCellDef="let player">
                      {{ player.fullName }}
                      @if (player.isBest) {
                        <span class="best-badge">⭐</span>
                      }
                      @if (player.isWorst) {
                        <span class="worst-badge">👎</span>
                      }
                    </td>
                  </ng-container>
                  <ng-container matColumnDef="goals">
                    <th mat-header-cell *matHeaderCellDef>B</th>
                    <td mat-cell *matCellDef="let player">{{ player.goals }}</td>
                  </ng-container>
                  <ng-container matColumnDef="assists">
                    <th mat-header-cell *matHeaderCellDef>P</th>
                    <td mat-cell *matCellDef="let player">{{ player.passes }}</td>
                  </ng-container>
                  <ng-container matColumnDef="points">
                    <th mat-header-cell *matHeaderCellDef>PTS</th>
                    <td mat-cell *matCellDef="let player" class="points-col">{{ player.points }}</td>
                  </ng-container>
                  <tr mat-header-row *matHeaderRowDef="playerColumns"></tr>
                  <tr mat-row *matRowDef="let row; columns: playerColumns;"></tr>
                </table>

                @if (team.defenses && team.defenses.length > 0) {
                  <h3>Défenseurs</h3>
                  <table mat-table [dataSource]="team.defenses" class="team-table">
                    <ng-container matColumnDef="photo">
                      <th mat-header-cell *matHeaderCellDef></th>
                      <td mat-cell *matCellDef="let player">
                        <img [src]="player.photoId + '.jpg'" 
                             [alt]="player.fullName" 
                             class="player-photo"
                             (error)="onImageError($event)">
                      </td>
                    </ng-container>
                    <ng-container matColumnDef="name">
                      <th mat-header-cell *matHeaderCellDef>Nom</th>
                      <td mat-cell *matCellDef="let player">{{ player.fullName }}</td>
                    </ng-container>
                    <ng-container matColumnDef="goals">
                      <th mat-header-cell *matHeaderCellDef>B</th>
                      <td mat-cell *matCellDef="let player">{{ player.goals }}</td>
                    </ng-container>
                    <ng-container matColumnDef="assists">
                      <th mat-header-cell *matHeaderCellDef>P</th>
                      <td mat-cell *matCellDef="let player">{{ player.passes }}</td>
                    </ng-container>
                    <ng-container matColumnDef="points">
                      <th mat-header-cell *matHeaderCellDef>PTS</th>
                      <td mat-cell *matCellDef="let player" class="points-col">{{ player.points }}</td>
                    </ng-container>
                    <tr mat-header-row *matHeaderRowDef="playerColumns"></tr>
                    <tr mat-row *matRowDef="let row; columns: playerColumns;"></tr>
                  </table>
                }

                <h3>Gardiens</h3>
                <table mat-table [dataSource]="team.goalies" class="team-table">
                  <ng-container matColumnDef="photo">
                    <th mat-header-cell *matHeaderCellDef></th>
                    <td mat-cell *matCellDef="let goalie">
                      <img [src]="goalie.photoId + '.jpg'" 
                           [alt]="goalie.fullName" 
                           class="player-photo"
                           (error)="onImageError($event)">
                    </td>
                  </ng-container>
                  <ng-container matColumnDef="name">
                    <th mat-header-cell *matHeaderCellDef>Nom</th>
                    <td mat-cell *matCellDef="let goalie">
                      {{ goalie.fullName }}
                      @if (goalie.isBest) {
                        <span class="best-badge">⭐</span>
                      }
                      @if (goalie.isWorst) {
                        <span class="worst-badge">👎</span>
                      }
                    </td>
                  </ng-container>
                  <ng-container matColumnDef="wins">
                    <th mat-header-cell *matHeaderCellDef>V</th>
                    <td mat-cell *matCellDef="let goalie">{{ goalie.wins }}</td>
                  </ng-container>
                  <ng-container matColumnDef="shutouts">
                    <th mat-header-cell *matHeaderCellDef>BL</th>
                    <td mat-cell *matCellDef="let goalie">{{ goalie.shutOuts }}</td>
                  </ng-container>
                  <ng-container matColumnDef="points">
                    <th mat-header-cell *matHeaderCellDef>PTS</th>
                    <td mat-cell *matCellDef="let goalie" class="points-col">{{ goalie.points }}</td>
                  </ng-container>
                  <tr mat-header-row *matHeaderRowDef="goalieColumns"></tr>
                  <tr mat-row *matRowDef="let row; columns: goalieColumns;"></tr>
                </table>
              </mat-expansion-panel>
            }
          </mat-accordion>
        </div>
      }
    </div>
  `,
  styles: [`
    .teams-container {
      padding: 16px;
    }

    .page-title {
      text-align: center;
      font-size: 28px;
      font-weight: 600;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      margin-bottom: 24px;
    }

    .teams-list {
      max-width: 800px;
      margin: 0 auto;
    }

    mat-expansion-panel {
      background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%);
      border-radius: 16px !important;
      margin-bottom: 16px !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
      border: 2px solid rgba(0,0,0,0.05) !important;
      overflow: hidden;
    }

    mat-expansion-panel:hover {
      box-shadow: 0 6px 20px rgba(0,0,0,0.2) !important;
    }

    .enhanced-header {
      padding: 24px 32px !important;
      min-height: 160px !important;
    }

    .team-card-header {
      display: flex;
      align-items: center;
      gap: 28px;
      width: 100%;
    }

    .logos-section {
      flex-shrink: 0;
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
      box-shadow: 0 6px 16px rgba(0,0,0,0.12);
      border: 3px solid rgba(255,255,255,0.8);
    }

    .team-logo {
      width: 120px;
      height: 120px;
      border-radius: 16px;
      object-fit: cover;
      filter: drop-shadow(0 3px 6px rgba(0,0,0,0.15));
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

    .info-section {
      flex: 1;
      display: flex;
      align-items: center;
      width: 450px;
      gap: 20px;
      min-width: 0;
    }

    .team-info {
      flex: 2;
      min-width: 0;
      max-width: 500px;
    }

    .team-name {
      font-size: 26px;
      font-weight: 800;
      color: #1a1a1a;
      margin-bottom: 6px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
      line-height: 1.3;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
    }

    .owner-name {
      font-size: 17px;
      color: #666;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .owner-name::before {
      content: "👤";
      font-size: 16px;
    }

    .total-points {
      text-align: center;
      background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
      color: white;
      border-radius: 16px;
      padding: 14px 20px;
      box-shadow: 0 4px 12px rgba(25, 118, 210, 0.4);
      min-width: 100px;
      flex-shrink: 0;
    }

    .points-value {
      font-size: 42px;
      font-weight: 900;
      line-height: 1;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .points-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      opacity: 0.95;
      margin-top: 4px;
    }

    mat-panel-description {
      justify-content: flex-end !important;
      margin-left: auto !important;
    }

    .stats-row {
      display: flex;
      gap: 20px;
      align-items: center;
      padding: 12px 20px;
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
      font-size: 22px;
      font-weight: 700;
      color: #1a1a1a;
    }

    .stat-label {
      font-size: 11px;
      font-weight: 600;
      color: #666;
      letter-spacing: 0.8px;
    }

    .team-table {
      width: 100%;
      margin: 16px 0;
    }

    .player-photo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #e0e0e0;
    }

    .points-col {
      font-weight: bold;
      color: #1976d2;
    }

    .best-badge {
      margin-left: 4px;
      font-size: 14px;
    }

    .worst-badge {
      margin-left: 4px;
      font-size: 14px;
    }

    h3 {
      margin-top: 16px;
      color: #1976d2;
      font-size: 18px;
    }

    h3 {
      margin: 20px 0 12px 0;
      color: #1976d2;
      font-size: 18px;
      font-weight: 700;
      padding-left: 8px;
      border-left: 4px solid #1976d2;
    }

    @media (max-width: 768px) {
      .teams-container {
        padding: 8px;
      }

      .page-title {
        font-size: 22px;
        margin-bottom: 16px;
      }

      mat-expansion-panel {
        margin-bottom: 12px !important;
      }

      .enhanced-header {
        padding: 12px 16px !important;
      }

      .team-card-header {
        gap: 12px;
      }

      .logo-stack {
        width: 80px;
        height: 80px;
      }

      .team-logo-wrapper {
        width: 80px;
        height: 80px;
      }

      .team-logo {
        width: 68px;
        height: 68px;
      }

      .user-logo-wrapper {
        width: 40px;
        height: 40px;
        bottom: -4px;
        right: -4px;
      }

      .team-name {
        font-size: 16px;
      }

      .owner-name {
        font-size: 12px;
      }

      .points-value {
        font-size: 24px;
      }

      .stats-row {
        gap: 8px;
        padding: 6px 12px;
      }

      .stat-value {
        font-size: 16px;
      }

      .team-table {
        font-size: 12px;
      }

      .player-photo {
        width: 35px;
        height: 35px;
      }

      h3 {
        font-size: 16px;
        margin-top: 12px;
      }

      th, td {
        padding: 8px 4px !important;
      }

      /* Hide assists column on mobile */
      .mat-column-assists {
        display: none;
      }

      /* Stack header vertically on small screens */
      mat-panel-description {
        display: none !important;
      }
    }

    @media (max-width: 480px) {
      .logo-stack {
        width: 70px;
        height: 70px;
      }

      .team-logo-wrapper {
        width: 70px;
        height: 70px;
      }

      .team-logo {
        width: 60px;
        height: 60px;
      }

      .user-logo-wrapper {
        width: 35px;
        height: 35px;
      }

      .team-name {
        font-size: 15px;
      }

      .points-value {
        font-size: 20px;
      }

      /* Hide photo column on very small screens */
      .mat-column-photo {
        display: none;
      }
    }
  `]
})
export class TeamsComponent implements OnInit {
  teams$!: Observable<TeamStats[]>;
  expandedTeam: string | null = null;
  playerColumns = ['photo', 'name', 'goals', 'assists', 'points'];
  goalieColumns = ['photo', 'name', 'wins', 'shutouts', 'points'];

  constructor(private poolDataService: PoolDataService) {}

  ngOnInit(): void {
    this.teams$ = this.poolDataService.getTeams();
  }

  toggleTeam(teamName: string): void {
    this.expandedTeam = this.expandedTeam === teamName ? null : teamName;
  }

  onImageError(event: any): void {
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0iI2UwZTBlMCIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjAiIHI9IjgiIGZpbGw9IiM5ZTllOWUiLz48cGF0aCBkPSJNMTAgNDBjMC04IDctMTIgMTUtMTJzMTUgNCAxNSAxMiIgZmlsbD0iIzllOWU5ZSIvPjwvc3ZnPg==';
  }
}

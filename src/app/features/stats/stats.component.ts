import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { PoolDataService } from '../../core/services/pool-data.service';
import { Player, Goalie } from '../../core/models/pool.model';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Statistiques des Meilleurs Joueurs</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-tab-group>
          <mat-tab label="Attaquants">
            @if (bestForwards$ | async; as forwards) {
              <table mat-table [dataSource]="forwards" class="stats-table">
                <ng-container matColumnDef="rank">
                  <th mat-header-cell *matHeaderCellDef>#</th>
                  <td mat-cell *matCellDef="let player">{{ player.order }}</td>
                </ng-container>
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
                    <div class="player-name">{{ player.fullName }}</div>
                    @if (player.isInjured) {
                      <span class="injury-badge">🤕</span>
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
                <tr mat-header-row *matHeaderRowDef="forwardColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: forwardColumns;"></tr>
              </table>
            }
          </mat-tab>

          <mat-tab label="Défenseurs">
            @if (bestDefenses$ | async; as defenses) {
              <table mat-table [dataSource]="defenses" class="stats-table">
                <ng-container matColumnDef="rank">
                  <th mat-header-cell *matHeaderCellDef>#</th>
                  <td mat-cell *matCellDef="let player">{{ player.order }}</td>
                </ng-container>
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
                    <div class="player-name">{{ player.fullName }}</div>
                    @if (player.isInjured) {
                      <span class="injury-badge">🤕</span>
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
                <tr mat-header-row *matHeaderRowDef="forwardColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: forwardColumns;"></tr>
              </table>
            }
          </mat-tab>

          <mat-tab label="Gardiens">
            @if (bestGoalies$ | async; as goalies) {
              <table mat-table [dataSource]="goalies" class="stats-table">
                <ng-container matColumnDef="rank">
                  <th mat-header-cell *matHeaderCellDef>#</th>
                  <td mat-cell *matCellDef="let goalie">{{ goalie.order }}</td>
                </ng-container>
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
                    <div class="player-name">{{ goalie.fullName }}</div>
                    @if (goalie.isInjured) {
                      <span class="injury-badge">🤕</span>
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
            }
          </mat-tab>
        </mat-tab-group>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 16px;
    }

    .stats-table {
      width: 100%;
      margin-top: 16px;
    }

    mat-tab-group {
      margin-top: 16px;
    }

    .player-photo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #e0e0e0;
    }

    .player-photo:hover {
      transform: scale(1.1);
      transition: transform 0.2s;
      border-color: #1976d2;
    }

    .player-name {
      font-weight: 500;
      display: inline-block;
    }

    .injury-badge {
      margin-left: 8px;
      font-size: 16px;
    }

    .points-col {
      font-weight: bold;
      color: #1976d2;
      font-size: 15px;
    }

    th {
      font-weight: 600;
      background-color: #f5f5f5;
    }

    tr:hover {
      background-color: #f5f5f5;
    }

    @media (max-width: 768px) {
      mat-card {
        margin: 8px;
      }

      .stats-table {
        font-size: 12px;
      }

      .player-photo {
        width: 40px;
        height: 40px;
      }

      .player-name {
        font-size: 13px;
      }

      .points-col {
        font-size: 14px;
      }

      th, td {
        padding: 8px 4px !important;
      }

      /* Hide rank column on mobile to save space */
      .mat-column-rank {
        display: none;
      }
    }

    @media (max-width: 480px) {
      .player-photo {
        width: 35px;
        height: 35px;
      }

      /* Hide assists/passes on very small screens */
      .mat-column-assists {
        display: none;
      }
    }
  `]
})
export class StatsComponent implements OnInit {
  bestForwards$!: Observable<Player[]>;
  bestDefenses$!: Observable<Player[]>;
  bestGoalies$!: Observable<Goalie[]>;

  forwardColumns = ['rank', 'photo', 'name', 'goals', 'assists', 'points'];
  goalieColumns = ['rank', 'photo', 'name', 'wins', 'shutouts', 'points'];

  constructor(private poolDataService: PoolDataService) {}

  ngOnInit(): void {
    this.bestForwards$ = this.poolDataService.getBestForwards();
    this.bestDefenses$ = this.poolDataService.getBestDefenses();
    this.bestGoalies$ = this.poolDataService.getBestGoalies();
  }

  onImageError(event: any): void {
    // Fallback to a default player silhouette if image fails to load
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0iI2UwZTBlMCIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjAiIHI9IjgiIGZpbGw9IiM5ZTllOWUiLz48cGF0aCBkPSJNMTAgNDBjMC04IDctMTIgMTUtMTJzMTUgNCAxNSAxMiIgZmlsbD0iIzllOWU5ZSIvPjwvc3ZnPg==';
  }
}

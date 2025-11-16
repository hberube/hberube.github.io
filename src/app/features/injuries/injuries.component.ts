import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { PoolDataService } from '../../core/services/pool-data.service';
import { Injury } from '../../core/models/pool.model';

@Component({
  selector: 'app-injuries',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Blessures</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        @if (injuries$ | async; as injuries) {
          <table mat-table [dataSource]="injuries" class="injuries-table">
            <ng-container matColumnDef="player">
              <th mat-header-cell *matHeaderCellDef>Joueur</th>
              <td mat-cell *matCellDef="let injury">{{ injury.playerName }}</td>
            </ng-container>

            <ng-container matColumnDef="team">
              <th mat-header-cell *matHeaderCellDef>Équipe</th>
              <td mat-cell *matCellDef="let injury">{{ injury.team }}</td>
            </ng-container>

            <ng-container matColumnDef="injury">
              <th mat-header-cell *matHeaderCellDef>Blessure</th>
              <td mat-cell *matCellDef="let injury">{{ injury.injury }}</td>
            </ng-container>

            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Statut</th>
              <td mat-cell *matCellDef="let injury">
                <mat-chip [class.out]="injury.status === 'Out'" 
                          [class.day-to-day]="injury.status === 'Day-to-Day'">
                  {{ injury.status }}
                </mat-chip>
              </td>
            </ng-container>

            <ng-container matColumnDef="date">
              <th mat-header-cell *matHeaderCellDef>Date</th>
              <td mat-cell *matCellDef="let injury">{{ injury.dateInjured }}</td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        }
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 16px;
    }

    .injuries-table {
      width: 100%;
      margin-top: 16px;
    }

    mat-chip {
      &.out {
        background-color: #f44336;
        color: white;
      }

      &.day-to-day {
        background-color: #ff9800;
        color: white;
      }
    }

    @media (max-width: 768px) {
      mat-card {
        margin: 8px;
      }

      .injuries-table {
        font-size: 12px;
      }

      th, td {
        padding: 8px 4px !important;
      }

      mat-chip {
        font-size: 11px;
        min-height: 24px;
      }

      /* Hide date column on mobile */
      .mat-column-date {
        display: none;
      }
    }

    @media (max-width: 480px) {
      /* Hide team column on very small screens */
      .mat-column-team {
        display: none;
      }
    }
  `]
})
export class InjuriesComponent implements OnInit {
  injuries$!: Observable<Injury[]>;
  displayedColumns = ['player', 'team', 'injury', 'status', 'date'];

  constructor(private poolDataService: PoolDataService) {}

  ngOnInit(): void {
    this.injuries$ = this.poolDataService.getInjuries();
  }
}

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/leaders/leaders.component').then(m => m.LeadersComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

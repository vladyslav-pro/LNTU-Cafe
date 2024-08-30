import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth-page/index')
      .then(m => m.routes)
  },
  {
    path: 'main',
    loadChildren: () => import('../app/layout/index')
      .then(r => r.routes)
  },
  {
    path: '**',
    loadComponent: () => import('../app/shared/wrong-way/wrong-way.component').then(c => c.WrongWayComponent)
  }
];

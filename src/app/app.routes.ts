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
    loadComponent: () => import('../app/auth/auth-page/login/login.component').then(m => m.LoginComponent)
  }
];

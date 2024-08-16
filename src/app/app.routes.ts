import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth-page/index')
      .then(m => m.routes)
  }
];

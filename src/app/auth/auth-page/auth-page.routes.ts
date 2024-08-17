import { Routes } from "@angular/router";
import { AuthPageComponent } from "./auth-page.component";

export const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
      },
      {
        path: 'registration',
        loadComponent: () => import('./registration/registration.component').then(c => c.RegistrationComponent)
      }
    ]
  }
];

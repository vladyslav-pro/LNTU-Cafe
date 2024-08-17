import { Routes} from "@angular/router";
import {LayoutComponent} from "./layout.component";
import {AllTablesComponent} from "./features/all-tables/all-tables.component";

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'request-reservation',
        loadComponent: () => import('./features/reservations/request-reservation/request-reservation.component').then(m => m.RequestReservationComponent)
      },
      {
        path: 'user-reservation',
        loadComponent: () => import('./features/reservations/user-reservation/user-reservation.component').then(m => m.UserReservationComponent)
      },
      {
        path: 'active-reservation',
        loadComponent: () => import('./features/reservations/active-reservation/active-reservation.component').then(m => m.ActiveReservationComponent)
      },
      {
        path: 'user-profile',
        loadComponent: () => import('./features/user-profile/user-profile.component').then(m => m.UserProfileComponent)
      },
      {
        path: 'tables-info',
        loadComponent: () => import('./features/all-tables/all-tables.component').then(m => m.AllTablesComponent)
      }
    ]
  }]

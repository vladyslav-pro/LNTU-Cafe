import {Component, DestroyRef, inject} from '@angular/core';
import {MatBadge} from "@angular/material/badge";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../auth/auth-page/auth.service";
import {take} from "rxjs";

@Component({
  selector: 'features',
  standalone: true,
  imports: [
    MatBadge,
    MatIcon,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  private destroyRef = inject(DestroyRef);
  private authService = inject(AuthService);
  public badgeOverlap: boolean = true;
  public user!: 'ADMIN' | 'USER'
  public requestReservation: number = 2;
  constructor(
    private router: Router
  ) {

  }

  logout() {
    this.router.navigate(['/auth/login']);
    this.authService.logout()
      .pipe(
        take(1)
      )
      .subscribe();
  }
}

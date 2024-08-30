import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";
import {map, take, tap} from "rxjs";

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.userToken.pipe(
    take(1),
    map( token => {
      const isAuth = !!token
      if (isAuth) {
        return true;
      }
      return router.createUrlTree(['/auth/login'])
    }))
}

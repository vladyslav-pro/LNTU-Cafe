import {inject} from "@angular/core";
import {HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable, switchMap, take} from "rxjs";

export function authInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
    const authService = inject(AuthService);
    return authService.userToken.pipe(
      take(1),
      switchMap(token => {
        if (token) {
          const clonedRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
          });
          return next(clonedRequest);
        }
        return next(req);
      })
    );
}

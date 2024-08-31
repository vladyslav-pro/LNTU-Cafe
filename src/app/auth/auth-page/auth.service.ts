import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthUserData, RegistrationUser, UserData} from "../../shared";
import {BehaviorSubject, catchError, Observable, tap, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private token: string = '';
  userToken = new BehaviorSubject<string | null>(null);

  constructor() {
    this.loadTokenFromStorage();
  }

  private loadTokenFromStorage() {
    const token = localStorage.getItem('LNTU_user_authToken');
    if (token) {
      this.userToken.next(token);
    }
  }

  public registrationUser(userData: RegistrationUser): Observable<any>{
    const registrationURL = 'http://www.lntu-tables.local/api/auth/register';
    return this.http.post<any>(registrationURL, userData)
      .pipe(
        catchError(this.handleError),
        tap(response => {
          // console.log('registration',response);
          this.handleUserToken(response.token);
          localStorage.setItem('LNTU_user_authToken', response.token);
        })
      );
  }

  public loginUser(email: string, password: string ) {
    const loginURL = 'http://www.lntu-tables.local/api/auth/login';
    return this.http.post<AuthUserData>(loginURL, {
      email: email,
      password: password,
    })
      .pipe(
        catchError(this.handleError),
        tap(response => {
          // console.log('login',response);
          this.handleUserToken(response.token);
          localStorage.setItem('LNTU_user_authToken', response.token);
        })
      );
  }

  public logout() {
    const logoutURL = 'http://www.lntu-tables.local/api/auth/logout';
    return this.http.post(logoutURL, {})
      .pipe(
          tap(() => {
            localStorage.removeItem('LNTU_user_authToken');
            this.userToken.next(null);
            this.router.navigate(['/auth/login']);
            window.location.reload();
          })
      )
  }

  handleUserToken(token: string) {
    this.userToken.next(token);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error';
    if (!errorResponse.error || !errorResponse.error.error.message) {
      return throwError(errorResponse);
    }
    switch(errorResponse.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is already use';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This EMAIL_NOT_FOUND';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'You has INVALID_PASSWORD';
        break
    }
    return throwError(errorMessage);
  }
}

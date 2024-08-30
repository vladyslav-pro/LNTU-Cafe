import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthUserData, RegistrationUser, UserData} from "../../shared";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  private http = inject(HttpClient);

  constructor() {
  }

  public registrationUser(userData: RegistrationUser): Observable<any>{
    const registrationURL = 'http://www.lntu-tables.local/api/auth/register';
    return this.http.post<any>(registrationURL, userData)
      .pipe(
        catchError(this.handleError),
        tap(response => {
          console.log(response);
          localStorage.setItem('LNTU_authToken', response.token);
        })
      );
  }

  public loginUser(email: string, password: string ) {
    const loginURL = 'http://www.lntu-tables.local/api/auth/login';
    return this.http.post<AuthUserData>(loginURL, {
      email: email,
      password: password,
      returnSecureToken: true
    })
      .pipe(
        catchError(this.handleError),
        tap(response => {
          localStorage.setItem('authToken', response.token);
        })
      );
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

import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";
import {UserData} from "../../../shared";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private http = inject(HttpClient);
  private user = signal<any>({})
  userInformation = this.user.asReadonly();

  constructor() { }

  public getUserProfileInfo() {
    const profileInfoUrl = 'http://www.lntu-tables.local/api/users/me';
    return this.http.get<UserData>(profileInfoUrl)
      .pipe(take(1))
      .subscribe(
        responce => {
          this.user.set(responce);
          console.log('user Data',responce);
        }
      );
  }
}

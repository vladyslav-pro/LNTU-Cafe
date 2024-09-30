import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class UserReservationService {
  private http = inject(HttpClient);

  userReservation(): Observable<any> {
    const userReservationURL = 'http://www.lntu-tables.local/api/booked-tables'
    const params = new HttpParams().set('tab','my')
    return this.http.get<any>(userReservationURL, {params});
  }
}

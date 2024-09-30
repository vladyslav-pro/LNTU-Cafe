import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class RequestReservationService {
  private http = inject(HttpClient);

  requestReservation(): Observable<any> {
    const requestReservationURL = 'http://www.lntu-tables.local/api/booked-tables'
    const params = new HttpParams().set('tab','his')
    return this.http.get<any>(requestReservationURL, {params});
  }
}

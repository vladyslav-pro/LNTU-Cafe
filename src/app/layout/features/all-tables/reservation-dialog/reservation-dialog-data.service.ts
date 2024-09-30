import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BookTable} from "../../../../shared";

@Injectable({
  providedIn: 'root'
})
export class ReservationDialogDataService {
  private http = inject(HttpClient);

  getAvailableTimeslots(date: string, tableID: number): Observable<string[]> {
    const availableTimeSLotsURL = `http://www.lntu-tables.local/api/available-time/${tableID}`
    return this.http.post<string[]>(availableTimeSLotsURL, {"date_picker": date});
  }

  getRequestedUser(searchString: string): Observable<any> {
    const searchUserURL = 'http://www.lntu-tables.local/api/users';
    const params = new HttpParams().set('search', searchString);
    return this.http.get<any>(searchUserURL, {params});
  }

  setBooking(data: BookTable, tableID: number): Observable<any> {
    const bookingURL = `http://www.lntu-tables.local/api/booked-tables/${tableID}`;
    return this.http.post<any>(bookingURL, data);
  }
}

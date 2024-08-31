import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, take} from "rxjs";
import {TablesInfo} from "../../../shared";

@Injectable({
  providedIn: 'root'
})
export class AllTablesService {
  private http = inject(HttpClient);
  private tables = signal<TablesInfo[]>([])
  tablesInformation = this.tables.asReadonly();

  constructor() { }

  getAllTables() {
    const allTablesUrl = 'http://www.lntu-tables.local/api/tables';
    return this.http.get<TablesInfo[]>(allTablesUrl)
      .pipe(
        take(1),
      ).subscribe(
        response => {
          const transformedResponce = response.map( item => ({
            ...item,
            id: item.id.toString(),
            number: item.number.toString(),
          }))

          this.tables.set(transformedResponce);
          console.log('All Tables',transformedResponce);
        }
      );
  }
}

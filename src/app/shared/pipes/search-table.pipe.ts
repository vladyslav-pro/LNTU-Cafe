import { Pipe, PipeTransform } from '@angular/core';
import {TablesInfo, TableStatus} from "../interfaces/table.interface";

@Pipe({
  name: 'searchTable',
  standalone: true
})
export class SearchTablePipe implements PipeTransform {

    transform(tables: TablesInfo[], tableNumber: string): TablesInfo[] {
    if (tableNumber === '') {
      return tables;
    }

    return tables.filter(t => {
      return t.number.includes(tableNumber);
    });
  }

}

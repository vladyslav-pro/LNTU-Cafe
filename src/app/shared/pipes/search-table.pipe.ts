import { Pipe, PipeTransform } from '@angular/core';
import {TableStatus} from "../interfaces/table.interface";

@Pipe({
  name: 'searchTable',
  standalone: true
})
export class SearchTablePipe implements PipeTransform {

    transform(tables: TableStatus[], tableNumber: string): TableStatus[] {
    if (tableNumber === '') {
      return tables;
    }

    return tables.filter(t => {
      return t.tableNumber.includes(tableNumber);
    });
  }

}

import { Component } from '@angular/core';
import {MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {SearchTablePipe, TABLE_MOCK, TableStatus} from "../../../shared";
import {TableComponentComponent} from "./table-component/table-component.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";

@Component({
  selector: 'app-all-tables',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    FormsModule,
    MatIcon,
    MatIconButton,
    TableComponentComponent,
    MatGridList,
    MatGridTile,
    MatPrefix,
    MatSuffix,
    SearchTablePipe
  ],
  templateUrl: './all-tables.component.html',
  styleUrl: './all-tables.component.scss'
})
export class AllTablesComponent {
  public tableList:TableStatus[]  = TABLE_MOCK;

  public tableNumber:string ='';

  public getTableNumber(event: any) {
    console.log(event.data)
    console.log(this.tableNumber)
  }

  public onSearchClean() {
    this.tableNumber = ''

  }
}

import {Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReservationsComponent} from "../reservation-item/reservation-item.component";
import {SearchTablePipe, TABLE_MOCK, TableStatus} from "../../../../shared";
import {CommonModule} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {RouterOutlet} from "@angular/router";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-active-reservation',
  standalone: true,
  imports: [
    CommonModule,
    MatLabel, //
    MatPrefix,
    MatSuffix,
    ReactiveFormsModule,
    MatIcon, //
    FormsModule, //
    ReservationsComponent,
    SearchTablePipe,
    MatIconButton, //
    MatFormField, //
    MatInput, //
  ],
  templateUrl: './active-reservation.component.html',
  styleUrl: './active-reservation.component.scss',
})
export class ActiveReservationComponent implements OnInit, OnChanges{

  // TODO for the future? this array return from server to Administrative user
  public tableNumber:string ='';
  protected readonly tableList = TABLE_MOCK;
  public userAdmin: boolean = true;

  public activeTable: TableStatus[] = [];

  ngOnInit() {
    this.getBookedTable();
    // console.log(this.tableNumber)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  public getTableNumber(event: any) {
    console.log(event.data)
    console.log(this.tableNumber)
  }

  public onSearchClean() {
    this.tableNumber = ''
  }

  private getBookedTable(): void {
    this.tableList.forEach((item:TableStatus) => {
      if (item.state) {
        this.activeTable.push(item)
      }
    })
  }
}

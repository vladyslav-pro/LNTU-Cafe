import { Component } from '@angular/core';
import {ReservationsComponent} from "../reservation-item/reservation-item.component";
import {TABLE_MOCK, TableStatus} from "../../../../shared";

@Component({
  selector: 'app-request-reservation',
  standalone: true,
  imports: [
    ReservationsComponent
  ],
  templateUrl: './request-reservation.component.html',
  styleUrl: './request-reservation.component.scss'
})
export class RequestReservationComponent {
  protected readonly tableList = TABLE_MOCK;
  public activeTable: TableStatus[] = [];
  userAsUser: boolean = true;
  ngOnInit() {
    this.getBookedTable();
  }
  private getBookedTable(): void {
    this.tableList.map((item:TableStatus) => {
      if (item.requestedUserState === 'PENDING') {
        this.activeTable.push(item)
      }
    })
  }
}

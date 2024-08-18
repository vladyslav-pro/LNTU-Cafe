import {Component} from '@angular/core';
import {ReservationsComponent} from "../reservation-item/reservation-item.component";
import {TABLE_MOCK, TableStatus} from "../../../../shared";

@Component({
  selector: 'app-user-reservation',
  standalone: true,
  imports: [
    ReservationsComponent
  ],
  templateUrl: './user-reservation.component.html',
  styleUrl: './user-reservation.component.scss'
})
export class UserReservationComponent {

  protected readonly tableList = TABLE_MOCK;
  public activeTable: TableStatus[] = [];
  public userAsUSer: boolean = true

  ngOnInit() {
    this.getBookedTable();
  }

  private getBookedTable(): void {
    this.tableList.map((item:TableStatus) => {
      if (item.state) {
        this.activeTable.push(item)
      }
    })
  }

}

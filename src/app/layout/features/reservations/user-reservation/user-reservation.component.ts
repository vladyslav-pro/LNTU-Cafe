import {Component, DestroyRef, inject} from '@angular/core';
import {ReservationsComponent} from "../reservation-item/reservation-item.component";
import {TABLE_MOCK, TableStatus} from "../../../../shared";
import {UserReservationService} from "./user-reservation.service";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private destroyRef = inject(DestroyRef);
  private userReservationService = inject(UserReservationService);

  protected readonly tableList = TABLE_MOCK;
  public activeTable: TableStatus[] = [];
  public userAsUSer: boolean = true

  ngOnInit() {
    this.getBookedTable();
    this.userReservationService.userReservation()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(item => {
        console.log(item);
      });
  }

  private getBookedTable(): void {
    this.tableList.map((item:TableStatus) => {
      if (item.state) {
        this.activeTable.push(item)
      }
    })
  }

}

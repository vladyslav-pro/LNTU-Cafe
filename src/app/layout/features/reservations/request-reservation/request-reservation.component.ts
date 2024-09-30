import {Component, DestroyRef, inject} from '@angular/core';
import {ReservationsComponent} from "../reservation-item/reservation-item.component";
import {TABLE_MOCK, TableStatus} from "../../../../shared";
import {RequestReservationService} from "./request-reservation.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

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
  private requestReservationService = inject(RequestReservationService);
  private destroyRef = inject(DestroyRef);

  protected readonly tableList = TABLE_MOCK;
  public activeTable: TableStatus[] = [];
  userAsUser: boolean = true;

  ngOnInit() {
    this.getBookedTable();
    this.requestReservationService.requestReservation()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(item => {
        console.log(item);
      });
  }

  private getBookedTable(): void {
    this.tableList.map((item:TableStatus) => {
      if (item.requestedUserState === 'PENDING') {
        this.activeTable.push(item)
      }
    })
  }

}

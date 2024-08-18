import {Component, Input, ViewEncapsulation} from '@angular/core';
import { TableStatus, UserReservationIconComponent} from "../../../../shared";
import {TitleCasePipe} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'reservation-item',
  standalone: true,
  imports: [
    UserReservationIconComponent,
    TitleCasePipe,
    MatButton
  ],
  templateUrl: './reservation-item.component.html',
  styleUrl: './reservation-item.component.scss',
})
export class ReservationsComponent {
  @Input() tableItem: TableStatus | undefined ;
  //after add routing server this input will be removed
  @Input() activeReservationTab: boolean | undefined;
  @Input() myReservationTab: boolean | undefined;
  @Input() requestReservationTab: boolean | undefined;

  // public userAsAdmin: boolean = true;

  public iconState = 'ACTIVE'

  public canselMeeting() {

  }

  public acceptMeeting() {

  }

}

import {Component, inject, Input, OnInit, ViewContainerRef} from '@angular/core';
import {TableStatus, UserReservationIconComponent} from "../../../../shared";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {CommonModule, TitleCasePipe} from "@angular/common";
import {ReservationDialogService} from "../reservation-dialog/reservation-dialog.service";

@Component({
  selector: 'table-item-component',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    UserReservationIconComponent,
    MatButton,
    TitleCasePipe
  ],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.scss'
})
export class TableComponentComponent implements OnInit{
  @Input() tableInformation: TableStatus | undefined ;
  viewContainer = inject(ViewContainerRef);

  private reservationDialogService = inject(ReservationDialogService)

  public tableState:'ЗАБРОНЮВАТИ' | 'ЗАБРОНЬОВАНО' = 'ЗАБРОНЮВАТИ';
  public iconState: string = '';

  ngOnInit() {
    this.setButtonLabel()
  }

  private setButtonLabel():void {
    if (this.tableInformation?.state) {
      this.tableState = 'ЗАБРОНЬОВАНО';
      this.iconState = 'DISABLE';
    } else {
      this.tableState ='ЗАБРОНЮВАТИ';
      this.iconState = 'ACTIVE';
    }
  }

  public showReservationDialog() {
    console.log(this.viewContainer)
    this.reservationDialogService.openDialog(this.viewContainer,this.tableInformation)
  }

}

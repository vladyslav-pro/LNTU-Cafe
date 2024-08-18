import {inject, Injectable, ViewContainerRef} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ReservationDialogComponent} from "./reservation-dialog.component";

@Injectable({providedIn: 'root'})
export class ReservationDialogService {
  private dialog = inject(MatDialog)
  public openDialog(viewContainerRef?: ViewContainerRef, data?: any) {
    const dialogRef = this.dialog.open(ReservationDialogComponent, {
      viewContainerRef: viewContainerRef,
      width: '900px',
      height: '600px',
      data: data
    });
    return dialogRef.afterClosed().subscribe(result => {
      console.log('data', result)
    });
  }
}

import {ChangeDetectionStrategy, Component, ElementRef, inject, Inject} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatOption, MatSelect} from "@angular/material/select";
import {
  MAT_DIALOG_DATA, MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {provideNativeDateAdapter} from "@angular/material/core";

class DialogData {
}

@Component({
  selector: 'reservation-dialog',
  standalone: true,
  imports: [
    MatFormField,
    MatDatepickerInput,
    FormsModule,
    MatDatepickerToggle,
    MatIcon,
    MatDatepicker,
    MatSelect,
    MatOption,
    MatButton,
    MatDialogClose,
    MatInput,
    MatLabel,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './reservation-dialog.component.html',
  styleUrl: './reservation-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationDialogComponent {
  public data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<ReservationDialogComponent>);

  tableNumber: number = 1;
  bookingTime: string = '';
  bookingDate: string = '';
  bookingDuration: number[] = [30,60,90];
  bookingDurationValue!: number;
  guestName: string = '';

  constructor(
    // private elementRef: ElementRef,
    // public dialogRef: MatDialogRef<ReservationDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('data', this.data)
  }

  onSubmit(){}
}

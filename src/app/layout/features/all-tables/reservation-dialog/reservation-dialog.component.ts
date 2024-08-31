import {ChangeDetectionStrategy, Component, inject, viewChild, ViewEncapsulation} from '@angular/core';
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle, MatDatepickerToggleIcon
} from "@angular/material/datepicker";
import {FormsModule, NgForm} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
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
import {CalendarIconComponent} from "../../../../shared";
import {MatTooltip} from "@angular/material/tooltip";

class DialogData {
}

@Component({
  selector: 'reservation-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatIcon,
    MatDatepicker,
    MatInput,
    MatSelect,
    MatOption,
    MatButton,
    MatDialogClose,
    MatLabel,
    MatHint,
    MatSuffix,
    MatDatepickerToggleIcon,
    CalendarIconComponent,
    MatTooltip,
    MatIconModule,
    MatDialogContent,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './reservation-dialog.component.html',
  styleUrl: './reservation-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ReservationDialogComponent {
  public data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<ReservationDialogComponent>);
  private form = viewChild.required<NgForm>('reservationDialogForm');

  tableNumber: number;
  bookingTime: string[] = [ '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00'];
  bookingTimeValue!: string;
  bookingDate: string = '';
  bookingDuration: number[] = [30,60,90];
  bookingDurationValue!: number;
  guestName: string = '';
  minDate: Date;

  constructor() {
    console.log('data', this.data)
    this.tableNumber = this.data.number;
    this.minDate = new Date();
  }

  onSubmit(formData: NgForm) {
    if(formData.form.invalid) {
      return;
    }
    console.log('form', formData.form.value);
    formData.reset();
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

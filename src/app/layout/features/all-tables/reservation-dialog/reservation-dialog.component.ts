import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  inject,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle, MatDatepickerToggleIcon
} from "@angular/material/datepicker";
import {FormsModule, NgForm} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatOption, MatSelect} from "@angular/material/select";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {provideNativeDateAdapter} from "@angular/material/core";
import {BookTable, CalendarIconComponent, RequestedUser} from "../../../../shared";
import {MatTooltip} from "@angular/material/tooltip";
import {ReservationDialogDataService} from "./reservation-dialog-data.service";
import {debounceTime, distinctUntilChanged, switchMap, take} from "rxjs";
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";

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
    MatAutocomplete,
    MatAutocompleteTrigger,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './reservation-dialog.component.html',
  styleUrl: './reservation-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ReservationDialogComponent {
  public data = inject(MAT_DIALOG_DATA);
  private reservationDialogDataService = inject(ReservationDialogDataService);
  private dialogRef = inject(MatDialogRef<ReservationDialogComponent>);

  @ViewChild('inputField') inputField!: ElementRef;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  tableNumber: number;
  availableTime: string[] = [];
  filteredUsers: RequestedUser[] = [];
  guestName: string = '';
  bookingTimeValue!: string;
  bookingDate: Date = new Date();
  bookingDuration: number[] = [30,60,90];
  bookingDurationValue!: number;
  minDate: Date;
  maxDate: Date;

  constructor() {
    this.tableNumber = this.data.number;
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.minDate.getDate() + 14);
    this.onDateChange(this.minDate);
  }

  onSubmit(formData: NgForm) {
    if(formData.form.invalid) {
      return;
    }
    this.reservationDialogDataService.setBooking(this.createBookingDataTable(formData), this.data.id)
      .pipe(take(1))
      .subscribe(item => {
        console.log('item', item);
      })
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onDateChange(date: Date) {
    const formatedDate = this.formatDate(date);
    this.reservationDialogDataService.getAvailableTimeslots(formatedDate, this.data.id)
      .pipe(take(1))
      .subscribe(availableTime => {
        this.availableTime = availableTime;
      })
  }

  onUserInput(guestName: string) {
    if (guestName.length < 2) {
      return;
    }
    this.reservationDialogDataService.getRequestedUser(guestName)
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(() => this.reservationDialogDataService.getRequestedUser(guestName))
      ).subscribe(
      (user) => {
        this.filteredUsers = user;
        if (this.filteredUsers.length > 0) {
          this.openAutocomplete();
        }
      }
    )
  }

  private openAutocomplete() {
    if (this.inputField && this.matAutocomplete) {
      this.matAutocomplete._keyManager.setFirstItemActive();
      this.inputField.nativeElement.focus();
      this.matAutocomplete._setVisibility();
    }
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  displayFn(user: RequestedUser): any {
    return user && user.full_name ? user.full_name : '';
  }

  createBookingDataTable(formData: NgForm): BookTable {
    return {
      guest_id: formData.form.value.guest.id,
      data_picker: this.formatDate(formData.form.value.date),
      time_picker: formData.form.value.bookingTime + ':00',
      duration: formData.form.value.duration,
    }
  }

}

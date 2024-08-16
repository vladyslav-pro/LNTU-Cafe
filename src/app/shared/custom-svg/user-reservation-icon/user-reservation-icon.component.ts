import {Component, Input} from '@angular/core';
import {IconOptions, MatIcon, MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {BOOKING_ICON} from "../svg-constants";

@Component({
  selector: 'user-reservation-icon',
  standalone: true,
  imports: [
    MatIconModule,
    MatIcon
  ],
  templateUrl: './user-reservation-icon.component.html',
  styleUrl: './user-reservation-icon.component.scss'
})
export class UserReservationIconComponent {
  @Input() state?: string;

  boxSize: IconOptions = {
    viewBox: '0 0 200 200'
  }

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {

    iconRegistry.addSvgIconLiteral('reservation-icon', sanitizer.bypassSecurityTrustHtml(BOOKING_ICON), this.boxSize);
  }
}

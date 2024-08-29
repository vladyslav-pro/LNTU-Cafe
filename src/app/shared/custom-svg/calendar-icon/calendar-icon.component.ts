import { Component } from '@angular/core';
import {IconOptions, MatIcon, MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {CALENDAR_ICON} from "../svg-constants";

@Component({
  selector: 'calendar-icon',
  standalone: true,
    imports: [
        MatIcon,
        MatIconModule
    ],
  templateUrl: './calendar-icon.component.html',
  styleUrl: './calendar-icon.component.scss'
})
export class CalendarIconComponent {
  boxSize:IconOptions = {
    viewBox: '0 0 29 29'
  }
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIconLiteral('calendar-icon', sanitizer.bypassSecurityTrustHtml(CALENDAR_ICON), this.boxSize);
  }

}

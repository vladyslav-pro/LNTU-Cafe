import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-wrong-way',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './wrong-way.component.html',
  styleUrl: './wrong-way.component.scss'
})
export class WrongWayComponent {

}

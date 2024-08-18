import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FeaturesComponent} from "./features/features.component";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'layout',
  standalone: true,
  imports: [
    RouterOutlet,
    FeaturesComponent,
    NgOptimizedImage,
    MatIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}

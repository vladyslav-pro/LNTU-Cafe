import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {UserData} from "../../../shared";
import {UserProfileService} from "./user-profile.service";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit{
  private userProfileService = inject(UserProfileService);
  userInformation = this.userProfileService.userInformation;

  constructor() {
    this.userProfileService.getUserProfileInfo()
  }

  ngOnInit() {

  }


}

import { Component } from '@angular/core';
import {UserData} from "../../../shared";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  userData: UserData = {
    firstName: 'Test',
    lastName: 'User',
    phoneNumber: '+380333333333',
    email: 'some.random@email.com',
    id: 'some123456randomID'
  }

}

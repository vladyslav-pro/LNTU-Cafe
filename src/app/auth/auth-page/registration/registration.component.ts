import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {LogoIconComponent} from "../../../shared";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import {Router} from "@angular/router";

@Component({
  selector: 'registration-page',
  standalone: true,
  imports: [
    MatTooltipModule,
    ReactiveFormsModule,
    LogoIconComponent,
    MatIcon
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  userRegistered: boolean = true;
  registrationForm = new FormGroup({
    'firstName' : new FormControl('', [Validators.required, Validators.minLength(2)]),
    'lastName' : new FormControl('', [Validators.required, Validators.minLength(2)]),
    'email' : new FormControl('', [Validators.required, Validators.email]),
    'password' : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    'phone' : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13)])
  });

  constructor(
    private router: Router
  ) {
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userRegistered = !this.userRegistered;
  }

  onLoginReturn(){
    this.userRegistered = !this.userRegistered;
    this.returnToLogin();
  }

  returnToLogin(){
    this.router.navigate(['/auth/login']);
  }


}

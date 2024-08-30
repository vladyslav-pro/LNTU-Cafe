import {Component, inject, ViewEncapsulation} from '@angular/core';
import { LogoIconComponent } from '../../../shared';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {AuthService} from "../auth.service";
import {KeyValuePipe} from "@angular/common";
import {lntuEmailValidator, passwordValidator} from "../auth.validations";
import {take} from "rxjs";

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButton,
    MatButtonModule,
    RouterLink,
    LogoIconComponent,
    KeyValuePipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  private authService = inject(AuthService);

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email, lntuEmailValidator()]),
    password : new FormControl('', [Validators.required, passwordValidator()])
  });

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.loginUser(this.loginForm.value.email!, this.loginForm.value.password!)
      .pipe(
        take(1)
      ).subscribe();
  }
}

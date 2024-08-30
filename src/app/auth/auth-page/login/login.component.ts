import {Component, inject, ViewEncapsulation} from '@angular/core';
import { LogoIconComponent } from '../../../shared';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
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
    KeyValuePipe,
    RouterLinkActive
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, lntuEmailValidator()]),
    password : new FormControl('', [Validators.required, passwordValidator()])
  });

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.loginUser(this.loginForm.value.email!, this.loginForm.value.password!)
      .pipe(
        take(1)
      ).subscribe(
        resdata => {
          console.log(resdata);
          this.router.navigate(['/main']);
        }
    );
  }
}

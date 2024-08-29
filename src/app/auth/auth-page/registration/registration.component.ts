import {Component, inject} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {LogoIconComponent, RegistrationUser} from "../../../shared";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";
import {Router} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {
  comparePasswords,
  firstNameValidator,
  lastNameValidator,
  lntuEmailValidator,
  passwordValidator,
  phoneValidator
} from "../auth.validations";
import {AuthService} from "../auth.service";
import {KeyValuePipe, NgTemplateOutlet} from "@angular/common";
import {take} from "rxjs";

@Component({
  selector: 'registration-page',
  standalone: true,
  imports: [
    MatTooltipModule,
    ReactiveFormsModule,
    LogoIconComponent,
    MatIcon,
    MatButton,
    NgTemplateOutlet,
    KeyValuePipe,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  private authService = inject(AuthService);
  userRegistered: boolean = true;
  registrationForm = new FormGroup({
    firstName : new FormControl('', [Validators.required,  firstNameValidator()]),
    lastName : new FormControl('', [Validators.required,  lastNameValidator()]),
    email : new FormControl('', [Validators.required, Validators.email, lntuEmailValidator()]),
    passwords : new FormGroup({
      password : new FormControl('', [Validators.required, passwordValidator()]),
      confirmPassword : new FormControl('', [Validators.required, passwordValidator()]),
      }, {validators: comparePasswords('password', 'confirmPassword')}),
    phone : new FormControl('', [Validators.required, phoneValidator()])
  });

  constructor(
    private router: Router
  ) {
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userRegistered = !this.userRegistered;
      const registeredUser: RegistrationUser = {
        name: this.registrationForm.value.firstName!,
        last_name: this.registrationForm.value.lastName!,
        phone_number: this.registrationForm.value.phone!,
        email: this.registrationForm.value.email!,
        password: this.registrationForm.value.passwords?.password!,
        password_confirmation: this.registrationForm.value.passwords?.confirmPassword!,
      }
    this.authService.registrationUser(registeredUser)
      .pipe(
        take(1)
      )
      .subscribe( token => {
        if (typeof token.token === "string") {
          console.log(token)
          this.router.navigate(['/main']);
        }
      });
  }

  returnToLogin(){
    this.router.navigate(['/auth/login']);
  }


}

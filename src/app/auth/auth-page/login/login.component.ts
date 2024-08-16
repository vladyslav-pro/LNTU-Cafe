import { Component, ViewEncapsulation} from '@angular/core';
import { LogoIconComponent } from '../../../shared';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButton,
    MatButtonModule,
    RouterLink,
    LogoIconComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  loginForm = new FormGroup({
    'email' : new FormControl('', [Validators.required, Validators.email]),
    'password' : new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(16)])
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}

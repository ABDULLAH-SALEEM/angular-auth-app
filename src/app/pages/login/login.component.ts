import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { TextfieldComponent } from '../../components/textfield/textfield.component';
import { LoaderButtonComponent } from '../../components/loader-button/loader-button.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, TextfieldComponent, LoaderButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Form Submitted', this.signInForm.value);
    }
  }

  loginWithGoogle() {
    // Add Google login logic here
    console.log('Login with Google clicked');
  }
}

import { Component } from '@angular/core';
import { TextfieldComponent } from '../../components/textfield/textfield.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { passwordMatchValidator } from '../../helper';
import { LoaderButtonComponent } from '../../components/loader-button/loader-button.component';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, TextfieldComponent, LoaderButtonComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        cnf_password: ['', [Validators.required, Validators.minLength(6)]],
      },
      { validators: passwordMatchValidator() }
    );
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
    }
  }

  loginWithGoogle() {
    // Add Google login logic here
    console.log('Login with Google clicked');
  }
}

import { Component } from '@angular/core';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

// decorator
@Component({
  selector: 'app-root',
  imports: [SignupComponent, LoginComponent],
  template: ` <app-login /> `,
  styles: [],
})

// main component class
export class AppComponent {
  title = 'auth';
}

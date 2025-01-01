import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


// decorator
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent ],
  template: `
   <app-login />
  `,
  styles: [],
})

// main component class
export class AppComponent {
  title = 'auth';
}

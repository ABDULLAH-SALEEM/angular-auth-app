import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

// decorator
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main style="padding: 10px;">
      <router-outlet />
    </main>
  `,
  styles: [],
})

// main component class
export class AppComponent {
  title = 'auth';
}

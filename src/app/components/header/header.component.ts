import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  title = signal('Auth app');

  logout(): void {
    // Perform logout logic here
    console.log('User logged out');
    this.router.navigate(['/']);
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-button',
  imports: [CommonModule],
  templateUrl: './loader-button.component.html',
  styleUrl: './loader-button.component.scss',
})
export class LoaderButtonComponent {
  @Input() loading: boolean = false;
  @Input() title: string = '';
  @Input() loadingTitle: string = 'Loading....';
  @Input() type?: string = '';
}

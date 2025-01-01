import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.scss',
})
export class TextfieldComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control: any = null;
  @Input() required: boolean = false;
  @Input() errorMessage: string = 'Invalid field';

  get inputId(): string {
    return this.label.toLowerCase().replace(/\s+/g, '-');
  }
}

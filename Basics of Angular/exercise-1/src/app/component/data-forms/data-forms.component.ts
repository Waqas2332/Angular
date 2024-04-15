import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-forms.component.html',
  styleUrl: './data-forms.component.css',
})
export class DataFormsComponent {
  @Output() btnClick = new EventEmitter();
  @Input() title: string = '';
  @Input() data: string[] = [];

  emitEvent(data: HTMLInputElement) {
    if (data.value.trim() == '') {
      alert('Please Enter a value');
      return;
    }
    this.btnClick.emit(data.value);
    data.value = '';
  }
}

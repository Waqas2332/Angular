import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css',
})
export class DataListComponent {
  @Input() title: string = '';
  @Input() users: string[] = [];

  deleteUsers(id: number) {
    this.users.splice(id, 1);
  }
}

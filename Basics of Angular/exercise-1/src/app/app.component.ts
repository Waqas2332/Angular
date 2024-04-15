import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataListComponent } from './component/data-list/data-list.component';
import { DataFormsComponent } from './component/data-forms/data-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataListComponent, DataFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title1: string = 'User';
  title2: string = 'Admin';

  user: string[] = ['Ali'];
  admin: string[] = ['Waqas'];

  addAdmin(data: string) {
    this.admin.push(data);
  }

  addUser(data: string) {
    this.user.push(data);
  }
}

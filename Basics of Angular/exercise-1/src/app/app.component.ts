import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataListComponent } from './component/data-list/data-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title1: string = 'User';
  title2: string = 'Admin';

  user: string[] = ['Ali'];
  admin: string[] = ['Waqas'];
}

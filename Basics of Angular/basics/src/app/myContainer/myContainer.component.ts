import { Component } from '@angular/core';
import { TopnavComponent } from './topnav/topnav.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-myContainer',
  standalone: true,
  imports: [TopnavComponent, HeaderComponent],
  templateUrl: './myContainer.component.html',
  styleUrls: ['./myContainer.component.css'],
})
export class MyContainerComponent {}

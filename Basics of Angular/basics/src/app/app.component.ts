import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyContainerComponent } from './myContainer/myContainer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
// @NgModule({
//   declarations: [AppComponent, MyContainerComponent],
// })
export class AppComponent {
  title = 'World';
}

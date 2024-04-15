import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent },
  { path: '/contact', component: ContactComponent },
  { path: '/faq', component: FaqComponent },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'routing';
}

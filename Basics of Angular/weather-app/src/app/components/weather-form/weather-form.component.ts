import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-form',
  standalone: true,
  imports: [],
  templateUrl: './weather-form.component.html',
  styleUrl: './weather-form.component.css',
})
export class WeatherFormComponent {
  getCity(city: HTMLInputElement) {
    console.log(city.value);

    city.value = '';
  }
}

import { Component } from '@angular/core';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weather-form',
  standalone: true,
  imports: [],
  templateUrl: './weather-form.component.html',
  styleUrl: './weather-form.component.css',
})
export class WeatherFormComponent {
  constructor(private weather: WeatherService) {}

  getCity(city: HTMLInputElement) {
    this.weather
      .getWeatherByCityName(city.value)
      .subscribe((data) => console.log(data));
    city.value = '';
  }
}

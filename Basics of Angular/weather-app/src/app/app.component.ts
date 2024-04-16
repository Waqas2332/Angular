import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherFormComponent } from './components/weather-form/weather-form.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherFormComponent, WeatherDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'weather-app';
  data: any = '';

  constructor(private weather: WeatherService) {}

  getWeatherData(city: string) {
    this.weather
      .getWeatherByCityName(city)
      .subscribe((data) => (this.data = data));
  }
}

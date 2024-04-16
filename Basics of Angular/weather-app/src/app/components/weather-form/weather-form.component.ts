import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-weather-form',
  standalone: true,
  imports: [],
  templateUrl: './weather-form.component.html',
  styleUrl: './weather-form.component.css',
})
export class WeatherFormComponent {
  @Output() getWeather = new EventEmitter<any>();

  constructor() {}

  getCity(city: HTMLInputElement) {
    this.getWeather.emit(city.value);
  }
}

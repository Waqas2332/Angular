import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  private API_KEY = '50985180938c33e24eba6b6ed2c1ed68';
  private BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  getWeatherByCityName(city: string): Observable<any> {
    const url = `${this.BASE_URL}?q=${city}&appid=${this.API_KEY}`;

    return this.http.get(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      alert('City Not Found');
    }
    return throwError('something went wrong');
  }
}

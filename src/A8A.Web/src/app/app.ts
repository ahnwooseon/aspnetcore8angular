import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherForecast } from '../types/weatherForecast';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title: string = 'weather';
  forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {
    http.get<WeatherForecast[]>('api/weatherforecast').subscribe({
      next: result => this.forecasts = result,
      error: console.error
    });
  }
}

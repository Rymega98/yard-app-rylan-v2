import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Yard Control — Training Build');
  sekectRole = '';
  selectRole(role: string){this.sekectRole = role}

  status: any = null;

  private http = inject(HttpClient);
  ngOnInit() {this.http.get('http://localhost:5153/WeatherForecast').subscribe({
    next: (data) => {this.status = data;},
    error: (err) => console.error('API Error:', err)
  });}
}



import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { error } from 'console';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private router: Router) {}
selectRole(role: string): void {
localStorage.setItem('role', role);
if (role === 'Security') {
this.router.navigate(['/gate']);
} else if (role === 'Dock') {
this.router.navigate(['/dock']);}
else if (role === 'Board') {
this.router.navigate(['/board']);}}

  protected readonly title = signal('Yard Control — Training Build');
  

  status: any = null;

  private http = inject(HttpClient);
  ngOnInit() {this.http.get('http://localhost:5153/WeatherForecast').subscribe({
    next: (data) => {this.status = data;},
    error: (err) => console.error('API Error:', err)
  });}
}



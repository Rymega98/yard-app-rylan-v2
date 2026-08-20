import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrailerService } from '../yard.service';
@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignInComponent {
  
  constructor(private router: Router,private trailerService: TrailerService) {}

  ngOnInit(): void {
this.trailerService.setLastPage('signin');}
selectRole(role: string): void {
localStorage.setItem('role', role);
if (role === 'Security') {
this.router.navigate(['/gate']);
} else if (role === 'Dock') {
this.router.navigate(['/dock']);}
else if (role === 'Board') {
this.router.navigate(['/board']);}}



}
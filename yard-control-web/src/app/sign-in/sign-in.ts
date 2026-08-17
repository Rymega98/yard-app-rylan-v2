import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignInComponent {
  constructor(private router: Router) {}
selectRole(role: string): void {
if (role === 'Security') {
this.router.navigate(['/gate']);}
if (role === 'Dock') {
this.router.navigate(['/dock']);}}
}
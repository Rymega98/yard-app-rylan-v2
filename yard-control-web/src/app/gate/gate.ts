import { Component, signal } from '@angular/core';
import { TrailerService } from '../yard.service';
import { AssetStatus, Trailer } from '../models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gate.html',
  styleUrl: './gate.scss',
})

export class GateComponent {


  gateMode: 'Inbound' | 'Outbound' = 'Inbound';
  searchText = '';
  Trailers: Trailer[] = [];
  selectedTrailer: Trailer[] = [];
  successMessage = '';
  

constructor(private router: Router,private trailerService: TrailerService) {}
ngOnInit(): void {
this.selectedTrailer = this.trailerService.getSelectedTrailer();
this.trailerService.setLastPage('gate');
this.trailerService.getTrailers().subscribe(data => {
this.Trailers = data;});}


canProcessTrailer(): boolean {
if (this.selectedTrailer.length === 0) 
  {return false;}

return this.selectedTrailer.every(trailer =>trailer.checklist?.every(item => {
  if (
  item.label === 'Exterior' ||
  item.label === 'Cargo') {return true;}
  if (item.result === 'unset') {return false;}
  if (item.result === 'fail' && (!item.note || !item.note.trim())) {return false;}
  return true;}) ?? false);}

processTrailer(): void {if (this.selectedTrailer.length === 0) {return;}
this.selectedTrailer.forEach(trailer => {
let newStatus: AssetStatus;
if (this.gateMode === 'Inbound') {newStatus =trailer.status === 'arriving'
? 'loading'
: 'arriving';
} else {newStatus = 'departed';}
this.trailerService
.updateTrailer(trailer.id, { status: newStatus })
.subscribe(updated => {
const index = this.selectedTrailer.findIndex(
t => t.id === updated.id);
if (index !== -1) {
this.selectedTrailer[index] = updated;}});});
this.successMessage =`${this.selectedTrailer.length} trailer(s) updated successfully`;}


confirmAction(): void {
const action =
this.gateMode === 'Inbound'
? 'Gate In'
: 'Release';
const confirmed = confirm(
`Are you sure you want to ${action} this trailer?`
);
if (confirmed) {
this.processTrailer();}}

get filteredTrailers() {
return this.Trailers.filter(trailer => {
const matchesSearch =
trailer.trailerNumber
.toLowerCase()
.includes(this.searchText.toLowerCase());

const matchesMode =
this.gateMode === 'Inbound'
? trailer.status === 'arriving'
: trailer.status === 'departed';
return matchesSearch && matchesMode;
});
  }
selectRole(role: string): void {
localStorage.setItem('role', role);
if  (role === 'Board') {
this.router.navigate(['/board']);}}
}

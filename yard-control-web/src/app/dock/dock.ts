import { Component } from '@angular/core';
import { TrailerService, MockList } from '../yard.service';
import { AssetStatus, Trailer } from '../models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dock',
  imports: [CommonModule,FormsModule],
  templateUrl: './dock.html',
  styleUrl: './dock.scss',
})
export class DockComponent {
  gateMode: 'Inbound' | 'Outbound' = 'Inbound';
  searchText = '';
  Trailers = MockList;
  selectedTrailer: Trailer[] = [];
  successMessage = '';


  GroupB = ['Seal Intact','Trailer number matches','No visible damage'];
  GroupA = ['Exterior','Cargo','Doors secure'];
  
  
  constructor(private trailerService: TrailerService) {}
  ngOnInit(): void {
  this.selectedTrailer =
  this.trailerService.getSelectedTrailer();}
  
  
  canMarkReady(): boolean {
  if (this.selectedTrailer.length === 0) 
    {return false;}
  
  return this.selectedTrailer.every(trailer =>trailer.checklist?.every(item => item.result !== 'unset') ?? false);}
  
  markAllPass(): void {
    this.selectedTrailer.forEach(trailer => {
      trailer.checklist?.forEach(item => {
        item.result = 'pass';
        item.note = '';
      });
    });
}   


  processTrailerReady(): void {if (!confirm('Mark all selected trailers as Ready for Security?')) {return;}
  this.selectedTrailer.forEach(trailer => {this.trailerService.updateTrailer(trailer.id,{ status: 'ready' })
  .subscribe(updated => {const index = this.selectedTrailer.findIndex(t => t.id === updated.id);
  if (index !== -1) {this.selectedTrailer[index] = updated;}});});
  this.successMessage =`${this.selectedTrailer.length} trailer(s) marked Ready for Security`;}
  
  
  
  
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
  


  }}



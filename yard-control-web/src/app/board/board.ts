import { Component } from '@angular/core';
import {MockList, TrailerService} from '../yard.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Trailer } from '../models';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})



export class BoardComponent {
  searchText = '';
  statusFilter = 'All';

  Trailers: Trailer[] = [];




  constructor(
  private trailerService: TrailerService,
  private router: Router
  ) {}
  
  selectTrailer(trailer: Trailer): void {this.trailerService.toggleSelectedTrailer(trailer);}

  ngOnInit(): void {
this.trailerService.getTrailers().subscribe(
trailers => {this.Trailers = trailers;});}

  
  get filteredTrailers() {return this.Trailers.filter(trailer =>{

  const matchesSearch =
  trailer.trailerNumber
    ?.toString()
    .toLowerCase()
    .includes(this.searchText.toLowerCase()) ?? false;

  const matchesStatus =
    this.statusFilter === 'All' || trailer.status.toLowerCase() === this.statusFilter.toLowerCase();
  return matchesSearch && matchesStatus;});
  }}

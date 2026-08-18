import { Component } from '@angular/core';
import {MockList} from '../yard.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-board',
  imports: [CommonModule, FormsModule],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})

export class BoardComponent {
  searchText = '';
  statusFilter = 'All';

  Trailers = MockList


  get filteredTrailers() {return this.Trailers.filter(trailer =>{

  const matchesSearch =
  trailer.trailerNumber
  .toLowerCase()
  .includes(this.searchText.toLowerCase());

  const matchesStatus =
  this.statusFilter === 'All' ||
  trailer.status === this.statusFilter;
  return matchesSearch && matchesStatus;});
  }}

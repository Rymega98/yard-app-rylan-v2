import { Component } from '@angular/core';
import { TrailerService } from '../yard.service';
import { Trailer } from '../models';
@Component({
  selector: 'app-gate',
  imports: [],
  templateUrl: './gate.html',
  styleUrl: './gate.scss',
})
export class GateComponent {
  selectedTrailer: Trailer | null = null;
constructor(private trailerService: TrailerService) {}
ngOnInit(): void {
this.selectedTrailer =
this.trailerService.getSelectedTrailer();}

}

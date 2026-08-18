import { Injectable } from '@angular/core';
import { Trailer, Role, AssetStatus, CheckResult, ChecklistItem } from './models';
import { signal, Component } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';




export const MockList: Trailer[] =[
    {id: "53154",trailerNumber: "VT-53154",  status: 'ready', spot: "S-140", updatedAt: "8/17/2026",checklist: [
    { key: "seal", label: "Seal Intact", result: "unset" },
    { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
    { key: "No visible damage", label: "No visible damage", result: "unset" },
    { key: "doors secure", label: "Doors secure", result: "unset" },] },

    {id: "94032",trailerNumber: "VT-94032",  status: 'arriving', spot: "S-134", updatedAt: "8/15/2026",checklist: [
    { key: "seal", label: "Seal Intact", result: "unset" },
    { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
    { key: "No visible damage", label: "No visible damage", result: "unset" },
    { key: "doors secure", label: "Doors secure", result: "unset" },] },

    {id: "71347",trailerNumber: "VT-71347",  status: 'loading', spot: "S-654", updatedAt: "8/16/2026",checklist: [
    { key: "seal", label: "Seal Intact", result: "unset" },
    { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
    { key: "No visible damage", label: "No visible damage", result: "unset" },
    { key: "doors secure", label: "Doors secure", result: "unset" },] },

    {id: "13425",trailerNumber: "VT-13425",  status: 'ready', spot: "S-184", updatedAt: "8/17/2026",checklist: [
    { key: "seal", label: "Seal Intact", result: "unset" },
    { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
    { key: "No visible damage", label: "No visible damage", result: "unset" },
    { key: "doors secure", label: "Doors secure", result: "unset" },] },

    {id: "82363",trailerNumber: "VT-82363",  status: 'arriving', spot: "S-442", updatedAt: "8/15/2026",checklist: [
    { key: "seal", label: "Seal Intact", result: "unset" },
    { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
    { key: "No visible damage", label: "No visible damage", result: "unset" },
    { key: "doors secure", label: "Doors secure", result: "unset" },] },

    {id: "24145",trailerNumber: "VT-24145",  status: 'loading', spot: "S-654", updatedAt: "8/16/2026",checklist: [
    { key: "seal", label: "Seal Intact", result: "unset" },
    { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
    { key: "No visible damage", label: "No visible damage", result: "unset" },
    { key: "doors secure", label: "Doors secure", result: "unset" },] },

    {id: "65109",trailerNumber: "VT-65109",  status: 'departed', spot: "S-983", updatedAt: "8/18/2026",checklist: [
    { key: "seal", label: "Seal Intact", result: "unset" },
    { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
    { key: "No visible damage", label: "No visible damage", result: "unset" },
    { key: "doors secure", label: "Doors secure", result: "unset" },] },

    {id: "38452",trailerNumber: "VT-38452",  status: 'departed', spot: "S-753", updatedAt: "8/18/2026",checklist: [
    { key: "seal", label: "Seal Intact", result: "unset" },
    { key: "Trailer number matches", label: "Trailer number matches", result: "unset" },
    { key: "No visible damage", label: "No visible damage", result: "unset" },
    { key: "doors secure", label: "Doors secure", result: "unset" },] }

]
signal<Trailer[]>(MockList);



 
@Injectable({ providedIn: 'root' })
export class TrailerService {
  // in-memory working copy so create/update/delete feel real across a session
  private trailers: Trailer[] = [...MockList];

  private selectedTrailer: Trailer[] = [];

  setSelectedTrailer(trailer: Trailer): void {
    this.selectedTrailer.push(trailer);}
    getSelectedTrailer(): Trailer[] {
    return this.selectedTrailer;}
 
  /** GET /trailers */
  getTrailers(): Observable<Trailer[]> {
    return of([...this.trailers]).pipe(delay(300));
  }
 
  /** GET /trailers/:id */
  getTrailerById(id: string): Observable<Trailer | undefined> {
    const found = this.trailers.find(t => t.id === id);
    return of(found).pipe(delay(200));
  }
 
  /** GET /trailers?spot=S-14 (example filter) */
  getTrailersBySpot(spot: string): Observable<Trailer[]> {
    return of(this.trailers.filter(t => t.spot === spot)).pipe(delay(200));
  }
 
  /** PATCH /trailers/:id — e.g. yard check-in/check-out updates Status + spot */
  updateTrailer(id: string, changes: Partial<Trailer>): Observable<Trailer> {
    const index = this.trailers.findIndex(t => t.id === id);
    if (index === -1) {
      return throwError(() => new Error(`Trailer ${id} not found`));
    }
    const updated: Trailer = {
      ...this.trailers[index],
      ...changes,
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    this.trailers[index] = updated;
    return of(updated).pipe(delay(200));
  }
 
  /** POST /trailers */
  addTrailer(trailer: Trailer): Observable<Trailer> {
    this.trailers = [...this.trailers, trailer];
    return of(trailer).pipe(delay(200));
  }
 
  /** DELETE /trailers/:id */
  deleteTrailer(id: string): Observable<boolean> {
    const existed = this.trailers.some(t => t.id === id);
    this.trailers = this.trailers.filter(t => t.id !== id);
    return of(existed).pipe(delay(200));
  }
}

import { Injectable } from '@angular/core';
import { Trailer, Role, AssetStatus, CheckResult, ChecklistItem } from './models';
import { signal, Component } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


 
@Injectable({ providedIn: 'root' })  
export class TrailerService {
  
  
  private apiUrl = "http://localhost:5153/YardAPI";
  
  constructor(private http: HttpClient) {}
    getTrailers(): Observable<Trailer[]> {
      return this.http.get<Trailer[]>(this.apiUrl);}
       trailers =signal<Trailer[]>([]);
    
    


  
  // in-memory working copy so create/update/delete feel real across a session
  private trailerCache: Trailer[] = [];
  private lastPage: 'signin' | 'board' | 'gate' | 'dock' | null = null;
  private selectedTrailer: Trailer[] = [];

  setLastPage(page: 'signin' | 'board' | 'gate' | 'dock'): void {this.lastPage = page;}
  getLastPage(): 'signin' | 'board' | 'gate' | 'dock' | null {return this.lastPage;}

  toggleSelectedTrailer(trailer: Trailer): void {
    const index = this.selectedTrailer.findIndex(
    t => t.id === trailer.id);
    if (index === -1) {this.selectedTrailer.push(trailer);}
    else {this.selectedTrailer.splice(index, 1);}}
    getSelectedTrailer(): Trailer[] {return this.selectedTrailer;}
 
  /** GET /trailers */
  loadTrailers(): void {
this.getTrailers().subscribe(data => {
this.trailerCache = data;
this.trailers.set(data);
});}
  

  getCurrentTrailers(): Trailer[] {return [...this.trailerCache];}
 
  /** GET /trailers/:id */
  getTrailerById(id: string): Observable<Trailer | undefined> {
    const found = this.trailerCache.find(t => t.id === id);
    return of(found).pipe(delay(200));
  }
 
  /** GET /trailers?spot=S-14 (example filter) */
  getTrailersBySpot(spot: string): Observable<Trailer[]> {
    return of(this.trailerCache.filter(t => t.spot === spot)).pipe(delay(200));
  }
 
  /** PATCH /trailers/:id — e.g. yard check-in/check-out updates Status + spot */
  updateTrailer(id: string, changes: Partial<Trailer>): Observable<Trailer> {
    const index = this.trailerCache.findIndex(t => t.id === id);
    if (index === -1) {
      return throwError(() => new Error(`Trailer ${id} not found`));
    }
    const updated: Trailer = {
      ...this.trailerCache[index],
      ...changes,
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    this.trailerCache[index] = updated;
    return of(updated).pipe(delay(200));
  }
 
  /** POST /trailers */
  addTrailer(trailer: Trailer): Observable<Trailer> {
    this.trailerCache = [...this.trailerCache, trailer];
    return of(trailer).pipe(delay(200));
  }
 
  /** DELETE /trailers/:id */
  deleteTrailer(id: string): Observable<boolean> {
    const existed = this.trailerCache.some(t => t.id === id);
    this.trailerCache = this.trailerCache.filter(t => t.id !== id);
    return of(existed).pipe(delay(200));
  }
}

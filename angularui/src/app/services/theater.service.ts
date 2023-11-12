// theater.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theatre } from '../models/theatre.model';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {
  private apiBaseUrl = 'https://localhost:44348/api/theaters'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  getTheatersForMovie(movieId: number): Observable<Theatre[]> {
    const url = `${this.apiBaseUrl}/ByMovie/${movieId}`;
    return this.http.get<Theatre[]>(url);
  
  }
}

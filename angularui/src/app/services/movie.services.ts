// movie.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiBaseUrl = 'https://localhost:44348/api/movies'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiBaseUrl);
  }
}

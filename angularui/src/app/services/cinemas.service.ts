// cinemas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CinemasService {
  private apiUrl = 'https://localhost:44348/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getMoviesByCityAndLanguage(city: string, language: string): Observable<any[]> {
    const params = new HttpParams()
      .set('city', city)
      .set('language', language);

    return this.http.get<any[]>(`${this.apiUrl}/Cinemas`, { params });
  }
}

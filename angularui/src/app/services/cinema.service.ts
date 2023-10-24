import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  private baseUrl = 'https://localhost:44348/api/cinemas';

  constructor(private http: HttpClient) {}

  // This method gets all cinemas
  getAllCinemas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/cinemas`);
  }

  // This method gets cinemas by city
  getCinemasByCity(city: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/cinemas?city=${city}`);
  }
}

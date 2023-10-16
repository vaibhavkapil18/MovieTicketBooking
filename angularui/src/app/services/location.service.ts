import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl = 'https://localhost:44348/api/Location'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getLocations() {
    return this.http.get<string[]>(this.apiUrl);
  }
}

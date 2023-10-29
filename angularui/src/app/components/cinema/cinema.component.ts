// cinema.component.ts
import { Component, OnInit } from '@angular/core';
import { CinemasService } from 'src/app/services/cinemas.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  cinemas: Movie[] = [];
  cities: string[] = ['Hyderabad', 'Bangalore', 'Chennai'];
  languages: string[] = ['Telugu', 'Hindi', 'English'];
  selectedCity: string = 'Hyderabad';
  selectedLanguage: string = 'Telugu';

  constructor(private cinemasService: CinemasService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.cinemasService.getMoviesByCityAndLanguage(this.selectedCity, this.selectedLanguage).subscribe(
      (data) => {
        this.cinemas = data;
      },
      (error) => {
        console.error('Error fetching movie data:', error);
      }
    );
  }

  onCitySelect(city: string) {
    this.selectedCity = city;
    this.loadMovies();
  }

  onLanguageSelect(language: string) {
    this.selectedLanguage = language;
    this.loadMovies();
  }
}

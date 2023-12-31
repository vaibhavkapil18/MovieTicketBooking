import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  movies: any[] = [];
  filteredMovies: any[] = [];
  selectedLanguage: string = ''; // Initialize with an empty string
  selectedLocation: string = 'All';

  constructor(private movieService: MovieService,private router:Router) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any[]) => {
      this.movies = data;
      this.filteredMovies = data;
    });
  }

  filterMoviesByLanguage() {
    if (this.selectedLanguage === 'All') {
      this.filteredMovies = this.movies; // Show all movies when no language is selected
    } else {
      this.filteredMovies = this.movies.filter((movie) => movie.language === this.selectedLanguage);
    }
  }

  filterMoviesByLocation() {
    if (this.selectedLocation === 'All') {
      this.filteredMovies = this.movies;
    } else {
      this.filteredMovies = this.movies.filter((movie) => movie.location === this.selectedLocation);
    }
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.filterMoviesByLanguage();
  }
  // Add this method to your component class
bookTickets(movieId: number) {
  this.router.navigate(['/theaters', movieId]);
}

}

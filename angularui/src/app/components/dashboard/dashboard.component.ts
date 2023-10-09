// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any[]) => {
      this.movies = data;
    });
  }
}

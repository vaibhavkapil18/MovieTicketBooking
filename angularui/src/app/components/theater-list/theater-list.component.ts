// theater-list.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.services';
import { Theatre } from 'src/app/models/theatre.model';
import { TheaterService } from 'src/app/services/theater.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.css']
})
export class TheaterListComponent implements OnInit {
  @Input() selectedMovieId: number=0;
  theaters: Theatre[] = [];

 constructor(private movieService: MovieService, private theaterService: TheaterService, private router:Router){}

  ngOnInit(): void {
    if (this.selectedMovieId) {
      this.fetchTheatersForMovie(this.selectedMovieId);
    }
  }

  fetchTheatersForMovie(movieId: number) {
    this.theaterService.getTheatersForMovie(movieId).subscribe((theaters: Theatre[]) => {
      this.theaters = theaters;
    });
  }
}

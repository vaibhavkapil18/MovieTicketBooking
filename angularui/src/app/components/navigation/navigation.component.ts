// navigation.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logout(): void {
    // Implement logout logic here, e.g., clear user session, local storage, etc.
  }

  searchMovies():void{

  }
}

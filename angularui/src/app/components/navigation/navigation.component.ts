import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module to navigate to another page

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {} // Inject the Router module
  showLocationSelector = false; // Initialize as hidden

  toggleLocationSelector() {
    this.showLocationSelector = !this.showLocationSelector;
  }

  ngOnInit(): void {}

  logout(): void {
    // Implement logout logic here, e.g., clear user session, local storage, etc.
    // For demonstration purposes, we'll navigate to the login page after logging out.
    
    // Clear user session or local storage if needed
  localStorage.removeItem('userToken');

    // Redirect to the login page after logout
    this.router.navigate(['/login']); // Change '/login' to the actual login route
  }

  searchMovies(): void {
    // Implement your movie search logic here
  }
}

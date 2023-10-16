import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.css'],
})
export class LocationSelectorComponent implements OnInit {
  locations: string[] = [];
  selectedLocation: string | null = null;  // Provide an initial value

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getLocations().subscribe((data: string[]) => {
      this.locations = data;
    });
  }
  selectLocation(location: string) {
    // Handle the city selection here
    this.selectedLocation = location;
    // You can add further actions related to city selection, like navigating to the next page, etc.
  }
  
}

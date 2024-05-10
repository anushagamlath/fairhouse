import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HousingListComponent } from './housing-list/housing-list.component';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-root',
  imports:[HousingListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';

  housingLocationList: HousingLocation[] = [
    {
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "A113 Transitional Housing",
      city: "Santa Monica",
      state: "CA",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Warm Beds Housing Support",
      city: "Juneau",
      state: "AK",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];

  selectedLocation: HousingLocation | undefined;// = this.housingLocationList[0];

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
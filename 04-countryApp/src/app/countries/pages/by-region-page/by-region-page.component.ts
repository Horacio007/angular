import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public countries:Country[] = [];

  constructor(private countriesService:CountriesService) {

  }

  searchByRegion(region:string):void {
    console.log('desde by region page ');
    console.log({region});
    this.countriesService.searchRegion(region).subscribe(response => {
      this.countries = response;
    });
  }
}

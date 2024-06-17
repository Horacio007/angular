import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'| 'Americas'| 'Asia'| 'Europe'| 'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public countries:Country[] = [];
  public isLoading:boolean = false;
  public regions:Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?:Region;

  constructor(private countriesService:CountriesService) {

  }

  searchByRegion(region:Region):void {
    this.selectedRegion = region;
    this.isLoading = true;
    console.log('desde by region page ');
    console.log({region});
    this.countriesService.searchRegion(region).subscribe(response => {
      this.countries = response;
      this.isLoading = false;
    });
  }
}

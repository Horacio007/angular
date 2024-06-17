import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public countries:Country[] = [];
  public isLoading:boolean = false;

  constructor(private countriesService:CountriesService) {

  }

  searchByCountry(term:string):void {
    this.isLoading = true;
    console.log('desde by country page ');
    console.log({term});
    this.countriesService.searchCountry(term).subscribe(response => {
      this.countries = response;
      this.isLoading = false;
    });
  }
}

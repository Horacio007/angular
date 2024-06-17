import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {

  public countries:Country[] = [];
  public isLoading:boolean = false;
  public initialValue:string = '';

  constructor(private countriesService:CountriesService) {

  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
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

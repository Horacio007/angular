import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries:Country[] = [];

  constructor(private countriesService:CountriesService) {

  }

  searchByCapital(term:string):void {
    console.log('desde by capital page ');
    console.log({term});
    this.countriesService.searchCapital(term).subscribe(response => {
      this.countries = response;
    });
  }

}
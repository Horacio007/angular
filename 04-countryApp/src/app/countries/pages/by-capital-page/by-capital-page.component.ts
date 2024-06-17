import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {

  public countries:Country[] = [];
  public isLoading:boolean = false;
  public initialValue:string = '';

  constructor(private countriesService:CountriesService) {

  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term:string):void {
    this.isLoading = true;
    console.log('desde by capital page ');
    console.log({term});
    this.countriesService.searchCapital(term).subscribe(response => {
      this.countries = response;
      this.isLoading = false;
    });
  }

}

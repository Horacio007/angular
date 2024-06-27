import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interfacess';
import { RegionCountries } from '../../../../../04-countryApp/src/app/countries/interfaces/cache-store.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _regions:Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];

  constructor() { }

  get regions():Region[] {
    return [...this._regions];
  }

  getCountriesByRegion(region:Region):SmallCountr[[] {
    return ;
    RegionCountries

}

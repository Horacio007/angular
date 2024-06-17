import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap, map, catchError, of, delay } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL:string="https://restcountries.com/v3.1";

  public cacheStore:CacheStore = {
    byCapital: { term:'', countries: [] },
    byCountries: { term:'', countries: [] },
    byRegion: { term:'', countries: [] }
  }

  constructor(private http:HttpClient) { }

  private getCountryRequest(url:string):Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => {
          console.log(error);

          return of([]);
        }),
       // delay(2000)
      );
  }

  searchCountryByAlphaCode(code:string):Observable<Country | null> {
    const url:string = `${this.apiURL}/alpha/${code}`;
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(error => {
        console.log(error);

        return of(null)
      })
    //   tap(response => console.log('Paso por el tap 1', response)),
    //   map(response => []),
    //   tap(response => console.log('Paso por el tap 2', response))
    );
  }

  searchCapital(term:string):Observable<Country[]> {
    const url:string = `${this.apiURL}/capital/${term}`;
    return this.getCountryRequest(url).pipe(
      tap( countries => this.cacheStore.byCapital = {term, countries})
    );
    //   tap(response => console.log('Paso por el tap 1', response)),
    //   map(response => []),
    //   tap(response => console.log('Paso por el tap 2', response))
  }

  searchCountry(term:string):Observable<Country[]> {
    const url:string = `${this.apiURL}/name/${term}`;
    return this.getCountryRequest(url).pipe(
      tap( countries => this.cacheStore.byCountries = {term, countries})
    );
    //   tap(response => console.log('Paso por el tap 1', response)),
    //   map(response => []),
    //   tap(response => console.log('Paso por el tap 2', response))
  }

  searchRegion(region:Region):Observable<Country[]> {
    const url:string = `${this.apiURL}/region/${region}`;
    return this.getCountryRequest(url).pipe(
      tap( countries => this.cacheStore.byRegion = {term:region, countries})
    );
    //   tap(response => console.log('Paso por el tap 1', response)),
    //   map(response => []),
    //   tap(response => console.log('Paso por el tap 2', response))
  }

}

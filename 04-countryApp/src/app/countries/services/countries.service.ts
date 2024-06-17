import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL:string="https://restcountries.com/v3.1";

  constructor(private http:HttpClient) { }

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
    return this.http.get<Country[]>(url).pipe(
      catchError(error => {
        console.log(error);

        return of([]);
      })
    //   tap(response => console.log('Paso por el tap 1', response)),
    //   map(response => []),
    //   tap(response => console.log('Paso por el tap 2', response))
    );
  }

  searchCountry(term:string):Observable<Country[]> {
    const url:string = `${this.apiURL}/name/${term}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(error => {
        console.log(error);

        return of([]);
      })
    //   tap(response => console.log('Paso por el tap 1', response)),
    //   map(response => []),
    //   tap(response => console.log('Paso por el tap 2', response))
    );
  }

  searchRegion(region:string):Observable<Country[]> {
    const url:string = `${this.apiURL}/region/${region}`;
    return this.http.get<Country[]>(url).pipe(
      catchError(error => {
        console.log(error);

        return of([]);
      })
    //   tap(response => console.log('Paso por el tap 1', response)),
    //   map(response => []),
    //   tap(response => console.log('Paso por el tap 2', response))
    );
  }

}

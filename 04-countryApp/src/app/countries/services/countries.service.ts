import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL:string="https://restcountries.com/v3.1";

  constructor(private http:HttpClient) { }

  searchCapital(term:string):Observable<Country[]> {
    const url:string = `${this.apiURL}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }

}

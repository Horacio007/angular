import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfacess';
import { count, filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrl: './selector-page.component.css'
})
export class SelectorPageComponent implements OnInit {

  public myForm:FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    borders: ['', [Validators.required]]
  });

  public countriesByRegion:SmallCountry[] = [];
  public borders:SmallCountry[] = [];

  constructor(private fb:FormBuilder, private countriesService:CountriesService) { }

  ngOnInit(): void {
   this.onRegionChanges();
   this.onCountryChanges();
  }

  get regions():Region[] {
    return this.countriesService.regions;
  }

  onRegionChanges():void {
    this.myForm.get('region')!.valueChanges.pipe(
      tap(() => this.myForm.get('country')!.setValue('')),
      tap(() => this.countriesByRegion=[]),
      tap(() => this.borders=[]),
      switchMap(region => this.countriesService.getCountriesByRegion(region))
    ).subscribe( countries => {
      this.countriesByRegion = countries;
    })
  }

  onCountryChanges():void {
    this.myForm.get('country')!.valueChanges.pipe(
      tap(() => this.myForm.get('borders')!.setValue('')),
      filter( (value:string) => value.length > 0),
      switchMap( (alphaCode) => this.countriesService.getCountryByAlphaCode(alphaCode)),
      switchMap( (country) => this.countriesService.getCountryBordersByCode(country.borders!)),
    ).subscribe( countries => {
      this.borders = countries;
    })
  }

}

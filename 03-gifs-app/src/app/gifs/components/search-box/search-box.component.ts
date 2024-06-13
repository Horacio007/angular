import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box¿',
  template: `
    <h5>Buscar</h5>
    <!-- <input type="text" class="form-control" placeholder="Buscar gifs..." (keyup.enter)="searchTag(txtTagInput.value)" #txtTagInput> -->
    <input type="text" class="form-control" placeholder="Buscar gifs..." (keyup.enter)="searchTag()" #txtTagInput>
  `
})

export class SearchBoxComponent  {

  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsServices:GifsService) { }

  // searchTag(newTag:string):void {
  searchTag():void {
    const newTag:string = this.tagInput.nativeElement.value;
    this.gifsServices.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
    console.log(newTag);
  }
}

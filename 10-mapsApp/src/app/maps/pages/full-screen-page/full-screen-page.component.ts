import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?:ElementRef;

  ngAfterViewInit(): void {


    if(!this.divMap) throw 'Elemento HTML no encontrado.';

    console.log(this.divMap, 'entre');
    const map = new Map({
      //accessToken: mapboxgl.accessToken = 'pk.eyJ1IjoiaG9yYWNpby1nb25nb3JhIiwiYSI6ImNseTM1dTQ0OTA0YW4yanEyNXRjamZobmYifQ.5vWnRAKbUBU4_F0fWwWEZw',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    console.log(this.divMap.nativeElement);
  }

}

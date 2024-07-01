import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'maps-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit {

  @ViewChild('map') divMap?:ElementRef;
  public zoom:number = 10;
  public map?:Map;

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'Elemento HTML no encontrado.';

    console.log(this.divMap, 'entre');
    this.map = new Map({
      //accessToken: mapboxgl.accessToken = 'pk.eyJ1IjoiaG9yYWNpby1nb25nb3JhIiwiYSI6ImNseTM1dTQ0OTA0YW4yanEyNXRjamZobmYifQ.5vWnRAKbUBU4_F0fWwWEZw',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    console.log(this.divMap.nativeElement);
    this.mapListeners();
  }

  mapListeners():void {
    if(!this.map) throw 'Mapa no inicializado.';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    })

    this.map.on('zoomend', (ev) => {
      if(this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    })
  }

  zoomIn():void {
   this.map?.zoomIn();
  }

  zoomOut():void {
    this.map?.zoomOut();
  }

  zoomChanged(value:string):void {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }

}

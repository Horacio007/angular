import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color:string;
  marker:Marker;
}

interface PlainMarker {
  color:string;
  lngLat:number[];
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?:ElementRef;
  public zoom:number = 13;
  public map?:Map;
  public currentLngLat:LngLat = new LngLat(-100.97836841720232, 25.46118372695294);
  public markers:MarkerAndColor[] = [];

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'Elemento HTML no encontrado.';

    console.log(this.divMap, 'entre');
    this.map = new Map({
      //accessToken: mapboxgl.accessToken = 'pk.eyJ1IjoiaG9yYWNpby1nb25nb3JhIiwiYSI6ImNseTM1dTQ0OTA0YW4yanEyNXRjamZobmYifQ.5vWnRAKbUBU4_F0fWwWEZw',
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.readFromLocalStorage();

    // const markerHTML = document.createElement('div');
    // markerHTML.innerHTML = '<img src="./assets/icons/logoWeb.150x150.png" style="width: 25px;height: 25px;" />'

    // const marker = new Marker({
    //   element: markerHTML
    //   // color: 'red'
    // }
    // ).setLngLat(this.currentLngLat).addTo(this.map);
  }

  createMarker():void {
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  addMarker(lngLat:LngLat, color:string):void {
    if(!this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true
    }).setLngLat(lngLat)
    .addTo(this.map);

    this.markers.push({
      color: color,
      marker:marker
    });

    this.saveToLocalStorage();
    marker.on('dragend', () => {
      this.saveToLocalStorage()
    });
  }

  deleteMarker(idx:number):void {
    console.log('entre al dblclick');
    this.markers[idx].marker.remove();
    this.markers.splice(idx,1);
  }

  flyTo(marker:Marker):void {
    this.map?.flyTo({
      zoom:14,
      center: marker.getLngLat()
    });
  }

  saveToLocalStorage():void {
    const plainMarkers:PlainMarker[] = this.markers.map( ({color, marker}) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage():void {
    const plainMarkersString:string = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers:PlainMarker[] = JSON.parse(plainMarkersString);//! OJO!

    plainMarkers.forEach( ({color, lngLat}) => {
      const [lng, lat] = lngLat;
      const coords:LngLat = new LngLat(lng,lat);
      this.addMarker(coords, color)
    })
  }

}

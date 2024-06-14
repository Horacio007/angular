import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!:string;

  @Input()
  public alternativeText!:string;

  public hasLoaded:boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL is required.');
  }

  onLoad():void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
    // console.log('Image loaded');
  }

}

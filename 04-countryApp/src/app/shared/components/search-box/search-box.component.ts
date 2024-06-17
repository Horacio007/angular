import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit{

  private debouncer:Subject<string> = new Subject<string>();

  @Input()
  public placeHolder:string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public onDebounce:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(500)
    ).subscribe( r => {
      this.onDebounce.emit(r);
      console.log('deboiuncer value',r)
    })
  }

  searchElement(txt:string):void {
    this.onValue.emit(txt);
  }

  onKeyPress(searchTerm:string) {
    this.debouncer.next(searchTerm);
    // console.log(searchTerm);
  }

}

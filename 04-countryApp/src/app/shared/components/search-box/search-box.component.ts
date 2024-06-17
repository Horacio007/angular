import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { Region } from '../../../countries/interfaces/region.type';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer:Subject<string> = new Subject<string>();
  private debouncerSubscription?:Subscription;

  @Input()
  public placeHolder:string = '';

  @Input()
  public initialValue:string|Region = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public onDebounce:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer.pipe(
      debounceTime(500)
    ).subscribe( r => {
      this.onDebounce.emit(r);
      console.log('deboiuncer value',r)
    })
  }

  ngOnDestroy(): void {
    console.log('destruido');
    this.debouncerSubscription?.unsubscribe();
  }

  searchElement(txt:string):void {
    this.onValue.emit(txt);
  }

  onKeyPress(searchTerm:string) {
    this.debouncer.next(searchTerm);
    // console.log(searchTerm);
  }

}

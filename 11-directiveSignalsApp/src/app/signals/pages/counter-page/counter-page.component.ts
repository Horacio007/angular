import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  public counter = signal<number>(10);
  public squareCounter = computed( () => this.counter() * this.counter() );

  increaseBy(value:number):void {
    //this.counter.set(this.counter() + value);
    this.counter.update(currente => currente+value);
  }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective {

  constructor(private el:ElementRef<HTMLElement>) {
    console.log(el);
  }

}

import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [
    MenuModule,
    ButtonModule
  ]
})
export class PrimeNGModule { }

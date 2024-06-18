import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  exports: [
    AvatarModule,
    BadgeModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    RippleModule,
    SelectButtonModule
  ]
})
export class PrimeNGModule { }

import { Component, OnInit } from '@angular/core';

import { PrimeIcons, MenuItem, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] | undefined = [];

  constructor() {}

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: PrimeIcons.DESKTOP,
        items: [
          {
            label: 'Textos y Fechas',
            icon: PrimeIcons.ALIGN_LEFT
          },
          {
            label: 'Números',
            icon: PrimeIcons.DOLLAR
          },
          {
            label: 'No comunes',
            icon: PrimeIcons.GLOBE
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: PrimeIcons.COG,
        items: [
          {
            label: 'Otro elemento',
            icon: PrimeIcons.COG
          }
        ]
      }
    ];
  }

}

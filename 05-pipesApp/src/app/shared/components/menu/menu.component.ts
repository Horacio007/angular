import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrimeIcons, MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] | undefined = [];

  constructor(
    private router:Router
  ) {}

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: PrimeIcons.DESKTOP,
        items: [
          {
            label: 'Textos y Fechas',
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: PrimeIcons.GLOBE,
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: PrimeIcons.COG,
        items: [
          {
            label: 'Custom Pipes',
            icon: PrimeIcons.COG,
            routerLink: 'custom'
          }
        ]
      }
    ];
  }

}

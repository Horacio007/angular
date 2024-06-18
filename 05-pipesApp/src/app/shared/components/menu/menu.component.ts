import { Component, OnInit } from '@angular/core';

import { PrimeIcons, MenuItem } from 'primeng/api';

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
      { label: 'New', icon: PrimeIcons.PLUS },
      { label: 'Delete', icon: PrimeIcons.TRASH }
    ];
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  public items: MenuItem[] | undefined;
  public isUpperCase:boolean = false;

  constructor() { }

  ngOnInit() {
      this.items = [
          {
              label: 'Update',
              icon: 'pi pi-refresh'
          },
          {
              label: 'Delete',
              icon: 'pi pi-times'
          }
      ];
  }

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }


}

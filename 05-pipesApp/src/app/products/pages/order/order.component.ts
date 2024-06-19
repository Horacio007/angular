import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {

  public items: MenuItem[] | undefined;
  public isUpperCase:boolean = false;

  public heroes:Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    }
  ]

  public orderBy?:keyof Hero;

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

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }

}

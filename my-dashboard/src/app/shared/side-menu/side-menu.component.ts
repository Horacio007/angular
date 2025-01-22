import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: any): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;

  public menuItem:Route[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    const routeConfig = this.activatedRoute.routeConfig;
    if (routeConfig?.children) {
      this.menuItem = routeConfig.children.flat().filter(route => route && route.path).filter(route => !route?.path?.includes(':'));
    }
  }

}

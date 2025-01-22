import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow/heavy-loaders-slow.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [TitleComponent, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.scss'
})
export class DeferViewsComponent {

}

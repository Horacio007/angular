import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { HeavyLoadersFastComponent } from "../../../shared/heavy-loaders/heavy-loaders-fast/heavy-loaders-fast.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [TitleComponent, HeavyLoadersFastComponent, ButtonModule],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.scss'
})
export class DeferOptionsComponent {

}

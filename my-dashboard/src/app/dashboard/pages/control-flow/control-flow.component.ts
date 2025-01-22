import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TitleComponent } from "../../../shared/title/title.component";

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [ButtonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {

  public showContent = signal<boolean>(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal<string[]>([]);

  public toggleContent() {
    this.showContent.update(value => !value);
  }

}


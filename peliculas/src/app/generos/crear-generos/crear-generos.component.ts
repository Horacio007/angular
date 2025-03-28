import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.scss'
})
export class CrearGenerosComponent {

  router = inject(Router);

  guardarCambios() {
    this.router.navigate(['/generos']);
  }

}

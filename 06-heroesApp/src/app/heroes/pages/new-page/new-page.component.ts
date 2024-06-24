import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable:true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img:  new FormControl<string>('')
  });

  public publishers = [
    {
      id: 'Dc Comics',
      desc: 'Dc - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  constructor(private heroService:HeroesService) { }

  get currentHero():Hero {
    const hero:Hero = this.heroForm.value as Hero;

    return hero;
  }

  onSubmit():void {
   if (this.heroForm.invalid) return;

   if (this.currentHero.id) {
    this.heroService.updateHero(this.currentHero).subscribe(hero => {
      // TODO: mostrar snackbar
    });

    return;
   }

   this.heroService.addHero(this.currentHero).subscribe(hero => {
    // TODO: mostrar snackbar,  y navehar a /heroes/edit/ hero.id
   });

  //  this.heroService.updateHero();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { filter, switchMap, tap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit {

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

  constructor(private heroService:HeroesService, private activatedRoute:ActivatedRoute,
    private router:Router, private snackBar:MatSnackBar, private dialog:MatDialog) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.heroService.getHeroById(id))
    ).subscribe(hero => {
      if(!hero) return this.router.navigateByUrl('/');

      this.heroForm.reset(hero);
      return;
    });
  }

  get currentHero():Hero {
    const hero:Hero = this.heroForm.value as Hero;

    return hero;
  }

  onSubmit():void {
   if (this.heroForm.invalid) return;

   if (this.currentHero.id) {
    this.heroService.updateHero(this.currentHero).subscribe(hero => {
      this.showSnackBar(`${hero.superhero} updated!`);
    });

    return;
   }

   this.heroService.addHero(this.currentHero).subscribe(hero => {
    this.router.navigate(['/heroes/edit', hero.id]);
    this.showSnackBar(`${hero.superhero} created!`);
   });
  };

  showSnackBar(message:string):void {
    this.snackBar.open(message, 'done', {
      duration: 2500
    })
  }

  onDeletedHero():void {
    if(!this.currentHero.id) throw Error('Hero is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed().pipe(
      filter((result:boolean) => result),
      switchMap( () => this.heroService.deleteHeroById(this.currentHero.id)),
      filter((wasDeleted:boolean) => wasDeleted)
    ).subscribe(result => {
      this.router.navigate(['/heroes']);
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if(!result) return;

    //   this.heroService.deleteHeroById(this.currentHero.id).subscribe(wasDeleted => {
    //     if(wasDeleted)
    //       this.router.navigate(['/heroes']);
    //   });
    // });
  }


}

import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  public character:Character[] = [
    {
      name:'Krilin',
      power: 500
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewCharacter(character:Character):void {
    console.log("Main Page");
    console.log(character);
    this.character.push(character);
  }

  onDeleteCharacter(idx:number):void {
    console.log('desde main page');
    console.log(idx);
    this.character.splice(idx,1);
  }
}

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public character:Character[] = [
    {
      id: uuid(),
      name:'Krilin',
      power: 500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewCharacter(character:Character):void {
    console.log("Main Page");
    console.log(character);

    const newCharacter:Character = {id:uuid(), ...character};

    this.character.push(newCharacter);
  }

  onDeleteCharacter(idx:number):void {
    console.log('desde main page');
    console.log(idx);
    this.character.splice(idx,1);
  }

  deleteCharacterById(id:string):void {
    console.log('desde main page');
    this.character = this.character.filter( character => character.id !== id);
  }

}

import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name:string = 'Horacio';
  public gender:'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'Valeria'
    this.gender = 'female';
  }

  //i18nPlural
  public clientes:string[] = ['Pedro', 'Jose', 'Adrian', 'Fransisco', 'David', 'Luis', 'Valeria', 'Jessica', 'Maria', 'Nohemi'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient():void {
    this.clientes.shift();
  }

  //keyValue
  public person = {
    name: 'Horacio',
    age: 26,
    address: 'Saltillo, Coahuila de Zaragosa'
  }

  // Async
  public myObservatbleTime:Observable<number> = interval(2000);
  public primiseValue:Promise<string> = new Promise<string>((resolve, reject, ) => {
    setTimeout(() => {
      resolve("Tenemos data en la promesa.")
    }, 3500);
  })

}

import { Component, computed, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnInit, OnDestroy {

  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  });

  public counter = signal(10);
  public fullName = computed( () => `${this.user().first_name} ${this.user().last_name}` );
  public userChangeEffect = effect( () => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  ngOnInit(): void {
    // setInterval( () => {
    //   this.counter.update( current => current + 1);
    // },1000)
  }

  ngOnDestroy(): void {
    this.userChangeEffect.destroy();
  }

  onFieldUpdated(field:keyof User, value:string):void {
    this.user.update(current => {
      switch(field) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }

      return current;
    });

    // this.user.update( current => ({
    //   ...current,
    //   [field]: value
    // }));

    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // });
  }

  increaseBy(value:number):void {
    this.counter.update( current => current+value);
  }

}

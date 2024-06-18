import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower:string = "horacio";
  public nameUpper:string = "HORACIO";
  public fullName:string = "hOracIO GónGORa";

  public customDate:Date = new Date();

}

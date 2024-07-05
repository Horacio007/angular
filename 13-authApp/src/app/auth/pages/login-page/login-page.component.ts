import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);

  public emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public myForm:FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)] ],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  login():void {
    console.log(this.myForm.value);
  }

}

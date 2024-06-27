import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { cantBeStrider } from '../../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myForm:FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required ]],
    username: ['', [Validators.required, cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  });

  constructor(private fb:FormBuilder) { }

  isValidField(field:string):boolean {
    // TODO: obtener de servicio
    return 1===1;
  }

  onSubmit():void {
    this.myForm.markAllAsTouched();
  }

}

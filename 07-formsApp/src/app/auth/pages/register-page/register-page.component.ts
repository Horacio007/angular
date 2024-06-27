import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myForm:FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.cantBeStrider ]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  });

  constructor(private fb:FormBuilder, private validatorService:ValidatorsService, private emailValidator:EmailValidator) { }

  isValidField(field:string):boolean|null {
    return this.validatorService.isValidField(this.myForm, field);
  }

  onSubmit():void {
    this.myForm.markAllAsTouched();
  }

}

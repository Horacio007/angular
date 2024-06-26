import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../../../../../01-typescript-intro/src/topics/08-clases';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent implements OnInit {

  public myForm:FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  });

  public person = {
    gender: 'F',
    wantNotifications: false
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  isValidField(field:string):boolean|null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  onSave():void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;

    console.log(this.myForm.value);
    //this.person = this.myForm.value;
    console.log(this.person);
    this.myForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 6
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit {

  public myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    inStorage: new FormControl(0, [Validators.required, Validators.min(0)])
  });

  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  onSave():void {
    if(this.myForm.invalid) return;

    console.log(this.myForm.value);

    this.myForm.reset({price:10, inStorage:2546});
  }

}

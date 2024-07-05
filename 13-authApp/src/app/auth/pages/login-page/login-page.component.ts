import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  public emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public myForm:FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  login():void {
    const {email, password} = this.myForm.value;
    this.authService.login(email, password).subscribe({
      next: () => { console.log('todo bien')},
      error: (error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500
        });
        this.myForm.reset();
      }
    });
  }

}

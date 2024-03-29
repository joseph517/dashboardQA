import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService as AuthService } from '../../services/auth.service';
import { UserRegister } from '../../interface/user.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    role: ['', [Validators.required]],
    charge: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.pattern(this.authService.firstNameAndLastnamePattern)]],
    departament: ['', [Validators.required]],
  },{
    validators: this.authService.isFieldOneEquealFieldTwo('password', 'confirmPassword')
  });

  isValidfield( field: string ) {
    
    return this.authService.isValidField(this.myForm, field);
  }

    onSubmit(): void {
      if (!this.myForm.valid) {
        console.log('Formulario no válido');
        return;
      }
  
      const payLoad: UserRegister = {
        email: this.myForm.get('email')?.value,
        password: this.myForm.get('password')?.value,
        charge: this.myForm.get('charge')?.value,
        role: this.myForm.get('role')?.value,
        username: this.myForm.get('username')?.value,
        departament: this.myForm.get('departament')?.value
      }
      
      this.authService.RegisterUser(payLoad).subscribe(
        {
          next: (resp) => {
            console.log('hola', resp.msg);
            this.myForm.reset();
            this.router.navigate(['/auth/login']);
          },
          error: (error) => {
            console.log('error', error);
          }
        }
      )
      this.myForm.markAllAsTouched();
    }
}


import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserLogin } from '../../interface/register.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private fb: FormBuilder,

    private authService: AuthService
  ) { }

  public myForm: FormGroup = this.fb.group ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    if(!this.myForm.valid) {
      console.log('Formulario no válido');
      return;
    }

    const payLoad: UserLogin = {
      email: this.myForm.get('email')?.value,
      password: this.myForm.get('password')?.value
    }

    this.authService.LoginUser(payLoad).subscribe(
      
    )
    console.log(this.myForm.value);

  }

  isValidfield(field: string) {

    return this.authService.isValidField(this.myForm, field);
  }

}

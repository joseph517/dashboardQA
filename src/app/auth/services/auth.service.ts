import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, tap } from 'rxjs';
import { User, UserRegister } from '../pages/interface/register.interface';

@Injectable({providedIn: 'root'})
export class AuthService {
    private url: string = 'http://localhost:5390'
    constructor(
        private http: HttpClient
    ) { }


    public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    // public isFieldOneEquealFieldTwo(field1: string, field2: string){

    //     return ( formGroup : FormGroup ):ValidationErrors | null => {
    
    //       const fieldValue1 = formGroup.get(field1)?.value
    //       const fieldValue2 = formGroup.get(field2)?.value
    
    //       if (fieldValue1 != fieldValue2) {
    //         formGroup.get(field2)?.setErrors({notEqual: true})
    //         return {notEqual: true}
    //       }
    //       formGroup.get(field2)?.setErrors(null)
    //       return null
    //     }
    //   }

    /**
     * Check if a field in a form is valid.
     *
     * @param {FormGroup} form - the form to check
     * @param {string} field - the field to check
     * @return {boolean | null} true if the field has errors and has been touched, otherwise null
     */
    public isValidField(form: FormGroup, field: string): boolean | null {

        return form.controls[field].errors && form.controls[field].touched;

    }

    /**
     * Register a new user.
     *
     * @param {UserRegister} form - the user registration form
     * @return {Observable<User>} an observable of the registered user
     */
    RegisterUser(form: UserRegister): Observable<User>{

        return this.http.post<User>(`${this.url}/register`, form)
        .pipe(
            tap((resp) => {
                console.log('Response:', resp);
            })
        );

    }
    
}
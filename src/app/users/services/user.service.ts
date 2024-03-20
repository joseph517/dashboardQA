import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/auth/interface/user.interface';
import { environment } from 'src/enviroments/enviroments';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(
        private http: HttpClient
    ) { }

    getUserData(): Observable<User> {
        
        const id = localStorage.getItem('userID')
        const token = localStorage.getItem('token')

        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${token}`
            }),
            method: 'GET'
        }
        return this.http.get<User>(`${environment.baseUrl}/api/qa/${id}`, httpOptions)
    }
}
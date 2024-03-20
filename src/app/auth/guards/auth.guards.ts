import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { firstValueFrom} from 'rxjs'; 

import { UserService } from 'src/app/users/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private userService: UserService
    ){}
   

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

        let validToken : boolean = true;

        try {
            console.log('entro');
            
            const userResponse =  this.userService.getUserData()
            await firstValueFrom(userResponse)
            validToken = true
            
        } catch (error: any) {
            console.log('error', error);
            if(error.status === 401) {
                validToken = false
                localStorage.clear();
                this.router.navigate(['auth/login']);
            }
            
        }
        
        return validToken
    }
    
}
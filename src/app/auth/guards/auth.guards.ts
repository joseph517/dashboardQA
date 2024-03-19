import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, UrlTree, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanMatch {

    constructor(
        private router: Router,
        private authService: AuthService
    ){}

    private checkStatus(): Observable<boolean> {
        return this.authService.checkLogin()
        .pipe(
            tap(
                (resp) => {

                    if (!resp) {
                        this.router.navigate(['auth/login']);
                    }
                }
            )
        )
    }

    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {

        return this.checkStatus();
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

        return this.checkStatus();
    }
    
}
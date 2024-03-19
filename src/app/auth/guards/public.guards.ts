import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PublicGuard implements CanActivate, CanMatch {

    constructor(
        private router: Router,
        private authService: AuthService
    ){}

    private checkStatus(): Observable<boolean> {
        
        return this.authService.checkLogin()
        .pipe(
            tap(
                res => {
                    if (res) {
                        this.router.navigate(['user/dashboard']);
                    }
                }
            ),
            map(
                (resp) => !resp
            )
        )
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.checkStatus();
    }

    canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.checkStatus();
    }

}

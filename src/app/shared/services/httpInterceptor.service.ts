import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(
                () => {}, // La solicitud fue exitosa, no hacemos nada
                (error: any) => {
                    if (error instanceof HttpErrorResponse && error.status === 404) {
                        localStorage.clear();
                        this.router.navigate(['/auth/login']);
                    }
                }
            )
        );
    }
    
    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     return next.handle(request).pipe(
    //       tap((event: HttpEvent<any>) => {
    //         if (event instanceof HttpResponse) {
    //           // La solicitud fue exitosa, puedes realizar acciones si lo deseas
    //         }
    //       }, (error: any) => {
    //         if (error instanceof HttpErrorResponse && error.status === 404) {
    //           console.log('Se ha recibido un 404 Not Found');
    //           this.router.navigate(['/auth/login']);
    //         }
    //       })
    //     );
    //   }
    }
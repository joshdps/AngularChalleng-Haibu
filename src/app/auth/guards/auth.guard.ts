import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {


  /** 
  * Cuando no se usa Lazy Load es suficiente con usar el canActivate pero si no, es necesario usar canLoad  y canActivate
  **/
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.validaAutenticacion() .pipe(
        tap( estaAutenticado => {
          if ( !estaAutenticado ) this.router.navigate(['./auth/login'])
        })
      )
  }

  constructor( private authService: AuthService,
               private router: Router ) { }


  // canLoad solo previene que se cargue el modulo, si ya se cargo y se cambia de path y se regresa, permitirá el acceso
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {
    
      return this.authService.validaAutenticacion()
        .pipe(
          tap( estaAutenticado => {
            if ( !estaAutenticado ) this.router.navigate(['./auth/login'])
          })
        )
    };
}

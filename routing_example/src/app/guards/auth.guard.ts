import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  cesion:string|null=null;

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    /*
    * si se retorna false no se puede acceder a la ruta
    * si se retorna true si se puede acceder a la ruta
    */

    this.cesion = sessionStorage.getItem('token');

    if(this.cesion){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }

  }
  
}

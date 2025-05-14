import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/authentication/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  /* canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAuthenticated()) {
      return true; // El usuario está autenticado, permite el acceso a la ruta
    } else {
      // El usuario no está autenticado, redirige a la página de login
      return this.router.parseUrl('/Auth/Login');
    }
  } */
    canActivate(): boolean {
      let isAuthenticated = true;
      if(isAuthenticated){
        // si esta en el login redirecciona a home
        if(this.router.url === '/Auth/Login'){
          this.router.navigate(['/Home']);
        }
        return true; // El usuario está autenticado, permite el acceso a la ruta
      }else{
        // El usuario no está autenticado, redirige a la página de login
        this.router.navigate(['/Auth/Login']);
        return false;
      }
    }
}

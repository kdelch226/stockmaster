import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgardService implements CanActivate {

  constructor(private router:Router,private authService:AuthentificationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token = this.authService.getToken();
    if(token){
      return true;
    } else {
      this.router.navigate(['/authentification'])
      return false;
    }
  }
}

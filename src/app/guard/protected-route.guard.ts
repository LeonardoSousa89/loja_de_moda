import { RestService } from 'src/app/service/rest.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectedRouteGuard implements CanActivate {

  constructor(public restService: RestService, public router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
        Observable<boolean | UrlTree> | 
                      Promise<boolean | 
                             UrlTree> | 
                              boolean | 
                              UrlTree {
      
      if(this.restService.isAuthenticated() === false){
        this.router.navigate([''])
        return false
      }
      return true;
  }
  
}

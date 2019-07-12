
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
@Injectable(
    /* {
  providedIn: 'root'
} */
)
export class AfterLoginService implements CanActivate {
  canActivate() {
    if (localStorage.getItem('token')) {
        return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['login']);
    return false;
}
    /* canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean |
    Observable<boolean> | Promise<boolean>{
      console.log("after",this.token.loggedIn());
        return this.token.loggedIn();
    } */
  constructor(private token:TokenService,private router:Router) { }
}


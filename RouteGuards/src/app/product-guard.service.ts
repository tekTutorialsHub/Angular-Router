import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';


@Injectable()
export class ProductGuardService implements CanActivate {

    constructor(private _router:Router ) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {

        console.log("canActivate");
        console.log(route);
        console.log(state);

        
        alert('You are not allowed to view this page. You are redirected to Home Page');
        this._router.navigate(["home"]);
        return false;
    }
    


}
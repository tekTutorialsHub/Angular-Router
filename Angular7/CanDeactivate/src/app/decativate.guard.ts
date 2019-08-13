import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from './register.component';

export interface IDeactivateComponent {
    canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactivateGuard implements CanDeactivate 
{
    component: Object;
    route: ActivatedRouteSnapshot;

   constructor(){
   }

   canDeactivate(component:IDeactivateComponent,
                route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot,
                nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        
        return component.canExit ? component.canExit() : true;
  }

  
}
import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing Module - Navigation Basics';

   constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router){
   }

   goToOverview(productID) {
     /*this._router.navigate(["product/detail/"+productID+"/overview"]);*/
     /*this._router.navigate(["product","detail",productID,"overview"]);*/
     this._router.navigate(["product/detail",productID,"overview"]);
   }

   goToSpec(productID) {
     /*this._router.navigate(["product/detail/"+productID+"/spec"]);*/
     /*this._router.navigate(["product","detail",productID,"spec"]);*/
     /*this._router.navigate(["product/detail",productID,"spec"]);*/

     console.log( this._router.createUrlTree(["product/detail",productID,"spec"]));

   }
   
}

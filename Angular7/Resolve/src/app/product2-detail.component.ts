import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from './product';


@Component({
  templateUrl: './product2-detail.component.html',
})

export class Product2DetailComponent
{

   product:Product;
   
   constructor(private _Activatedroute:ActivatedRoute){

      this.product=this._Activatedroute.snapshot.data['product'];
      
   }



}
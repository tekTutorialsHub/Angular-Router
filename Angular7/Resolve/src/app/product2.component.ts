import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product2.component.html',
})

export class Product2Component
{


   public products:Product[];
   
   constructor(private route: ActivatedRoute,private productService:ProductService){
   }

   ngOnInit() {
      this.products=this.route.snapshot.data['products'];
   }
  
}
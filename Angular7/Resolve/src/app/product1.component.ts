import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product1.component.html',
})

export class Product1Component
{


   public products:Product[];
   
   constructor(private route: ActivatedRoute,private productService:ProductService){
   }

   ngOnInit() {
      console.log('ngOnInit');

      this.productService.getProducts().subscribe(data => {
         this.products=data;
      });

   }
  
}
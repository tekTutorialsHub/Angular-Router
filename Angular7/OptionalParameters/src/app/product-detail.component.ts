import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { ProductService } from './product.service';
import { Product } from './product';


@Component({
  templateUrl: './product-detail.component.html',
})

export class ProductDetailComponent
{

   product:Product;
   id;
   
   constructor(private Activatedroute:ActivatedRoute,
               private router:Router,
               private productService:ProductService){
   }

   
   onBack(): void {
      this.router.navigate(['product', {id:this.product.productID, name:this.product.name}]);
   }


   ngOnInit() {

      this.Activatedroute.paramMap.subscribe(params => { 
          this.id = params.get('id'); 
          let products=this.productService.getProducts();
          this.product=products.find(p => p.productID==this.id);    
      });
   }


   

}
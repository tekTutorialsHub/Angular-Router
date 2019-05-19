import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './Product';


@Component({
  templateUrl: "product.component.html",
})
export class ProductComponent
{

   products:Product[];
   constructor(private productService: ProductService){
   }

   ngOnInit() {

      this.productService.getProducts()
        .subscribe(data => {
          this.products=data;
        })
   }
  
}
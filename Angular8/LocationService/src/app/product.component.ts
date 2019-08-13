import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  templateUrl: './product.component.html',
})

export class ProductComponent
{

  products:Product[];

  constructor(private productService:ProductService, private location:Location){
  }

  ngOnInit() {
    this.products=this.productService.getProducts();
    console.log(this.location.getState());
  }
  

}
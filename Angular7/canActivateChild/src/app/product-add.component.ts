import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  template: `<h1>Add Product</h1>`,
})
export class ProductAddComponent
{

  product:Product;

  constructor(private productService: ProductService, 
              private route:ActivatedRoute ){
  }


  ngOnInit() {
  }
  
}
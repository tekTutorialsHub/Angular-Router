import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product.component.html',
})

export class ProductComponent
{

  products:Product[];
  lastSelectedID:number;
  lastSelectedProduct:string;

  constructor(private productService:ProductService, private Activatedroute:ActivatedRoute){
  }

  ngOnInit() {
    this.products=this.productService.getProducts();

    this.Activatedroute.paramMap.subscribe(params => { 
      this.lastSelectedID = +params.get('id'); 
      this.lastSelectedProduct=params.get('name');
  });
  }
  
}
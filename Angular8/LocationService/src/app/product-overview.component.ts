import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from './product.service';
import { Product } from './product';


@Component({
  template: `<h3> Overview of {{product.name}} <h3>
            `
})

export class ProductOverviewComponent {

  product: Product;
  id;
  sub;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {
  }


  ngOnInit() {

    this.sub = this._Activatedroute.parent.params.subscribe(params => {
      this.id = params['id'];
      let products = this._productService.getProducts();
      this.product = products.find(p => p.productID == this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
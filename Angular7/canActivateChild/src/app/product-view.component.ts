import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  template: `<h1>View Product</h1>`,
})
export class ProductViewComponent
{

    product:Product

    constructor(private productService: ProductService, 
                private route:ActivatedRoute ){
    }


    ngOnInit() {

        
        let id=this.route.snapshot.params['id'];

        this.productService.getProduct(id)
            .subscribe(data => {
                this.product=data;
            })
    }

}
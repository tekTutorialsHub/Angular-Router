import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  templateUrl: './product.component.html',
})

export class ProductComponent
{

   pageNum=0;
   products:Product[];
   sub;

   constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,
               private _productService:ProductService){
   }


   ngOnInit() {
     console.log('OnInit');

     this.products=this._productService.getProducts();
    
     /*
     using the snapshot property
     this.pageNum=this.route.snapshot.queryParams["pageNum"];
     console.log("Initial value " , this.pageNum)
      */
     this.sub = this._Activatedroute.queryParams
                    .subscribe(params => { 
                     this.pageNum = +params['pageNum']||0;
                     console.log('Query params ',this.pageNum) });
   }

   nextPage() {
      this._router.navigate(['./'], { queryParams: { pageNum: this.pageNum + 1 }, relativeTo: this._Activatedroute }   );
   }
  

   ngOnDestroy() {
     this.sub.unsubscribe();
   }
}
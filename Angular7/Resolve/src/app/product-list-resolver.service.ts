import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { Product } from './Product';



@Injectable()
export class ProductListResolverService implements Resolve<Product>{

    constructor(private productService:ProductService ) {
    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> {

        console.log("ProductListResover is called");

        return this.productService.getProducts();
    }

}
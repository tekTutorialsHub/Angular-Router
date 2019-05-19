import {Product} from './Product'
import { of, Observable, throwError} from 'rxjs';
import { delay, map } from 'rxjs/internal/operators';

export class ProductService{

    products: Product[];
    
    public constructor() {
        this.products=[
            new Product(1,'Memory Card',500),
            new Product(2,'Pen Drive',750),
            new Product(3,'Power Bank',100),
            new Product(4,'Computer',100),
            new Product(5,'Laptop',100),
            new Product(6,'Printer',100),
        ]
    }

    //Return Products List with a delay 
    public getProducts(): Observable<Product[]> {
        return of(this.products).pipe(delay(1500)) ;
    }


    // Returning Error
    // This wil stop the route from getting Activated
    //public getProducts(): Observable<any> {
    //    return of(this.products).pipe(delay(3000), map( data => {
    //        throw throwError("errors occurred") ;        
    //    })) 
    //}

    public getProduct(id): Observable<Product> {
        var Product= this.products.find(i => i.productID==id)
        return of(Product).pipe(delay(1500)) ;
    }

}
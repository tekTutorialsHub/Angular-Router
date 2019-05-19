import { NgModule} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent} from './home.component'
import { ContactComponent} from './contact.component'

import { Product1Component} from './product1.component'
import { Product2Component} from './product2.component'

import { Product1DetailComponent} from './product1-detail.component'
import { ProductListResolverService } from './product-list-resolver.service';
import { Product2DetailComponent } from './product2-detail.component';
import { ProductResolverService } from './product-resolver.service';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product1', component: Product1Component },
  { path: 'product2', component: Product2Component, resolve: {products: ProductListResolverService}  },
  { path: 'product1/:id', component: Product1DetailComponent },
  { path: 'product2/:id', component: Product2DetailComponent, resolve:{product:ProductResolverService} },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];



@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class AppRoutingModule { }
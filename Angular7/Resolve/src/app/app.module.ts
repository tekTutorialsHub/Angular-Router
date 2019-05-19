import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent} from './home.component'
import { ContactComponent} from './contact.component'


import { ProductService } from './product.service';
import { ProductListResolverService } from './product-list-resolver.service';
import { ProductResolverService } from './product-resolver.service';

import { AppRoutingModule } from './app-routing.module';

import { Product1Component } from './product1.component';
import { Product1DetailComponent} from './product1-detail.component'

import { Product2Component } from './product2.component';

import { Product2DetailComponent } from './product2-detail.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ContactComponent,Product1Component, Product2Component,Product1DetailComponent, Product2DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ProductService,ProductListResolverService,ProductResolverService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

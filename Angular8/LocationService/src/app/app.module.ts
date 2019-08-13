import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent} from './home.component'
import { ContactComponent} from './contact.component'
import { ProductComponent} from './product.component'
import { ErrorComponent} from './error.component'
import { ProductDetailComponent} from './product-detail.component'
import { ProductOverviewComponent} from './product-overview.component'
import { ProductSpecComponent} from './product-spec.component'

import { ProductService } from './product.service';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ContactComponent,ProductComponent,ErrorComponent,
    ProductDetailComponent,ProductOverviewComponent,ProductSpecComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

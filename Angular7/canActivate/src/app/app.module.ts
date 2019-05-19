import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent} from './home.component'
import { ContactComponent} from './contact.component'
import { ProductComponent} from './product.component'

import { AuthGuardService } from './auth-guard.service';

import { appRoutes } from './app.routes';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ContactComponent,ProductComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuardService,AuthService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

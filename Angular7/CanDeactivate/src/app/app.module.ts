import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent} from './home.component'
import { ContactComponent} from './contact.component'



import { appRoutes } from './app.routes';

import { RegisterComponent } from './register.component';
import { DeactivateGuard } from './decativate.guard';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ContactComponent,RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
